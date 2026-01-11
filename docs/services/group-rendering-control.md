---
layout: default
title: GroupRenderingControl
parent: Sonos Services
---
# GroupRenderingControl service
{: .no_toc }

Volume related controls for groups

The GroupRenderingControl service is available on these models: `Sonos Play:1 (S1) S2` / `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Amp (S16) S2` / `Sonos One (S18) S2` / `SYMFONISK Bookshelf (S21) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `SYMFONISK Bookshelf (S33) S2` / `Sonos One SL (S38) S2` / `Sonos Era 100 (S39) S2` / `Sonos Play:5 (S6) S2` / `Sonos Playbar (S9) S2` / `Sonos Sub (Sub) S2`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaRenderer/GroupRenderingControl/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaRenderer/GroupRenderingControl/Event` |
| **Discovery URL** | `http://192.168.x.x:1400/xml/GroupRenderingControl1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:GroupRenderingControl` |
| **Service type** | `urn:schemas-upnp-org:service:GroupRenderingControl:1` |

### Sample request
{: .no_toc }

```text
POST /MediaRenderer/GroupRenderingControl/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:GroupRenderingControl:1#{ActionName}"
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

### GetGroupMute

Get the group mute state.

Action body:

```xml
<u:GetGroupMute xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetGroupMute>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentMute** | `boolean` |  `1` for true and `0` for false  |

**Remarks** Should be send to coordinator only

### GetGroupVolume

Get the group volume.

Action body:

```xml
<u:GetGroupVolume xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetGroupVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `ui2` |  |

**Remarks** Should be send to coordinator only

### SetGroupMute

(Un-/)Mute the entire group

Action body:

```xml
<u:SetGroupMute xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <DesiredMute>boolean</DesiredMute>
</u:SetGroupMute>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **DesiredMute** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

**Remarks** Should be send to coordinator only

### SetGroupVolume

Change group volume. Players volume will be changed proportionally based on last snapshot

Action body:

```xml
<u:SetGroupVolume xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <DesiredVolume>ui2</DesiredVolume>
</u:SetGroupVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **DesiredVolume** | `ui2` | New volume between 0 and 100 |

**Remarks** Should be send to coordinator only

### SetRelativeGroupVolume

Relatively change group volume - returns final group volume. Players volume will be changed proportionally based on last snapshot

Action body:

```xml
<u:SetRelativeGroupVolume xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
  <Adjustment>i4</Adjustment>
</u:SetRelativeGroupVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |
| **Adjustment** | `i4` | Number between -100 and +100 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewVolume** | `ui2` |  |

**Remarks** Should be send to coordinator only

### SnapshotGroupVolume

Creates a new group volume snapshot,  the volume ratio between all players. It is used by SetGroupVolume and SetRelativeGroupVolume

Action body:

```xml
<u:SnapshotGroupVolume xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:SnapshotGroupVolume>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be `0` |

**Remarks** Should be send to coordinator only

## Events

The GroupRenderingControlService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /MediaRenderer/GroupRenderingControl/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| GroupMute | ✔ | `boolean` |  `1` for true and `0` for false  |
| GroupVolume | ✔ | `ui2` |  |
| GroupVolumeChangeable | ✔ | `boolean` |  `1` for true and `0` for false  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

## Custom errors

The GroupRenderingControlService has the following known custom errors.

| Error code | Description |
|:-----------|:------------|
| `701` | Player isn't the coordinator |

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
