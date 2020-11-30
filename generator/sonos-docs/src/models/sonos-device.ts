import { SonosService } from './sonos-service';
import SonosServiceError from './sonos-service-error';

export default interface SonosDevice {
  model: string;
  modelDescription: string;
  softwareGeneration: number;
  softwareVersion: string;
  discoveryDate: Date;
  services: SonosService[];
  errors?: SonosServiceError[];
}
