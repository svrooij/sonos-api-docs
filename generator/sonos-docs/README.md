# Sonos client generator `@svrooij/sonos-docs`
<!-- markdownlint-disable -->

CLI tool to generate documentation for the undocumented sonos api

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@svrooij/sonos-docs.svg)](https://www.npmjs.com/package/@svrooij/sonos-docs)
[![Downloads/week](https://img.shields.io/npm/dw/@svrooij/sonos-docs.svg)](https://www.npmjs.com/package/@svrooij/sonos-docs)
[![License](https://img.shields.io/npm/l/@svrooij/sonos-docs.svg)](https://github.com/svrooij/sonos-api-docs/blob/master/generator/sonos-docs/package.json)

<!-- toc -->
* [Sonos client generator `@svrooij/sonos-docs`](#sonos-client-generator-svrooijsonos-docs)
* [🏗 Usage](#-usage)
* [🔨 Commands](#-commands)
<!-- tocstop -->
# 🏗 Usage
<!-- usage -->
```sh-session
$ npm install -g @svrooij/sonos-docs
$ sonos-docs COMMAND
running command...
$ sonos-docs (--version)
@svrooij/sonos-docs/1.4.0 linux-x64 node-v22.23.0
$ sonos-docs --help [COMMAND]
USAGE
  $ sonos-docs COMMAND
...
```
<!-- usagestop -->

# 🔨 Commands

<!-- commands -->
* [`sonos-docs combine`](#sonos-docs-combine)
* [`sonos-docs generate TEMPLATE OUTPUT`](#sonos-docs-generate-template-output)
* [`sonos-docs musicservices IP`](#sonos-docs-musicservices-ip)
* [`sonos-docs services IP`](#sonos-docs-services-ip)

## `sonos-docs combine`

Generate combined.json file by combining the documentation file and the discovered services.

```
USAGE
  $ sonos-docs combine [--docsFile <value> | --docsUrl <value>] [--models <value>] [--folder <value>]
    [--discoveryUrl <value>] [--out <value>]

FLAGS
  --discoveryUrl=<value>  [default: https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/] Base
                          url to load the discovery files from
  --docsFile=<value>      File location of documentation, instead of url.
  --docsUrl=<value>       [default:
                          https://raw.githubusercontent.com/svrooij/sonos-api-docs/main/docs/documentation.json] The url
                          of the documentation, this is just to override the documentation url
  --folder=<value>        Load discovered services from this folder. Loaded from repository if empty
  --models=<value>        [default:
                          S1-2,S3-2,S6-2,S9-2,S13-2,S14-2,S16-2,S17-2,S18-2,S21-2,S27-2,S33-2,S36-2,S38-2,S39-2,Sub-2]
                          Models to use, separated by comma. as {model}-{softwareGen}
  --out=<value>           [default: .cache/combined.json] Output filename

DESCRIPTION
  Generate combined.json file by combining the documentation file and the discovered services.
```

_See code: [src/commands/combine.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.4.0/src/commands/combine.ts)_

## `sonos-docs generate TEMPLATE OUTPUT`

Generate files based on the intermediate file and a template.

```
USAGE
  $ sonos-docs generate TEMPLATE OUTPUT [-i <value>]

ARGUMENTS
  TEMPLATE  The template to use, either a folder relative to the current or a folder included in the generator
  OUTPUT    The root directory where the files should be generated

FLAGS
  -i, --combined=<value>  [default: .cache/combined.json] combined documentation file to use. generate with 'combine'

DESCRIPTION
  Generate files based on the intermediate file and a template.
```

_See code: [src/commands/generate.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.4.0/src/commands/generate.ts)_

## `sonos-docs musicservices IP`

List music services available on a Sonos speaker

```
USAGE
  $ sonos-docs musicservices IP [--show] [--docs] [--saveJson <value>]

ARGUMENTS
  IP  The IP of the sonos speaker to load the music services

FLAGS
  --docs              Show a markdown table
  --saveJson=<value>  If set, save music services as json
  --show              Show the music services in a table

DESCRIPTION
  List music services available on a Sonos speaker
```

_See code: [src/commands/musicservices.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.4.0/src/commands/musicservices.ts)_

## `sonos-docs services IP`

Fetch device discovery document and generate json file

```
USAGE
  $ sonos-docs services IP [-f <value>] [-d]

ARGUMENTS
  IP  The IP of the sonos to do service discovery for.

FLAGS
  -d, --dryRun
  -f, --folder=<value>  [default: data] Folder to write discovered services.

DESCRIPTION
  Fetch device discovery document and generate json file
```

_See code: [src/commands/services.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.4.0/src/commands/services.ts)_
<!-- commandsstop -->
