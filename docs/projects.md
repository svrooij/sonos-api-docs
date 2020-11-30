---
layout: default
title: Projects
nav_order: 10
---

# Projects

This page describes a few known projects that use the local sonos api.

## Libraries

{% for project in site.data.projects.libraries %}
### [{{project.name}}]({{project.link}})

{{project.description}}

Tags: {% for tag in project.tags %}`{{tag}}`{% if forloop.last == false %} / {% endif %}{% endfor %}

Created by [{{project.author.name}}]({{project.author.link}}).{% if project.usesGenerator == true %} ✔ This library uses the generator to create a strong-typed client.{% endif %}
{% endfor %}

## Apps

<!-- markdownlint-disable MD024 -->
{% for project in site.data.projects.apps %}
### [{{project.name}}]({{project.link}})

{{project.description}}

Tags: {% for tag in project.tags %}`{{tag}}`{% if forloop.last == false %} / {% endif %}{% endfor %}

Created by [{{project.author.name}}]({{project.author.link}}).{% if project.usesGenerator == true %} ✔ This app uses the generator to create a strong-typed client.{% endif %}
{% endfor %}

### Auto generated

This page is generated from [projects.json](https://github.com/svrooij/sonos-api-docs/blob/main/docs/_data/projects.json) if you want a project added to this list, send us a PR.