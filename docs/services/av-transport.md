---
layout: default
title: AVTransportService
parent: Sonos UPNP
---
# AVTransportService
{: .no_toc }

Service that controls stuff related to transport (play/pause/next/special urls)

The AVTransportService is available on these models: `v1-S1` / `v1-S5` / `v1-S9`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaRenderer/AVTransport/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaRenderer/AVTransport/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/AVTransport1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:AVTransport` |
| **Service type** | `urn:schemas-upnp-org:service:AVTransport:1` |

### Sample request
{: .no_toc }

```http
POST /MediaRenderer/AVTransport/Control
Host: 192.168.x.x:1400
SOAP-Action: "urn:schemas-upnp-org:service:AVTransport:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

### AddMultipleURIsToQueue

Action body:

```xml
<u:AddMultipleURIsToQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <UpdateID>ui4</UpdateID>
  <NumberOfURIs>ui4</NumberOfURIs>
  <EnqueuedURIs>string</EnqueuedURIs>
  <EnqueuedURIsMetaData>string</EnqueuedURIsMetaData>
  <ContainerURI>string</ContainerURI>
  <ContainerMetaData>string</ContainerMetaData>
  <DesiredFirstTrackNumberEnqueued>ui4</DesiredFirstTrackNumberEnqueued>
  <EnqueueAsNext>boolean</EnqueueAsNext>
</u:AddMultipleURIsToQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **UpdateID** | `ui4` |  |
| **NumberOfURIs** | `ui4` |  |
| **EnqueuedURIs** | `string` |  |
| **EnqueuedURIsMetaData** | `string` |  |
| **ContainerURI** | `string` |  |
| **ContainerMetaData** | `string` |  |
| **DesiredFirstTrackNumberEnqueued** | `ui4` |  |
| **EnqueueAsNext** | `boolean` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **FirstTrackNumberEnqueued** | `ui4` |  |
| **NumTracksAdded** | `ui4` |  |
| **NewQueueLength** | `ui4` |  |
| **NewUpdateID** | `ui4` |  |

### AddURIToQueue

Action body:

```xml
<u:AddURIToQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <EnqueuedURI>string</EnqueuedURI>
  <EnqueuedURIMetaData>string</EnqueuedURIMetaData>
  <DesiredFirstTrackNumberEnqueued>ui4</DesiredFirstTrackNumberEnqueued>
  <EnqueueAsNext>boolean</EnqueueAsNext>
</u:AddURIToQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **EnqueuedURI** | `string` |  |
| **EnqueuedURIMetaData** | `string` |  |
| **DesiredFirstTrackNumberEnqueued** | `ui4` |  |
| **EnqueueAsNext** | `boolean` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **FirstTrackNumberEnqueued** | `ui4` |  |
| **NumTracksAdded** | `ui4` |  |
| **NewQueueLength** | `ui4` |  |

### AddURIToSavedQueue

Action body:

```xml
<u:AddURIToSavedQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <ObjectID>string</ObjectID>
  <UpdateID>ui4</UpdateID>
  <EnqueuedURI>string</EnqueuedURI>
  <EnqueuedURIMetaData>string</EnqueuedURIMetaData>
  <AddAtIndex>ui4</AddAtIndex>
</u:AddURIToSavedQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **ObjectID** | `string` |  |
| **UpdateID** | `ui4` |  |
| **EnqueuedURI** | `string` |  |
| **EnqueuedURIMetaData** | `string` |  |
| **AddAtIndex** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NumTracksAdded** | `ui4` |  |
| **NewQueueLength** | `ui4` |  |
| **NewUpdateID** | `ui4` |  |

### BackupQueue

Action body:

```xml
<u:BackupQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:BackupQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

### BecomeCoordinatorOfStandaloneGroup

Leave the current group and revert to a single player.

Action body:

