import { SonosService } from './sonos-service';

export default interface SonosDevice {
  model: string;
  modelDescription: string;
  softwareGeneration: number;
  softwareVersion: string;
  discoveryDate: Date;
  services: SonosService[];
}