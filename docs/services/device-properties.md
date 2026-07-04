---
layout: default
title: DeviceProperties
parent: Sonos Services
---
# DeviceProperties service
{: .no_toc }

Modify device properties, like LED status and stereo pairs

The DeviceProperties service is available on these models: `Sonos Play:1 (S1) S2` / `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Amp (S16) S2` / `Sonos Move (S17) S2` / `Sonos One (S18) S2` / `SYMFONISK Bookshelf (S21) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `SYMFONISK Bookshelf (S33) S2` / `Sonos Ray (S36) S2` / `Sonos One SL (S38) S2` / `Sonos Era 100 (S39) S2` / `Sonos Play:5 (S6) S2` / `Sonos Playbar (S9) S2` / `Sonos Sub (Sub) S2`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/DeviceProperties/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/DeviceProperties/Event` |
| **Discovery URL** | `http://192.168.x.x:1400/xml/DeviceProperties1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:DeviceProperties` |
| **Service type** | `urn:schemas-upnp-org:service:DeviceProperties:1` |

### Sample request
{: .no_toc }

```text
POST /DeviceProperties/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:DeviceProperties:1#{ActionName}"
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

### AddBondedZones

Action body:

```xml
<u:AddBondedZones xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <ChannelMapSet>string</ChannelMapSet>
</u:AddBondedZones>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` |  |

### AddHTSatellite

Adds satellites and/or a sub woofer to a (main) player. The satellites become hidden. The main player RINCON_* is mandatory. RR: right - rear, LF: left - front, SW: subwoofer

Action body:

```xml
<u:AddHTSatellite xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <HTSatChanMapSet>string</HTSatChanMapSet>
</u:AddHTSatellite>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **HTSatChanMapSet** | `string` | example: `RINCON_000PPP1400:LF,RF;RINCON_000RRR1400:RR;RINCON_000SSS1400:LR;RINCON_000QQQ1400:SW` |

**Remarks** Not all speakers support satellites or sub woofer. Satellites should be of same type (e.g. Play:1)

### CreateStereoPair

Create a stereo pair (left, right speakers), right one becomes hidden

Action body:

```xml
<u:CreateStereoPair xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <ChannelMapSet>string</ChannelMapSet>
</u:CreateStereoPair>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` | example: `RINCON_B8E9375831C001400:LF,LF;RINCON_000E58FE3AEA01400:RF,RF` |

**Remarks** Not all speakers support StereoPairs

### EnterConfigMode

Action body:

```xml
<u:EnterConfigMode xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Mode>string</Mode>
  <Options>string</Options>
</u:EnterConfigMode>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Mode** | `string` |  |
| **Options** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **State** | `string` |  |

### ExitConfigMode

Action body:

```xml
<u:ExitConfigMode xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Options>string</Options>
</u:ExitConfigMode>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Options** | `string` |  |

### GetAutoplayLinkedZones

Action body:

```xml
<u:GetAutoplayLinkedZones xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Source>string</Source>
</u:GetAutoplayLinkedZones>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **IncludeLinkedZones** | `boolean` |  `1` for true and `0` for false  |

### GetAutoplayRoomUUID

Action body:

```xml
<u:GetAutoplayRoomUUID xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Source>string</Source>
</u:GetAutoplayRoomUUID>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RoomUUID** | `string` |  |

### GetAutoplayVolume

Action body:

```xml
<u:GetAutoplayVolume xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Source>string</Source>
</u:GetAutoplayVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `ui2` |  |

### GetButtonLockState

Get the current button lock state

Action body:

```xml
<u:GetButtonLockState xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
</u:GetButtonLockState>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentButtonLockState** | `string` |  Possible values: `On` / `Off` |

### GetButtonState

Action body:

```xml
<u:GetButtonState xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
</u:GetButtonState>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **State** | `string` |  |

### GetHouseholdID

Action body:

```xml
<u:GetHouseholdID xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
</u:GetHouseholdID>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentHouseholdID** | `string` |  |

### GetLEDState

Get the current LED state

Action body:

```xml
<u:GetLEDState xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
</u:GetLEDState>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentLEDState** | `string` |  Possible values: `On` / `Off` |

### GetUseAutoplayVolume

Action body:

```xml
<u:GetUseAutoplayVolume xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Source>string</Source>
</u:GetUseAutoplayVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **UseVolume** | `boolean` |  `1` for true and `0` for false  |

### GetZoneAttributes

Action body:

```xml
<u:GetZoneAttributes xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
</u:GetZoneAttributes>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentZoneName** | `string` |  |
| **CurrentIcon** | `string` |  |
| **CurrentConfiguration** | `string` |  |
| **CurrentTargetRoomName** | `string` |  |

### GetZoneInfo

Get information about this specific speaker

Action body:

```xml
<u:GetZoneInfo xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
</u:GetZoneInfo>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SerialNumber** | `string` |  |
| **SoftwareVersion** | `string` |  |
| **DisplaySoftwareVersion** | `string` |  |
| **HardwareVersion** | `string` |  |
| **IPAddress** | `string` |  |
| **MACAddress** | `string` |  |
| **CopyrightInfo** | `string` |  |
| **ExtraInfo** | `string` |  |
| **HTAudioIn** | `ui4` | SPDIF input, `0` not connected / `2` stereo / `7` Dolby 2.0 / `18` dolby 5.1 / `21` not listening / `22` silence |
| **Flags** | `ui4` |  |

