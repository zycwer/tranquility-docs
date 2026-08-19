---
sidebar_position: 6
---

# Asset Fingerprinting

Automatically appends a **content hash** (`?v=xxxxxxxx`) to the theme's CSS / JS / image / font references, enabling "permanent strong caching + automatic invalidation". Enabled by default.

## How it works

```
Before a change: <link rel="stylesheet" href="/css/layout.css?v=03a4efc4">
After an edit:   <link rel="stylesheet" href="/css/layout.css?v=91b2d7f0">  ← hash changes, URL changes
```

1. At build time, a SHA-256 hash is computed from the **source file contents** (for CSS, the hash covers the `.styl` sources and all their `@import` dependencies; for fonts, the generated output)
2. The hash is appended to every local asset reference URL in the pages
3. With fingerprinted URLs, browsers can safely enable **one-year strong caching**
4. Any source change → hash change → URL change → cache invalidated automatically, returning visitors get fresh assets

## Configuration

```yml
fingerprint:
  enable: true   # enabled by default; set false to restore original URLs
```

## Coverage

| Location | Behavior |
| --- | --- |
| `src` / `href` attributes in HTML | ✅ `?v=` appended |
| `url()` inside inline `<style>` (e.g. `@font-face` fonts) | ✅ `?v=` appended |
| Font preload links | ✅ `?v=` appended |
| `hexo server` local preview | ✅ also applied, handy for debugging |

**Not touched**: external URLs (`http://`, `https://`), pure anchors (`#`), relative paths.

## Notes

- The hash is based on **file contents**, not the version number — a single character change alters it
- Works with the PWA Service Worker: when a fingerprinted asset changes, the SW cache key updates too, so visitors never get stuck on a stale page
- URLs that already have a query string only get their `v` parameter updated — no `?v=a?v=b` stacking
- Assets outside the theme (scripts you inject yourself, images inside posts) are unaffected
