import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import { SonosDevice } from '@svrooij/sonos'
import * as path from 'path'
import * as fs from 'fs'

export default class Musicservices extends Command {
  static description = 'describe the command here'

  static flags = {
    ...cli.table.flags(),
    show: flags.boolean({ description: 'Show the music services' }),
    docs: flags.boolean({ description: 'Show a markdown table' }),
    saveJson: flags.string({ description: 'If set, save music services as json' })
  }

  static args = [{name: 'ip', description: 'The IP of the sonos speaker to load the music services', required: true }]

  async run() {
    const {args, flags} = this.parse(Musicservices)
    cli.action.start(`Loading music services from ${args.ip}`)
    const device = new SonosDevice(args.ip);

    const musicServices = await device.MusicServicesService.ListAndParseAvailableServices()
    cli.action.stop();

    if(flags.saveJson !== undefined) {
      cli.action.start(`Saving music services to ${flags.saveJson}`)
      const filename = this.getFullPathAndCreateDirectory(flags.saveJson);
      fs.writeFileSync(filename, JSON.stringify(musicServices, null, 2))
      cli.action.stop();
    }

    if(flags.docs) {
      console.log('| Id  | Name                      | Auth       | Url |\r\n|:----|:--------------------------|:-----------|:----|');
      musicServices.forEach(m => {
        console.log(`| ${m.Id.toString().padStart(3, ' ')} | ${m.Name.padEnd(25, ' ')} | ${m.Policy.Auth.padEnd(10, ' ')} | \`${m.SecureUri}\` |`);
      })
    }
    
    if(flags.show){
      cli.table(musicServices, {
        Id: {},
        Name: {},
        Authentication: {
          get: row => row.Policy.Auth
        },
        Capabilities: {},
        Uri: { extended: true, get: row => row.SecureUri }
      }, {
        ...flags
      })
    }


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