```xml
<u:BecomeCoordinatorOfStandaloneGroup xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:BecomeCoordinatorOfStandaloneGroup>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DelegatedGroupCoordinatorID** | `string` |  |
| **NewGroupID** | `string` |  |

### BecomeGroupCoordinator

Action body:

```xml
<u:BecomeGroupCoordinator xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <CurrentCoordinator>string</CurrentCoordinator>
  <CurrentGroupID>string</CurrentGroupID>
  <OtherMembers>string</OtherMembers>
  <TransportSettings>string</TransportSettings>
  <CurrentURI>string</CurrentURI>
  <CurrentURIMetaData>string</CurrentURIMetaData>
  <SleepTimerState>string</SleepTimerState>
  <AlarmState>string</AlarmState>
  <StreamRestartState>string</StreamRestartState>
  <CurrentQueueTrackList>string</CurrentQueueTrackList>
  <CurrentVLIState>string</CurrentVLIState>
</u:BecomeGroupCoordinator>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **CurrentCoordinator** | `string` |  |
| **CurrentGroupID** | `string` |  |
| **OtherMembers** | `string` |  |
| **TransportSettings** | `string` |  |
| **CurrentURI** | `string` |  |
| **CurrentURIMetaData** | `string` |  |
| **SleepTimerState** | `string` |  |
| **AlarmState** | `string` |  |
| **StreamRestartState** | `string` |  |
| **CurrentQueueTrackList** | `string` |  |
| **CurrentVLIState** | `string` |  |

### BecomeGroupCoordinatorAndSource

Action body:

```xml
<u:BecomeGroupCoordinatorAndSource xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <CurrentCoordinator>string</CurrentCoordinator>
  <CurrentGroupID>string</CurrentGroupID>
  <OtherMembers>string</OtherMembers>
  <CurrentURI>string</CurrentURI>
  <CurrentURIMetaData>string</CurrentURIMetaData>
  <SleepTimerState>string</SleepTimerState>
  <AlarmState>string</AlarmState>
  <StreamRestartState>string</StreamRestartState>
  <CurrentAVTTrackList>string</CurrentAVTTrackList>
  <CurrentQueueTrackList>string</CurrentQueueTrackList>
  <CurrentSourceState>string</CurrentSourceState>
  <ResumePlayback>boolean</ResumePlayback>
</u:BecomeGroupCoordinatorAndSource>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **CurrentCoordinator** | `string` |  |
| **CurrentGroupID** | `string` |  |
| **OtherMembers** | `string` |  |
| **CurrentURI** | `string` |  |
| **CurrentURIMetaData** | `string` |  |
| **SleepTimerState** | `string` |  |
| **AlarmState** | `string` |  |
| **StreamRestartState** | `string` |  |
| **CurrentAVTTrackList** | `string` |  |
| **CurrentQueueTrackList** | `string` |  |
| **CurrentSourceState** | `string` |  |
| **ResumePlayback** | `boolean` |  |

### ChangeCoordinator

Action body:

```xml
<u:ChangeCoordinator xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <CurrentCoordinator>string</CurrentCoordinator>
  <NewCoordinator>string</NewCoordinator>
  <NewTransportSettings>string</NewTransportSettings>
  <CurrentAVTransportURI>string</CurrentAVTransportURI>
</u:ChangeCoordinator>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **CurrentCoordinator** | `string` |  |
| **NewCoordinator** | `string` |  |
| **NewTransportSettings** | `string` |  |
| **CurrentAVTransportURI** | `string` |  |

### ChangeTransportSettings

Action body:

```xml
<u:ChangeTransportSettings xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <NewTransportSettings>string</NewTransportSettings>
  <CurrentAVTransportURI>string</CurrentAVTransportURI>
</u:ChangeTransportSettings>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **NewTransportSettings** | `string` |  |
| **CurrentAVTransportURI** | `string` |  |

### ConfigureSleepTimer

Stop playing after set sleep timer

Action body:

```xml
<u:ConfigureSleepTimer xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <NewSleepTimerDuration>string</NewSleepTimerDuration>
</u:ConfigureSleepTimer>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **NewSleepTimerDuration** | `string` | Time to stop after, as hh:mm:ss |

**Remarks** Send to non-coordinator returns error code 800

### CreateSavedQueue

Action body:

