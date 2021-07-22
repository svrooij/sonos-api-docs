import SonosDevice from './sonos-device'
import SonosDiscoveryInfo from './sonos-discovery-info'

export default interface ExtendedSonosDescription extends SonosDevice {
  deviceInfo: SonosDiscoveryInfo[];
}
