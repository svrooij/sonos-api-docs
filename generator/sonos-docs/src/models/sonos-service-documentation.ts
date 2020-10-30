export interface SonosServicesDocumentation {
  services: { [key: string]: SonosServiceDocumentation };
  projects?: KnownProject[];
  templates?: Template[];
}

export interface SonosServiceDocumentation {
  description?: string;
  files?: { [key: string]: string};
  actions?: { [key: string]: SonosServiceDocumentationAction }
  customTypes?: { [key: string]: { [key: string]: string } }
}

export interface SonosServiceDocumentationAction {
  description?: string;
  remarks?: string;
  params?: { [key: string]: string };
}

export interface KnownProject {
  link: string;
  name: string;
  author?: Author;
  description?: string;
}

export interface Template {
  key: string;
  author?: Author;
  folder: string;
}

export interface Author {
  name: string;
  link?: string;
  mail?: string;
}