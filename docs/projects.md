---
layout: default
title: Apps and libraries
nav_order: 8
---

{% include apps.html %}

{% include libraries.html %}

### Auto generated

This page is generated from [projects.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/_data/projects.json) if you want a project added to this list, send us a PR. Projects are ordered alphabetical, but projects that use the generator are displayed first.

When you edit this file in VSCode, it's automatically checked for following the schema. You can also validate the **projects.json** from the command line file before submitting your PR:

```shell
npx ajv-cli -d ./docs/_data/projects.json -s ./docs/schema/projects.json -r ./docs/schema/author.json
```
