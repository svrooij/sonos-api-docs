import {Args, Command, Flags, ux} from '@oclif/core'

import * as path from 'path'
import * as fs from 'fs'

import {SonosServicesDocumentation} from '../models/sonos-service-documentation'
import SonosDevice from '../models/sonos-device'
import {combineDevices} from '../helpers/combine-helper'

export default class Combine extends Command {
  static description = 'Generate combined.json file by combining the documentation file and the discovered services.'

  static flags = {
    docsUrl: Flags.string({
      description: 'The url of the documentation, this is just to override the documentation url',
      default: 'https://raw.githubusercontent.com/svrooij/sonos-api-docs/main/docs/documentation.json',
    }),
    docsFile: Flags.string({
      exclusive: ['docsUrl'],
      description: 'File location of documentation, instead of url.',
    }),
    models: Flags.string({
      default: 'S1-2,S3-2,S6-2,S9-2,S13-2,S14-2,S16-2,S17-2,S18-2,S21-2,S27-2,S33-2,S36-2,S38-2,S39-2,Sub-2',
      description: 'Models to use, separated by comma. as {model}-{softwareGen}',
    }),
    folder: Flags.string({
      description: 'Load discovered services from this folder. Loaded from repository if empty',
    }),
    discoveryUrl: Flags.string({
      description: 'Base url to load the discovery files from',
      default: 'https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/',
    }),
    out: Flags.string({
      description: 'Output filename',
      default: '.cache/combined.json',
    }),
  }

  async run() {
    const {flags} = await this.parse(Combine)
    this.log('Got flags', flags)

    let documentation: SonosServicesDocumentation | undefined

    if (flags.docsFile) {
      const filename = this.getFullPath(flags.docsFile)
      if (!fs.existsSync(filename)) {
        return this.error('Documentation file doesn\'t exists!', {exit: 10})
      }

      documentation = JSON.parse(fs.readFileSync(filename).toString()) as SonosServicesDocumentation
      this.log('Loaded local documentation from %s', filename)
    }

    if (documentation === undefined) {
      ux.action.start('Loading documentation')
      const response = await fetch(flags.docsUrl)
      if (!response.ok) {
        return this.error(`Documentation not downloaded ${response.statusText}`, {exit: 20})
      }

      documentation = (await response.json()) as SonosServicesDocumentation
      ux.action.stop()
    }

    let discoveredServices: SonosDevice[] = []

    const models = flags.models.split(',').map(m => `sonos-${m}.json`)
    this.log('Use discovery files', models)
    ux.action.start('Loading discovery files')
    if (flags.folder) {
      const folder = this.getFullPath(flags.folder)
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
          return response.json() as Promise<SonosDevice>
        }

        throw new Error(`File from ${response.url} could not be loaded, ${response.statusText}`)
      }))
    }

    ux.action.stop()

    if (discoveredServices.length === 0) {
      return this.error('No discovery files loaded', {exit: 30})
    }

    ux.action.start('Combining docs with discovery')
    const combinedServices = combineDevices(discoveredServices, documentation)
    ux.action.stop()

    ux.action.start(`Writing file ${flags.out}`)
    const outputFile = this.getFullPath(flags.out, true)
    fs.writeFileSync(outputFile, JSON.stringify(combinedServices, null, 2))
    ux.action.stop()
  }

  private getFullPath(location: string, createFolder = false) {
    const filename = path.isAbsolute(location) ? location : path.join(process.cwd(), location)
    const folder = path.dirname(filename)
    if (createFolder && !fs.existsSync(folder)) {
      fs.mkdirSync(folder, {recursive: true})
    }

    return filename
  }
}

