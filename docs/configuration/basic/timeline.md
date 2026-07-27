---
sidebar_position: 7
---

# 时间线

时间线的设计初衷是为了展示博主的**重要**事件或履历，如荣誉、宿醉、死亡等。你也可以用它来展示精选文章或其他内容，时间线支持自定义配置。

## 配置

时间线的配置在 `timeline` 下进行：

```yml
timeline:
  enable: true  # 是否开启时间线
  reversed_order: true # 是否按时间倒序展示
  items:  # 配置时间线分类
    - name: article  # 分类名称
      color: "#ee936c"  # 分类主题色
      icon: /images/icon/icon-article.svg  # 分类图标
      checked: false  # 是否默认展示
    - name: apps
      color: "#60a465"
      icon: /images/icon/icon-app.svg
      checked: true
    - name: event
      color: "#568dc4"
      icon: /images/icon/icon-event.svg
      checked: false
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `enable` | 是否开启时间线 |
| `reversed_order` | 是否按时间倒序展示 |
| `items` | 时间线分类数组 |
| `items[].name` | 分类名称，对应文章 front-matter 中的 `timeline` 字段 |
| `items[].color` | 分类主题色 |
| `items[].icon` | 分类图标路径 |
| `items[].checked` | 是否默认展示该分类 |

## 文章 front-matter

在文章中配置 `timeline` 字段并指定时间线分类名称后，该文章会展示在时间线列表中：

```yml
---
id: 57
title: 多少冬天
date: 2022-11-30 23:23:48
tags:
  - 散文
categories: life  # 属于 life 子类下
cover: /assets/images/57-1.jpg
timeline: article  # 展示在时间线列表中
---
```

## 大事件由文章驱动

时间线的大事件完全由**文章**驱动：在文章 front-matter 中设置 `timeline` 字段（值为 `items` 中某个 `name`），该文章就会出现在首页时间线，点击标题进入文章查看详情。无需在配置文件中单独定义事件，详见上文示例。

> 有关时间线的配置修改**可能需要重新启动服务**才会生效。
