---
sidebar_position: 14
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
mathjax: true # 加载 LateX 数学公式库
```

## 方法二：第三方插件服务端渲染

使用第三方插件 [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax) 进行服务端渲染，并关闭配置文件中的 `mathjax: false`：

```yml
mathjax: false
```

> 从访问性能来讲，推荐使用第二种方法（服务端渲染），避免在浏览器端加载并执行 MathJax。
