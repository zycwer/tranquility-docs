---
sidebar_position: 9
---

# Post Excerpt

The excerpt shown in the article list can be specified in two ways.

## Option 1: `<!--more-->` truncation

Insert `<!--more-->` in your post Markdown — content before it becomes the excerpt shown in the article list:

```markdown
This is the excerpt, shown in the article list.

<!--more-->

This is the body, only visible on the post detail page.
```

## Option 2: `abstract` front-matter (hidden excerpt)

Set the `abstract` field in the post front-matter. This content **only appears in the article list**, never in the post body:

```yaml
---
title: Hidden Excerpt Test
date: 2024-01-27 11:58:32
tags: text
category: featTest
cover: assets/hozen-durdledoor.jpg
abstract: "This post tests the hidden excerpt feature. This text only appears in the article list, not in the post body."
---
```

## `abstract` vs `<!--more-->`

| Method | In article list | In post body | Priority |
| --- | --- | --- | --- |
| `<!--more-->` truncation | Yes (content before the tag) | Yes (part of the body) | — |
| `abstract` field | Yes | **No** | Overrides `<!--more-->` |

When both are set, `abstract` overrides the `<!--more-->`-generated excerpt in the list. `abstract` behaves like a WeChat Official Account abstract: readers see an intro in the list, but it doesn't repeat in the body.

> See the [Hexo Front-Matter docs](https://hexo.io/docs/front-matter).
