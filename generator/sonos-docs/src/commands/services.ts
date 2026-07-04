import {Args, Command, Flags} from '@oclif/core'
import {XMLParser} from 'fast-xml-parser'
import * as path from 'path'
import * as fs from 'fs'

import SonosDevice from '../models/sonos-device'
import {SonosService} from '../models/sonos-service'
import SonosStateVariable from '../models/sonos-state-variable'
import ArrayHelper from '../helpers/array-helper'
import {SonosServiceAction, SonosServiceActionArgument} from '../models/sonos-service-action'

export default class Services extends Command {
  static description = 'Fetch device discovery document and generate json file'

  static flags = {
    folder: Flags.string({char: 'f', description: 'Folder to write discovered services.', default: 'data'}),
    dryRun: Flags.boolean({char: 'd'}),
  }

  static args = {
    ip: Args.string({required: true, description: 'The IP of the sonos to do service discovery for.'}),
  }

  async run() {
    const {args, flags} = await this.parse(Services)

    this.log(`Discovering UPNP services from ${args.ip}`)
    const description = await this.loadDescription(args.ip)
    this.debug('Sonos device loaded', description)
    const folder = path.isAbsolute(flags.folder) ? flags.folder : path.join(process.cwd(), flags.folder)
    const file = path.join(folder, `sonos-${description.model}-${description.softwareGeneration}.json`)
    this.log('Saving discovered services to ', file)
    if (!fs.existsSync(folder)) {
      this.log('Output folder doesn\'t exists')
      fs.mkdirSync(folder, {recursive: true})
    }

    fs.writeFileSync(file, JSON.stringify(description, undefined, 2))
  }

  private createUrl(ip: string, urlPath: string): string {
    return `http://${ip}:1400${urlPath}`
  }

  private async loadDescription(ip: string): Promise<SonosDevice> {
    const resp = await this.fetchAndParse(this.createUrl(ip, '/xml/device_description.xml'))

    const desc = resp.root.device
    this.log(`Discovering services from ${desc.modelDescription}`)

    const serviceDescriptions: Array<any> = desc.serviceList.service
    desc.deviceList.device.forEach((d: any) => {
      d.serviceList.service.forEach((s: any) => {
        serviceDescriptions.push(s)
      })
    })

    // This service is duplicated in the device discovery
    const serviceToSkip = '/MediaServer/ConnectionManager/Control'

    const services = await Promise.all<SonosService>(serviceDescriptions
    .filter((serviceDescription: any) => serviceDescription.controlURL !== serviceToSkip)
    .map((service: any) => this.loadService(ip, service)))

    return {
      model: desc.modelNumber,
      modelDescription: desc.modelDescription,
      softwareGeneration: desc.swGen,
      softwareVersion: desc.softwareVersion,
      discoveryDate: new Date(),
      services: services.sort((a, b) => a.name.localeCompare(b.name)),
    }
  }

  private async loadService(ip: string, service: any): Promise<SonosService> {
    const name = service.serviceId.substring(service.serviceId.lastIndexOf(':') + 1)
    const resp = await this.fetchAndParse(this.createUrl(ip, service.SCPDURL))
    const desc = resp.scpd
    return {
      name: name,
      serviceName: `${name}Service`,
      discoveryUri: service.SCPDURL,
      serviceId: service.serviceId,
      serviceType: service.serviceType,
      controlURL: service.controlURL,
      eventSubURL: service.eventSubURL,
      stateVariables: ArrayHelper.forceArray(desc.serviceStateTable.stateVariable).map((v: any): SonosStateVariable => {
        return {
          name: v.name,
          dataType: v.dataType,
          sendEvents: v._sendEvents === 'yes',
          allowedValues: v.allowedValueList?.allowedValue,
        }
      }),
      actions: ArrayHelper.forceArray(desc.actionList.action).map((action: any): SonosServiceAction => {
        const sonosArgs = ArrayHelper.forceArray(action.argumentList?.argument ?? []).map((a: any): SonosServiceActionArgument => {
          return {
            name: a.name,
            direction: a.direction,
            relatedStateVariableName: a.relatedStateVariable,
          }
        })
        const inputs = sonosArgs.filter(a => a.direction === 'in')
        const outputs = sonosArgs.filter(a => a.direction === 'out')
        return {
          name: action.name,
          inputs: inputs.length > 0 ? inputs : undefined,
          outputs: outputs.length > 0 ? outputs : undefined,
        }
      }),
    }
  }

  private async fetchAndParse(url: string): Promise<any> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error loading ${url} ${response.status} ${response.statusText}`)
    }

    const text = await response.text()
    const parser = new XMLParser({ignoreAttributes: false, attributeNamePrefix: '_'})
    return parser.parse(text)
  }
}

