---
layout: default
title: Sonos communication
nav_order: 4
has_toc: false
---

# Sonos communication

If you want to communicate with your sonos speakers on your local network you're forced to use SOAP in most cases.

## Sonos Services

Each sonos speaker has [several soap services](/services) defined. All which have several actions that can be executed. The documentation of these services is scraped from the discovery file that every sonos speaker has available at `http://{ip}:1400/xml/device_description.xml`.

## Sonos SOAP remarks

- Sonos communicates booleans as `1` for true and `0` for false. This is something to keep in mind if you see **boolean** somewhere.
- Some actions (like [ListAlarms](https://svrooij.io/sonos-api-docs/services/alarm-clock.html#listalarms)) return encoded xml as string. Before you can read these, you'll have to decode them and then parse them as XML. Libraries like [node-sonos-ts](https://svrooij.io/node-sonos-ts/sonos-device/services/alarm-clock-service.html#listalarms) provide a way that already parses the the output so you don't have to.

## SOAP call

A SOAP call is just a http request, with some special headers and some xml formatted body. Each request is a `POST` request to some endpoint.

In this sample we described the [SetMute](/services/rendering-control.html#setmute) command.

| What | Sample |
| ---- | ------ |
| IP of speaker | `192.168.0.31` |
| [Control endpoint](/services/rendering-control.html#service-data) | `/MediaRenderer/RenderingControl/Control` |
| Service type | `urn:schemas-upnp-org:service:RenderingControl:1`

You can find this information on the page describing one of [many sonos services](/services/).

### SOAP call Rendering control - SetMute

You do a HTTP `POST` request to the [control endpoint](/services/rendering-control.html#service-data) of the `RenderingControlService`. This service has a service type of `urn:schemas-upnp-org:service:RenderingControl:1` which is needed in the `soapaction` http header and in the soap body. Where you also specify the name of the action `SetMute` in this case.

URL `http://192.168.0.31:1400/MediaRenderer/RenderingControl/Control`

Required HTTP headers:

```txt
soapaction: "urn:schemas-upnp-org:service:RenderingControl:1#SetMute"
Content-Type: text/xml; charset="utf-8"
```

The body of the request has to be specified as XML. We also added the correct action body for the `SetMute` action. As you see below, booleans are converted to `1` for true and `0` for false. This is just how sonos works.

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
<s:Envelope
  xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    <s:Fault>
      <faultcode>s:Client</faultcode>
      <faultstring>UPnPError</faultstring>
      <detail>
        <UPnPError
          xmlns="urn:schemas-upnp-org:control-1-0">
          <errorCode>800</errorCode>
        </UPnPError>
      </detail>
    </s:Fault>
  </s:Body>
</s:Envelope>
```

Sometimes you're getting a more specific error code, we tried describing all of them in the [documentation.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/documentation.json)
