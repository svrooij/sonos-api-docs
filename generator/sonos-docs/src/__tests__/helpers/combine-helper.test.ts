import {describe, it, expect} from 'vitest'
import {combineDevices} from '../../helpers/combine-helper'
import SonosDevice from '../../models/sonos-device'
import {SonosServicesDocumentation} from '../../models/sonos-service-documentation'

// ---- Minimal device factory helpers ----

function makeDevice(model: string, swGen: number, swVersion: string, serviceNames: string[] = ['AlarmClock']): SonosDevice {
  return {
    model,
    modelDescription: `Sonos ${model}`,
    softwareGeneration: swGen,
    softwareVersion: swVersion,
    discoveryDate: new Date('2024-01-01T00:00:00Z'),
    services: serviceNames.map(name => ({
      name,
      serviceName: `${name}Service`,
      discoveryUri: `/xml/${name}1.xml`,
      serviceId: `urn:upnp-org:serviceId:${name}`,
      serviceType: `urn:schemas-upnp-org:service:${name}:1`,
      controlURL: `/${name}/Control`,
      eventSubURL: `/${name}/Event`,
      stateVariables: [{name: 'SomeVar', dataType: 'string', sendEvents: false}],
      actions: [
        {
          name: 'GetStatus',
          availableAt: undefined,
          inputs: [{name: 'InstanceID', direction: 'in' as const, relatedStateVariableName: 'SomeVar'}],
          outputs: [{name: 'CurrentStatus', direction: 'out' as const, relatedStateVariableName: 'SomeVar'}],
        },
      ],
    })),
  }
}

const emptyDocs: SonosServicesDocumentation = {services: {}}

// ---- Tests ----

