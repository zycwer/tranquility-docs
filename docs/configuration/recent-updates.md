---
sidebar_position: 7
---

# 最近更新（RSS 聚合）

「最近更新」把**外部博客**的最新文章以卡片形式展示在首页，左右切换浏览（最多 3 篇）。适合 `landing` 模式：本站不含文章，把独立博客的最新动态聚合到个人主页。

## 配置

```yml
recent_updates:
  enable: true
  rss_url: https://example.com/feed.xml  # 博客 RSS 源地址
  max_count: 3        # 最多展示的卡片数量（建议 ≤ 3）
  title: 最近更新      # 区块标题
  show_excerpt: true   # 是否展示摘要
  excerpt_length: 80   # 摘要最大字符数
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `enable` | 是否开启最近更新 |
| `rss_url` | 博客 RSS 源地址 |
| `max_count` | 最多展示的卡片数量（建议 ≤ 3） |
| `title` | 区块标题 |
| `show_excerpt` | 是否展示摘要 |
| `excerpt_length` | 摘要最大字符数 |

## 工作原理

主题在 **`hexo generate` 构建时**于服务端抓取并解析 RSS，把文章数据直接渲染进静态 HTML。这样做的优点：

- **无 CORS 问题**：客户端不需要跨域请求 RSS；
- **国内加载稳定**：不依赖任何第三方代理（如 rss2json、allorigins），生成的是纯静态页面；
- **SEO 友好**：文章卡片直接存在于 HTML 中。

> 抓取失败不会中断构建，只会打印警告并隐藏首页的「最近更新」区块。因此即使博客 RSS 暂时不可达，站点仍可正常生成。
>
> 由于数据在构建时抓取，博客更新后需要**重新 `hexo generate`** 才会刷新首页卡片（可配合 CI / 定时构建自动刷新）。

## RSS 结构要求

主题内置一个轻量解析器（无需额外依赖），支持 **RSS 2.0** 与 **Atom 1.0** 两种常见格式。绝大多数博客系统（Hexo 的 `hexo-generator-feed`、WordPress、Ghost、Typecho 等）默认生成的订阅源即符合要求。

### RSS 2.0

每个 `<item>` 需包含：

| 字段 | 标签 | 是否必需 | 说明 |
| --- | --- | --- | --- |
| 标题 | `<title>` | 是 | 文章标题 |
| 链接 | `<link>` | 是 | 文章地址 |
| 日期 | `<pubDate>` | 是 | RFC 822 格式，如 `Mon, 15 Jan 2024 10:00:00 +0800` |
| 摘要 | `<description>` 或 `<content:encoded>` | 否 | 支持 CDATA 与 HTML，会自动去标签并截断 |

### Atom 1.0

每个 `<entry>` 需包含：

| 字段 | 标签 | 是否必需 | 说明 |
| --- | --- | --- | --- |
| 标题 | `<title>` | 是 | 文章标题 |
| 链接 | `<link href="..."/>` | 是 | 文章地址（取 `href` 属性） |
| 日期 | `<updated>` 或 `<published>` | 是 | ISO 8601 格式，如 `2024-01-15T10:00:00Z` |
| 摘要 | `<summary>` 或 `<content>` | 否 | 支持 CDATA 与 HTML，会自动去标签并截断 |

## 示例（RSS 2.0）

```xml
<rss version="2.0">
  <channel>
    <item>
      <title>我的第一篇文章</title>
      <link>https://example.com/post-1</link>
      <pubDate>Mon, 15 Jan 2024 10:00:00 +0800</pubDate>
      <description><![CDATA[<p>文章摘要内容。</p>]]></description>
    </item>
  </channel>
</rss>
```

> 推荐使用 Hexo 博客安装 [`hexo-generator-feed`](https://github.com/hexojs/hexo-generator-feed) 生成 RSS：在博客根目录 `_config.yml` 中配置 `feed: { type: atom, path: feed.xml, limit: 20 }`，然后将 `recent_updates.rss_url` 指向该 feed 地址即可。
