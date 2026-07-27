---
sidebar_position: 9
---

# 页脚自定义

页脚通过以下配置项进行自定义：

- `foot.title` 配置页脚显式的标语
- `foot.linksRows` 配置链接的行数，参考 [issue#44](https://github.com/hooozen/hexo-theme-tranquility/issues/44)
- `links` 配置友链
- `social` 配置社交帐户或其他链接
- `contacts` 配置联系方式

## 配置示例

```yml
foot:
  title:
    - "海内存知己"
    - "天涯若比邻"
  linksRows: 4

links: # 朋友
  - name: "Theme Tranquility"
    url: https://github.com/hooozen/hexo-theme-tranquility
  - name: "浩然的主页"
    url: https://hozen.site

social:
  - name: "hooozen"
    icon: "/images/logo-github.svg"
    url: https://github.com/hooozen

contacts:
  - name: "name@example.com"
    icon: "/images/icon/icon-email.svg"
    url: "mailto:name@example.com"
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `foot.title` | 页脚标语数组，按行展示 |
| `foot.linksRows` | 链接展示的行数 |
| `links` | 友链数组，每项含 `name` 与 `url` |
| `social` | 社交帐户数组，每项含 `name`、`icon`、`url` |
| `contacts` | 联系方式数组，每项含 `name`、`icon`、`url` |
