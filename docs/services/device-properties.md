---
layout: default
title: DevicePropertiesService
parent: Sonos UPNP
---
# DevicePropertiesService
{: .no_toc }

Modify device properties, like led status and stereo pairs -

The DevicePropertiesService is available on these models: `v1-S1` `v1-S5` `v1-S9` .

1. TOC
{:toc}

---


## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/DeviceProperties/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/DeviceProperties/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/DeviceProperties1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:DeviceProperties` |
| **Service type** | `urn:schemas-upnp-org:service:DeviceProperties:1` |

### Sample request
{: .no_toc }

```http
POST /DeviceProperties/Control
Host: 192.168.x.x:1400
SOAP-Action: "urn:schemas-upnp-org:service:DeviceProperties:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

### SetLEDState

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

### GetLEDState

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
| **KeepGrouped** | `boolean` |  |

### CreateStereoPair

Create a stereo pair (left, right speakers), right one becomes hidden - only supported by some players

Action body:

```xml
<u:CreateStereoPair xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <ChannelMapSet>string</ChannelMapSet>
</u:CreateStereoPair>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` | example: RINCON_B8E9375831C001400:LF,LF;RINCON_000E58FE3AEA01400:RF,RF |

### SeparateStereoPair

Separate a stereo pair - only supported by some players

Action body:

```xml
<u:SeparateStereoPair xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <ChannelMapSet>string</ChannelMapSet>
</u:SeparateStereoPair>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` | example: RINCON_B8E9375831C001400:LF,LF;RINCON_000E58FE3AEA01400:RF,RF |

### SetZoneAttributes

Action body:

```xml
<u:SetZoneAttributes xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <DesiredZoneName>string</DesiredZoneName>
  <DesiredIcon>string</DesiredIcon>
  <DesiredConfiguration>string</DesiredConfiguration>
</u:SetZoneAttributes>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredZoneName** | `string` |  |
| **DesiredIcon** | `string` |  |
| **DesiredConfiguration** | `string` |  |

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

### GetZoneInfo

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
| **HTAudioIn** | `ui4` |  |
| **Flags** | `ui4` |  |

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
| **IncludeLinkedZones** | `boolean` |  |
| **Source** | `string` |  |

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
| **IncludeLinkedZones** | `boolean` |  |

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
| **UseVolume** | `boolean` |  |
| **Source** | `string` |  |

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
| **UseVolume** | `boolean` |  |

### AddHTSatellite

Action body:

```xml
<u:AddHTSatellite xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <HTSatChanMapSet>string</HTSatChanMapSet>
</u:AddHTSatellite>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **HTSatChanMapSet** | `string` |  |

### RemoveHTSatellite

Action body:

```xml
<u:RemoveHTSatellite xmlns:u="urn:schemas-upnp-org:service:DeviceProperties:1">
  <SatRoomUUID>string</SatRoomUUID>
</u:RemoveHTSatellite>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SatRoomUUID** | `string` |  |

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

### SetButtonLockState

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

### GetButtonLockState

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

## Events

The DevicePropertiesService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```http
SUBSCRIBE /DeviceProperties/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AirPlayEnabled | ✔ | `boolean` |  | 
| AutoplayIncludeLinkedZones | ❌ | `boolean` |  | 
| AutoplayRoomUUID | ❌ | `string` |  | 
| AutoplaySource | ❌ | `string` |  | 
| AutoplayUseVolume | ❌ | `boolean` |  | 
| AutoplayVolume | ❌ | `ui2` |  | 
| AvailableRoomCalibration | ✔ | `string` |  | 
| BehindWifiExtender | ✔ | `ui4` |  | 
| ButtonLockState | ❌ | `string` | `On` / `Off` | 
| ChannelFreq | ✔ | `ui4` |  | 
| ChannelMapSet | ✔ | `string` |  | 
| ConfigMode | ✔ | `string` |  | 
| Configuration | ✔ | `string` |  | 
| CopyrightInfo | ❌ | `string` |  | 
| DisplaySoftwareVersion | ❌ | `string` |  | 
| ExtraInfo | ❌ | `string` |  | 
| Flags | ❌ | `ui4` |  | 
| HardwareVersion | ❌ | `string` |  | 
| HasConfiguredSSID | ✔ | `boolean` |  | 
| HdmiCecAvailable | ✔ | `boolean` |  | 
| HouseholdID | ❌ | `string` |  | 
| HTAudioIn | ❌ | `ui4` |  | 
| HTBondedZoneCommitState | ✔ | `ui4` |  | 
| HTFreq | ✔ | `ui4` |  | 
| HTSatChanMapSet | ✔ | `string` |  | 
| Icon | ✔ | `string` |  | 
| Invisible | ✔ | `boolean` |  | 
| IPAddress | ❌ | `string` |  | 
| IsIdle | ✔ | `boolean` |  | 
| IsZoneBridge | ✔ | `boolean` |  | 
| KeepGrouped | ❌ | `boolean` |  | 
| LastChangedPlayState | ✔ | `string` |  | 
| LEDState | ❌ | `string` | `On` / `Off` | 
| MACAddress | ❌ | `string` |  | 
| MicEnabled | ✔ | `ui4` |  | 
| MoreInfo | ✔ | `string` |  | 
| Orientation | ✔ | `i4` |  | 
| RoomCalibrationState | ✔ | `i4` |  | 
| SatRoomUUID | ❌ | `string` |  | 
| SecureRegState | ✔ | `ui4` |  | 
| SerialNumber | ❌ | `string` |  | 
| SettingsReplicationState | ✔ | `string` |  | 
| SoftwareVersion | ❌ | `string` |  | 
| SupportsAudioClip | ✔ | `boolean` |  | 
| SupportsAudioIn | ✔ | `boolean` |  | 
| TVConfigurationError | ✔ | `boolean` |  | 
| VoiceConfigState | ✔ | `ui4` |  | 
| WifiEnabled | ✔ | `boolean` |  | 
| WirelessLeafOnly | ✔ | `boolean` |  | 
| WirelessMode | ✔ | `ui4` |  | 
| ZoneName | ✔ | `string` |  | 

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. A `❌` doesn't mean that is won't emit events.

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
