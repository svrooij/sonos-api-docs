import {Args, Command, Flags} from '@oclif/core'
import {SonosDevice} from '@svrooij/sonos'
import * as path from 'path'
import * as fs from 'fs'

export default class Musicservices extends Command {
  static description = 'List music services available on a Sonos speaker'

  static flags = {
    show: Flags.boolean({description: 'Show the music services in a table'}),
    docs: Flags.boolean({description: 'Show a markdown table'}),
    saveJson: Flags.string({description: 'If set, save music services as json'}),
  }

  static args = {
    ip: Args.string({description: 'The IP of the sonos speaker to load the music services', required: true}),
  }

  async run() {
    const {args, flags} = await this.parse(Musicservices)
    this.log(`Loading music services from ${args.ip}`)
    const device = new SonosDevice(args.ip)

    const musicServices = await device.MusicServicesService.ListAndParseAvailableServices()
    this.log('Loaded %d music services', musicServices.length)

    if (flags.saveJson !== undefined) {
      const filename = this.getFullPath(flags.saveJson)
      fs.writeFileSync(filename, JSON.stringify(musicServices, null, 2))
      this.log('Saved music services to %s', filename)
    }

    if (flags.docs) {
      this.log('| Id  | Name                      | Auth       | Url |')
      this.log('|:----|:--------------------------|:-----------|:----|')
      musicServices.forEach(m => {
        this.log(`| ${m.Id.toString().padStart(3, ' ')} | ${m.Name.padEnd(25, ' ')} | ${m.Policy.Auth.padEnd(10, ' ')} | \`${m.SecureUri}\` |`)
      })
    }

    if (flags.show) {
      this.log('Id  | Name                      | Auth')
      this.log('----|---------------------------|----------')
      musicServices.forEach(m => {
        this.log(`${m.Id.toString().padStart(3, ' ')} | ${m.Name.padEnd(25, ' ')} | ${m.Policy.Auth}`)
      })
    }
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

