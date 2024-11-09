import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import fetch from 'node-fetch'

import * as path from 'path'
import * as fs from 'fs'

import {SonosServicesDocumentation} from '../models/sonos-service-documentation'
import SonosDevice from '../models/sonos-device'
import {SonosService} from '../models/sonos-service'
import {SonosServiceAction} from '../models/sonos-service-action'
import ExtendedSonosDescription from '../models/extended-sonos-description'
import SonosDiscoveryInfo from '../models/sonos-discovery-info'

const sortDeviceInfo = function (a: SonosDiscoveryInfo, b: SonosDiscoveryInfo): number {
  if (a.softwareGeneration === b.softwareGeneration) {
    return a.model.localeCompare(b.model)
  }
  return b.softwareGeneration - a.softwareGeneration
}

export default class Combine extends Command {
  static description = 'Generate combined.json file by combining the documentation file and the discovered services.'

  static flags = {
    docsUrl: flags.string({
      description: 'The url of the documentation, this is just to override the documentation url',
      default: 'https://raw.githubusercontent.com/svrooij/sonos-api-docs/main/docs/documentation.json',
    }),
    docsFile: flags.string({
      exclusive: ['docsUrl'],
      description: 'File location of documentation, instead of url.',
    }),
    models: flags.string({
      default: 'S1-2,S3-2,S6-2,S9-2,S13-2,S14-2,S16-2,S18-2,S21-2,S27-2,S33-2,S38-2,S39-2,Sub-2',
      description: 'Models to use, separated by comma. as {model}-{softwareGen}',
    }),
    folder: flags.string({
      description: 'Load discovered services from this folder. Loaded from repository if empty',
    }),
    discoveryUrl: flags.string({
      description: 'Base url to load the discovery files from',
      default: 'https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/',
    }),
    out: flags.string({
      description: 'Output filename',
      default: '.cache/combined.json',
    }),
    help: flags.help({char: 'h'}),
  }

  // static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(Combine)
    this.log('Got flags', flags)

    let documentation: SonosServicesDocumentation | undefined

    if (flags.docsFile) {
      const filename = this.getFullPathAndCreateDirectory(flags.docsFile)
      if (!fs.existsSync(filename)) {
        return this.error('Documentation file doesn\'t exists!', {exit: 10})
      }
      documentation = JSON.parse(fs.readFileSync(filename).toString()) as SonosServicesDocumentation
      this.log('Loaded local documentation from %s', filename)
    }

    if (documentation === undefined) {
      cli.action.start('Loading documentation')
      const response = await fetch(flags.docsUrl)
      if (!response.ok) {
        return this.error(`Documentation not downloaded ${response.statusText}`, {exit: 20})
      }
      documentation = (await response.json()) as SonosServicesDocumentation
      cli.action.stop()
    }

    let discoveredServices: SonosDevice[] = []

    const models = flags.models.split(',').map(m => `sonos-${m}.json`)
    this.log('Use discovery files', models)
    cli.action.start('Loading discovery files')
    if (flags.folder) {
      const folder = this.getFullPathAndCreateDirectory(flags.folder)
      if (fs.existsSync(folder)) {
        models.forEach(model => {
          const filename = path.join(folder, model)

          if (fs.existsSync(filename)) {
            this.debug('Loading service discovery from:', filename)
            discoveredServices.push(JSON.parse(fs.readFileSync(filename).toString()))
          }
        })
      }
    } else {
      discoveredServices = await Promise.all<SonosDevice>(models.map(async (model): Promise<SonosDevice> => {
        const response = await fetch(`${flags.discoveryUrl}/${model}`)
        if (response.ok) {
          return response.json() as any as SonosDevice;
        }
        throw new Error(`File from ${response.url} could not be loaded, ${response.statusText}`)
      }))
    }

    cli.action.stop()

    if (discoveredServices.length === 0) {
      return this.error('No discovery files loaded', {exit: 30})
    }

    cli.action.start('Combining docs with discovery')
    const devices = discoveredServices.sort((a, b) => a.model.localeCompare(b.model))

    const firstDevice = devices.slice(0, 1)[0]

    const combinedServices: ExtendedSonosDescription = {
      ...firstDevice,
      deviceInfo: [{
        discoveryDate: firstDevice.discoveryDate,
        model: firstDevice.model,
        modelDescription: firstDevice.modelDescription,
        softwareGeneration: firstDevice.softwareGeneration,
        softwareVersion: firstDevice.softwareVersion,
      }],
    }
    const model = `v${combinedServices.softwareGeneration}-${combinedServices.model}`
    combinedServices.services.forEach(s => {
      s.availableAt = [model]
      s.deviceInfo = combinedServices.deviceInfo
      s.actions?.forEach(a => {
        a.availableAt = [model]
      })
    })

