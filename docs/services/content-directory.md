---
layout: default
title: ContentDirectoryService
parent: Sonos UPNP
---
# ContentDirectoryService
{: .no_toc }

Browse for local content

The ContentDirectoryService is available on these models: `v1-S1` `v1-S5` `v1-S9` .

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
SOAP-Action: "urn:schemas-upnp-org:service:ContentDirectory:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

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

### Browse

Browse for content, see BrowseParsed for a better experience.

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
| **Filter** | `string` | Which fields should be returned '*' for all. |
| **StartingIndex** | `ui4` | Paging, where to start |
| **RequestedCount** | `ui4` | Paging, number of items |
| **SortCriteria** | `string` | Sort the results based on metadata fields. '+upnp:artist,+dc:title' for sorting on artist then on title. |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **Result** | `string` |  |
| **NumberReturned** | `ui4` |  |
| **TotalMatches** | `ui4` |  |
| **UpdateID** | `ui4` |  |

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
| **IsIndexing** | `boolean` |  |

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
| **IsBrowseable** | `boolean` |  |

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
| **Browseable** | `boolean` |  |

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
| Browseable | ✔ | `boolean` |  |
| ContainerUpdateIDs | ✔ | `string` |  |
| FavoritePresetsUpdateID | ✔ | `string` |  |
| FavoritesUpdateID | ✔ | `string` |  |
| RadioFavoritesUpdateID | ✔ | `ui4` |  |
| RadioLocationUpdateID | ✔ | `ui4` |  |
| RecentlyPlayedUpdateID | ✔ | `string` |  |
| SavedQueuesUpdateID | ✔ | `string` |  |
| SearchCapabilities | ❌ | `string` |  |
| ShareIndexInProgress | ✔ | `boolean` |  |
| ShareIndexLastError | ✔ | `string` |  |
| ShareListUpdateID | ✔ | `string` |  |
| SortCapabilities | ❌ | `string` |  |
| SystemUpdateID | ✔ | `ui4` |  |
| UserRadioUpdateID | ✔ | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. A `❌` doesn't mean that is won't emit events.

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
