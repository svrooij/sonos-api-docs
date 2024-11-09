---
layout: default
title: RenderingControl
parent: Sonos Services
---
# RenderingControl service
{: .no_toc }

Volume related controls

The RenderingControl service is available on these models: `Sonos Play:1 (S1) S2` / `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Amp (S16) S2` / `Sonos One (S18) S2` / `SYMFONISK Bookshelf (S21) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `SYMFONISK Bookshelf (S33) S2` / `Sonos One SL (S38) S2` / `Sonos Era 100 (S39) S2` / `Sonos Play:5 (S6) S2` / `Sonos Playbar (S9) S2` / `Sonos Sub (Sub) S2`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaRenderer/RenderingControl/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaRenderer/RenderingControl/Event` |
| **Discovery URL** | `http://192.168.x.x:1400/xml/RenderingControl1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:RenderingControl` |
| **Service type** | `urn:schemas-upnp-org:service:RenderingControl:1` |

### Sample request
{: .no_toc }

```text
POST /MediaRenderer/RenderingControl/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:RenderingControl:1#{ActionName}"
Content-Type: text/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentBass** | `i2` |  |

### GetEQ

Get equalizer value

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **EQType** | `string` | Allowed values `DialogLevel` (bool) / `MusicSurroundLevel` (-15/+15) /  `NightMode` (bool) / `SubGain` (-10/+10) / `SurroundEnable` (bool) / `SurroundLevel` (-15/+15) / `SurroundMode` (0 = ambient, 1 = full) / `HeightChannelLevel` (-10/+10) |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentValue** | `i2` | Booleans return `1` / `0`, rest number as specified |

**Remarks** Not all EQ types are available on every speaker

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentHeadphoneConnected** | `boolean` |  `1` for true and `0` for false  |

### GetLoudness

Whether or not Loudness is on

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentLoudness** | `boolean` |  `1` for true and `0` for false  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentMute** | `boolean` |  `1` for true and `0` for false  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentFixed** | `boolean` |  `1` for true and `0` for false  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RoomCalibrationEnabled** | `boolean` |  `1` for true and `0` for false  |
| **RoomCalibrationAvailable** | `boolean` |  `1` for true and `0` for false  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentSupportsFixed** | `boolean` |  `1` for true and `0` for false  |

### GetTreble

Get treble

Action body:

```xml
<u:GetTreble xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetTreble>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentTreble** | `i2` | Number between -10 and 10 |

### GetVolume

Get volume

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `ui2` | Number between 0 and 100 |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **RampType** | `string` |  Allowed values: `SLEEP_TIMER_RAMP_TYPE` / `ALARM_RAMP_TYPE` / `AUTOPLAY_RAMP_TYPE` |
| **DesiredVolume** | `ui2` |  |
| **ResetVolumeAfter** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Bass** | `i2` |  |
| **Treble** | `i2` |  |
| **Loudness** | `boolean` |  `1` for true and `0` for false  |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |

### SetBass

Set bass level, between -10 and 10

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **DesiredBass** | `i2` |  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **ChannelMap** | `string` |  |

### SetEQ

Set equalizer value for different types

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **EQType** | `string` | Allowed values `DialogLevel` (bool) / `MusicSurroundLevel` (-15/+15) /  `NightMode` (bool) / `SubGain` (-10/+10) / `SurroundEnable` (bool) / `SurroundLevel` (-15/+15) / `SurroundMode` (0 = ambient, 1 = full) / `HeightChannelLevel` (-10/+10) |
| **DesiredValue** | `i2` | Booleans required `1` for true or `0` for false, rest number as specified |

**Remarks** Not supported by all speakers, TV related

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **DesiredLoudness** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **DesiredMute** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **DesiredFixed** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **RoomCalibrationEnabled** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
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
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Channel** | `string` |  Allowed values: `Master` / `LF` / `RF` |
| **DesiredVolume** | `i2` |  |

## Events

The RenderingControlService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /MediaRenderer/RenderingControl/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AudioDelay |  | `string` |  |
| AudioDelayLeftRear |  | `string` |  |
| AudioDelayRightRear |  | `string` |  |
| Bass |  | `i2` |  |
| DialogLevel |  | `string` |  |
| EQValue |  | `i2` |  |
| HeadphoneConnected |  | `boolean` |  `1` for true and `0` for false  |
| HeightChannelLevel | ✔ | `ui4` |  |
| LastChange | ✔ | `string` |  |
| Loudness |  | `boolean` |  `1` for true and `0` for false  |
| MusicSurroundLevel |  | `string` |  |
| Mute |  | `boolean` |  `1` for true and `0` for false  |
| NightMode |  | `boolean` |  `1` for true and `0` for false  |
| OutputFixed |  | `boolean` |  `1` for true and `0` for false  |
| PresetNameList |  | `string` |  |
| RoomCalibrationAvailable |  | `boolean` |  `1` for true and `0` for false  |
| RoomCalibrationCalibrationMode |  | `string` |  |
| RoomCalibrationCoefficients |  | `string` |  |
| RoomCalibrationEnabled |  | `boolean` |  `1` for true and `0` for false  |
| RoomCalibrationID |  | `string` |  |
| SpeakerSize |  | `ui4` |  |
| SubCrossover |  | `string` |  |
| SubEnabled |  | `boolean` |  `1` for true and `0` for false  |
| SubGain |  | `string` |  |
| SubPolarity |  | `string` |  |
| SupportsOutputFixed |  | `boolean` |  `1` for true and `0` for false  |
| SurroundEnabled |  | `boolean` |  `1` for true and `0` for false  |
| SurroundLevel |  | `string` |  |
| SurroundMode |  | `string` |  |
| Treble |  | `i2` |  |
| Volume |  | `ui2` |  |
| VolumeDB |  | `i2` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

---

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.

| Device | Software generation | Software version | Discovery date |
|:-------|:--------------------|:-----------------|:---------------|
| `Sonos Play:1 (S1)` | S2 | 77.4-49290 | 2024-02-13T15:56:06.184Z |
| `Sonos One (S13)` | S2 | 63.2-90210 | 2021-07-21T23:31:19.273Z |
| `Sonos Beam (S14)` | S2 | 64.3-19080 | 2021-08-18T06:04:08.308Z |
| `Sonos Amp (S16)` | S2 | 79.1-53290 | 2024-11-09T18:45:16.539Z |
| `Sonos One (S18)` | S2 | 77.4-49290 | 2024-02-13T15:55:36.464Z |
| `SYMFONISK Bookshelf (S21)` | S2 | 66.4-23300 | 2022-01-01T11:41:01.361Z |
| `Sonos Roam (S27)` | S2 | 63.2-90210 | 2021-07-21T23:31:31.207Z |
| `Sonos Play:3 (S3)` | S2 | 64.3-19080 | 2021-08-18T06:09:36.692Z |
| `SYMFONISK Bookshelf (S33)` | S2 | 77.4-49290 | 2024-02-13T15:55:24.423Z |
| `Sonos One SL (S38)` | S2 | 72.2-40060 | 2023-05-22T16:39:25.503Z |
| `Sonos Era 100 (S39)` | S2 | 79.1-53290 | 2024-11-09T18:45:10.792Z |
| `Sonos Play:5 (S6)` | S2 | 64.3-19080 | 2021-08-18T06:06:35.970Z |
| `Sonos Playbar (S9)` | S2 | 77.4-49290 | 2024-02-13T15:55:46.307Z |
| `Sonos Sub (Sub)` | S2 | 63.2-90210 | 2021-07-21T23:31:40.304Z |
