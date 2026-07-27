---
sidebar_position: 3
---

# 站点地图

主题内置 `sitemap.xml` 生成器，构建时自动产出站点地图，提交给 Google Search Console / Bing Webmaster / 百度站长等平台。

## 配置

```yml
sitemap:
  enable: true  # 默认开启，设为 false 可关闭
```

## 生成内容

生成的 `sitemap.xml` 包含：

| 页面类型 | priority | changefreq |
| --- | --- | --- |
| 首页 | 1.0 | daily |
| 所有文章（按发布时间倒序，含 `lastmod`） | 0.8 | weekly |
| 所有页面 | 0.6 | monthly |
| 所有分类与标签归档页 | 0.4 | weekly |

URL 均为绝对路径（基于博客根目录 `_config.yml` 的 `url` 配置）。

> 若已安装 `hexo-generator-sitemap` 等其他 sitemap 生成插件，可在此关闭以避免冲突。