```xml
<u:CreateSavedQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <Title>string</Title>
  <EnqueuedURI>string</EnqueuedURI>
  <EnqueuedURIMetaData>string</EnqueuedURIMetaData>
</u:CreateSavedQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Title** | `string` |  |
| **EnqueuedURI** | `string` |  |
| **EnqueuedURIMetaData** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NumTracksAdded** | `ui4` |  |
| **NewQueueLength** | `ui4` |  |
| **AssignedObjectID** | `string` |  |
| **NewUpdateID** | `ui4` |  |

### DelegateGroupCoordinationTo

Delegates the coordinator role to another player in the same group

Action body:

```xml
<u:DelegateGroupCoordinationTo xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <NewCoordinator>string</NewCoordinator>
  <RejoinGroup>boolean</RejoinGroup>
</u:DelegateGroupCoordinationTo>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **NewCoordinator** | `string` | uuid of the new coordinator - must be in same group |
| **RejoinGroup** | `boolean` | Should former coordinator rejoin the group? |

**Remarks** Send to non-coordinator has no results - should be avoided.

### EndDirectControlSession

Action body:

```xml
<u:EndDirectControlSession xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:EndDirectControlSession>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

### GetCrossfadeMode

Get crossfade mode, 1 for on, 0 for off

Action body:

```xml
<u:GetCrossfadeMode xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetCrossfadeMode>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CrossfadeMode** | `boolean` |  |

**Remarks** Send to non-coordinator may return wrong value as only the coordinator value in a group

### GetCurrentTransportActions

Get current transport actions such as Set, Stop, Pause, Play, X_DLNA_SeekTime, Next, X_DLNA_SeekTrackNr

Action body:

```xml
<u:GetCurrentTransportActions xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetCurrentTransportActions>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Actions** | `string` |  |

**Remarks** Send to non-coordinator always returns Stop, Play

### GetDeviceCapabilities

Action body:

```xml
<u:GetDeviceCapabilities xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetDeviceCapabilities>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **PlayMedia** | `string` |  |
| **RecMedia** | `string` |  |
| **RecQualityModes** | `string` |  |

### GetMediaInfo

Get information about the current playing media (queue)

Action body:

```xml
<u:GetMediaInfo xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetMediaInfo>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NrTracks** | `ui4` |  |
| **MediaDuration** | `string` |  |
| **CurrentURI** | `string` |  |
| **CurrentURIMetaData** | `string` |  |
| **NextURI** | `string` |  |
| **NextURIMetaData** | `string` |  |
| **PlayMedium** | `string` |  Possible values: `NONE` / `NETWORK` |
| **RecordMedium** | `string` |  Possible values:  |
| **WriteStatus** | `string` |  |

### GetPositionInfo

Get information about current position (position in queue and time in current song)

Action body:

```xml
<u:GetPositionInfo xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetPositionInfo>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Track** | `ui4` |  |
| **TrackDuration** | `string` |  |
| **TrackMetaData** | `string` |  |
| **TrackURI** | `string` |  |
| **RelTime** | `string` |  |
| **AbsTime** | `string` |  |
| **RelCount** | `i4` |  |
| **AbsCount** | `i4` |  |

### GetRemainingSleepTimerDuration

Get time left on sleeptimer or empty string

Action body:

```xml
<u:GetRemainingSleepTimerDuration xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetRemainingSleepTimerDuration>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RemainingSleepTimerDuration** | `string` |  |
| **CurrentSleepTimerGeneration** | `ui4` |  |

**Remarks** Send to non-coordinator returns error code 800

### GetRunningAlarmProperties

Action body:

```xml
<u:GetRunningAlarmProperties xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetRunningAlarmProperties>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AlarmID** | `ui4` |  |
| **GroupID** | `string` |  |
| **LoggedStartTime** | `string` |  |

### GetTransportInfo

Get current transport status, speed and state such as PLAYING, STOPPED, PLAYING, PAUSED_PLAYBACK, TRANSITIONING, NO_MEDIA_PRESENT

Action body:

```xml
<u:GetTransportInfo xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetTransportInfo>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentTransportState** | `string` |  Possible values: `STOPPED` / `PLAYING` / `PAUSED_PLAYBACK` / `TRANSITIONING` |
| **CurrentTransportStatus** | `string` |  |
| **CurrentSpeed** | `string` |  Possible values:  |

**Remarks** Send to non-coordinator always returns PLAYING

### GetTransportSettings

Get transport settings

Action body:

```xml
<u:GetTransportSettings xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:GetTransportSettings>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **PlayMode** | `string` |  Possible values: `NORMAL` / `REPEAT_ALL` / `REPEAT_ONE` / `SHUFFLE_NOREPEAT` / `SHUFFLE` / `SHUFFLE_REPEAT_ONE` |
| **RecQualityMode** | `string` |  |

