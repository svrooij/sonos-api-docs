---
layout: default
title: ZoneGroupTopologyService
parent: Sonos UPNP
---
# ZoneGroupTopologyService
{: .no_toc }

Zone config stuff, eg getting all the configured sonos zones.

The ZoneGroupTopologyService is available on these models: `v1-S1` / `v1-S5` / `v1-S9`.

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
SOAP-Action: "urn:schemas-upnp-org:service:ZoneGroupTopology:1#{ActionName}"
Content-Type: text/xml; charset=utf8

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
| **CachedOnly** | `boolean` |  |
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
| **ZoneGroupState** | `string` |  |

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
| **IncludeControllers** | `boolean` |  |
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
| DiagnosticID | ❌ | `ui4` |  |
| MuseHouseholdId | ✔ | `string` |  |
| NetsettingsUpdateID | ✔ | `string` |  |
| SourceAreasUpdateID | ✔ | `string` |  |
| ThirdPartyMediaServersX | ✔ | `string` |  |
| ZoneGroupID | ✔ | `string` |  |
| ZoneGroupName | ✔ | `string` |  |
| ZoneGroupState | ✔ | `string` |  |
| ZonePlayerUUIDsInGroup | ✔ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. A `❌` doesn't mean that is won't emit events.

---

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
