import Author from './author';

export interface Template {
  author: Author;
  files: TemplateFile[];
  name?: string;
  slug: string;
  license: string;
  folder?: string;
  dataTypes?: { [key: string]: string }
  serviceData?: { [key: string]: any }
}

export interface TemplateFile {
  file: string;
  outputFile: string;
  usage: 'index' | 'service';
}