**Remarks** Send to non-coordinator returns the settings of it&#x27;s queue

### Next

Go to next song, not always supported - see GetCurrentTransportActions

Action body:

```xml
<u:Next xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:Next>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

### NotifyDeletedURI

Action body:

```xml
<u:NotifyDeletedURI xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <DeletedURI>string</DeletedURI>
</u:NotifyDeletedURI>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **DeletedURI** | `string` |  |

### Pause

Pause playback

Action body:

```xml
<u:Pause xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:Pause>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

### Play

Start playing the set TransportURI

Action body:

```xml
<u:Play xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <Speed>string</Speed>
</u:Play>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Speed** | `string` | Play speed usually 1, can be a fraction of 1 Allowed values:  |

### Previous

Go to previous song, not always supported - GetCurrentTransportActions

Action body:

```xml
<u:Previous xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:Previous>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

### RemoveAllTracksFromQueue

Flushes the SONOS queue. If queue is already empty it throw error 804

Action body:

```xml
<u:RemoveAllTracksFromQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:RemoveAllTracksFromQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

**Remarks** Send to non-coordinator returns error code 800.

### RemoveTrackFromQueue

Action body:

```xml
<u:RemoveTrackFromQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <ObjectID>string</ObjectID>
  <UpdateID>ui4</UpdateID>
</u:RemoveTrackFromQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **ObjectID** | `string` |  |
| **UpdateID** | `ui4` |  |

### RemoveTrackRangeFromQueue

Action body:

```xml
<u:RemoveTrackRangeFromQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <UpdateID>ui4</UpdateID>
  <StartingIndex>ui4</StartingIndex>
  <NumberOfTracks>ui4</NumberOfTracks>
</u:RemoveTrackRangeFromQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **UpdateID** | `ui4` |  |
| **StartingIndex** | `ui4` |  |
| **NumberOfTracks** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewUpdateID** | `ui4` |  |

### ReorderTracksInQueue

Action body:

```xml
<u:ReorderTracksInQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <StartingIndex>ui4</StartingIndex>
  <NumberOfTracks>ui4</NumberOfTracks>
  <InsertBefore>ui4</InsertBefore>
  <UpdateID>ui4</UpdateID>
</u:ReorderTracksInQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **StartingIndex** | `ui4` |  |
| **NumberOfTracks** | `ui4` |  |
| **InsertBefore** | `ui4` |  |
| **UpdateID** | `ui4` |  |

### ReorderTracksInSavedQueue

Action body:

```xml
<u:ReorderTracksInSavedQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <ObjectID>string</ObjectID>
  <UpdateID>ui4</UpdateID>
  <TrackList>string</TrackList>
  <NewPositionList>string</NewPositionList>
</u:ReorderTracksInSavedQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **ObjectID** | `string` |  |
| **UpdateID** | `ui4` |  |
| **TrackList** | `string` |  |
| **NewPositionList** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **QueueLengthChange** | `i4` |  |
| **NewQueueLength** | `ui4` |  |
| **NewUpdateID** | `ui4` |  |

### RunAlarm

Action body:

```xml
<u:RunAlarm xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <AlarmID>ui4</AlarmID>
  <LoggedStartTime>string</LoggedStartTime>
  <Duration>string</Duration>
  <ProgramURI>string</ProgramURI>
  <ProgramMetaData>string</ProgramMetaData>
  <PlayMode>string</PlayMode>
  <Volume>ui2</Volume>
  <IncludeLinkedZones>boolean</IncludeLinkedZones>
</u:RunAlarm>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **AlarmID** | `ui4` |  |
| **LoggedStartTime** | `string` |  |
| **Duration** | `string` |  |
| **ProgramURI** | `string` |  |
| **ProgramMetaData** | `string` |  |
| **PlayMode** | `string` |  Allowed values: `NORMAL` / `REPEAT_ALL` / `REPEAT_ONE` / `SHUFFLE_NOREPEAT` / `SHUFFLE` / `SHUFFLE_REPEAT_ONE` |
| **Volume** | `ui2` |  |
| **IncludeLinkedZones** | `boolean` |  |

### SaveQueue

Saves the current SONOS queue as a SONOS playlist and outputs objectID

Action body:

```xml
<u:SaveQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <Title>string</Title>
  <ObjectID>string</ObjectID>
