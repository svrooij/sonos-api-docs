---
layout: default
title: AlarmClock
parent: Sonos Services
---
# AlarmClock service
{: .no_toc }

Control the sonos alarms and times

The AlarmClock service is available on these models: `Sonos Play:1 (S1) S2` / `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Amp (S16) S2` / `Sonos One (S18) S2` / `SYMFONISK Bookshelf (S21) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `SYMFONISK Bookshelf (S33) S2` / `Sonos One SL (S38) S2` / `Sonos Era 100 (S39) S2` / `Sonos Play:5 (S6) S2` / `Sonos Playbar (S9) S2` / `Sonos Sub (Sub) S2`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/AlarmClock/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/AlarmClock/Event` |
| **Discovery URL** | `http://192.168.x.x:1400/xml/AlarmClock1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:AlarmClock` |
| **Service type** | `urn:schemas-upnp-org:service:AlarmClock:1` |

### Sample request
{: .no_toc }

```text
POST /AlarmClock/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:AlarmClock:1#{ActionName}"
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

### CreateAlarm

Create a single alarm, all properties are required

Action body:

```xml
<u:CreateAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <StartLocalTime>07:00:00</StartLocalTime>
  <Duration>00:30:00</Duration>
  <Recurrence>DAILY</Recurrence>
  <Enabled>1</Enabled>
  <RoomUUID>RINCON_000E58FE3AEA01400</RoomUUID>
  <ProgramURI>x-rincon-buzzer:0</ProgramURI>
  <ProgramMetaData>string</ProgramMetaData>
  <PlayMode>NORMAL</PlayMode>
  <Volume>20</Volume>
  <IncludeLinkedZones>1</IncludeLinkedZones>
</u:CreateAlarm>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **StartLocalTime** | `string` | The start time as `hh:mm:ss` |
| **Duration** | `string` | The duration as `hh:mm:ss` |
| **Recurrence** | `string` | Repeat this alarm on Allowed values: `ONCE` / `WEEKDAYS` / `WEEKENDS` / `DAILY` |
| **Enabled** | `boolean` | Alarm enabled after creation Allowed values: `1` (= true) / `0` (= false)  |
| **RoomUUID** | `string` | The UUID of the speaker you want this alarm for |
| **ProgramURI** | `string` | The sound uri |
| **ProgramMetaData** | `string` | The sound metadata, can be empty string Embedded XML |
| **PlayMode** | `string` | Alarm play mode Allowed values: `NORMAL` / `REPEAT_ALL` / `SHUFFLE_NOREPEAT` / `SHUFFLE` |
| **Volume** | `ui2` | Volume between 0 and 100 |
| **IncludeLinkedZones** | `boolean` | Should grouped players also play the alarm? Allowed values: `1` (= true) / `0` (= false)  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AssignedID** | `ui4` | The ID of the new alarm |

### DestroyAlarm

Delete an alarm

Action body:

```xml
<u:DestroyAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <ID>ui4</ID>
</u:DestroyAlarm>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ID** | `ui4` | The Alarm ID from ListAlarms |

### GetDailyIndexRefreshTime

Action body:

```xml
<u:GetDailyIndexRefreshTime xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:GetDailyIndexRefreshTime>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentDailyIndexRefreshTime** | `string` |  |

### GetFormat

Action body:

```xml
<u:GetFormat xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:GetFormat>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentTimeFormat** | `string` |  |
| **CurrentDateFormat** | `string` |  |

### GetHouseholdTimeAtStamp

Action body:

```xml
<u:GetHouseholdTimeAtStamp xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <TimeStamp>string</TimeStamp>
</u:GetHouseholdTimeAtStamp>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **TimeStamp** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **HouseholdUTCTime** | `string` |  |

### GetTimeNow

Action body:

```xml
<u:GetTimeNow xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:GetTimeNow>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentUTCTime** | `string` |  |
| **CurrentLocalTime** | `string` |  |
| **CurrentTimeZone** | `string` |  |
| **CurrentTimeGeneration** | `ui4` |  |

### GetTimeServer

Action body:

```xml
<u:GetTimeServer xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:GetTimeServer>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentTimeServer** | `string` |  |

### GetTimeZone

Action body:

```xml
<u:GetTimeZone xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:GetTimeZone>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Index** | `i4` |  |
| **AutoAdjustDst** | `boolean` |  `1` for true and `0` for false  |

### GetTimeZoneAndRule

Action body:

```xml
<u:GetTimeZoneAndRule xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:GetTimeZoneAndRule>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Index** | `i4` |  |
| **AutoAdjustDst** | `boolean` |  `1` for true and `0` for false  |
| **CurrentTimeZone** | `string` |  |

