export interface SonosServicesDocumentation {
  services: { [key: string]: SonosServiceDocumentation };
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
