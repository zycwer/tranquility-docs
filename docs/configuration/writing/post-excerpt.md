---
sidebar_position: 9
---

# 文章摘要

文章列表中展示的摘要可以通过两种方式指定。

## 方式一：`<!--more-->` 截断

在文章 Markdown 中插入 `<!--more-->`，其之前的内容会成为文章列表中展示的摘要：

```markdown
这是摘要部分，会展示在文章列表中。

<!--more-->

这里是正文，仅文章详情页可见。
```

## 方式二：`abstract` front-matter（隐藏摘要）

在文章 front-matter 中设置 `abstract` 字段，该内容**仅出现在文章列表**中，不会出现在文章正文里：

```yaml
---
title: 隐藏摘要测试
date: 2024-01-27 11:58:32
tags: text
category: featTest
cover: assets/hozen-durdledoor.jpg
abstract: "这篇文章测试隐藏摘要功能。这段文字仅出现在文章列表，不出现在正文。"
---
```

## `abstract` 与 `<!--more-->` 的区别

| 方式 | 是否出现在列表 | 是否出现在正文 | 优先级 |
| --- | --- | --- | --- |
| `<!--more-->` 截断 | 是（截断前的内容） | 是（作为正文一部分） | — |
| `abstract` 字段 | 是 | **否** | 高于 `<!--more-->` |

当同时设置两者时，`abstract` 会覆盖 `<!--more-->` 生成的摘要在列表中的展示。`abstract` 的行为类似微信公众号的摘要：读者在列表看到一段引导文字，点进正文后不会重复看到。

> 参考 [Hexo Front-Matter 文档](https://hexo.io/zh-cn/docs/front-matter)。
