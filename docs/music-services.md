---
layout: default
title: External music services
nav_order: 10
has_toc: false
---

# External music services

Sonos supports several external music services.

> This documentation is not as complete as I wish, but it should get you started. If you're using this code as a way to get started using external music services, please refer back to this page and or make the documentation even better by sending a PR.

<iframe src="https://github.com/sponsors/svrooij/card" title="Sponsor svrooij" height="225" width="600" style="border: 0;"></iframe>

Figuring out the authencation details tooks me a lot of time. If you're using this in your own application please show your users a link back to this page or start sponsoring me yourself.

## Disclaimer

The documentation on this page should allow you to browse external music services with an third party application. You'll still need to connect the service to your speaker with a supported Sonos application to be able to play music from this service.

The provided documentation is "as-is", I'm not taking any responsibility. Don't try to pirate music using the data provided here. Most services encrypt the songs anyway.

## Current music services

At the moment the following music services are supported.

| Id  | Name                      | Auth       | Url |
|:----|:--------------------------|:-----------|:----|
| 894 | 80er-Radio harmony        | Anonymous  | `https://resource.harmonyfm.de/digital/sonos/soap.php?station=harmonyfm` |
| 321 | 80s80s - REAL 80s Radio   | Anonymous  | `https://sonos80s.regiocast.customers.nuuk.de/wsdl` |
| 511 | 90s90s Radio              | Anonymous  | `https://sonos90s.regiocast.customers.nuuk.de/wsdl` |
| 322 | Activaire                 | AppLink    | `https://smapi.sonos.activaire.com/musicservice` |
| 799 | amidAudio                 | AppLink    | `https://amidaudio.com/api/integration/sonos/smapi` |
| 204 | Apple Music               | AppLink    | `https://sonos-music.apple.com/ws/SonosSoap` |
| 275 | Art Radio - RadioArt.com  | AppLink    | `https://sonos.radioart.com/server/` |
| 861 | Astiga                    | AppLink    | `https://sonos.asti.ga/ws/sonos` |
| 306 | Atmosphere by Kollekt.fm  | AppLink    | `https://sonos-smapi.service.kollekt.fm/wsdl` |
| 239 | Audible                   | AppLink    | `https://sonos.audible.com/smapi` |
| 157 | Bandcamp                  | DeviceLink | `https://sns.bandcamp.com/api/sonos/2/sonos_api` |
| 307 | Bookmate                  | AppLink    | `https://sonos.bookmate.com/wsdl` |
| 144 | Calm Radio                | AppLink    | `https://sonos.calmradio.com/app` |
| 256 | CBC Radio & Music         | Anonymous  | `https://cbcmusic-sonos-beta.azurewebsites.net/SonosService.svc` |
| 191 | Classical Archives        | DeviceLink | `https://smapi.classicalarchives.com/endpoint` |
| 330 | Community Radio Plus      | Anonymous  | `https://sonoslb.radioapi.io/cbaa` |
| 315 | Convoy Network            | Anonymous  | `https://sonos.convoynetwork.com/musicservice` |
| 213 | Custom Channels           | AppLink    | `https://sonos.customchannels.net/sonos` |
|   2 | Deezer                    | DeviceLink | `https://api.deezer.com/sonos` |
| 234 | deliver.media             | AppLink    | `https://sonos-api.deliver.media/SonosService/delivermedia` |
|  45 | DMD2 Music                | AppLink    | `https://services.dmd2.com/sonos-api/smapi` |
| 846 | Download Player           | AppLink    | `https://sonos.musicstylingonline.com/ws` |
| 290 | DR LYD                    | Anonymous  | `https://api.dr.dk/sonos/v1/api` |
| 518 | Familystream              | AppLink    | `https://web.familystream.com/api/sonos/v2.1/endpoint.php` |
| 217 | FIT Radio Workout Music   | DeviceLink | `https://www.fitradio.com/apisonos/ws` |
| 192 | focus@will                | AppLink    | `https://www.focusatwill.com/sonos/action` |
| 279 | Global Player             | Anonymous  | `https://sonoslb.radioapi.io/global` |
| 635 | Harmony                   | AppLink    | `https://harmony-sonos-prod.moodmedia.com/api/Sonos` |
|  36 | HEARTS of SPACE           | AppLink    | `https://sonos-api.hos.com/ws` |
| 895 | HIT RADIO FFH             | Anonymous  | `https://resource.ffh.de/digital/sonos/soap.php?station=ffh` |
|  44 | Hype Machine              | Anonymous  | `https://api.hypem.com/api/sonos` |
| 310 | iBroadcast                | AppLink    | `https://sonos.ibroadcast.com/` |
| 327 | iChill Music Service      | AppLink    | `https://upgrade.ichillmusic.com/sonoscallback-production.php` |
| 271 | IDAGIO                    | AppLink    | `https://idg-prod-sonos.herokuapp.com/smapi/action` |
| 313 | Juuqo                     | AppLink    | `https://eazis-sonos.herokuapp.com/mp3` |
| 273 | Klassik Radio Plus        | AppLink    | `https://klassikradioplus.de/sonos` |
| 305 | Libby by OverDrive        | AppLink    | `https://libbysonos.overdrive.com/soap` |
| 711 | LITT Live                 | Anonymous  | `https://dash-api.com/sonos/MusicBrainzPHP/SonosAPI.php` |
| 221 | LivePhish+                | AppLink    | `https://sonos.nugs.net/soap/livephishoauth` |
| 181 | Mixcloud                  | DeviceLink | `https://app.mixcloud.com/sonos-app/` |
|  33 | Murfie                    | DeviceLink | `https://murfie.com/sonos/xmlapi` |
| 976 | Music Source              | AppLink    | `https://europe-west1-music-source-68a2d.cloudfunctions.net/app/` |
| 329 | Music Your Brand          | AppLink    | `https://api.musicyourbrand.com/sonos/soap` |
| 268 | myTuner Radio             | Anonymous  | `https://sonos.mytuner.mobi/api/v2/sonos/soap` |
| 277 | NRK Radio                 | Anonymous  | `https://psapi.nrk.no/sonos/sonos.svc` |
| 230 | NTS Radio                 | Anonymous  | `https://www.nts.live/smapi` |
| 222 | nugs                      | AppLink    | `https://sonos.nugs.net/soap/nugsoauth` |
| 324 | Piraten.FM                | Anonymous  | `https://piraten.fm/sonos` |
| 896 | planet radio              | Anonymous  | `https://resource.planetradio.de/digital/sonos/soap.php?station=planet` |
| 212 | Plex                      | AppLink    | `https://sonos.plex.tv/v2.2/soap` |
| 233 | Pocket Casts              | AppLink    | `https://integrations.pocketcasts.com/service/smapi` |
| 299 | POSmusic                  | AppLink    | `https://api.posmusic.com/sonos/v1/action` |
| 265 | PowerApp                  | Anonymous  | `https://api.powergroup.com.tr/Sonos/` |
|  31 | Qobuz                     | AppLink    | `https://www.qobuz.com/api.xml/0.3/sonos` |
| 827 | Radio Energy              | Anonymous  | `https://sonos.nrj.customers.nuuk.de/wsdl` |
| 585 | Radio France              | Anonymous  | `https://api.radiofrance.fr/voiceapi/sonos/smapi` |
| 294 | Radio Javan               | AppLink    | `https://rjsonos.app/musicservice` |
| 962 | Radio Paloma              | Anonymous  | `https://sonos.konsole-labs.com/radiopaloma.php` |
| 308 | Radio Paradise            | AppLink    | `https://api.radioparadise.com/sonos/soap/server.php` |
| 232 | Radioplayer               | Anonymous  | `https://rp-sonos.konsole-labs.com/` |
| 162 | radioPup                  | Anonymous  | `https://sonos.townsquaremedia.com/index.php` |
| 312 | Radioshop                 | AppLink    | `https://smapi.radioshop.net/SonosService.svc` |
| 666 | RadioSparx Royalty-Free Music | AppLink    | `https://www.radiosparx.com/module/radiosparx/sonos/default.cfm` |
| 223 | RauteMusik.FM             | Anonymous  | `https://sonos-smapi.rautemusik.fm/smapi` |
| 270 | Relisten                  | Anonymous  | `https://sonos.relisten.net/mp3` |
| 1412 | Reservatet.fm             | Anonymous  | `https://reservatet.fm/api/sonos` |
| 164 | Saavn                     | DeviceLink | `https://www.saavn.com/apps/sonos/SonosAPI.php` |
| 326 | Schlager Radio            | Anonymous  | `https://sonos.schlagerradio.de/wsdl/schlagerradio` |
| 516 | SomaFM Radio              | Anonymous  | `https://sonos.somafm.com/` |
| 303 | Sonos Radio               | DeviceLink | `https://sali.sonos.superhi.fi/smapi` |
| 160 | SoundCloud                | AppLink    | `https://api.sonos.integrate.soundcloud.com/` |
| 189 | SoundMachine              | AppLink    | `https://provider.sound-machine.com/sonosapi` |
| 218 | Soundsuit.fm              | AppLink    | `https://api.soundsuit.fm/smapi` |
| 295 | Soundtrack                | AppLink    | `https://sms.soundtrackyourbrand.com/soap` |
| 633 | Spectre                   | AppLink    | `https://vauxhall.spectre-music.com/smapi` |
|   9 | Spotify                   | AppLink    | `https://spotify-v5.ws.sonos.com/smapi` |
| 237 | storePlay                 | AppLink    | `https://v2.api.storeplay.com.au/sonos/service` |
| 226 | Storytel                  | AppLink    | `https://sonosapi.storytel.com/sonos/1.0` |
| 235 | Sveriges Radio            | Anonymous  | `https://sonos.sr.se/ws` |
| 1031 | Synerplay                 | AppLink    | `https://play.synerplay.com/api/sonos/wsdl` |
| 335 | The Lot Radio             | Anonymous  | `https://wy8hgbmpdj.us-east-1.awsapprunner.com/wsdl?wsdl` |
| 174 | TIDAL                     | DeviceLink | `https://smapi.tidal.com/sonos` |
| 287 | toníque                   | AppLink    | `https://sonos.tonique.com/ws` |
| 169 | Tribe of Noise            | DeviceLink | `https://sonos.tribeofnoise.com/server-v2.1.php` |
| 254 | TuneIn                    | Anonymous  | `https://legato.radiotime.com/Radio.asmx` |
| 333 | TuneIn (New)              | AppLink    | `https://sonos.tunein.com/SMRadio.asmx` |
| 193 | Tunify for Business       | AppLink    | `https://apis.tunify.com/t4-sonos-music-api/services/Sonos.wsdl` |
| 606 | Viaplay Radio             | Anonymous  | `https://sonos.viaplayradio.se/mp3` |
| 336 | Virgin Radio UK           | Anonymous  | `https://api.news.co.uk/audio/v1/smapi/virginradio/wsdl` |
| 317 | Yogi Tunes                | AppLink    | `https://yogi-tunes.ca/server.php` |
| 284 | YouTube Music             | AppLink    | `https://music.googleapis.com/v1:sendRequest` |

