import {SonosServicesDocumentation} from '../models/sonos-service-documentation'
import SonosDevice from '../models/sonos-device'
import {SonosService} from '../models/sonos-service'
import {SonosServiceAction} from '../models/sonos-service-action'
import ExtendedSonosDescription from '../models/extended-sonos-description'
import SonosDiscoveryInfo from '../models/sonos-discovery-info'

const sortDeviceInfo = (a: SonosDiscoveryInfo, b: SonosDiscoveryInfo): number => {
  if (a.softwareGeneration === b.softwareGeneration) {
    return a.model.localeCompare(b.model)
  }

  return b.softwareGeneration - a.softwareGeneration
}

/**
 * Merge multiple discovered Sonos devices into a single combined description,
 * then overlay documentation descriptions from the docs JSON.
 */
export function combineDevices(
  devices: SonosDevice[],
  documentation: SonosServicesDocumentation,
): ExtendedSonosDescription {
  const sorted = [...devices].sort((a, b) => a.model.localeCompare(b.model))
  const firstDevice = sorted[0]

  const combined: ExtendedSonosDescription = {
    ...firstDevice,
    deviceInfo: [{
      discoveryDate: firstDevice.discoveryDate,
      model: firstDevice.model,
      modelDescription: firstDevice.modelDescription,
      softwareGeneration: firstDevice.softwareGeneration,
      softwareVersion: firstDevice.softwareVersion,
    }],
  }

  const firstModel = `v${combined.softwareGeneration}-${combined.model}`
  combined.services.forEach(s => {
    s.availableAt = [firstModel]
    s.deviceInfo = combined.deviceInfo
    s.actions?.forEach(a => {
      a.availableAt = [firstModel]
    })
  })

  const otherDevices = sorted.slice(1)
  otherDevices.forEach(d => {
    const model = `v${d.softwareGeneration}-${d.model}`
    if (d.softwareVersion.localeCompare(combined.softwareVersion) > 0) {
      combined.softwareVersion = d.softwareVersion
    }

    const deviceInfo: SonosDiscoveryInfo = {
      discoveryDate: d.discoveryDate,
      model: d.model,
      modelDescription: d.modelDescription,
      softwareGeneration: d.softwareGeneration,
      softwareVersion: d.softwareVersion,
    }

    if (!combined.deviceInfo.some(v => v.model === deviceInfo.model && v.softwareGeneration === deviceInfo.softwareGeneration)) {
      combined.deviceInfo.push(deviceInfo)
    }

    d.services.forEach(service => {
      const index = combined.services.findIndex(s => s.name === service.name)
      if (index === -1) {
        service.availableAt = [model]
        service.deviceInfo = [deviceInfo]
        service.actions?.forEach(a => {
          a.availableAt = [model]
        })
        combined.services.push(service)
      } else {
        combined.services[index].availableAt?.push(model)
        combined.services[index].availableAt = combined.services[index].availableAt?.sort((a, b) => a.localeCompare(b))

        if (combined.services[index].deviceInfo && !combined.services[index].deviceInfo?.some(v => v.model === deviceInfo.model && v.softwareGeneration === deviceInfo.softwareGeneration)) {
          combined.services[index].deviceInfo?.push(deviceInfo)
        }

        service.stateVariables?.forEach(sv => {
          if (!combined.services[index].stateVariables?.some(v => sv.name === v.name)) {
            combined.services[index].stateVariables?.push(sv)
          }
        })

        combined.services[index].actions = combined.services[index].actions ?? []
        service.actions?.forEach(a => {
          const actionIndex = combined.services[index].actions?.findIndex(ca => ca.name === a.name) ?? -1
          if (actionIndex === -1) {
            combined.services[index].actions!.push(a)
          } else {
            combined.services[index].actions![actionIndex].availableAt?.push(model)
            combined.services[index].actions![actionIndex].availableAt = combined.services[index].actions![actionIndex].availableAt?.sort((a, b) => a.localeCompare(b))
          }
        })
      }
    })
  })

  combined.discoveryDate = new Date()
  combined.model += '|' + otherDevices.map(d => d.model).join('|')
  combined.deviceInfo = combined.deviceInfo.sort(sortDeviceInfo)
  combined.modelDescription += '|' + otherDevices.map(d => d.modelDescription).join('|')
  combined.errors = documentation?.errors?.sort((a, b) => a.code - b.code)

  combined.services.forEach(s => {
    s.deviceInfo = s.deviceInfo?.sort(sortDeviceInfo)
    const docs = documentation?.services[s.serviceName]
    if (docs !== undefined) {
      s.description = docs.description
      s.errors = docs.errors?.sort((a, b) => a.code - b.code)
      if (docs.actions) {
        const actions = docs.actions
        s.actions?.forEach(a => {
          const action = actions[a.name]
          if (action !== undefined) {
            a.description = action.description
            a.remarks = action.remarks
            const actionArguments = action.params ?? {}
            const sampleData = action.sample ?? {}
            a.inputs?.forEach(i => {
              i.description = actionArguments[i.name] ?? (i.name === 'InstanceID' ? 'InstanceID should always be `0`' : undefined)
              i.sample = sampleData[i.name]
            })
            a.outputs?.forEach(o => {
              o.description = actionArguments[o.name]
              o.sample = sampleData[o.name]
            })
          }
        })
      }
    }

    s.actions = s.actions?.sort((a: SonosServiceAction, b: SonosServiceAction) => a.name.localeCompare(b.name))

    // Normalise allowedValues to always be an array
    if (s.stateVariables) {
      s.stateVariables.forEach(v => {
        if (v.allowedValues && !Array.isArray(v.allowedValues)) {
          v.allowedValues = [v.allowedValues]
        }
      })
    }

    if (docs?.variables) {
      if (!s.stateVariables) {
        s.stateVariables = []
      }

      docs.variables.forEach(p => {
        p.sendEvents = true
        const index = s.stateVariables!.findIndex(v => v.name === p.name)
        if (index > -1) {
          s.stateVariables![index].description = p.description
          s.stateVariables![index].dataType = p.dataType
          if (p.allowedValues) {
            s.stateVariables![index].allowedValues = p.allowedValues
          }
        } else {
          s.stateVariables!.push(p)
        }
      })
    }
  })

  combined.services = combined.services.sort((a: SonosService, b: SonosService) => a.name.localeCompare(b.name))
  return combined
}
