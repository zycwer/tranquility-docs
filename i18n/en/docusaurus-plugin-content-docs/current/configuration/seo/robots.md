---
sidebar_position: 4
---

# robots.txt

The theme ships with a built-in `robots.txt` generator that produces a crawl-control file at build time, allowing search engines to crawl pages, blocking resource directories (CSS/JS/fonts), and declaring the sitemap URL.

```yml
robots:
  enable: true
  # disallow:  # custom paths to disallow indexing (defaults to /css/ /js/ /font/ if unset)
  #   - /css/
  #   - /js/
```

## What the robots.txt includes

The generated `robots.txt` includes:

- `User-agent: *` / `Allow: /` — allow all crawlers to access the whole site
- `Disallow: /css/`, `/js/`, `/font/` — block pure-resource directories from being indexed as standalone resources
- `Sitemap: <absolute-url>/sitemap.xml` — auto-references the sitemap (unless sitemap is disabled)
