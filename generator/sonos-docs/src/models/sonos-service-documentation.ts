import SonosServiceError from './sonos-service-error';

export interface SonosServicesDocumentation {
  services: { [key: string]: SonosServiceDocumentation };
  errors?: SonosServiceError[];
}

export interface SonosServiceDocumentation {
  description?: string;
  files?: { [key: string]: string};
  actions?: { [key: string]: SonosServiceDocumentationAction };
  customTypes?: { [key: string]: { [key: string]: string } };
  errors?: SonosServiceError[];
}

export interface SonosServiceDocumentationAction {
  description?: string;
  remarks?: string;
  params?: { [key: string]: string };
}