</u:SaveQueue>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Title** | `string` | SONOS playlist title |
| **ObjectID** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AssignedObjectID** | `string` |  |

**Remarks** Send to non-coordinator returns error code 800

### Seek

Seek track in queue, time delta or absolute time in song, not always supported - see GetCurrentTransportActions

Action body:

```xml
<u:Seek xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <Unit>string</Unit>
  <Target>string</Target>
</u:Seek>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Unit** | `string` | What to seek Allowed values: `TRACK_NR` / `REL_TIME` / `TIME_DELTA` |
| **Target** | `string` | Position of track in queue (start at 1) or hh:mm:ss for REL_TIME or +/-hh:mm:ss for TIME_DELTA |

**Remarks** Returns error code 701 in case that content does not support Seek or send to non-coordinator

### SetAVTransportURI

Set the transport URI to a song, a stream, the queue, another player-rincon and a lot more

Action body:

```xml
<u:SetAVTransportURI xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <CurrentURI>string</CurrentURI>
  <CurrentURIMetaData>string</CurrentURIMetaData>
</u:SetAVTransportURI>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **CurrentURI** | `string` | The new TransportURI - its a special SONOS format |
| **CurrentURIMetaData** | `string` | Track Metadata, see MetadataHelper.GuessTrack to guess based on track uri |

**Remarks** If set to another player RINCON, the player is grouped with that one.

### SetCrossfadeMode

Set crossfade mode off

Action body:

```xml
<u:SetCrossfadeMode xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <CrossfadeMode>boolean</CrossfadeMode>
</u:SetCrossfadeMode>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **CrossfadeMode** | `boolean` | true for on, false for off |

**Remarks** Send to non-coordinator returns error code 800. Same for content, which does not support crossfade mode.

### SetNextAVTransportURI

Action body:

```xml
<u:SetNextAVTransportURI xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <NextURI>string</NextURI>
  <NextURIMetaData>string</NextURIMetaData>
</u:SetNextAVTransportURI>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **NextURI** | `string` |  |
| **NextURIMetaData** | `string` |  |

### SetPlayMode

Set the PlayMode

Action body:

```xml
<u:SetPlayMode xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <NewPlayMode>string</NewPlayMode>
</u:SetPlayMode>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **NewPlayMode** | `string` | New playmode Allowed values: `NORMAL` / `REPEAT_ALL` / `REPEAT_ONE` / `SHUFFLE_NOREPEAT` / `SHUFFLE` / `SHUFFLE_REPEAT_ONE` |

**Remarks** Send to non-coordinator returns error code 712. If SONOS queue is not activated returns error code 712.

### SnoozeAlarm

Snooze the current alarm for some time.

Action body:

```xml
<u:SnoozeAlarm xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <Duration>string</Duration>
</u:SnoozeAlarm>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **Duration** | `string` | Snooze time as hh:mm:ss, 10 minutes = 00:10:00 |

### StartAutoplay

Action body:

```xml
<u:StartAutoplay xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
  <ProgramURI>string</ProgramURI>
  <ProgramMetaData>string</ProgramMetaData>
  <Volume>ui2</Volume>
  <IncludeLinkedZones>boolean</IncludeLinkedZones>
  <ResetVolumeAfter>boolean</ResetVolumeAfter>
</u:StartAutoplay>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |
| **ProgramURI** | `string` |  |
| **ProgramMetaData** | `string` |  |
| **Volume** | `ui2` |  |
| **IncludeLinkedZones** | `boolean` |  |
| **ResetVolumeAfter** | `boolean` |  |

### Stop

Stop playback

Action body:

```xml
<u:Stop xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
  <InstanceID>ui4</InstanceID>
</u:Stop>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **InstanceID** | `ui4` | InstanceID should always be 0 |

## Events

