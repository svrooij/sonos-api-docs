---
layout: default
title: ZoneGroupTopologyService
parent: Sonos UPNP
---
# ZoneGroupTopologyService
{: .no_toc }

Zone config stuff, eg getting all the configured sonos zones

The ZoneGroupTopologyService is available on these models: `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `Sonos Play:5 (S6) S2` / `Sonos Sub (Sub) S2` / `Sonos Play:1 (S1) S1` / `Sonos Play:5 (S5) S1` / `Sonos Playbar (S9) S1`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/ZoneGroupTopology/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/ZoneGroupTopology/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/ZoneGroupTopology1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:ZoneGroupTopology` |
| **Service type** | `urn:schemas-upnp-org:service:ZoneGroupTopology:1` |

### Sample request
{: .no_toc }

```http
POST /ZoneGroupTopology/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:ZoneGroupTopology:1#{ActionName}"
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

### BeginSoftwareUpdate

Action body:

```xml
<u:BeginSoftwareUpdate xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
  <UpdateURL>string</UpdateURL>
  <Flags>ui4</Flags>
  <ExtraOptions>string</ExtraOptions>
</u:BeginSoftwareUpdate>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **UpdateURL** | `string` |  |
| **Flags** | `ui4` |  |
| **ExtraOptions** | `string` |  |

### CheckForUpdate

Action body:

```xml
<u:CheckForUpdate xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
  <UpdateType>string</UpdateType>
  <CachedOnly>boolean</CachedOnly>
  <Version>string</Version>
</u:CheckForUpdate>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **UpdateType** | `string` |  Allowed values: `All` / `Software` |
| **CachedOnly** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |
| **Version** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **UpdateItem** | `string` |  |

### GetZoneGroupAttributes

Get information about the current Zone

Action body:

```xml
<u:GetZoneGroupAttributes xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
</u:GetZoneGroupAttributes>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentZoneGroupName** | `string` |  |
| **CurrentZoneGroupID** | `string` |  |
| **CurrentZonePlayerUUIDsInGroup** | `string` |  |
| **CurrentMuseHouseholdId** | `string` |  |

### GetZoneGroupState

Get all the Sonos groups, (as XML)

Action body:

```xml
<u:GetZoneGroupState xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
</u:GetZoneGroupState>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ZoneGroupState** | `string` | xml string, see remarks |

**Remarks** Some libraries also support GetParsedZoneGroupState that parses the xml for you.

### RegisterMobileDevice

Action body:

```xml
<u:RegisterMobileDevice xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
  <MobileDeviceName>string</MobileDeviceName>
  <MobileDeviceUDN>string</MobileDeviceUDN>
  <MobileIPAndPort>string</MobileIPAndPort>
</u:RegisterMobileDevice>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **MobileDeviceName** | `string` |  |
| **MobileDeviceUDN** | `string` |  |
| **MobileIPAndPort** | `string` |  |

### ReportAlarmStartedRunning

Action body:

```xml
<u:ReportAlarmStartedRunning xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
</u:ReportAlarmStartedRunning>
```

No input arguments

### ReportUnresponsiveDevice

Action body:

```xml
<u:ReportUnresponsiveDevice xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
  <DeviceUUID>string</DeviceUUID>
  <DesiredAction>string</DesiredAction>
</u:ReportUnresponsiveDevice>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DeviceUUID** | `string` |  |
| **DesiredAction** | `string` |  Allowed values: `Remove` / `TopologyMonitorProbe` / `VerifyThenRemoveSystemwide` |

### SubmitDiagnostics

Action body:

```xml
<u:SubmitDiagnostics xmlns:u="urn:schemas-upnp-org:service:ZoneGroupTopology:1">
  <IncludeControllers>boolean</IncludeControllers>
  <Type>string</Type>
</u:SubmitDiagnostics>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **IncludeControllers** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |
| **Type** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DiagnosticID** | `ui4` |  |

## Events

The ZoneGroupTopologyService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```http
SUBSCRIBE /ZoneGroupTopology/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AlarmRunSequence | ✔ | `string` |  |
| AreasUpdateID | ✔ | `string` |  |
| AvailableSoftwareUpdate | ✔ | `string` |  |
| DiagnosticID |  | `ui4` |  |
| MuseHouseholdId | ✔ | `string` |  |
| NetsettingsUpdateID | ✔ | `string` |  |
| SourceAreasUpdateID | ✔ | `string` |  |
| ThirdPartyMediaServersX | ✔ | `string` |  |
| ZoneGroupID | ✔ | `string` |  |
| ZoneGroupName | ✔ | `string` |  |
| ZoneGroupState | ✔ | `string` |  |
| ZonePlayerUUIDsInGroup | ✔ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

---

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.

| Device | Software generation | Software version | Discovery date |
|:-------|:--------------------|:-----------------|:---------------|
| `Sonos One (S13)` | S2 | 63.2-90210 | 2021-07-21T23:31:19.273Z |
| `Sonos Beam (S14)` | S2 | 64.3-19080 | 2021-08-18T06:04:08.308Z |
| `Sonos Roam (S27)` | S2 | 63.2-90210 | 2021-07-21T23:31:31.207Z |
| `Sonos Play:3 (S3)` | S2 | 64.3-19080 | 2021-08-18T06:09:36.692Z |
| `Sonos Play:5 (S6)` | S2 | 64.3-19080 | 2021-08-18T06:06:35.970Z |
| `Sonos Sub (Sub)` | S2 | 63.2-90210 | 2021-07-21T23:31:40.304Z |
| `Sonos Play:1 (S1)` | S1 | 57.6-88280 | 2021-07-21T14:51:41.469Z |
| `Sonos Play:5 (S5)` | S1 | 57.6-88280 | 2021-07-21T14:51:44.187Z |
| `Sonos Playbar (S9)` | S1 | 57.6-88280 | 2021-07-21T14:51:47.050Z |
