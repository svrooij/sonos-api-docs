---
layout: default
title: RenderingControlService
parent: Sonos UPNP
---
# RenderingControlService
{: .no_toc }

Volume related controls

The RenderingControlService is available on these models: `v1-S1` / `v1-S5` / `v1-S9`.

1. TOC
{:toc}

---


## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaRenderer/RenderingControl/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaRenderer/RenderingControl/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/RenderingControl1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:RenderingControl` |
| **Service type** | `urn:schemas-upnp-org:service:RenderingControl:1` |

### Sample request
{: .no_toc }

```http
POST /MediaRenderer/RenderingControl/Control
Host: 192.168.x.x:1400
SOAP-Action: "urn:schemas-upnp-org:service:RenderingControl:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

### GetBass

Get bass level between -10 and 10

Action body:

```xml
<u:GetBass xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetBass>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentBass** | `i2` |  |

### GetEQ

Get EQ value (see SetEQ) for different EQTypes - not supported by all devices (is TV related)

Action body:

```xml
<u:GetEQ xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <EQType>string</EQType>
</u:GetEQ>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **EQType** | `string` | EQ type such as DialogLevel, NightMode, SubGain |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentValue** | `i2` |  |

### GetHeadphoneConnected

Action body:

```xml
<u:GetHeadphoneConnected xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetHeadphoneConnected>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentHeadphoneConnected** | `boolean` |  |

### GetLoudness

Get loudness 1 for on, 0 for off

Action body:

```xml
<u:GetLoudness xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
</u:GetLoudness>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` | Master Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentLoudness** | `boolean` |  |

### GetMute

Action body:

```xml
<u:GetMute xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
</u:GetMute>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` / `SpeakerOnly` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentMute** | `boolean` |  |

### GetOutputFixed

Action body:

```xml
<u:GetOutputFixed xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetOutputFixed>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentFixed** | `boolean` |  |

### GetRoomCalibrationStatus

Action body:

```xml
<u:GetRoomCalibrationStatus xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetRoomCalibrationStatus>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RoomCalibrationEnabled** | `boolean` |  |
| **RoomCalibrationAvailable** | `boolean` |  |

### GetSupportsOutputFixed

Action body:

```xml
<u:GetSupportsOutputFixed xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetSupportsOutputFixed>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentSupportsFixed** | `boolean` |  |

### GetTreble

Get treble between -10 and 10

Action body:

```xml
<u:GetTreble xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetTreble>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentTreble** | `i2` |  |

### GetVolume

Get volume between 0 and 100

Action body:

```xml
<u:GetVolume xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
</u:GetVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` | Master Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `ui2` |  |

### GetVolumeDB

Action body:

```xml
<u:GetVolumeDB xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
</u:GetVolumeDB>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `i2` |  |

### GetVolumeDBRange

Action body:

```xml
<u:GetVolumeDBRange xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
</u:GetVolumeDBRange>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **MinValue** | `i2` |  |
| **MaxValue** | `i2` |  |

### RampToVolume

Action body:

```xml
<u:RampToVolume xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
  <RampType>string</RampType>
  <DesiredVolume>ui2</DesiredVolume>
  <ResetVolumeAfter>boolean</ResetVolumeAfter>
  <ProgramURI>string</ProgramURI>
</u:RampToVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **RampType** | `string` |  Allowed values: `SLEEP_TIMER_RAMP_TYPE` / `ALARM_RAMP_TYPE` / `AUTOPLAY_RAMP_TYPE` |
| **DesiredVolume** | `ui2` |  |
| **ResetVolumeAfter** | `boolean` |  |
| **ProgramURI** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RampTime** | `ui4` |  |

### ResetBasicEQ

Action body:

```xml
<u:ResetBasicEQ xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:ResetBasicEQ>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Bass** | `i2` |  |
| **Treble** | `i2` |  |
| **Loudness** | `boolean` |  |
| **LeftVolume** | `ui2` |  |
| **RightVolume** | `ui2` |  |

### ResetExtEQ

Action body:

```xml
<u:ResetExtEQ xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <EQType>string</EQType>
</u:ResetExtEQ>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **EQType** | `string` |  |

### RestoreVolumePriorToRamp

Action body:

```xml
<u:RestoreVolumePriorToRamp xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
</u:RestoreVolumePriorToRamp>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

### SetBass

Set bass level

Action body:

```xml
<u:SetBass xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <DesiredBass>i2</DesiredBass>
</u:SetBass>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **DesiredBass** | `i2` | between -10 and 10 |

### SetChannelMap

Action body:

```xml
<u:SetChannelMap xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <ChannelMap>string</ChannelMap>
</u:SetChannelMap>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **ChannelMap** | `string` |  |

