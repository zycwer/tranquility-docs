---
sidebar_position: 4
---

# 子页

子页的配置在 `subpage` 下进行：

```yml
subpage: # 开启"子页"功能，详见 README
  enable: true  # 是否开启子页功能
  pages:  # 子页数组
    - name: # 子页标识，如 developer
      path: # 若不设置则默认使用 name
      title: # 显式在导航栏的菜单名，如 开发者
      icon: # 图标的路径
      description: # 描述
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `enable` | 是否开启子页功能 |
| `pages` | 子页数组 |
| `pages[].name` | 子页标识，文章 `category` 字段会对应此值 |
| `pages[].path` | 子页路径，若不设置则默认使用 `name` |
| `pages[].title` | 展示在导航栏的菜单名 |
| `pages[].icon` | 子页图标的路径 |
| `pages[].description` | 子页描述 |

## 关闭子页行为

若关闭子页功能（`enable: false`），则导航栏只会有一个「博客」按钮，点击该按钮就会进入所有文章列表。

## 开启子页行为

若开启子页功能（`enable: true`），则必须配置 `pages` 数组。配置完毕后，`pages` 数组中的所有项都会以 `title` 为名展示在网页的头部导航栏，点击每一项进入相应的子页。`icon` 和 `description` 用于配置子页中的图标和表述。

## 文章 category 字段对应子页 name

新建文章后，只需要把文章头部的 `category` 字段设置为某子页的 `name` 即可将该文章划分到该子页下：

```markdown
---
title: 我的第一篇文章
category: developer  # 对应 pages 数组中 name: developer 的子页
---
```
