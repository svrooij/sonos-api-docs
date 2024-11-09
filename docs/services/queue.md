---
layout: default
title: Queue
parent: Sonos Services
---
# Queue service
{: .no_toc }

Modify and browse queues

The Queue service is available on these models: `Sonos Play:1 (S1) S2` / `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Amp (S16) S2` / `Sonos One (S18) S2` / `SYMFONISK Bookshelf (S21) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `SYMFONISK Bookshelf (S33) S2` / `Sonos One SL (S38) S2` / `Sonos Era 100 (S39) S2` / `Sonos Play:5 (S6) S2` / `Sonos Playbar (S9) S2` / `Sonos Sub (Sub) S2`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaRenderer/Queue/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaRenderer/Queue/Event` |
| **Discovery URL** | `http://192.168.x.x:1400/xml/Queue1.xml` |
| **Service ID** | `urn:sonos-com:serviceId:Queue` |
| **Service type** | `urn:schemas-sonos-com:service:Queue:1` |

### Sample request
{: .no_toc }

```text
POST /MediaRenderer/Queue/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-sonos-com:service:Queue:1#{ActionName}"
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

### AddMultipleURIs

Action body:

```xml
<u:AddMultipleURIs xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <UpdateID>ui4</UpdateID>
  <ContainerURI>string</ContainerURI>
  <ContainerMetaData>string</ContainerMetaData>
  <DesiredFirstTrackNumberEnqueued>ui4</DesiredFirstTrackNumberEnqueued>
  <EnqueueAsNext>boolean</EnqueueAsNext>
  <NumberOfURIs>ui4</NumberOfURIs>
  <EnqueuedURIsAndMetaData>string</EnqueuedURIsAndMetaData>
</u:AddMultipleURIs>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **UpdateID** | `ui4` |  |
| **ContainerURI** | `string` |  |
| **ContainerMetaData** | `string` |  Embedded XML |
| **DesiredFirstTrackNumberEnqueued** | `ui4` |  |
| **EnqueueAsNext** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |
| **NumberOfURIs** | `ui4` |  |
| **EnqueuedURIsAndMetaData** | `string` |  Embedded XML |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **FirstTrackNumberEnqueued** | `ui4` |  |
| **NumTracksAdded** | `ui4` |  |
| **NewQueueLength** | `ui4` |  |
| **NewUpdateID** | `ui4` |  |

### AddURI

Action body:

```xml
<u:AddURI xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <UpdateID>ui4</UpdateID>
  <EnqueuedURI>string</EnqueuedURI>
  <EnqueuedURIMetaData>string</EnqueuedURIMetaData>
  <DesiredFirstTrackNumberEnqueued>ui4</DesiredFirstTrackNumberEnqueued>
  <EnqueueAsNext>boolean</EnqueueAsNext>
</u:AddURI>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **UpdateID** | `ui4` |  |
| **EnqueuedURI** | `string` |  |
| **EnqueuedURIMetaData** | `string` |  Embedded XML |
| **DesiredFirstTrackNumberEnqueued** | `ui4` |  |
| **EnqueueAsNext** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **FirstTrackNumberEnqueued** | `ui4` |  |
| **NumTracksAdded** | `ui4` |  |
| **NewQueueLength** | `ui4` |  |
| **NewUpdateID** | `ui4` |  |

### AttachQueue

Action body:

```xml
<u:AttachQueue xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueOwnerID>string</QueueOwnerID>
</u:AttachQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueOwnerID** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **QueueOwnerContext** | `string` |  |

### Backup

Action body:

```xml
<u:Backup xmlns:u="urn:schemas-sonos-com:service:Queue:1">
</u:Backup>
```

No input arguments

### Browse

Action body:

```xml
<u:Browse xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <StartingIndex>ui4</StartingIndex>
  <RequestedCount>ui4</RequestedCount>
</u:Browse>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **StartingIndex** | `ui4` |  |
| **RequestedCount** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Result** | `string` |  |
| **NumberReturned** | `ui4` |  |
| **TotalMatches** | `ui4` |  |
| **UpdateID** | `ui4` |  |

### CreateQueue

Action body:

```xml
<u:CreateQueue xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueOwnerID>string</QueueOwnerID>
  <QueueOwnerContext>string</QueueOwnerContext>
  <QueuePolicy>string</QueuePolicy>
</u:CreateQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueOwnerID** | `string` |  |
| **QueueOwnerContext** | `string` |  |
| **QueuePolicy** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |

### RemoveAllTracks

Action body:

```xml
<u:RemoveAllTracks xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <UpdateID>ui4</UpdateID>
</u:RemoveAllTracks>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **UpdateID** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewUpdateID** | `ui4` |  |

### RemoveTrackRange

Action body:

```xml
<u:RemoveTrackRange xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <UpdateID>ui4</UpdateID>
  <StartingIndex>ui4</StartingIndex>
  <NumberOfTracks>ui4</NumberOfTracks>
</u:RemoveTrackRange>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **UpdateID** | `ui4` |  |
| **StartingIndex** | `ui4` |  |
| **NumberOfTracks** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewUpdateID** | `ui4` |  |

### ReorderTracks

Action body:

```xml
<u:ReorderTracks xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <StartingIndex>ui4</StartingIndex>
  <NumberOfTracks>ui4</NumberOfTracks>
  <InsertBefore>ui4</InsertBefore>
  <UpdateID>ui4</UpdateID>
</u:ReorderTracks>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **StartingIndex** | `ui4` |  |
| **NumberOfTracks** | `ui4` |  |
| **InsertBefore** | `ui4` |  |
| **UpdateID** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewUpdateID** | `ui4` |  |

### ReplaceAllTracks

Action body:

```xml
<u:ReplaceAllTracks xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <UpdateID>ui4</UpdateID>
  <ContainerURI>string</ContainerURI>
  <ContainerMetaData>string</ContainerMetaData>
  <CurrentTrackIndex>ui4</CurrentTrackIndex>
  <NewCurrentTrackIndices>string</NewCurrentTrackIndices>
  <NumberOfURIs>ui4</NumberOfURIs>
  <EnqueuedURIsAndMetaData>string</EnqueuedURIsAndMetaData>
</u:ReplaceAllTracks>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **UpdateID** | `ui4` |  |
| **ContainerURI** | `string` |  |
| **ContainerMetaData** | `string` |  Embedded XML |
| **CurrentTrackIndex** | `ui4` |  |
| **NewCurrentTrackIndices** | `string` |  |
| **NumberOfURIs** | `ui4` |  |
| **EnqueuedURIsAndMetaData** | `string` |  Embedded XML |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewQueueLength** | `ui4` |  |
| **NewUpdateID** | `ui4` |  |

### SaveAsSonosPlaylist

Action body:

```xml
<u:SaveAsSonosPlaylist xmlns:u="urn:schemas-sonos-com:service:Queue:1">
  <QueueID>ui4</QueueID>
  <Title>string</Title>
  <ObjectID>string</ObjectID>
</u:SaveAsSonosPlaylist>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueID** | `ui4` |  |
| **Title** | `string` |  |
| **ObjectID** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AssignedObjectID** | `string` |  |

## Events

The QueueService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /MediaRenderer/Queue/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| Curated |  | `boolean` |  `1` for true and `0` for false  |
| LastChange | ✔ | `string` |  |
| UpdateID |  | `ui4` |  |

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
