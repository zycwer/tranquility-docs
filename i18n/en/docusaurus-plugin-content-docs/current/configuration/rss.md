---
sidebar_position: 27
---

# RSS Auto-Discovery

The theme injects an RSS auto-discovery tag into the `<head>` of every page:

```html
<link rel="alternate" type="application/rss+xml" title="..." href="https://example.com/feed.xml">
```

Browsers and RSS readers use this to auto-discover the site's feed, so readers can subscribe without manually entering the feed URL. The URL is taken from `recent_updates.rss_url` in the [Recent Updates](./recent-updates.md) config; if `recent_updates` is not configured, this tag is not injected (no side effects).

:::tip
Recommended: generate RSS on your Hexo blog via [`hexo-generator-feed`](https://github.com/hexojs/hexo-generator-feed), and point `recent_updates.rss_url` to the same URL — that way "Recent Updates cards" and "RSS auto-discovery" share one feed.
:::
