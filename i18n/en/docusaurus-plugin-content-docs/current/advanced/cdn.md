---
sidebar_position: 4
---

# CDN Configuration

Some theme features rely on third-party JS libraries (MathJax for math rendering, Mermaid for diagrams, DocSearch for search) loaded via CDN. Use the `cdn` config to specify the CDN source.

## Configuration

```yml
# CDN source for third-party libraries (MathJax / Mermaid / DocSearch)
# Default npmmirror (Alibaba's China mirror, stable on mainland networks);
# switch to https://cdn.jsdelivr.net/npm for overseas audiences
cdn: https://registry.npmmirror.com
```

## Available CDN sources

| CDN | URL | Best for |
| --- | --- | --- |
| npmmirror (default) | `https://registry.npmmirror.com` | Alibaba's China mirror; stable on mainland networks — recommended for China users |
| jsDelivr | `https://cdn.jsdelivr.net/npm` | Global; unreachable on some mainland networks (the reason the default was switched) |
| unpkg | `https://unpkg.com` | Global alternative; slow in China |

## How it works

The theme auto-adapts to two URL formats based on the `cdn` value:

- **npmmirror**: `{cdn}/{package}/{version}/files/{path}`
- **jsDelivr / unpkg**: `{cdn}/{package}@{version}/{path}`

For example, with npmmirror configured:

```
MathJax:  https://registry.npmmirror.com/mathjax/3.2.2/files/es5/tex-mml-chtml.js
Mermaid:  https://registry.npmmirror.com/mermaid/10.9.3/files/dist/mermaid.min.js
```

Changing `cdn` switches all third-party libraries to the new source — no per-library config needed.

## Per-library override (mermaid.url / mathjax URL)

`cdn` is the global source. Mermaid and MathJax additionally support per-library overrides that take precedence over the `cdn` composition (see [Mermaid Diagrams](../configuration/writing/mermaid.md) and [Math Formulas](../configuration/writing/math.md)):

```yml
mermaid:
  enable: true
  url: /vendors/mermaid.min.js # full URL: local path or any reachable source

mathjax: /vendors/tex-svg.js # a string is a full URL; true still uses the cdn composition
```

This is the most thorough fix when the CDN source is unreachable — local files are same-origin with the site, with zero third-party dependencies.

## Self-hosting libraries (offline)

If your site is deployed on an intranet or must be fully offline, download libraries to your blog's `source/`:

1. Download the library files to `source/vendors/` (e.g. `mermaid.min.js`, `tex-svg.js`)
2. Point `mermaid.url` / `mathjax` at the local paths (see the section above)

> Self-hosting increases the blog repo size — only recommended for intranet or high-availability scenarios. CDN works fine for the vast majority of cases.

## Notes

- **Pinned Mermaid version**: the theme pins Mermaid to `10.9.3` to avoid `latest` breaking changes. Upgrading Mermaid requires updating the config — see [Mermaid Diagrams](../configuration/writing/mermaid.md).
- **CDN failure degradation**: if the CDN is unreachable, the corresponding feature (math, diagrams) won't work, but the rest of the page is unaffected; a visible failure notice appears at the top of the post body and the raw text stays readable.