The AVTransportService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```http
SUBSCRIBE /MediaRenderer/AVTransport/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AbsoluteCounterPosition | ❌ | `i4` |  |
| AbsoluteTimePosition | ❌ | `string` |  |
| AlarmIDRunning | ❌ | `ui4` |  |
| AlarmLoggedStartTime | ❌ | `string` |  |
| AlarmRunning | ❌ | `boolean` |  |
| AVTransportURI | ❌ | `string` |  |
| AVTransportURIMetaData | ❌ | `string` |  |
| CurrentCrossfadeMode | ❌ | `boolean` |  |
| CurrentMediaDuration | ❌ | `string` |  |
| CurrentPlayMode | ❌ | `string` | `NORMAL` / `REPEAT_ALL` / `REPEAT_ONE` / `SHUFFLE_NOREPEAT` / `SHUFFLE` / `SHUFFLE_REPEAT_ONE` |
| CurrentRecordQualityMode | ❌ | `string` |  |
| CurrentSection | ❌ | `ui4` |  |
| CurrentTrack | ❌ | `ui4` |  |
| CurrentTrackDuration | ❌ | `string` |  |
| CurrentTrackMetaData | ❌ | `string` |  |
| CurrentTrackURI | ❌ | `string` |  |
| CurrentTransportActions | ❌ | `string` |  |
| CurrentValidPlayModes | ❌ | `string` |  |
| DirectControlAccountID | ❌ | `string` |  |
| DirectControlClientID | ❌ | `string` |  |
| DirectControlIsSuspended | ❌ | `boolean` |  |
| EnqueuedTransportURI | ❌ | `string` |  |
| EnqueuedTransportURIMetaData | ❌ | `string` |  |
| LastChange | ✔ | `string` |  |
| MuseSessions | ❌ | `string` |  |
| NextAVTransportURI | ❌ | `string` |  |
| NextAVTransportURIMetaData | ❌ | `string` |  |
| NextTrackMetaData | ❌ | `string` |  |
| NextTrackURI | ❌ | `string` |  |
| NumberOfTracks | ❌ | `ui4` |  |
| PlaybackStorageMedium | ❌ | `string` | `NONE` / `NETWORK` |
| PossiblePlaybackStorageMedia | ❌ | `string` |  |
| PossibleRecordQualityModes | ❌ | `string` |  |
| PossibleRecordStorageMedia | ❌ | `string` |  |
| QueueUpdateID | ❌ | `ui4` |  |
| RecordMediumWriteStatus | ❌ | `string` |  |
| RecordStorageMedium | ❌ | `string` |  |
| RelativeCounterPosition | ❌ | `i4` |  |
| RelativeTimePosition | ❌ | `string` |  |
| RestartPending | ❌ | `boolean` |  |
| SleepTimerGeneration | ❌ | `ui4` |  |
| SnoozeRunning | ❌ | `boolean` |  |
| TransportErrorDescription | ❌ | `string` |  |
| TransportErrorHttpCode | ❌ | `string` |  |
| TransportErrorHttpHeaders | ❌ | `string` |  |
| TransportErrorURI | ❌ | `string` |  |
| TransportPlaySpeed | ❌ | `string` |  |
| TransportState | ❌ | `string` | `STOPPED` / `PLAYING` / `PAUSED_PLAYBACK` / `TRANSITIONING` |
| TransportStatus | ❌ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. A `❌` doesn't mean that is won't emit events.

## Custom errors

The AVTransportService has the following known custom errors.

| Error code | Description |
|:-----------|:------------|
| `701` | Transition not available |
| `702` | No content |
| `703` | Read error |
| `704` | Format not supported for playback |
| `705` | Transport is locked |
| `706` | Write error |
| `707` | Media protected or not writeable |
| `708` | Format not supported for recording |
| `709` | Media is full |
| `710` | Seek mode not supported |
| `711` | Illegal seek target |
| `712` | Play mode not supported |
| `713` | Record quality not supported |
| `714` | Illegal MIME-Type |
| `715` | Content busy |
| `716` | Resource not found |
| `717` | Play speed not supported |
| `718` | Invalid InstanceID |
| `737` | No dns configured |
| `738` | Bad domain |
| `739` | Server error |

---

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
