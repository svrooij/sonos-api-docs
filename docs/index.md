---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
nav_order: 1
permalink: /
---

# sonos-api-docs

Sonos api documentation for the local UPNP api and a [generator](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs) to generate clients and documentation based on service discovery

[![Join us on Discord][badge_discord]][link_discord]
[![github issues][badge_issues]][link_issues]
[![Support me on Github][badge_sponsor]][link_sponsor]

This library is in no way connected to [Sonos](//en.wikipedia.org/wiki/Sonos). It's just a set of text files to document a hidden and **unsupported** api.

## Documentation

Check-out the (generated) documentation about all the SONOS UPNP services [svrooij.io/sonos-api-docs/services/](services/)

### Manual documentation file

We cannot get all the information by using service discovery, there is one file that we manually edit to document some the actions (accepting pull-request to improve).

- View/edit source [source documentation.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/documentation.json)
- Download [documentation.json](http://svrooij.io/sonos-api-docs/documentation.json)

This file has a [documentation json schema](https://svrooij.io/sonos-api-docs/schema/documentation.json) which means VS Code will guide you when editing this file.

### Update documentation

If you change the [documentation](#manual-documentation-file) file or if you did service discovery for a new device. You can update the documentation files with the following commands:

```shell
# Go to generation folder
cd generator/sonos-docs

# Generate intermediate file
npm run intermediate
# or ./bin/run combine --docsFile=../../docs/documentation.json --models=S1-1,S5-1,S9-1 --folder=data

# Generate documentation
npm run docs
# or ./bin/run generate docs ../../docs
```

## Generator

You can find the generator [here](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs) and use it to generate your own sonos client in your preferred language.

### Device discovery files

You can use the generator to generate your own discovery files, but we also have the files available for download.

- [Sonos Play:1 - software generation 1](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S1-1.json)
- [Sonos Play:5 - software generation 1](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S5-1.json)
- [Sonos Playbar - software generation 1](https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/sonos-S9-1.json)

These files toghether with the documentation file, are combined to a extensive JSON file, that is used as an input for the generator.

### Templates

The generator uses [handlebars.js templates](https://handlebarsjs.com/) to generate the documentation/strong typed clients. Check-out the [docs template](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs/templates/docs) as a sample to develop your own templates.

A template is a folder with a [template.json](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs/templates/docs/template.json) file, that describes the template and specifies what templates should be used to either generate an index (all services in a single file), or a seperate file for each service.
The template.json also has a [json schema](https://svrooij.io/sonos-api-docs/schema/template.json) so VS Code will guide you when creating your own template.

## Community

[![Join us on Discord][badge_discord]][link_discord]

If you need help building an app that talks to your sonos speakers, or you want to share some of your findings. [Join us on Discord][link_discord].

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://svrooij.nl"><img src="https://avatars2.githubusercontent.com/u/1292510?v=4" width="100px;" alt=""/><br /><sub><b>Stephan van Rooij</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=svrooij" title="Code">💻</a> <a href="https://github.com/svrooij/sonos-api-docs/commits?author=svrooij" title="Documentation">📖</a> <a href="#ideas-svrooij" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-svrooij" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/hklages"><img src="https://avatars3.githubusercontent.com/u/17273119?v=4" width="100px;" alt=""/><br /><sub><b>H. Klages</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=hklages" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/sschuberth"><img src="https://avatars0.githubusercontent.com/u/349154?v=4" width="100px;" alt=""/><br /><sub><b>Sebastian Schuberth</b></sub></a><br /><a href="https://github.com/svrooij/sonos-api-docs/commits?author=sschuberth" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

[badge_discord]: https://img.shields.io/discord/782374564054564875
[badge_issues]: https://img.shields.io/github/issues/svrooij/sonos-api-docs
[badge_sponsor]: https://img.shields.io/badge/Sponsor-on%20Github-red

[link_discord]: https://discord.gg/ZUdEuhh5RF
[link_sponsor]: https://github.com/sponsors/svrooij
[link_issues]: https://github.com/svrooij/sonos-api-docs/issues
