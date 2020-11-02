---
layout: default
title: AlarmClockService
parent: Sonos UPNP
---
# AlarmClockService
{: .no_toc }

Control the sonos alarms

The AlarmClockService is available on these models: `v1-S1` `v1-S5` `v1-S9` .

1. TOC
{:toc}

---


## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/AlarmClock/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/AlarmClock/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/AlarmClock1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:AlarmClock` |
| **Service type** | `urn:schemas-upnp-org:service:AlarmClock:1` |

### Sample request
{: .no_toc }

```http
POST /AlarmClock/Control
Host: 192.168.x.x:1400
SOAP-Action: "urn:schemas-upnp-org:service:AlarmClock:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

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
| **AutoAdjustDst** | `boolean` |  |

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
| **AutoAdjustDst** | `boolean` |  |

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
| **AutoAdjustDst** | `boolean` |  |
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

### CreateAlarm

Create a single alarm, all properties are required

Action body:

```xml
<u:CreateAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
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
</u:CreateAlarm>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **StartLocalTime** | `string` | The start time as hh:mm:ss |
| **Duration** | `string` | The duration as hh:mm:ss |
| **Recurrence** | `string` | Repeat this alarm on Allowed values: `ONCE` / `WEEKDAYS` / `WEEKENDS` / `DAILY` |
| **Enabled** | `boolean` | Alarm enabled after creation |
| **RoomUUID** | `string` | The UUID of the speaker you want this alarm for |
| **ProgramURI** | `string` | The sound uri |
| **ProgramMetaData** | `string` | The sound metadata, can be empty string |
| **PlayMode** | `string` | Alarm play mode Allowed values: `NORMAL` / `REPEAT_ALL` / `SHUFFLE_NOREPEAT` / `SHUFFLE` |
| **Volume** | `ui2` | Volume between 0 and 100 |
| **IncludeLinkedZones** | `boolean` | Should grouped players also play the alarm? |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AssignedID** | `ui4` |  |

### UpdateAlarm

Update an alarm, all parameters are required. Use PatchAlarm where you can update a single parameter

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
| **ID** | `ui4` | The ID of the alarm see ListAndParseAlarms |
| **StartLocalTime** | `string` | The start time as hh:mm:ss |
| **Duration** | `string` | The duration as hh:mm:ss |
| **Recurrence** | `string` | Repeat this alarm on Allowed values: `ONCE` / `WEEKDAYS` / `WEEKENDS` / `DAILY` |
| **Enabled** | `boolean` | Alarm enabled after creation |
| **RoomUUID** | `string` | The UUID of the speaker you want this alarm for |
| **ProgramURI** | `string` | The sound uri |
| **ProgramMetaData** | `string` | The sound metadata, can be empty string |
| **PlayMode** | `string` | Alarm play mode Allowed values: `NORMAL` / `REPEAT_ALL` / `SHUFFLE_NOREPEAT` / `SHUFFLE` |
| **Volume** | `ui2` | Volume between 0 and 100 |
| **IncludeLinkedZones** | `boolean` | Should grouped players also play the alarm? |

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
| **ID** | `ui4` | The Alarm ID, see ListAndParseAlarms |

### ListAlarms

Get the AlarmList as XML, use ListAndParseAlarms for parsed version

Action body:

```xml
<u:ListAlarms xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
</u:ListAlarms>
```


No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **CurrentAlarmList** | `string` |  |
| **CurrentAlarmListVersion** | `string` |  |

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


This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
