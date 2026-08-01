---
sidebar_position: 1
---

# 介绍

致远（Tranquility）是一款为个人主页及多学科领域博主设计的 Hexo 主题。主题以「宁静致远」为设计理念，聚焦个性展示，适合需要明确领域划分与个人主页形态的博主。

## 特点

- 主页风格，聚焦个性展示
- 支持纯[个人主页模式](./configuration/basic/homepage.md)（不含文章，聚合外部博客 RSS）
- [「子页」设计](./configuration/basic/subpage.md)，适应多领域写作
- [最近更新卡片](./configuration/basic/recent-updates.md)，构建时聚合外部博客 RSS，国内加载稳定
- [关于页](./configuration/basic/about.md)（Hexo 原生页面）与[时间线](./configuration/basic/timeline.md)（文章驱动，点击进入详情）
- [一言](./configuration/basic/slogan.md)（Hitokoto）Slogan，刷新随机切换
- [深色模式](./configuration/experience/dark-mode.md)（浅色 / 深色 / 定时 / 跟随浏览器，导航栏一键切换）
- [Open Graph](./configuration/seo/open-graph.md) 社交分享卡片、[JSON-LD](./configuration/seo/json-ld.md) 结构化数据、[站点地图](./configuration/seo/sitemap.md)、[robots.txt](./configuration/seo/robots.md)、[RSS 自动发现](./configuration/seo/rss.md)、[PWA](./configuration/experience/pwa.md)
- [回到顶部按钮](./configuration/experience/accessibility.md)、[无障碍动效降级](./configuration/experience/accessibility.md)、[字体加载优化](./configuration/experience/font.md)
- 三端自适应，舒适阅读
- 自定义字体及提取压缩，兼具美观和性能
- [相关文章](./configuration/writing/related-post.md)、[数学公式](./configuration/writing/math.md)、[赞赏](./configuration/basic/reward.md)、[站点统计与 SEO](./advanced/analytics.md)
- 以及更多

## 演示站

- [致远](https://theme.hozen.site/tranquility/)（原主题演示站）
- [浩然的主页](https://www.hozen.site)

## Fork 说明

本仓库是 [hooozen/hexo-theme-tranquility](https://github.com/hooozen/hexo-theme-tranquility) 的 fork。原仓库已于 2026 年 6 月归档、停止维护，本 fork 在其基础上持续维护并持续新增特性、修复缺陷。

相较于原仓库，本 fork 在 v1.4.0 ~ v1.6.1 期间新增了：一言 Slogan、文章驱动时间线、Hexo 原生关于页、构建时 RSS 聚合的「最近更新」、运行时深色模式、Open Graph / JSON-LD / sitemap / robots.txt / RSS 自动发现、PWA、图片懒加载、回到顶部按钮、`prefers-reduced-motion` 无障碍降级、字体加载优化、安全加固（XSS / 注入防护）、移除 Gitalk 评论功能等。

详见 [Releases](https://github.com/zycwer/hexo-theme-tranquility/releases) 与[更新日志](./changelog.md)。

## 版本演进（v1.4.0 ~ v1.6.1）

自 fork 以来，主题经历了以下版本迭代：

| 版本 | 日期 | 主题 |
| --- | --- | --- |
| v1.4.0 | 2026-07-16 | 个性化增强 —— fork 首版：一言 Slogan、文章驱动时间线、原生关于页、构建时 RSS 最近更新 |
| v1.5.0 | 2026-07-18 | 现代化 —— 运行时深色模式、Open Graph / Twitter Card、JSON-LD、sitemap、PWA、图片懒加载 |
| v1.5.1 | 2026-07-19 | 性能优化与缺陷修复 —— TOC 节流、模板缓存、6 项缺陷修复 |
| v1.5.2 | 2026-07-22 | 安全加固与健壮性 —— XSS 修复、功能缺陷、错误处理、SEO 改进 |
| v1.6.0 | 2026-07-22 | 无障碍 / 性能 / 体验 —— 回到顶部按钮、prefers-reduced-motion、RSS 自动发现、robots.txt、字体加载优化 |
| v1.6.1 | 2026-07-26 | 健壮性修复 —— RSS 自动发现配置读取、JSON-LD 图片 URL、轮播空值检查 |

各版本的详细变更见[更新日志](./changelog.md)。
