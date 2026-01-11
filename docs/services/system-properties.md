---
layout: default
title: SystemProperties
parent: Sonos Services
---
# SystemProperties service
{: .no_toc }

Manage system-wide settings, mainly account stuff

The SystemProperties service is available on these models: `Sonos Play:1 (S1) S2` / `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Amp (S16) S2` / `Sonos One (S18) S2` / `SYMFONISK Bookshelf (S21) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `SYMFONISK Bookshelf (S33) S2` / `Sonos One SL (S38) S2` / `Sonos Era 100 (S39) S2` / `Sonos Play:5 (S6) S2` / `Sonos Playbar (S9) S2` / `Sonos Sub (Sub) S2`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/SystemProperties/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/SystemProperties/Event` |
| **Discovery URL** | `http://192.168.x.x:1400/xml/SystemProperties1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:SystemProperties` |
| **Service type** | `urn:schemas-upnp-org:service:SystemProperties:1` |

### Sample request
{: .no_toc }

```text
POST /SystemProperties/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:SystemProperties:1#{ActionName}"
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

### AddAccountX

Action body:

```xml
<u:AddAccountX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountID>string</AccountID>
  <AccountPassword>string</AccountPassword>
</u:AddAccountX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountID** | `string` |  |
| **AccountPassword** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountUDN** | `string` |  |

### AddOAuthAccountX

Action body:

```xml
<u:AddOAuthAccountX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountToken>string</AccountToken>
  <AccountKey>string</AccountKey>
  <OAuthDeviceID>string</OAuthDeviceID>
  <AuthorizationCode>string</AuthorizationCode>
  <RedirectURI>string</RedirectURI>
  <UserIdHashCode>string</UserIdHashCode>
  <AccountTier>ui4</AccountTier>
</u:AddOAuthAccountX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountToken** | `string` |  |
| **AccountKey** | `string` |  |
| **OAuthDeviceID** | `string` |  |
| **AuthorizationCode** | `string` |  |
| **RedirectURI** | `string` |  |
| **UserIdHashCode** | `string` |  |
| **AccountTier** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountUDN** | `string` |  |
| **AccountNickname** | `string` |  |

### DoPostUpdateTasks

Action body:

```xml
<u:DoPostUpdateTasks xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
</u:DoPostUpdateTasks>
```

No input arguments

### EditAccountMd

Action body:

```xml
<u:EditAccountMd xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountID>string</AccountID>
  <NewAccountMd>string</NewAccountMd>
</u:EditAccountMd>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountID** | `string` |  |
| **NewAccountMd** | `string` |  |

### EditAccountPasswordX

Action body:

```xml
<u:EditAccountPasswordX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountID>string</AccountID>
  <NewAccountPassword>string</NewAccountPassword>
</u:EditAccountPasswordX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountID** | `string` |  |
| **NewAccountPassword** | `string` |  |

### EnableRDM

Action body:

```xml
<u:EnableRDM xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <RDMValue>boolean</RDMValue>
</u:EnableRDM>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RDMValue** | `boolean` |  Allowed values: `1` (= true) / `0` (= false)  |

### GetRDM

Action body:

```xml
<u:GetRDM xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
</u:GetRDM>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **RDMValue** | `boolean` |  `1` for true and `0` for false  |

### GetString

Get a saved string.

Action body:

```xml
<u:GetString xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <VariableName>string</VariableName>
</u:GetString>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **VariableName** | `string` | The key for this variable |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **StringValue** | `string` |  |

**Remarks** Strings are saved in the system with SetString, every speaker should return the same data. Will error when not existing

### GetWebCode

Action body:

```xml
<u:GetWebCode xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
</u:GetWebCode>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **WebCode** | `string` |  |

### ProvisionCredentialedTrialAccountX

Action body:

```xml
<u:ProvisionCredentialedTrialAccountX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountID>string</AccountID>
  <AccountPassword>string</AccountPassword>
</u:ProvisionCredentialedTrialAccountX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountID** | `string` |  |
| **AccountPassword** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **IsExpired** | `boolean` |  `1` for true and `0` for false  |
| **AccountUDN** | `string` |  |

### RefreshAccountCredentialsX

Action body:

```xml
<u:RefreshAccountCredentialsX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountUID>ui4</AccountUID>
  <AccountToken>string</AccountToken>
  <AccountKey>string</AccountKey>
</u:RefreshAccountCredentialsX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountUID** | `ui4` |  |
| **AccountToken** | `string` |  |
| **AccountKey** | `string` |  |

### Remove

Remove a saved string

Action body:

```xml
<u:Remove xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <VariableName>string</VariableName>
</u:Remove>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **VariableName** | `string` | The key for this variable |

**Remarks** Not sure what happens if you call this with a VariableName that doesn't exists.

### RemoveAccount

Action body:

```xml
<u:RemoveAccount xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountType>ui4</AccountType>
  <AccountID>string</AccountID>
</u:RemoveAccount>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountType** | `ui4` |  |
| **AccountID** | `string` |  |

### ReplaceAccountX

Action body:

```xml
<u:ReplaceAccountX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountUDN>string</AccountUDN>
  <NewAccountID>string</NewAccountID>
  <NewAccountPassword>string</NewAccountPassword>
  <AccountToken>string</AccountToken>
  <AccountKey>string</AccountKey>
  <OAuthDeviceID>string</OAuthDeviceID>
</u:ReplaceAccountX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountUDN** | `string` |  |
| **NewAccountID** | `string` |  |
| **NewAccountPassword** | `string` |  |
| **AccountToken** | `string` |  |
| **AccountKey** | `string` |  |
| **OAuthDeviceID** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **NewAccountUDN** | `string` |  |

### ResetThirdPartyCredentials

Action body:

```xml
<u:ResetThirdPartyCredentials xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
</u:ResetThirdPartyCredentials>
```

No input arguments

### SetAccountNicknameX

Action body:

```xml
<u:SetAccountNicknameX xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <AccountUDN>string</AccountUDN>
  <AccountNickname>string</AccountNickname>
</u:SetAccountNicknameX>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AccountUDN** | `string` |  |
| **AccountNickname** | `string` |  |

### SetString

Save a string in the system

Action body:

```xml
<u:SetString xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <VariableName>string</VariableName>
  <StringValue>string</StringValue>
</u:SetString>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **VariableName** | `string` | The key for this variable, use something unique |
| **StringValue** | `string` |  |

**Remarks** Strings are saved in the system, retrieve values with GetString.

## Events

The SystemPropertiesService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /SystemProperties/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| CustomerID | ✔ | `string` |  |
| ThirdPartyHash | ✔ | `string` |  |
| UpdateID | ✔ | `ui4` |  |
| UpdateIDX | ✔ | `ui4` |  |
| VoiceUpdateID | ✔ | `ui4` |  |

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
