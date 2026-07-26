---
sidebar_position: 27
---

# RSS 自动发现

主题会在所有页面 `<head>` 中注入 RSS 自动发现标签：

```xml
<link rel="alternate" type="application/rss+xml" title="..." href="https://example.com/feed.xml">
```

浏览器与 RSS 阅读器据此自动发现站点的订阅源，读者无需手动输入 feed 地址即可订阅。

## 自动注入 link rel=alternate

主题在 `layout/_partials/layout.njk` 中按以下优先级注入 `<link rel="alternate">`：

1. **`config.feed` 读取**：若博客根目录 `_config.yml` 中存在 `feed` 配置（通常由 `hexo-generator-feed` 生成），则使用 `config.feed.path` 作为订阅地址；
2. **回退到 `recent_updates.rss_url`**：若 `config.feed` 不存在，但 `recent_updates.enable: true` 且配置了 `recent_updates.rss_url`，则使用该地址；
3. 若以上两者都未配置，则不注入此标签（无副作用）。

## 优先级

| 优先级 | 来源 |
| --- | --- |
| 1 | 博客根目录 `_config.yml` 的 `feed` 配置（`config.feed.path`） |
| 2 | `recent_updates.rss_url` |

> 建议在博客根目录 `_config.yml` 中通过 [`hexo-generator-feed`](https://github.com/hexojs/hexo-generator-feed) 生成 RSS，并把 `recent_updates.rss_url` 指向同一地址，这样「最近更新卡片」与「RSS 自动发现」共用一个订阅源。
