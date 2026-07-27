---
sidebar_position: 4
---

# CDN Configuration

Some theme features rely on third-party JS libraries (MathJax for math rendering, Mermaid for diagrams, DocSearch for search) loaded via CDN. Use the `cdn` config to specify the CDN source.

## Configuration

```yml
# CDN source for third-party libraries (MathJax / Mermaid / DocSearch)
# Default jsDelivr; unpkg is unstable in mainland China. Use https://npm.elemecdn.com for China
cdn: https://cdn.jsdelivr.net/npm
```

## Available CDN sources

| CDN | URL | Best for |
| --- | --- | --- |
| jsDelivr (default) | `https://cdn.jsdelivr.net/npm` | Global; occasionally slow in China |
| unpkg | `https://unpkg.com` | Stable abroad; slow in China |
| Eleme CDN | `https://npm.elemecdn.com` | Stable in China; recommended for China users |
| ByteDance CDN | `https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M` | China alternative |

### Recommended for China

```yml
cdn: https://npm.elemecdn.com
```

## How it works

The theme concatenates `cdn` + package name + version when loading libraries, e.g.:

```
MathJax:  {cdn}/mathjax@3/es5/tex-mml-chtml.js
Mermaid:  {cdn}/mermaid@10.9.3/dist/mermaid.min.js
```

Changing `cdn` switches all third-party libraries to the new source — no per-library config needed.

## Self-hosting libraries (offline)

If your site is deployed on an intranet or must be fully offline, download libraries to your blog's `source/` and load them via an injector:

1. Download the library to `source/lib/mathjax/tex-mml-chtml.js`
2. Inject the script in `scripts/` and disable the theme's built-in loading (set `mathjax: false`, then load it yourself on post pages)

> Self-hosting increases the blog repo size — only recommended for intranet or high-availability scenarios. CDN works fine for the vast majority of cases.

## Notes

- **Pinned Mermaid version**: the theme pins Mermaid to `10.9.3` to avoid `latest` breaking changes. Upgrading Mermaid requires updating the config — see [Mermaid Diagrams](../configuration/writing/mermaid.md).
- **CDN failure degradation**: if the CDN is unreachable, the corresponding feature (math, diagrams) won't work, but the rest of the page is unaffected.
