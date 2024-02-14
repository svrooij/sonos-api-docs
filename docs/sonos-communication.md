---
layout: default
title: Sonos communication
nav_order: 4
has_toc: false
---

# Sonos communication

To communicate with your Sonos speakers on your local network use:

- SOAP to call the SONOS services at port 1400 and subscribe to events [see services](#sonos-services)
- HTTP requests at port 1400 to scrape the UPnP service information or get a simple device status information [see http requests](#http-endpoints)
- UDP Datagram and Simple Service Discovery Protocol (SSDP) at port 1900 to discover SONOS player [see auto discovery](#auto-discovery)
- New secure RestURL at `https://{ip}:1443/api` (not covered in this documentation)

## Sonos Services

Each sonos speaker has [several soap services]({{'services/' | relative_url }}) defined. All which have several actions that can be executed. The documentation of these services is scraped from the discovery file that every sonos speaker has available at `http://{ip}:1400/xml/device_description.xml`.

## Sonos SOAP remarks

- Sonos communicates booleans as `1` for true and `0` for false. This is something to keep in mind if you see **boolean** somewhere.
- Some actions (like [ListAlarms]({{'services/alarm-clock.html#listalarms' | relative_url }})) return encoded xml as string. Before you can read these, you'll have to decode them and then parse them as XML. Libraries like [node-sonos-ts](https://sonos-ts.svrooij.io/sonos-device/services/alarm-clock-service.html#listalarms) provide a way that already parses the the output so you don't have to.

## SOAP call

A SOAP call is just a http request, with some special headers and some xml formatted body. Each request is a `POST` request to some endpoint.

In this sample we described the [SetMute]({{ '/services/rendering-control.html#setmute' | relative_url }}) command.

| What | Sample |
| ---- | ------ |
| IP of speaker | `192.168.0.31` |
| [Control endpoint]({{'/services/rendering-control.html#service-data' | relative_url }}) | `/MediaRenderer/RenderingControl/Control` |
| Service type | `urn:schemas-upnp-org:service:RenderingControl:1` |

You can find this information on the page describing one of [many sonos services]({{'/services/' | relative_url }}).

### SOAP call Rendering control - SetMute

You do a HTTP `POST` request to the [control endpoint]({{'/services/rendering-control.html#service-data' | relative_url }}) of the `RenderingControlService`. This service has a service type of `urn:schemas-upnp-org:service:RenderingControl:1` which is needed in the `soapaction` http header and in the soap body. Where you also specify the name of the action `SetMute` in this case.

URL `http://192.168.0.31:1400/MediaRenderer/RenderingControl/Control`

Required HTTP headers:

```txt
soapaction: "urn:schemas-upnp-org:service:RenderingControl:1#SetMute"
Content-Type: text/xml; charset="utf-8"
```

The body of the request has to be specified as XML. We also added the correct action body for the `SetMute` action. As you see below, booleans are converted to `1` for true and `0` for false. This is just how Sonos works.

```xml
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    <u:SetMute xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
      <InstanceID>0</InstanceID>
      <Channel>Master</Channel>
      <DesiredMute>1</DesiredMute>
    </u:SetMute>
  </s:Body>
</s:Envelope>
```

### SOAP response

All calls to sonos will return a xml object. Either with a success message of with a failure.

Success message (without output parameters) to above command:

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    <u:SetMuteResponse xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1"></u:SetMuteResponse>
  </s:Body>
</s:Envelope>
```

Generic error (when deleting an alarm that doesn't exists) body (HTTP status code 500):

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    <s:Fault>
      <faultcode>s:Client</faultcode>
      <faultstring>UPnPError</faultstring>
      <detail>
        <UPnPError xmlns="urn:schemas-upnp-org:control-1-0">
          <errorCode>800</errorCode>
        </UPnPError>
      </detail>
    </s:Fault>
  </s:Body>
</s:Envelope>
```

Sometimes you're getting a more specific error code, we tried describing all of them in the [documentation.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/documentation.json)

## HTTP Endpoints

Apart from the soap services, sonos also has some http endpoints available where you can get extra information:

| URL | Description |
| --- | ----------- |
| `http://{ip}:1400/status/info` | playerId, serialNumber, groupId, householdId, capabilities, versions and more (JSON format) |
| `http://{ip}:1400/status` | several additional connection information |
| `http://{ip}:1400/status/batterystatus` | battery status for devices with battery (JSON format) |
| `http://{ip}:1400/region.htm` | to select a Wifi region out of USA/Canada, EU, CHINA, JAPAN, ISRAEL, RUSSIA, SOUTH KOREA |
| `http://{ip}:1400/support/review` | a list of all players with playerID and links to more information |
| `http://{ip}:1400/xml/device_description.xml` | Sonos services description, used by the [generator](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs) |

## Auto discovery

Each sonos speaker can be discovered by the [SSDP](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol) or **Simple Service Discovery Protocol**.
In short each speaker listens for a `ssdp:discovery` command.

Which is actually just a simple UDP packet send to port `1900` on multicast address `239.255.255.250` and `255.255.255.255` with the following body:

```text
M-SEARCH * HTTP/1.1
HOST: 239.255.255.250:1900
MAN: ssdp:discover
MX: 1
ST: urn:schemas-upnp-org:device:ZonePlayer:1
```

By sending a this UDP multicast packet, you will get a response from all speakers available on your network. See [sonos-device-discovery.ts](https://github.com/svrooij/node-sonos-ts/blob/master/src/sonos-device-discovery.ts) for a sample on how to do that in TypeScript/Node. That should give you some pointers on how to do that in another language.
