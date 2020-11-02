import { Command, flags } from '@oclif/command'
import {cli} from 'cli-ux'

import * as path from 'path';
import * as fs from 'fs';
import * as handlebars from 'handlebars';

import SonosDevice from '../models/sonos-device';
import { Template } from '../models/template';
import { SonosService } from '../models/sonos-service';
import StringHelper from '../helpers/string-helper';
import SonosStateVariable from '../models/sonos-state-variable';

export default class Generate extends Command {
  static description = 'Generate files based on the intermediate file and a template.'

  static flags = {
    help: flags.help({ char: 'h' }),
    intermediate: flags.string({ char: 'i', description: 'intermediate file to use. generate with \'combine\'', default: 'data/intermediate.json' }),
  }

  static args = [
    {
      name: 'template',
      required: true,
      description: 'The template to use, either a folder relative to the current or a folder an included in the generator'
    },
    {
      name: 'output',
      required: true,
      description: 'The root directory where the files should be generated'
    },
  ]

  async run() {
    const { args, flags } = this.parse(Generate)
    this.log('Starting generator with template \'%s\'', args.template);

    const outputTemplate = this.getTemplate(args.template);
    const deviceDescription = this.getDeviceDescription(flags.intermediate);

    const outputBase = this.getFullPathAndCreateDirectory(args.output, true);

    if(outputTemplate === undefined || deviceDescription === undefined) {
      // This should never be reached, since it will already throw an error earlier.
      return;
    }

    outputTemplate?.files.forEach(t => {
      if(t.usage === 'index') {
        cli.action.start(`Creating '${t.outputFile}' from template ${t.file}`);
        const template = this.getHandlebarTemplate<SonosDevice>(outputTemplate.folder, t.file);
        const result = template(deviceDescription);
        const outputfile = path.join(outputBase, t.outputFile);
        fs.writeFileSync(outputfile, result);
        cli.action.stop();
      } else {
        cli.action.start(`Creating services '${t.outputFile}' from template '${t.file}'`);
        const template = this.getHandlebarTemplate<SonosService>(outputTemplate.folder, t.file);
        deviceDescription.services.forEach(s => {
          const outputfile = path.join(outputBase, t.outputFile.replace('{snService}', s.kebabName ?? '').replace('{service}', s.name));
          const folder = path.dirname(outputfile)
          if(!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true })
          }
          const result = template(s);
          fs.writeFileSync(outputfile, result);
        })
        cli.action.stop();
      }  
    })

  }

  private getFullPathAndCreateDirectory(location: string, createFolder: boolean = false) {
    const filename = path.isAbsolute(location) ? location : path.join(process.cwd(), location);
    const folder = path.dirname(filename);
    if (createFolder && !fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    return filename;
  }

  private getTemplate(name: string): Template | undefined | never {
    // Template relative to current folder;
    let folder = path.isAbsolute(name) ? name : path.join(process.cwd(), name);
    let filename = path.join(folder, 'template.json');
    if (fs.existsSync(filename)) {
      let template = JSON.parse(fs.readFileSync(filename).toString()) as Template;
      template.folder = folder;
      this.log('Using local template: \'%s\' from: %s ', template.name ?? template.slug, folder);
      return template;
    }

    folder = path.join(__dirname, '..', '..', 'templates', name);
    filename = path.join(folder, 'template.json');

    if (fs.existsSync(filename)) {
      let template = JSON.parse(fs.readFileSync(filename).toString()) as Template;
      template.folder = folder;
      this.log('Using packaged template: \'%s\'', template.name ?? template.slug);
      return template;
    }

    return this.error(`Template %s not found, use folder name or packaged template name`, { exit: 20 });
  }

  private getDeviceDescription(location: string): SonosDevice | undefined | never {
    const intermediateFile = this.getFullPathAndCreateDirectory(location);
    if (!fs.existsSync(intermediateFile)) {
      return this.error('Intermediate file doesn\'t exist, generate with \'combine\' command first.', { exit: 10 })
    }

    // Set relatedStateVariables to correct value.
    const intermediate = JSON.parse(fs.readFileSync(intermediateFile).toString()) as SonosDevice;
    intermediate.services.forEach(service => {
      service.kebabName = StringHelper.CamelToKebab(service.name.replace('AV', 'Av').replace('HT', 'Ht'));
      if(typeof(service.stateVariables) !== undefined && typeof(service.actions) !== undefined) {
        service.actions?.forEach(a => {
          a.inputs?.forEach(i => {
            i.relatedStateVariable = service.stateVariables?.find(v => v.name === i.relatedStateVariableName);
          });
          a.outputs?.forEach(o => {
            o.relatedStateVariable = service.stateVariables?.find(v => v.name === o.relatedStateVariableName);
          })
        })
      }
      if (typeof(service.stateVariables) !== undefined) {
        service.eventVariables = service.stateVariables?.filter((v: SonosStateVariable) => !v.name.startsWith('A_ARG_TYPE')).sort((a, b) => a.name.localeCompare(b.name))
      }
    });
    intermediate.services = intermediate.services.sort((a, b) => a.name.localeCompare(b.name));
    return intermediate;
  }

  private getHandlebarTemplate<T>(folder: string | undefined, file: string): HandlebarsTemplateDelegate<T> | never {
    if (folder === undefined) {
      return this.error('Template isn\'t loaded correctly', { exit: 1 });
    }

    const filename = path.join(folder, file);
    if (!fs.existsSync(filename)) {
      return this.error(`Template file ${file} could not be loaded`, { exit: 30 });
    }
    return handlebars.compile(fs.readFileSync(filename).toString());
  }
}
