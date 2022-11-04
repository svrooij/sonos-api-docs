---
layout: default
title: Metadata
nav_order: 6
---

## Metadata explained

A lot of requests to sonos require Metadata. This metadata is an xml describing the requested song.

The metadata for an item can usually be fetched from a [remote music service](./music-services.md), but talking to those is hard.

## Known metadata

Some metadata can be guessed based on common URLs.

{% assign metadatas = site.data.metadata.metadata | sort: 'name' %}
{% for meta in metadatas %}

### {{meta.name}}

- Identifier: `{{meta.identifier}}`
- Track URI: `{{meta.uri}}`
{% if meta.sampleId %}- Sample ID: `{{meta.sampleId}}`{% endif %}

```xml
<DIDL-Lite xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/"
  xmlns:r="urn:schemas-rinconnetworks-com:metadata-1-0/" xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/">
  <item id="{{meta.metadata.id}}" restricted="true">
    <upnp:class>{{meta.metadata.class}}</upnp:class>
    <desc id="cdudn" nameSpace="urn:schemas-rinconnetworks-com:metadata-1-0/">{{meta.metadata.didlDescription}}</desc>
{% if meta.metadata.title %}    <dc:title>{{meta.metadata.title}}</dc:title>
{% endif -%}
  </item>
</DIDL-Lite>
```

{% endfor %}

## Contribute

This page is generated from [metadata.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/_data/metadata.json), which you can download [here](https://raw.githubusercontent.com/svrooij/sonos-api-docs/main/docs/_data/metadata.json).
