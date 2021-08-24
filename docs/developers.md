---
layout: default
title: Developers
nav_order: 21
---

# Development of unofficial Sonos Documentation

A lot of the files you see in this repository are generated with a custom build [generator](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs).
This page describes how everything works together.

## Live preview on local machine

We created a `docker-compose.yml` file so you can really easy see the resulting webpage on your local machine. Go to the `docs` folder and start the docker container that will compile the document source to a webpage on every save.

```bash
cd ./docs

# Run container (in foreground, will stop with CTRL+C)
docker-compose up docs
```

Once you have this running it will show some output about installing some ruby packages (inside the container, no worries). And then show the following message, this means the page is now available at `http://localhost:4000`:

```text
docs_1  | Configuration file: /srv/jekyll/_config.yml
docs_1  |             Source: /srv/jekyll
docs_1  |        Destination: /srv/jekyll/_site
docs_1  |  Incremental build: enabled
docs_1  |       Generating...
docs_1  |       Remote Theme: Using theme svrooij/just-the-docs
docs_1  |        Jekyll Feed: Generating feed for posts
docs_1  |    GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.
docs_1  |                     done in 4.873 seconds.
docs_1  |                     Auto-regeneration may not work on some Windows versions.
docs_1  |                     Please see: https://github.com/Microsoft/BashOnWindows/issues/216
docs_1  |                     If it does not work, please upgrade Bash on Windows or run Jekyll with --no-watch.
docs_1  |  Auto-regeneration: enabled for '/srv/jekyll'
docs_1  | LiveReload address: http://0.0.0.0:35729
docs_1  |     Server address: http://0.0.0.0:4000//
docs_1  |   Server running... press ctrl-c to stop.
docs_1  |         LiveReload: Browser connected
```

## documentation.json

The [documentation.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/documentation.json) file is where we could use some help. You don't need to know programming to describe all the actions sonos has.

This file is used as one of the inputs for the generator.
It allows us to set a nice description for each service and action. It also offers a way to describe each input/output parameter.

For example [this part](https://github.com/svrooij/sonos-api-docs/blob/25aad3a3a25c029514669869705597df03c2b5d2/docs/documentation.json#L6-L37) is the source for the documentation you see on [this page]({{ '/services/alarm-clock.html' | relative_url }}).

## Custom generator

We build a custom [generator](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs) to do several things.

### Discover services from sonos speaker

You can use the generator to generate [device discovery files]({{ '/#device-discovery-files' | relative_url }}). For each model we generated a discovery json, as available on main page. We generate this file by parsing the device discovery document available at `http://{sonos_ip}:1400/xml/device_description.xml`. Not every model has the same services, but it seems that if a service is available it's the same as all other models that have that service.

(Re)generate discovery files:

```bash
# Fork the repository
# Clone to local folder
# Go to folder
cd /generator/sonos-docs
# Install required packages
npm install
# on Windows
.\bin\run services {sonos-ip}
# on Unix/Mac
./bin/run services {sonos-ip}
```

### Combine discovery files and documentation

If you changed the [documentation.json](#documentation.json) file or if you added/updated discovery files, you need to combine the two into one file, the **intermediate.json** file.

This file is the result of the the manual documentation and the device discovery files. This file is almost 8000 lines of json at the moment, which is why it is ignored in git.
Being able to inspect this json file should really help in debugging the generator.

You can generate this file by running the following command:

```bash
# Fork the repository
# Clone to local folder
# Go to folder
cd /generator/sonos-docs
# Install required packages
npm install
# on windows short for .\\bin\\run combine --docsFile=../../docs/documentation.json --folder=data
npm run intermediate-win
# on Unix/mac short for ./bin/run combine --docsFile=../../docs/documentation.json --folder=data
npm run intermediate
```

### Regenerate documentation

Once you generated the **intermediate.json** file, you can use the generator to (re)generate the [service documentation]({{ '/services' | relative_url }}). This step is mandatory if you changed either the **documentation.json** or if you added/updated one of the discovery files. 

The resulting files, are **not to be changed manually**, since changes will get lost upon the next generation.

| Template | Resulting file(s) |
|-----------|------------------|
| [services-index.hbs](https://github.com/svrooij/sonos-api-docs/blob/main/generator/sonos-docs/templates/docs/services-index.hbs)| [docs/services/index.md](https://github.com/svrooij/sonos-api-docs/blob/main/docs/services/index.md) |
| [service.hbs](https://github.com/svrooij/sonos-api-docs/blob/main/generator/sonos-docs/templates/docs/service.hbs) | [docs/services/*.md](https://github.com/svrooij/sonos-api-docs/tree/main/docs/services) |

Regenerate documentation:

```bash
# Fork, clone, go to '/generator/sonos-docs' and run npm install
# generate intermediate, see above

# Regenerate documentation
# on windows, short for .\\bin\\run generate docs ../../docs
npm run docs-win
# on unix/mac, short for ./bin/run generate docs ../../docs
npm run docs
```

### Use generator for other library

The generator uses [Handlebars](https://handlebarsjs.com/) templates. A template is actually a folder with at least a [template.json](https://github.com/svrooij/sonos-api-docs/blob/main/generator/sonos-docs/templates/docs/template.json) file and one or more [template files](https://github.com/svrooij/sonos-api-docs/blob/main/generator/sonos-docs/templates/docs/services-index.hbs).

The template.json file gives some basic information about the template, the author of that template and which files to use.

1. File usage `index`, will use the data from intermediate.json as input to produce **one file**.
2. File usage `service`, will use the data from each service to produce **one file per service**, be sure to use `{snService}` or `{service}` in the **outputFile**.

Be sure to check out the [docs template](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs/templates/docs) to get started. Or the [ts template](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs/templates/ts), which is used to generate [sonos-ts](https://svrooij.io/node-sonos-ts/).


```bash
# Fork, clone, go to '/generator/sonos-docs' and run npm install
# generate intermediate, see above

# generate library
# [template-folder] can either be a folder relative to the current location, a full path to a template folder or the name of the folder inside the generator folder.
# [root-output-folder] in what folder (relative or full path) should the resulting files be placed. 
# on windows
.\bin\run generate [template-folder] [root-output-folder]
# on unix/mac
./bin/run generate [template-folder] [root-output-folder]
```