### SetEQ

Set EQ value for different types - not supported by all devices (is TV related)

Action body:

```xml
<u:SetEQ xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <EQType>string</EQType>
  <DesiredValue>i2</DesiredValue>
</u:SetEQ>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **EQType** | `string` | DialogLevel, NightMode, SubGain |
| **DesiredValue** | `i2` | DialogLevel and NightMode: 0 for off, 1 for on. SubGain between -10 and 10 |

### SetLoudness

Set loudness on / off

Action body:

```xml
<u:SetLoudness xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
  <DesiredLoudness>boolean</DesiredLoudness>
</u:SetLoudness>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **DesiredLoudness** | `boolean` | true for on |

### SetMute

Action body:

```xml
<u:SetMute xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
  <DesiredMute>boolean</DesiredMute>
</u:SetMute>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` / `SpeakerOnly` |
| **DesiredMute** | `boolean` |  |

### SetOutputFixed

Action body:

```xml
<u:SetOutputFixed xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <DesiredFixed>boolean</DesiredFixed>
</u:SetOutputFixed>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **DesiredFixed** | `boolean` |  |

### SetRelativeVolume

Action body:

```xml
<u:SetRelativeVolume xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
  <Adjustment>i4</Adjustment>
</u:SetRelativeVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **Adjustment** | `i4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewVolume** | `ui2` |  |

### SetRoomCalibrationStatus

Action body:

```xml
<u:SetRoomCalibrationStatus xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <RoomCalibrationEnabled>boolean</RoomCalibrationEnabled>
</u:SetRoomCalibrationStatus>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **RoomCalibrationEnabled** | `boolean` |  |

### SetRoomCalibrationX

Action body:

```xml
<u:SetRoomCalibrationX xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <CalibrationID>string</CalibrationID>
  <Coefficients>string</Coefficients>
  <CalibrationMode>string</CalibrationMode>
</u:SetRoomCalibrationX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **CalibrationID** | `string` |  |
| **Coefficients** | `string` |  |
| **CalibrationMode** | `string` |  |

### SetTreble

Set treble level

Action body:

```xml
<u:SetTreble xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <DesiredTreble>i2</DesiredTreble>
</u:SetTreble>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **DesiredTreble** | `i2` | between -10 and 10 |

### SetVolume

Action body:

```xml
<u:SetVolume xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
  <DesiredVolume>ui2</DesiredVolume>
</u:SetVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **DesiredVolume** | `ui2` |  |

### SetVolumeDB

Action body:

```xml
<u:SetVolumeDB xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Channel>string</Channel>
  <DesiredVolume>i2</DesiredVolume>
</u:SetVolumeDB>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **DesiredVolume** | `i2` |  |

## Events

The RenderingControlService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```http
SUBSCRIBE /MediaRenderer/RenderingControl/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AudioDelay | ❌ | `string` |  |
| AudioDelayLeftRear | ❌ | `string` |  |
| AudioDelayRightRear | ❌ | `string` |  |
| Bass | ❌ | `i2` |  |
| DialogLevel | ❌ | `string` |  |
| EQValue | ❌ | `i2` |  |
| HeadphoneConnected | ❌ | `boolean` |  |
| LastChange | ✔ | `string` |  |
| Loudness | ❌ | `boolean` |  |
| MusicSurroundLevel | ❌ | `string` |  |
| Mute | ❌ | `boolean` |  |
| NightMode | ❌ | `boolean` |  |
| OutputFixed | ❌ | `boolean` |  |
| PresetNameList | ❌ | `string` |  |
| RoomCalibrationAvailable | ❌ | `boolean` |  |
| RoomCalibrationCalibrationMode | ❌ | `string` |  |
| RoomCalibrationCoefficients | ❌ | `string` |  |
| RoomCalibrationEnabled | ❌ | `boolean` |  |
| RoomCalibrationID | ❌ | `string` |  |
| SpeakerSize | ❌ | `ui4` |  |
| SubCrossover | ❌ | `string` |  |
| SubEnabled | ❌ | `boolean` |  |
| SubGain | ❌ | `string` |  |
| SubPolarity | ❌ | `string` |  |
| SupportsOutputFixed | ❌ | `boolean` |  |
| SurroundEnabled | ❌ | `boolean` |  |
| SurroundLevel | ❌ | `string` |  |
| SurroundMode | ❌ | `string` |  |
| Treble | ❌ | `i2` |  |
| Volume | ❌ | `ui2` |  |
| VolumeDB | ❌ | `i2` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. A `❌` doesn't mean that is won't emit events.

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