    const otherDevices = devices.slice(1)
    // this.log('Number of other devices:', otherDevices.length);
    otherDevices.forEach(d => {
      const model = `v${d.softwareGeneration}-${d.model}`
      if (d.softwareVersion.localeCompare(combinedServices.softwareVersion) > 0) {
        combinedServices.softwareVersion = d.softwareVersion
      }
      const deviceInfo = {
        discoveryDate: d.discoveryDate,
        model: d.model,
        modelDescription: d.modelDescription,
        softwareGeneration: d.softwareGeneration,
        softwareVersion: d.softwareVersion,
      }

      if (!combinedServices.deviceInfo.some(v => v.model === deviceInfo.model && v.softwareGeneration === deviceInfo.softwareGeneration)) {
        combinedServices.deviceInfo.push(deviceInfo)
      }

      d.services.forEach(service => {
        const index = combinedServices.services.findIndex(s => s.name === service.name)
        // this.log('Processing %s from %s', service.name, model);
        if (index === -1) {
          service.availableAt = [model]
          service.deviceInfo = [deviceInfo]
          service.actions?.forEach(a => {
            a.availableAt = [model]
          })
          combinedServices.services.push(service)
        } else {
          combinedServices.services[index].availableAt?.push(model)
          combinedServices.services[index].availableAt = combinedServices.services[index].availableAt?.sort((a, b) => a.localeCompare(b))
          if (combinedServices.services[index].deviceInfo && !combinedServices.services[index].deviceInfo?.some(v => v.model === deviceInfo.model && v.softwareGeneration === deviceInfo.softwareGeneration)) {
            combinedServices.services[index].deviceInfo?.push(deviceInfo)
          }
          service.stateVariables?.forEach(sv => {
            if (!combinedServices.services[index].stateVariables?.some(v => sv.name === v.name)) {
              combinedServices.services[index].stateVariables?.push(sv)
            }
          })

          if (typeof (combinedServices.services[index].actions) === undefined) {
            combinedServices.services[index].actions = service.actions
          } else if (typeof (service.actions) !== undefined) {
            combinedServices.services[index].actions = combinedServices.services[index].actions ?? []
            service.actions?.forEach(a => {
              const actionIndex = combinedServices.services[index].actions?.findIndex(ca => ca.name === a.name) ?? -1
              if (actionIndex === -1) {
                // @ts-ignore
                combinedServices.services[index].actions.push(a)
              } else {
                // @ts-ignore
                combinedServices.services[index].actions[actionIndex].availableAt?.push(model)
                // @ts-ignore
                combinedServices.services[index].actions[actionIndex].availableAt = combinedServices.services[index].actions[actionIndex].availableAt?.sort((a, b) => a.localeCompare(b))
              }
            })
          }
        }
      })
    })

    // Devices combined, lets add documentation
    combinedServices.discoveryDate = new Date()
    combinedServices.model += '|' + otherDevices.map(d => d.model).join('|')
    combinedServices.deviceInfo = combinedServices.deviceInfo.sort(sortDeviceInfo)
    combinedServices.modelDescription += '|' + otherDevices.map(d => d.modelDescription).join('|')
    combinedServices.errors = documentation?.errors?.sort((a, b) => a.code - b.code)
    combinedServices.services.forEach(s => {
      s.deviceInfo = s.deviceInfo?.sort(sortDeviceInfo)
      const docs = documentation?.services[s.serviceName]
      if (typeof (docs) !== undefined) {
        s.description = docs?.description
        s.errors = docs?.errors?.sort((a, b) => a.code - b.code)
        if (typeof (s.actions) !== undefined && docs?.actions) {
          const actions = docs?.actions ?? {}
          s.actions?.forEach(a => {
            const action = actions[a.name]
            // this.log('Processing %s of %s', a.name, s.name)
            if (typeof (action) !== undefined) {
              a.description = action?.description
              a.remarks = action?.remarks
              const actionArguments = action?.params ?? {}
              const sampleData = action?.sample ?? {}
              if (actionArguments) {
                a.inputs?.forEach(i => {
                  i.description = actionArguments[i.name] ?? (i.name === 'InstanceID' ? 'InstanceID should always be `0`' : undefined)
                  i.sample = sampleData[i.name]
                })
                a.outputs?.forEach(o => {
                  o.description = actionArguments[o.name]
                  o.sample = sampleData[o.name]
                })
              }
            }
          })
        }
      }
      s.actions = s.actions?.sort((a: SonosServiceAction, b: SonosServiceAction) => a.name.localeCompare(b.name))
      // Force allowed values of state variables to be an array
      if (s.stateVariables) {
        s.stateVariables.forEach(v => {
          if (v.allowedValues && !Array.isArray(v.allowedValues)) {
            v.allowedValues = [v.allowedValues];
          }
        })
      }

      if (docs?.variables) {
        if (!s.stateVariables) {
          s.stateVariables = [];
        }
        docs.variables.forEach(p => {
          p.sendEvents = true;
          // @ts-ignore
          const index = s.stateVariables.findIndex(v => v.name === p.name);
          if (index > -1) {
            // @ts-ignore
            s.stateVariables[index].description = p.description;
            // @ts-ignore
            s.stateVariables[index].dataType = p.dataType;
            if (p.allowedValues) {
              // @ts-ignore
              s.stateVariables[index].allowedValues = p.allowedValues;
            }

          } else {
            s.stateVariables?.push(p);
          }
        });


      }
    })
    combinedServices.services = combinedServices.services.sort((a: SonosService, b: SonosService) => a.name.localeCompare(b.name))
    cli.action.stop()

    cli.action.start(`Writing file ${flags.out}`)
    const outputFile = this.getFullPathAndCreateDirectory(flags.out, true)
    fs.writeFileSync(outputFile, JSON.stringify(combinedServices, null, 2))
    cli.action.stop()
  }

  private getFullPathAndCreateDirectory(location: string, createFolder = false) {
    const filename = path.isAbsolute(location) ? location : path.join(process.cwd(), location)
    const folder = path.dirname(filename)
    if (createFolder && !fs.existsSync(folder)) {
      fs.mkdirSync(folder, {recursive: true})
    }

    return filename
  }
}