### RemoveBondedZones

Action body:

```xml
<u:RemoveBondedZones xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <ChannelMapSet>string</ChannelMapSet>
  <KeepGrouped>boolean</KeepGrouped>
</u:RemoveBondedZones>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` |  |
| **KeepGrouped** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

### RemoveHTSatellite

Removes a satellite or a sub woofer from (main) player. The satellite becomes visible.

Action body:

```xml
<u:RemoveHTSatellite xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <SatRoomUUID>string</SatRoomUUID>
</u:RemoveHTSatellite>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SatRoomUUID** | `string` | example: `RINCON_000RRR1400` |

**Remarks** Not all speakers support satellites or sub woofer. Multiples RINCON_* are not allowed.

### RoomDetectionStartChirping

Action body:

```xml
<u:RoomDetectionStartChirping xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Channel>ui2</Channel>
  <DurationMilliseconds>ui4</DurationMilliseconds>
  <ChirpIfPlayingSwappableAudio>boolean</ChirpIfPlayingSwappableAudio>
</u:RoomDetectionStartChirping>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Channel** | `ui2` |  |
| **DurationMilliseconds** | `ui4` |  |
| **ChirpIfPlayingSwappableAudio** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **PlayId** | `ui4` |  |

### RoomDetectionStopChirping

Action body:

```xml
<u:RoomDetectionStopChirping xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <PlayId>ui4</PlayId>
</u:RoomDetectionStopChirping>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **PlayId** | `ui4` |  |

### SeparateStereoPair

Separate a stereo pair

Action body:

```xml
<u:SeparateStereoPair xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <ChannelMapSet>string</ChannelMapSet>
</u:SeparateStereoPair>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` | example: `RINCON_B8E9375831C001400:LF,LF;RINCON_000E58FE3AEA01400:RF,RF` |

**Remarks** Not all speakers support StereoPairs

### SetAutoplayLinkedZones

Action body:

```xml
<u:SetAutoplayLinkedZones xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <IncludeLinkedZones>boolean</IncludeLinkedZones>
  <Source>string</Source>
</u:SetAutoplayLinkedZones>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **IncludeLinkedZones** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |
| **Source** | `string` |  |

### SetAutoplayRoomUUID

Action body:

```xml
<u:SetAutoplayRoomUUID xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <RoomUUID>string</RoomUUID>
  <Source>string</Source>
</u:SetAutoplayRoomUUID>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RoomUUID** | `string` |  |
| **Source** | `string` |  |

### SetAutoplayVolume

Action body:

```xml
<u:SetAutoplayVolume xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <Volume>ui2</Volume>
  <Source>string</Source>
</u:SetAutoplayVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Volume** | `ui2` |  |
| **Source** | `string` |  |

### SetButtonLockState

Set the button lock state

Action body:

```xml
<u:SetButtonLockState xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <DesiredButtonLockState>string</DesiredButtonLockState>
</u:SetButtonLockState>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredButtonLockState** | `string` |  Allowed values: `On` / `Off` |

### SetLEDState

Set the LED state

Action body:

```xml
<u:SetLEDState xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <DesiredLEDState>string</DesiredLEDState>
</u:SetLEDState>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredLEDState** | `string` |  Allowed values: `On` / `Off` |

### SetUseAutoplayVolume

Action body:

```xml
<u:SetUseAutoplayVolume xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <UseVolume>boolean</UseVolume>
  <Source>string</Source>
</u:SetUseAutoplayVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **UseVolume** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |
| **Source** | `string` |  |

### SetZoneAttributes

Action body:

```xml
<u:SetZoneAttributes xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <DesiredZoneName>string</DesiredZoneName>
  <DesiredIcon>string</DesiredIcon>
  <DesiredConfiguration>string</DesiredConfiguration>
  <DesiredTargetRoomName>string</DesiredTargetRoomName>
</u:SetZoneAttributes>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredZoneName** | `string` |  |
| **DesiredIcon** | `string` |  |
| **DesiredConfiguration** | `string` |  |
| **DesiredTargetRoomName** | `string` |  |

## Events

