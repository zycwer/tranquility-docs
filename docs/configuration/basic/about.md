---
sidebar_position: 6
---

# 关于页

关于页使用 Hexo 原生的 **页面（Page）** 功能实现，内容写在 markdown 文件里，无需在主题配置文件中填写。

## 步骤 1：创建页面文件

在博客 `source` 目录下新建 `about/index.md`：

```markdown
---
title: 关于
layout: about
date: 2024-01-01 00:00:00
---

这里是关于我的介绍，支持完整的 markdown 语法。

## 经历

- 内容直接写在页面文件中
- 由 markdown 渲染为 HTML，使用主题提供的 `about` 布局
```

## 步骤 2：开启导航入口

在 `_config.tranquility.yml` 中开启导航入口：

```yml
nav:
  sticky: false
  about: true   # 在导航栏显示"关于"入口，指向 /about/
```

## 关于页布局

主题提供 `layout: about` 页面模板，会渲染页面标题与 markdown 正文，并在底部自动展示博客 RSS 订阅链接（若开启了[最近更新](./recent-updates.md)）。

## 关闭关于页

将 `nav.about` 设置为 `false` 即可隐藏导航栏中的「关于」入口，或直接不创建 `source/about/index.md` 文件。
