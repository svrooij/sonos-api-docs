---
layout: default
title: GroupRenderingControlService
parent: Sonos UPNP
---
# GroupRenderingControlService
{: .no_toc }

Volume related controls for groups. Group volume is the average volume of all players. Snapshot stores the volume ratio between players.

The GroupRenderingControlService is available on these models: `v1-S1` `v1-S5` `v1-S9` .

1. TOC
{:toc}

---


## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaRenderer/GroupRenderingControl/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaRenderer/GroupRenderingControl/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/GroupRenderingControl1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:GroupRenderingControl` |
| **Service type** | `urn:schemas-upnp-org:service:GroupRenderingControl:1` |

### Sample request
{: .no_toc }

```http
POST /MediaRenderer/GroupRenderingControl/Control
Host: 192.168.x.x:1400
SOAP-Action: "urn:schemas-upnp-org:service:GroupRenderingControl:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

### GetGroupMute

Get 1 for muted, 0 for un-muted

Action body:

```xml
<u:GetGroupMute xmlns:u="urn:schemas-upnp-org:service:GroupRenderingControl:1">
  <InstanceID>ui4</InstanceID>
</u:GetGroupMute>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentMute** | `boolean` |  |

**Remarks** Send to non-coordinator returns error code 701

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
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **DesiredMute** | `boolean` | True for mute, false for un-mute |

**Remarks** Send to non-coordinator returns error code 701

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
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `ui2` |  |

**Remarks** Send to non-coordinator returns error code 701

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
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **DesiredVolume** | `ui2` | New volume between 0 and 100 |

**Remarks** Send to non-coordinator returns error code 701

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
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Adjustment** | `i4` | Number between -100 and +100 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewVolume** | `ui2` |  |

**Remarks** Send to non-coordinator returns error code 701

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
| **InstanceID** | `ui4` | InstanceID should always be 0 |

**Remarks** Send to non-coordinator returns error code 701

## Events

The GroupRenderingControlService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```http
SUBSCRIBE /MediaRenderer/GroupRenderingControl/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| GroupMute | ✔ | `boolean` |  |
| GroupVolume | ✔ | `ui2` |  |
| GroupVolumeChangeable | ✔ | `boolean` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. A `❌` doesn't mean that is won't emit events.

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
