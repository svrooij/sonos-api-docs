# Unofficial Sonos docs

[![Sonos api documentation][badge_sonos-docs]][link_sonos-docs]
[![Github Issues][badge_issues]][link_issues]
[![Sonos2mqtt][badge_sonos-mqtt]][link_sonos-mqtt]
[![Sonos cli][badge_sonos-cli]][link_sonos-cli]
[![Sonos typescript this library][badge_sonos-typescript]][link_sonos-typescript]

[![Support me on Github][badge_sponsor]][link_sponsor]
[![Follow on Twitter][badge_twitter]][link_twitter]

Sonos api documentation for the local UPNP api and a [generator](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs) to generate clients and documentation based on service discovery

This library is in no way connected to [Sonos](//en.wikipedia.org/wiki/Sonos). It's just a set of text files to document a hidden and **unsupported** api.

## Documentation

Check-out the (generated) documentation about all the SONOS UPNP services [svrooij.io/sonos-api-docs/services/](https://sonos.svrooij.io/services/)

[![Sonos api documentation][badge_sonos-docs]][link_sonos-docs]

[Read documentation](https://sonos.svrooij.io/)

### Manually documented

The [sonos services](https://sonos.svrooij.io/services/) have no documentation, that is why we manually created a [documentation.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/documentation.json) file. To easily add documentation to all services (that are generated with the generator). And it's json so you can easily use it yourself.

### Device discovery files

You can use the generator to generate your own discovery files, but we also have the files available for download.

| Player | Discovery file(s) |
| ------ | ----------------- |
| Sonos Play:1 | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S1-2.json) |
| Sonos Play:3 | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S3-2.json) |
| Sonos Play:5 (new) | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S6-2.json) |
| Sonos Playbar | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S9-2.json) |
| Sonos One | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S13-2.json) |
| Sonos One (mic) | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S18-2.json) |
| Sonos Beam | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S14-2.json) |
| Sonos Roam | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S27-2.json) |
| Sonos Sub | [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-Sub-2.json) |
| SYMFONISK Bookshelf| [S2](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S21-2.json) |
| Sonos Play:5 (old) | [S1](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S5-1.json) |

These files together with the documentation file, are combined to a extensive JSON file, that is used as an input for the generator.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://svrooij.nl"><img src="https://avatars2.githubusercontent.com/u/1292510?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stephan van Rooij</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=svrooij" title="Code">💻</a> <a href="https://github.com/svrooij/sonos-api-docs/commits?author=svrooij" title="Documentation">📖</a> <a href="#ideas-svrooij" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-svrooij" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/hklages"><img src="https://avatars3.githubusercontent.com/u/17273119?v=4?s=100" width="100px;" alt=""/><br /><sub><b>H. Klages</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=hklages" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/sschuberth"><img src="https://avatars0.githubusercontent.com/u/349154?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sebastian Schuberth</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=sschuberth" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jkossis"><img src="https://avatars.githubusercontent.com/u/1247832?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jason Kossis</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=jkossis" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

[badge_issues]: https://img.shields.io/github/issues/svrooij/sonos-api-docs?style=for-the-badge
[badge_sonos-cli]: https://img.shields.io/badge/sonos-cli-blue?style=for-the-badge
[badge_sonos-docs]: https://img.shields.io/badge/sonos-api-blue?style=for-the-badge
[badge_sonos-mqtt]: https://img.shields.io/badge/sonos-mqtt-blue?style=for-the-badge
[badge_sonos-typescript]: https://img.shields.io/badge/sonos-typescript-blue?style=for-the-badge
[badge_sponsor]: https://img.shields.io/github/sponsors/svrooij?logo=github&style=for-the-badge
[badge_twitter]: https://img.shields.io/twitter/follow/svrooij?logo=twitter&style=for-the-badge

[link_sponsor]: https://github.com/sponsors/svrooij
[link_issues]: https://github.com/svrooij/sonos-api-docs/issues
[link_sonos-cli]: https://github.com/svrooij/sonos-cli
[link_sonos-docs]: https://sonos.svrooij.io/
[link_sonos-mqtt]: https://sonos2mqtt.svrooij.io/
[link_sonos-typescript]: https://sonos-ts.svrooij.io/
[link_twitter]: https://twitter.com/svrooij
