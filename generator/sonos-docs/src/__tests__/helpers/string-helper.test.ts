import {describe, it, expect} from 'vitest'
import StringHelper from '../../helpers/string-helper'

describe('StringHelper.camelToKebab', () => {
  it('lowercases a single word', () => {
    expect(StringHelper.camelToKebab('Alarm')).toBe('alarm')
  })

  it('converts camelCase to kebab-case', () => {
    expect(StringHelper.camelToKebab('alarmClock')).toBe('alarm-clock')
  })

  it('converts PascalCase to kebab-case', () => {
    expect(StringHelper.camelToKebab('AlarmClock')).toBe('alarm-clock')
  })

  it('handles a single uppercase letter word', () => {
    expect(StringHelper.camelToKebab('A')).toBe('a')
  })

  it('handles consecutive uppercase letters (after AV/HT replacement)', () => {
    // AVTransport → AvTransport (caller replaces AV→Av) → av-transport
    expect(StringHelper.camelToKebab('AvTransport')).toBe('av-transport')
    // HTControl → HtControl → ht-control
    expect(StringHelper.camelToKebab('HtControl')).toBe('ht-control')
  })

  it('converts known Sonos service names correctly', () => {
    expect(StringHelper.camelToKebab('AlarmClock')).toBe('alarm-clock')
    expect(StringHelper.camelToKebab('AudioIn')).toBe('audio-in')
    expect(StringHelper.camelToKebab('ContentDirectory')).toBe('content-directory')
    expect(StringHelper.camelToKebab('DeviceProperties')).toBe('device-properties')
    expect(StringHelper.camelToKebab('GroupManagement')).toBe('group-management')
    expect(StringHelper.camelToKebab('GroupRenderingControl')).toBe('group-rendering-control')
    expect(StringHelper.camelToKebab('MusicServices')).toBe('music-services')
    expect(StringHelper.camelToKebab('QPlay')).toBe('q-play')
    expect(StringHelper.camelToKebab('RenderingControl')).toBe('rendering-control')
    expect(StringHelper.camelToKebab('SystemProperties')).toBe('system-properties')
    expect(StringHelper.camelToKebab('ZoneGroupTopology')).toBe('zone-group-topology')
  })

  it('does not add leading or trailing dashes', () => {
    const result = StringHelper.camelToKebab('AlarmClock')
    expect(result).not.toMatch(/^-/)
    expect(result).not.toMatch(/-$/)
  })
})
