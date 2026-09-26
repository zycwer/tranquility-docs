---
sidebar_position: 4
---

# 导航

通过 `nav` 配置项配置导航栏：

```yml
nav:
  sticky: false
  about: false   # 是否在导航栏显示"关于"入口（页面内容由 source/about/index.md 提供）
  archive: false # 是否在导航栏显示"归档"入口（指向 /archives/）
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `nav.sticky` | 导航栏是否粘滞在顶部 |
| `nav.about` | 是否在导航栏显示「关于」入口，指向 `/about/`，页面内容由 `source/about/index.md` 提供 |
| `nav.archive` | 是否在导航栏显示「归档」入口，指向 `/archives/` |

## nav.sticky

设为 `true` 时导航栏会在页面滚动时固定在顶部，便于长页面快速跳转；设为 `false` 时导航栏随页面一起滚动。

## nav.about

设为 `true` 时，导航栏会显示「关于」入口，点击进入 `/about/`。关于页面的具体配置请参考[关于页](./about.md)。

## nav.archive

设为 `true` 时，导航栏会显示「归档」入口，点击进入 `/archives/` 时间线式归档页。归档页的具体说明请参考[归档页](./archive.md)。
