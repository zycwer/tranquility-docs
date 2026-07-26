---
sidebar_position: 1
---

# 介绍

致远（Tranquility）是一款为个人主页及多学科领域博主设计的 Hexo 主题。主题以「宁静致远」为设计理念，聚焦个性展示，适合需要明确领域划分与个人主页形态的博主。

## 特点

- 主页风格，聚焦个性展示
- 支持纯个人主页模式（不含文章，聚合外部博客 RSS）
- 「子页」设计，适应多领域写作
- 最近更新卡片，构建时聚合外部博客 RSS，国内加载稳定
- 关于页（Hexo 原生页面）、时间线（文章驱动，点击进入详情）
- 一言（Hitokoto）Slogan，刷新随机切换
- 深色模式（浅色 / 深色 / 定时 / 跟随浏览器，导航栏一键切换）
- Open Graph 社交分享卡片、JSON-LD 结构化数据、站点地图、robots.txt、RSS 自动发现、PWA
- 回到顶部按钮、无障碍动效降级、字体加载优化
- 三端自适应，舒适阅读
- 自定义字体及提取压缩，兼具美观和性能
- 相关文章、数学公式、赞赏、SEO

## Fork 说明

本仓库是 [hooozen/hexo-theme-tranquility](https://github.com/hooozen/hexo-theme-tranquility) 的 fork。原仓库已于 2026 年 6 月归档、停止维护，本 fork 在其基础上持续维护并持续新增特性、修复缺陷。

相较原仓库，本 fork 在 v1.4.0 ~ v1.6.1 期间的主要演进：

- 一言（Hitokoto）Slogan 开关
- 文章驱动的时间线（取代配置文件事件）
- Hexo 原生关于页（取代配置文件内容）
- 构建时 RSS 聚合的「最近更新」卡片
- 运行时深色模式（CSS 变量切换，无需重建）
- Open Graph / Twitter Card / JSON-LD 结构化数据
- 站点地图（sitemap.xml）、robots.txt、RSS 自动发现
- PWA（manifest.json + Service Worker）、图片懒加载
- 回到顶部按钮、`prefers-reduced-motion` 无障碍降级
- 字体加载优化（`font-display: swap` + preload）
- 代码精简（scripts 目录 -23%）、删除与关于页重复的简历（CV）功能
- 安全加固（修复 XSS / `</script>` 注入 / localStorage 兜底等）
- 移除已废弃的 Gitalk 评论功能

详见 [Releases](https://github.com/zycwer/hexo-theme-tranquility/releases) 与[更新日志](./changelog.md)。

## 演示站

- [致远](https://theme.hozen.site/tranquility/)（原主题演示站）
- [浩然的主页](https://www.hozen.site)
