---
layout: default
title: SystemPropertiesService
parent: Sonos UPNP
---
# SystemPropertiesService
{: .no_toc }

The SystemPropertiesService is available on these models: `v1-S1` `v1-S5` `v1-S9` .

1. TOC
{:toc}

---


## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/SystemProperties/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/SystemProperties/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/SystemProperties1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:SystemProperties` |
| **Service type** | `urn:schemas-upnp-org:service:SystemProperties:1` |

### Sample request
{: .no_toc }

```http
POST /SystemProperties/Control
Host: 192.168.x.x:1400
SOAP-Action: "urn:schemas-upnp-org:service:SystemProperties:1#{ActionName}"
Content-Type: text/xml; charset=utf8

<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

### SetString

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
| **VariableName** | `string` |  |
| **StringValue** | `string` |  |

### GetString

Action body:

```xml
<u:GetString xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <VariableName>string</VariableName>
</u:GetString>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **VariableName** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **StringValue** | `string` |  |

### Remove

Action body:

```xml
<u:Remove xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
  <VariableName>string</VariableName>
</u:Remove>
```


Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **VariableName** | `string` |  |

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
| **IsExpired** | `boolean` |  |
| **AccountUDN** | `string` |  |

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

### DoPostUpdateTasks

Action body:

```xml
<u:DoPostUpdateTasks xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
</u:DoPostUpdateTasks>
```


No input arguments

### ResetThirdPartyCredentials

Action body:

```xml
<u:ResetThirdPartyCredentials xmlns:u="urn:schemas-upnp-org:service:SystemProperties:1">
</u:ResetThirdPartyCredentials>
```


No input arguments

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
| **RDMValue** | `boolean` |  |

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
| **RDMValue** | `boolean` |  |

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


This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
