---
layout: default
title: ContentDirectoryService
parent: Sonos UPNP
---
# ContentDirectoryService
{: .no_toc }

Browse for local content

The ContentDirectoryService is available on these models: `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `Sonos Play:5 (S6) S2` / `Sonos Sub (Sub) S2` / `Sonos Play:1 (S1) S1` / `Sonos Play:5 (S5) S1` / `Sonos Playbar (S9) S1`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MediaServer/ContentDirectory/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MediaServer/ContentDirectory/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/ContentDirectory1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:ContentDirectory` |
| **Service type** | `urn:schemas-upnp-org:service:ContentDirectory:1` |

### Sample request
{: .no_toc }

```http
POST /MediaServer/ContentDirectory/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:ContentDirectory:1#{ActionName}"
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

### Browse

Browse for content. Recommendation: Send one request, check the &#x27;TotalMatches&#x27; and - if necessary - do additional requests with higher &#x27;StartingIndex&#x27;. In case of duplicates only the first is returned! Example: albums with same title, even if artists are different

Action body:

```xml
<u:Browse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <ObjectID>string</ObjectID>
  <BrowseFlag>string</BrowseFlag>
  <Filter>string</Filter>
  <StartingIndex>ui4</StartingIndex>
  <RequestedCount>ui4</RequestedCount>
  <SortCriteria>string</SortCriteria>
</u:Browse>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ObjectID** | `string` | The search query, ['A:ARTIST','A:ALBUMARTIST','A:ALBUM','A:GENRE','A:COMPOSER','A:TRACKS','A:PLAYLISTS'] with optionally ':search+query' behind it. |
| **BrowseFlag** | `string` | How to browse Allowed values: `BrowseMetadata` / `BrowseDirectChildren` |
| **Filter** | `string` | Which fields should be returned `*` for all. |
| **StartingIndex** | `ui4` | Paging, where to start |
| **RequestedCount** | `ui4` | Paging, number of items, maximum is 1,000. This parameter does restrict the number of items being searched (filter) but only the number being returned.  |
| **SortCriteria** | `string` | Sort the results based on metadata fields. `+upnp:artist,+dc:title` for sorting on artist then on title. |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Result** | `string` | Encoded DIDL-Lite XML. See remark (2) |
| **NumberReturned** | `ui4` |  |
| **TotalMatches** | `ui4` |  |
| **UpdateID** | `ui4` |  |

**Remarks** (1) If the title contains an apostrophe the returned uri will contain a `&apos;`. (2) Some libraries support a BrowseAndParse, so you don't have to parse the xml.

### CreateObject

Action body:

```xml
<u:CreateObject xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <ContainerID>string</ContainerID>
  <Elements>string</Elements>
</u:CreateObject>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ContainerID** | `string` |  |
| **Elements** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ObjectID** | `string` |  |
| **Result** | `string` |  |

### DestroyObject

Action body:

```xml
<u:DestroyObject xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <ObjectID>string</ObjectID>
</u:DestroyObject>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ObjectID** | `string` |  |

### FindPrefix

Action body:

```xml
<u:FindPrefix xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <ObjectID>string</ObjectID>
  <Prefix>string</Prefix>
</u:FindPrefix>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ObjectID** | `string` |  |
| **Prefix** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **StartingIndex** | `ui4` |  |
| **UpdateID** | `ui4` |  |

### GetAlbumArtistDisplayOption

Action body:

```xml
<u:GetAlbumArtistDisplayOption xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetAlbumArtistDisplayOption>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AlbumArtistDisplayOption** | `string` |  |

### GetAllPrefixLocations

Action body:

```xml
<u:GetAllPrefixLocations xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <ObjectID>string</ObjectID>
</u:GetAllPrefixLocations>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ObjectID** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **TotalPrefixes** | `ui4` |  |
| **PrefixAndIndexCSV** | `string` |  |
| **UpdateID** | `ui4` |  |

### GetBrowseable

Action body:

```xml
<u:GetBrowseable xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetBrowseable>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **IsBrowseable** | `boolean` |  `1` for true and `0` for false  |

### GetLastIndexChange

Action body:

```xml
<u:GetLastIndexChange xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetLastIndexChange>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **LastIndexChange** | `string` |  |

### GetSearchCapabilities

Action body:

```xml
<u:GetSearchCapabilities xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetSearchCapabilities>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SearchCaps** | `string` |  |

### GetShareIndexInProgress

Action body:

```xml
<u:GetShareIndexInProgress xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetShareIndexInProgress>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **IsIndexing** | `boolean` |  `1` for true and `0` for false  |

### GetSortCapabilities

Action body:

```xml
<u:GetSortCapabilities xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetSortCapabilities>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SortCaps** | `string` |  |

### GetSystemUpdateID

Action body:

```xml
<u:GetSystemUpdateID xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
</u:GetSystemUpdateID>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Id** | `ui4` |  |

### RefreshShareIndex

Action body:

```xml
<u:RefreshShareIndex xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <AlbumArtistDisplayOption>string</AlbumArtistDisplayOption>
</u:RefreshShareIndex>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AlbumArtistDisplayOption** | `string` |  |

### RequestResort

Action body:

```xml
<u:RequestResort xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <SortOrder>string</SortOrder>
</u:RequestResort>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SortOrder** | `string` |  |

### SetBrowseable

Action body:

```xml
<u:SetBrowseable xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <Browseable>boolean</Browseable>
</u:SetBrowseable>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Browseable** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

### UpdateObject

Action body:

```xml
<u:UpdateObject xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
  <ObjectID>string</ObjectID>
  <CurrentTagValue>string</CurrentTagValue>
  <NewTagValue>string</NewTagValue>
</u:UpdateObject>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ObjectID** | `string` |  |
| **CurrentTagValue** | `string` |  |
| **NewTagValue** | `string` |  |

## Events

The ContentDirectoryService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```http
SUBSCRIBE /MediaServer/ContentDirectory/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| Browseable | ✔ | `boolean` |  `1` for true and `0` for false  |
| ContainerUpdateIDs | ✔ | `string` |  |
| FavoritePresetsUpdateID | ✔ | `string` |  |
| FavoritesUpdateID | ✔ | `string` |  |
| RadioFavoritesUpdateID | ✔ | `ui4` |  |
| RadioLocationUpdateID | ✔ | `ui4` |  |
| RecentlyPlayedUpdateID | ✔ | `string` |  |
| SavedQueuesUpdateID | ✔ | `string` |  |
| SearchCapabilities |  | `string` |  |
| ShareIndexInProgress | ✔ | `boolean` |  `1` for true and `0` for false  |
| ShareIndexLastError | ✔ | `string` |  |
| ShareListUpdateID | ✔ | `string` |  |
| SortCapabilities |  | `string` |  |
| SystemUpdateID | ✔ | `ui4` |  |
| UserRadioUpdateID | ✔ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

## Custom errors

The ContentDirectoryService has the following known custom errors.

| Error code | Description |
|:-----------|:------------|
| `701` | No such object |
| `702` | Invalid CurrentTagValue |
| `703` | Invalid NewTagValue |
| `704` | Required tag |
| `705` | Read-only tag |
| `706` | Parameter mismatch |
| `708` | Invalid search criteria |
| `709` | Invalid sort criteria |
| `710` | No such container |
| `711` | Restricted object |
| `712` | Bad metadata |
| `713` | Restricted parent object |
| `714` | No such source resource |
| `715` | Resource access denied |
| `716` | Transfer busy |
| `717` | No such file transfer |
| `718` | No such destination resource |
| `719` | Destination resource access denied |
| `720` | Cannot process the request |

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
