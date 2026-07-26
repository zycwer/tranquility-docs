---
sidebar_position: 9
---

# JSON-LD 结构化数据

主题根据页面类型自动注入 [schema.org](https://schema.org/) JSON-LD 结构化数据，帮助搜索引擎理解站点内容（Google 富媒体搜索结果会读取）。

## 页面类型与 Schema 类型

| 页面类型 | Schema 类型 | 主要字段 |
| --- | --- | --- |
| 关于页（`layout: about`） | `Person` | name、url、email、logo |
| 文章页 | `Article` | headline、datePublished、dateModified、author、image、keywords |
| 其他页面（首页、子页等） | `WebSite` | name、url、description |

无需配置，自动从主题配置与文章 front-matter 中读取数据。
