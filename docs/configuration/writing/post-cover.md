---
sidebar_position: 1
---

# 文章封面

通过在文章 front-matter 中设置 `cover` 字段来指定文章列表的封面图片 URL：

```yml
---
title: 我的一篇文章
cover: /assets/images/my-cover.jpg
---
```

`cover` 同时也会被用于 Open Graph 分享卡片（见 [Open Graph & Twitter Card](../seo/open-graph.md)），是 `og:image` 的首选来源。

> 若 `cover` 已经是 `http(s)://` 开头的完整 URL，则原样使用；否则会自动转换为绝对 URL。
