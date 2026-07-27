---
sidebar_position: 3
---

# Sitemap

The theme ships with a built-in `sitemap.xml` generator that produces a sitemap at build time, ready to submit to Google Search Console / Bing Webmaster / Baidu Zhanzhang.

```yml
sitemap:
  enable: true  # enabled by default; set to false to disable
```

## What the sitemap includes

The generated `sitemap.xml` includes:

- Homepage (`priority=1.0`, `changefreq=daily`)
- All posts (sorted by publish date descending, `priority=0.8`, `changefreq=weekly`, with `lastmod`)
- All pages (`priority=0.6`, `changefreq=monthly`)
- All category and tag archive pages (`priority=0.4`, `changefreq=weekly`)

All URLs are absolute (based on the `url` config in your blog's root `_config.yml`).
