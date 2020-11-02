import Author from './author';

export interface Template {
  author: Author;
  files: TemplateFile[];
  name?: string;
  slug: string;
  license: string;
  folder?: string;
}

export interface TemplateFile {
  file: string;
  outputFile: string;
  usage: 'index' | 'service';
}