describe('combineDevices', () => {
  describe('single device', () => {
    it('returns services from the device', () => {
      const device = makeDevice('S1', 2, '86.4-73290')
      const result = combineDevices([device], emptyDocs)
      expect(result.services).toHaveLength(1)
      expect(result.services[0].name).toBe('AlarmClock')
    })

    it('sets availableAt on services using softwareGeneration and model', () => {
      const device = makeDevice('S1', 2, '86.4-73290')
      const result = combineDevices([device], emptyDocs)
      expect(result.services[0].availableAt).toEqual(['v2-S1'])
    })

    it('sets availableAt on actions', () => {
      const device = makeDevice('S1', 2, '86.4-73290')
      const result = combineDevices([device], emptyDocs)
      expect(result.services[0].actions![0].availableAt).toEqual(['v2-S1'])
    })

    it('populates deviceInfo from the device', () => {
      const device = makeDevice('S1', 2, '86.4-73290')
      const result = combineDevices([device], emptyDocs)
      expect(result.deviceInfo).toHaveLength(1)
      expect(result.deviceInfo[0].model).toBe('S1')
      expect(result.deviceInfo[0].softwareGeneration).toBe(2)
    })
  })

  describe('two devices with a shared service', () => {
    it('merges services so there is only one entry per service name', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const alarmClockServices = result.services.filter(s => s.name === 'AlarmClock')
      expect(alarmClockServices).toHaveLength(1)
    })

    it('union of availableAt contains both models', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const alarm = result.services.find(s => s.name === 'AlarmClock')!
      expect(alarm.availableAt).toContain('v2-S1')
      expect(alarm.availableAt).toContain('v2-S3')
    })

    it('sorts availableAt alphabetically', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const alarm = result.services.find(s => s.name === 'AlarmClock')!
      const sorted = [...(alarm.availableAt ?? [])].sort()
      expect(alarm.availableAt).toEqual(sorted)
    })

    it('keeps shared actions deduplicated', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const actions = result.services.find(s => s.name === 'AlarmClock')!.actions ?? []
      const getStatusActions = actions.filter(a => a.name === 'GetStatus')
      expect(getStatusActions).toHaveLength(1)
    })

    it('adds shared action availableAt to both models', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const action = result.services.find(s => s.name === 'AlarmClock')!.actions![0]
      expect(action.availableAt).toContain('v2-S1')
      expect(action.availableAt).toContain('v2-S3')
    })

    it('accumulates deviceInfo for both devices on the merged service', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const alarm = result.services.find(s => s.name === 'AlarmClock')!
      const models = alarm.deviceInfo?.map(d => d.model) ?? []
      expect(models).toContain('S1')
      expect(models).toContain('S3')
    })
  })

  describe('service only in second device', () => {
    it('includes service that only exists on the second device', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290', ['AlarmClock'])
      const deviceB = makeDevice('S3', 2, '64.3-19080', ['AlarmClock', 'AudioIn'])
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      expect(result.services.map(s => s.name)).toContain('AudioIn')
    })

    it('marks service unique to second device with its model only', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290', ['AlarmClock'])
      const deviceB = makeDevice('S3', 2, '64.3-19080', ['AlarmClock', 'AudioIn'])
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      const audioIn = result.services.find(s => s.name === 'AudioIn')!
      expect(audioIn.availableAt).toEqual(['v2-S3'])
    })
  })

  describe('model string assembly', () => {
    it('appends model names with pipe separator', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '64.3-19080')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      expect(result.model).toContain('|')
      expect(result.model).toContain('S1')
      expect(result.model).toContain('S3')
    })

    it('picks the highest software version', () => {
      const deviceA = makeDevice('S1', 2, '86.4-73290')
      const deviceB = makeDevice('S3', 2, '90.0-99999')
      const result = combineDevices([deviceA, deviceB], emptyDocs)
      expect(result.softwareVersion).toBe('90.0-99999')
    })
  })

  describe('documentation overlay', () => {
    it('adds service description from docs', () => {
      const device = makeDevice('S1', 2, '86.4-73290')
      const docs: SonosServicesDocumentation = {
        services: {
          AlarmClockService: {description: 'Manages alarms'},
        },
      }
      const result = combineDevices([device], docs)
      expect(result.services.find(s => s.name === 'AlarmClock')!.description).toBe('Manages alarms')
    })

    it('adds action description from docs', () => {
      const device = makeDevice('S1', 2, '86.4-73290')
      const docs: SonosServicesDocumentation = {
        services: {
          AlarmClockService: {
            actions: {GetStatus: {description: 'Gets the current status'}},
          },
        },
      }
      const result = combineDevices([device], docs)
      const action = result.services[0].actions?.find(a => a.name === 'GetStatus')
      expect(action?.description).toBe('Gets the current status')
    })
  })

  describe('stateVariable normalisation', () => {
    it('normalises a scalar allowedValues to an array', () => {
      const device: SonosDevice = {
        model: 'S1',
        modelDescription: 'Sonos S1',
        softwareGeneration: 2,
        softwareVersion: '86.4-73290',
        discoveryDate: new Date('2024-01-01T00:00:00Z'),
        services: [{
          name: 'AlarmClock',
          serviceName: 'AlarmClockService',
          discoveryUri: '/xml/AlarmClock1.xml',
          serviceId: 'urn:upnp-org:serviceId:AlarmClock',
          serviceType: 'urn:schemas-upnp-org:service:AlarmClock:1',
          controlURL: '/AlarmClock/Control',
          eventSubURL: '/AlarmClock/Event',
          stateVariables: [{
            name: 'SomeVar',
            dataType: 'string',
            sendEvents: false,
            // Intentionally cast: simulates a malformed JSON from old data
            allowedValues: 'ONCE' as unknown as string[],
          }],
        }],
      }
      const result = combineDevices([device], emptyDocs)
      const sv = result.services[0].stateVariables![0]
      expect(Array.isArray(sv.allowedValues)).toBe(true)
      expect(sv.allowedValues).toEqual(['ONCE'])
    })
  })

  describe('services are sorted alphabetically', () => {
    it('returns services in alphabetical order', () => {
      const device = makeDevice('S1', 2, '86.4-73290', ['ZoneGroupTopology', 'AlarmClock', 'RenderingControl'])
      const result = combineDevices([device], emptyDocs)
      const names = result.services.map(s => s.name)
      expect(names).toEqual([...names].sort())
    })
  })
})