### GetTimeZoneRule

Action body:

```xml
<u:GetTimeZoneRule xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <Index>i4</Index>
</u:GetTimeZoneRule>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Index** | `i4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **TimeZone** | `string` |  |

### ListAlarms

Get the AlarmList as XML

Action body:

```xml
<u:ListAlarms xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:ListAlarms>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentAlarmList** | `string` | xml string, see remarks |
| **CurrentAlarmListVersion** | `string` |  |

**Remarks** Some libraries also provide a ListAndParseAlarms where the alarm list xml is parsed

### SetDailyIndexRefreshTime

Action body:

```xml
<u:SetDailyIndexRefreshTime xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <DesiredDailyIndexRefreshTime>string</DesiredDailyIndexRefreshTime>
</u:SetDailyIndexRefreshTime>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredDailyIndexRefreshTime** | `string` |  |

### SetFormat

Action body:

```xml
<u:SetFormat xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <DesiredTimeFormat>string</DesiredTimeFormat>
  <DesiredDateFormat>string</DesiredDateFormat>
</u:SetFormat>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredTimeFormat** | `string` |  |
| **DesiredDateFormat** | `string` |  |

### SetTimeNow

Action body:

```xml
<u:SetTimeNow xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <DesiredTime>string</DesiredTime>
  <TimeZoneForDesiredTime>string</TimeZoneForDesiredTime>
</u:SetTimeNow>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredTime** | `string` |  |
| **TimeZoneForDesiredTime** | `string` |  |

### SetTimeServer

Action body:

```xml
<u:SetTimeServer xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <DesiredTimeServer>string</DesiredTimeServer>
</u:SetTimeServer>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **DesiredTimeServer** | `string` |  |

### SetTimeZone

Action body:

```xml
<u:SetTimeZone xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <Index>i4</Index>
  <AutoAdjustDst>boolean</AutoAdjustDst>
</u:SetTimeZone>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Index** | `i4` |  |
| **AutoAdjustDst** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

### UpdateAlarm

Update an alarm, all parameters are required.

Action body:

```xml
<u:UpdateAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  <ID>ui4</ID>
  <StartLocalTime>string</StartLocalTime>
  <Duration>string</Duration>
  <Recurrence>string</Recurrence>
  <Enabled>boolean</Enabled>
  <RoomUUID>string</RoomUUID>
  <ProgramURI>string</ProgramURI>
  <ProgramMetaData>string</ProgramMetaData>
  <PlayMode>string</PlayMode>
  <Volume>ui2</Volume>
  <IncludeLinkedZones>boolean</IncludeLinkedZones>
</u:UpdateAlarm>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ID** | `ui4` | The ID of the alarm see ListAlarms |
| **StartLocalTime** | `string` | The start time as `hh:mm:ss` |
| **Duration** | `string` | The duration as `hh:mm:ss` |
| **Recurrence** | `string` | Repeat this alarm on Allowed values: `ONCE` / `WEEKDAYS` / `WEEKENDS` / `DAILY` |
| **Enabled** | `boolean` | Alarm enabled after creation Allowed values: `1` (= true) / `0` (= false)  |
| **RoomUUID** | `string` | The UUID of the speaker you want this alarm for |
| **ProgramURI** | `string` | The sound uri |
| **ProgramMetaData** | `string` | The sound metadata, can be empty string Embedded XML |
| **PlayMode** | `string` | Alarm play mode Allowed values: `NORMAL` / `REPEAT_ALL` / `SHUFFLE_NOREPEAT` / `SHUFFLE` |
| **Volume** | `ui2` | Volume between 0 and 100 |
| **IncludeLinkedZones** | `boolean` | Should grouped players also play the alarm? Allowed values: `1` (= true) / `0` (= false)  |

**Remarks** Some libraries support PatchAlarm where you can update a single parameter

## Events

The AlarmClockService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /AlarmClock/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| AlarmListVersion | ✔ | `string` |  |
| DailyIndexRefreshTime | ✔ | `string` |  |
| DateFormat | ✔ | `string` |  |
| TimeFormat | ✔ | `string` |  |
| TimeGeneration | ✔ | `ui4` |  |
| TimeServer | ✔ | `string` |  |
| TimeZone | ✔ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

## Custom errors

The AlarmClockService has the following known custom errors.

| Error code | Description |
|:-----------|:------------|
| `801` | Duplicate alarm time |

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
