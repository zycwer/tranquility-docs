---
sidebar_position: 7
---

# 数学公式

主题有两种方式开启对 LaTeX 数学公式的支持，但都需要先进行以下操作。

## 前置准备

- **移除** Hexo 默认的 markdown 渲染插件 `hexo-renderer-marked`，并安装 `hexo-renderer-pandoc`。如果安装了其他的 markdown 渲染插件也请移除！

```bash
npm uninstall hexo-renderer-marked
npm install hexo-renderer-pandoc
```

- 安装 pandoc 软件，查看 [pandoc.org](https://www.pandoc.org/)。

## 方法一：主题预置 Latex 解析

直接在配置文件中开启 `mathjax` 即可使用：

```yml
mathjax: true # 加载 LaTeX 数学公式库（默认从 jsDelivr CDN 加载）
```

也可以填脚本完整 URL 覆盖默认 CDN（jsDelivr 在部分网络环境如中国大陆直连不可达，会导致公式一直显示为原始 `$...$` 文本）：

```yml
# 本地文件（推荐：下载 tex-svg.js 放到站点的 source/vendors/ 下，零外部依赖；
# SVG 输出版无需额外字体文件）
mathjax: /vendors/tex-svg.js

# 或其他可达 CDN 的完整 URL
mathjax: https://registry.npmmirror.com/mathjax/3.2.2/files/es5/tex-svg.js
```

脚本源不可达时，主题会在正文顶部显示可见的失败提示（而非无限等待），保留原始文本可读。

## 方法二：第三方插件服务端渲染

使用第三方插件 [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax) 进行服务端渲染，并关闭配置文件中的 `mathjax: false`：

```yml
mathjax: false
```

> 从访问性能来讲，推荐使用第二种方法（服务端渲染），避免在浏览器端加载并执行 MathJax。
