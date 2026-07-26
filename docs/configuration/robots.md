---
sidebar_position: 11
---

# robots.txt

主题内置 `robots.txt` 生成器，构建时自动产出爬虫协议文件，允许搜索引擎抓取页面、屏蔽资源目录（CSS/JS/字体），并声明站点地图地址。

## 配置

```yml
robots:
  enable: true
  # disallow:  # 自定义禁止索引的路径（不设置则默认屏蔽 /css/ /js/ /font/）
  #   - /css/
  #   - /js/
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `enable` | 是否生成 `robots.txt` |
| `disallow` | 自定义禁止索引的路径数组；不设置时默认屏蔽 `/css/`、`/js/`、`/font/` |

## 生成内容

生成的 `robots.txt` 包含：

- `User-agent: *` / `Allow: /` —— 允许所有爬虫抓取全站
- `Disallow: /css/`、`/js/`、`/font/` —— 屏蔽纯资源目录，避免被索引为独立资源
- `Sitemap: <绝对地址>/sitemap.xml` —— 自动引用站点地图（若未关闭 sitemap）

## 自定义 disallow

如需屏蔽更多路径（如草稿目录、私有页面），可显式配置 `disallow`：

```yml
robots:
  enable: true
  disallow:
    - /css/
    - /js/
    - /font/
    - /draft/
```

> 配置 `disallow` 后会**覆盖**默认值。如果希望保留对 `/css/ /js/ /font/` 的默认屏蔽，需要在数组中显式列出。