The DevicePropertiesService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /DeviceProperties/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AirPlayEnabled | ✔ | `boolean` |  `1` for true and `0` for false  |
| AutoplayIncludeLinkedZones |  | `boolean` |  `1` for true and `0` for false  |
| AutoplayRoomUUID |  | `string` |  |
| AutoplaySource |  | `string` |  |
| AutoplayUseVolume |  | `boolean` |  `1` for true and `0` for false  |
| AutoplayVolume |  | `ui2` |  |
| AvailableHeadphoneSessions | ✔ | `ui4` |  |
| AvailableRoomCalibration | ✔ | `string` |  |
| BehindWifiExtender | ✔ | `ui4` |  |
| ButtonLockState |  | `string` | `On` / `Off` |
| ChannelFreq | ✔ | `ui4` |  |
| ChannelMapSet | ✔ | `string` |  |
| ConfigMode | ✔ | `string` |  |
| Configuration | ✔ | `string` |  |
| ConnectionType | ✔ | `ui4` |  |
| CopyrightInfo |  | `string` |  |
| DisplaySoftwareVersion |  | `string` |  |
| EthLink | ✔ | `boolean` |  `1` for true and `0` for false  |
| ExtraInfo |  | `string` |  |
| Flags |  | `ui4` |  |
| HardwareVersion |  | `string` |  |
| HasConfiguredSSID | ✔ | `boolean` |  `1` for true and `0` for false  |
| HdmiCecAvailable | ✔ | `boolean` |  `1` for true and `0` for false  |
| HeadphoneId | ✔ | `string` |  |
| HouseholdID |  | `string` |  |
| HTAudioIn |  | `ui4` |  |
| HTBondedZoneCommitState | ✔ | `ui4` |  |
| HTFreq | ✔ | `ui4` |  |
| HTSatChanMapSet | ✔ | `string` |  |
| Icon | ✔ | `string` |  |
| Invisible | ✔ | `boolean` |  `1` for true and `0` for false  |
| IPAddress |  | `string` |  |
| IsIdle | ✔ | `boolean` |  `1` for true and `0` for false  |
| IsZoneBridge | ✔ | `boolean` |  `1` for true and `0` for false  |
| KeepGrouped |  | `boolean` |  `1` for true and `0` for false  |
| LastChangedPlayState | ✔ | `string` |  |
| LEDState |  | `string` | `On` / `Off` |
| MACAddress |  | `string` |  |
| MicEnabled | ✔ | `ui4` |  |
| MoreInfo | ✔ | `string` |  |
| Orientation | ✔ | `i4` |  |
| RoomCalibrationState | ✔ | `i4` |  |
| SatRoomUUID |  | `string` |  |
| SecureRegState | ✔ | `ui4` |  |
| SerialNumber |  | `string` |  |
| SettingsReplicationState | ✔ | `string` |  |
| SoftwareVersion |  | `string` |  |
| SupportsAudioClip | ✔ | `boolean` |  `1` for true and `0` for false  |
| SupportsAudioIn | ✔ | `boolean` |  `1` for true and `0` for false  |
| SvcActive | ✔ | `boolean` |  `1` for true and `0` for false  |
| TargetRoomName |  | `string` |  |
| TVConfigurationError | ✔ | `boolean` |  `1` for true and `0` for false  |
| VoiceConfigState | ✔ | `ui4` |  |
| WifiEnabled | ✔ | `boolean` |  `1` for true and `0` for false  |
| WirelessLeafOnly | ✔ | `boolean` |  `1` for true and `0` for false  |
| WirelessMode | ✔ | `ui4` |  |
| ZoneName | ✔ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

---

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.

| Device | Software generation | Software version | Discovery date |
|:-------|:--------------------|:-----------------|:---------------|
| `Sonos Play:1 (S1)` | S2 | 86.7-77050 | 2026-07-04T21:14:08.816Z |
| `Sonos One (S13)` | S2 | 63.2-90210 | 2021-07-21T23:31:19.273Z |
| `Sonos Beam (S14)` | S2 | 64.3-19080 | 2021-08-18T06:04:08.308Z |
| `Sonos Amp (S16)` | S2 | 79.1-53290 | 2024-11-09T18:45:16.539Z |
| `Sonos Move (S17)` | S2 | 93.1-73290 | 2026-02-09T06:10:26.755Z |
| `Sonos One (S18)` | S2 | 95.0-77060 | 2026-07-04T21:13:16.939Z |
| `SYMFONISK Bookshelf (S21)` | S2 | 66.4-23300 | 2022-01-01T11:41:01.361Z |
| `Sonos Roam (S27)` | S2 | 63.2-90210 | 2021-07-21T23:31:31.207Z |
| `Sonos Play:3 (S3)` | S2 | 64.3-19080 | 2021-08-18T06:09:36.692Z |
| `SYMFONISK Bookshelf (S33)` | S2 | 95.0-77060 | 2026-07-04T21:14:02.212Z |
| `Sonos Ray (S36)` | S2 | 95.0-77060 | 2026-07-04T21:13:47.351Z |
| `Sonos One SL (S38)` | S2 | 95.0-77060 | 2026-07-04T21:16:52.734Z |
| `Sonos Era 100 (S39)` | S2 | 79.1-53290 | 2024-11-09T18:45:10.792Z |
| `Sonos Play:5 (S6)` | S2 | 86.4-73290 | 2026-02-09T06:10:32.747Z |
| `Sonos Playbar (S9)` | S2 | 86.7-77050 | 2026-07-04T21:13:40.356Z |
| `Sonos Sub (Sub)` | S2 | 63.2-90210 | 2021-07-21T23:31:40.304Z |