## Authentication

Sonos locked down communication with most service, by no longer allowing access to the needed access tokens. Those are (my guess) still saved inside the speakers but no longer accessible to external apps. The methods below allow you to get access to those credentials again.

The music services can choose between the following methods of authentication, Sonos [advices](https://developer.sonos.com/build/content-service-add-features/add-authentication/upgrade-to-oauth/) all partners to migrate to **AppLink** as a way of authenticating users.

| Policy | Name | Description |
|:-------|:-----|:------------|
| `Anonymous` | No authentication | Just works |
| `UserId` | UserId | Currently not supported by these docs (needs description) |
| `DeviceLink` | DeviceLink authentication | Somehow you'll need to link your device to the external service. |
| `AppLink` | AppLink authentication | Looks like the improved DeviceLink authentication. **Recommended by Sonos** |

### Authenticated requests

After login in with **DeviceLink** or **AppLink**, you should have a **Key** and a **Token**, these are valid for at least an hour, sometimes much longer.

If the key an token became invalid and you're trying to use them, you will get a new key and token in the response body in the soap error message and should retry the request (with the new key and token).

For every authenticated request you'll need the following data from your sonos speaker.

- `{DEVICE_ID}` - Load this string from the [SystemProperties Service](/services/system-properties.html#getstring) with the **GetString** method, supplying `R_TrialZPSerial`.
- `{HOUSEHOLD_ID}` - Load this from the [DeviceProperties service](/services/device-properties.html#gethouseholdid).
- `{KEY}` - Got with **AppLink** or **DeviceLink**
- `{TOKEN}` - Got with **AppLink** or **DeviceLink**
- `{ACTION_NAME}` - The name of the action

Then it's like every other soap call to the sonos device, do a **POST** soap request to the `MusicService -> SecureURI` with the following HTTP headers.

```text
SOAP-Action: "http://www.sonos.com/Services/1.1#%ACTION%"
Content-Type: text/xml; charset=utf8
Accept-Lanugage: en-US
Accept-Encoding: gzip, deflate
User-Agent: Linux UPnP/1.0 Sonos/29.3-87071 (ICRU_iPhone7,1); iOS/Version 8.2 (Build 12D508)
```

And the following body (with the action body inside off-course):

{% raw %}
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:s="http://www.sonos.com/Services/1.1">
  <soap:Header>
    <s:context>
      <s:timezone>+01:00</s:timezone>
    </s:context>
    <s:credentials>
      <s:deviceId>{DEVICE_ID}</s:deviceId>
      <s:loginToken>
        <s:token>{TOKEN}</s:token>
        <s:key>{KEY}</s:key>
        <s:householdId>{HOUSEHOLD_ID}</s:householdId>
      </s:loginToken>
    </s:credentials>
  </soap:Header>
  <soap:Body>
    <s:{ACTION_NAME}>
      {ACTION_BODY}
    </s:{ACTION_NAME}>
  </soap:Body>
</soap:Envelope>
```
{% endraw %}

### Authentication - Save tokens in device

Since you'll need to save the key and token somewhere, why not use the [SystemProperties -> Get/SetString methods](https://svrooij.io/sonos-api-docs/services/system-properties.html#setstring) to save them? Just a thought.

### AppLink

To do **AppLink** authentication you'll need to load the following values from the sonos speaker. These values are needed for **every** request to the service.

- `{DEVICE_ID}` - Load this string from the [SystemProperties Service](https://svrooij.io/sonos-api-docs/services/system-properties.html#getstring) with the **GetString** method, supplying `R_TrialZPSerial`.
- `{HOUSEHOLD_ID}` - Load this from the [DeviceProperties service](https://svrooij.io/sonos-api-docs/services/device-properties.html#gethouseholdid).

#### AppLink - Step 1

Do a **POST** soap request to the `MusicService -> SecureURI` with the following HTTP headers.

```text
SOAP-Action: "http://www.sonos.com/Services/1.1#getAppLink"
Content-Type: text/xml; charset=utf8
Accept-Lanugage: en-US
Accept-Encoding: gzip, deflate
User-Agent: Linux UPnP/1.0 Sonos/29.3-87071 (ICRU_iPhone7,1); iOS/Version 8.2 (Build 12D508)
```

And the following body the following body:
{% raw %}
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:s="http://www.sonos.com/Services/1.1">
  <soap:Header>
    <s:context>
      <s:timezone>+01:00</s:timezone>
    </s:context>
    <s:credentials>
      <s:deviceId>{DEVICE_ID}</s:deviceId>
      <s:loginToken>
        <s:token></s:token>
        <s:key></s:key>
        <s:householdId>{HOUSEHOLD_ID}</s:householdId>
      </s:loginToken>
    </s:credentials>
  </soap:Header>
  <soap:Body>
    <s:getAppLink>
      <s:householdId>{HOUSEHOLD_ID}</s:householdId>
    </s:getAppLink>
  </soap:Body>
</soap:Envelope>
```
{% endraw %}

You should get a response that looks like this (Spofity result):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Header />
    <soapenv:Body>
        <getAppLinkResponse xmlns="http://www.sonos.com/Services/1.1">
            <getAppLinkResult>
                <authorizeAccount>
                    <appUrlStringId>SIGN_IN</appUrlStringId>
                    <deviceLink>
                        <regUrl>https://spotify-v5.ws.sonos.com/deviceLink/home?linkCode=xxx</regUrl>
                        <linkCode>xxx</linkCode>
                        <showLinkCode>false</showLinkCode>
                    </deviceLink>
                </authorizeAccount>
                <createAccount>
                    <appUrlStringId>CREATE_NEW</appUrlStringId>
                </createAccount>
            </getAppLinkResult>
        </getAppLinkResponse>
    </soapenv:Body>
</soapenv:Envelope>
```

This results in:

- `regUrl` this is the URL you should visit in the browser, it will ask you to login.
- `linkCode` this is sometimes needed to fill in on the page. And you'll need it for the next step.

#### AppLink - Step 2

Continue **after** logging-in, with the following request.

Do a **POST** soap request to the `MusicService -> SecureURI` with the following http headers:

```text
SOAP-Action: "http://www.sonos.com/Services/1.1#getDeviceAuthToken"
Content-Type: text/xml; charset=utf8
Accept-Lanugage: en-US
Accept-Encoding: gzip, deflate
User-Agent: Linux UPnP/1.0 Sonos/29.3-87071 (ICRU_iPhone7,1); iOS/Version 8.2 (Build 12D508)
```

with the following body:

{% raw %}
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:s="http://www.sonos.com/Services/1.1">
  <soap:Header>
    <s:context>
      <s:timezone>+01:00</s:timezone>
    </s:context>
    <s:credentials>
      <s:deviceId>{DEVICE_ID}</s:deviceId>
      <s:loginToken>
        <s:token></s:token>
        <s:key></s:key>
        <s:householdId>{HOUSEHOLD_ID}</s:householdId>
      </s:loginToken>
    </s:credentials>
  </soap:Header>
  <soap:Body>
    <s:getDeviceAuthToken>
      <s:householdId>{HOUSEHOLD_ID}</s:householdId>
      <s:linkCode>{LINKCODE_FROM_STEP_ONE}</s:linkCode>
      <s:linkDeviceId>{DEVICE_ID}</s:linkDeviceId>
    </s:getDeviceAuthToken>
  </soap:Body>
</soap:Envelope>
```
{% endraw %}

This will result in a `privateKey` and an `authToken`, these need to be supplied with every request in the `credentials -> loginToken` soap header as `key` and `token`.

### DeviceLink

**DeviceLink** needs the same data as AppLink, see [above](#applink).

#### DeviceLink - step 1

Do a **POST** soap request to the `MusicService -> SecureURI` with the following HTTP headers.

```text
SOAP-Action: "http://www.sonos.com/Services/1.1#getDeviceLinkCode"
Content-Type: text/xml; charset=utf8
Accept-Lanugage: en-US
Accept-Encoding: gzip, deflate
User-Agent: Linux UPnP/1.0 Sonos/29.3-87071 (ICRU_iPhone7,1); iOS/Version 8.2 (Build 12D508)
```

With the following body:

{% raw %}
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:s="http://www.sonos.com/Services/1.1">
  <soap:Header>
    <s:context>
      <s:timezone>+01:00</s:timezone>
    </s:context>
    <s:credentials>
      <s:deviceId>{DEVICE_ID}</s:deviceId>
      <s:loginToken>
        <s:token></s:token>
        <s:key></s:key>
        <s:householdId>{HOUSEHOLD_ID}</s:householdId>
      </s:loginToken>
    </s:credentials>
  </soap:Header>
  <soap:Body>
    <s:getDeviceLinkCode>
      <s:householdId>{HOUSEHOLD_ID}</s:householdId>
    </s:getDeviceLinkCode>
  </soap:Body>
</soap:Envelope>
```
{% endraw %}

This will results in a response with at least the following data:

- `regUrl` this is the URL you should visit in the browser, it will ask you to login.
- `linkCode` this is sometimes needed to fill in on the page. And you'll need it for the next step.

Continue with [applink - step 2](#applink---step-2) after visiting the **regUrl** in the browser.

### Authentication -> UserId

Needs example

## Music services reference

For reference we [host](./music-services.json) the supported music services, this file is generated by executing `.\bin\run musicservices ip_of_your_sonos --saveJson ..\..\docs\music-services.json` from the `generator/sonos-docs` folder.

To regenerate the table above, run this `.\bin\run musicservices 192.168.x.x --docs` and replace the part in the docs.
