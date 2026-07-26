---
sidebar_position: 8
---

# Open Graph & Twitter Card

主题自动为每个页面注入 Open Graph 与 Twitter Card meta 标签，用于社交平台分享时展示标题、描述和封面图（微信、Telegram、Twitter/X、Slack、Discord 等均会读取）。

无需额外配置，标签会自动生成：

- `og:type` —— 文章页为 `article`，其余页面为 `website`
- `og:title` / `og:description` —— 取自页面标题与描述（文章页取摘要）
- `og:url` —— 页面绝对 URL（通过 `full_url_for` 生成）
- `og:site_name` —— 取自博客根目录 `_config.yml` 的 `title`
- `og:image` —— 优先级：文章 `cover` → 首页 `index.photo` → `logo`
- `twitter:card` —— 默认 `summary_large_image`（有封面时）或 `summary`

## 自动注入的标签列表

| 标签 | 取值来源 |
| --- | --- |
| `og:type` | 文章页 `article`，其他 `website` |
| `og:title` | 页面标题 |
| `og:description` | 页面描述 / 文章摘要 |
| `og:url` | `full_url_for(page.path)` |
| `og:site_name` | `_config.yml` 的 `title` |
| `og:image` | 文章 `cover` → `index.photo` → `logo` |
| `twitter:card` | 有封面 `summary_large_image`，否则 `summary` |

## og:image 优先级

| 优先级 | 来源 |
| --- | --- |
| 1 | 文章 front-matter 的 `cover` 字段 |
| 2 | 首页 `index.photo` 配置 |
| 3 | 主题 `logo` 配置 |

## cover 字段

如需自定义分享图，在文章 front-matter 中设置 `cover` 字段（既用于文章列表封面，也用于分享卡片）：

```yml
---
title: 我的一篇文章
cover: /assets/images/my-cover.jpg
---
```

> `og:image` 会自动转换为绝对 URL。若 `cover` 已经是 `http(s)://` 开头的完整 URL，则原样使用。
