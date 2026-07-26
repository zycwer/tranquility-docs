---
sidebar_position: 9
---

# JSON-LD Structured Data

The theme automatically injects [schema.org](https://schema.org/) JSON-LD structured data based on the page type, helping search engines understand the site content (read by Google rich results):

| Page type | Schema type | Main fields |
| --- | --- | --- |
| About page (`layout: about`) | `Person` | name, url, email, logo |
| Post page | `Article` | headline, datePublished, dateModified, author, image, keywords |
| Other pages (homepage, subpages, etc.) | `WebSite` | name, url, description |

No configuration needed — data is read automatically from the theme config and post front-matter.
