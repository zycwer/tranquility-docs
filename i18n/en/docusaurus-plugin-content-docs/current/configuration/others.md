---
sidebar_position: 29
---

# Others

For other config options, see the comments in the config file:

- Baidu SEO (`baidu_site_verification`, `baidu_analytics`)
- Google Analytics (`google_ad`)
- Algolia search (`algolia` — enable after replacing with real credentials)
- etc.

```yml
# Baidu Webmaster tools verification.
# See: https://ziyuan.baidu.com/site
baidu_site_verification:

# Baidu Analytics
# See: https://tongji.baidu.com
baidu_analytics: # <app_id>

algolia:
  enable: false # enable after replacing with real Algolia credentials
  appId: appId
  apiKey: apiKey
  indexName: indexName
  insights: true
  debug: false

google_ad:
  enable: false
  meta_tag: "G-XXXXXXXXXX" # Google Analytics meta tag
```

## Post Excerpt

Using `<!--more-->` in a markdown file truncates the post so the content before it becomes the excerpt shown in the article list. You can also set an `abstract` field in the [front-matter](https://hexo.io/docs/front-matter) for a hidden excerpt.

The `abstract` setting differs from an `excerpt` created via `<!--more-->`. The `abstract` content does not appear in the post body, and setting `abstract` overrides `excerpt` in the article list display.

The `abstract` feature behaves like WeChat Official Account's abstract.

```yml
---
title: Hidden Excerpt Test
date: 2024-01-27 11:58:32
tags: text
category: featTest
cover: assets/hozen-durdledoor.jpg
abstract: "This post tests the hidden excerpt feature. This text only appears in the article list, not in the post body."
---
```

## Comments

:::note
The Gitalk comments feature built into the original theme has been removed in this fork (the original repo is archived, Gitalk is unmaintained and depends on GitHub OAuth). For comments, we recommend [giscus](https://giscus.app/) (based on GitHub Discussions) or [Waline](https://waline.js.org/) — embed the corresponding component via a custom `layout` or directly in a page file under `source`.
:::
