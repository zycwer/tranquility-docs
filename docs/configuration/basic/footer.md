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

## 建站运行时长

页脚可实时显示「本站已运行 X 天 X 小时 X 分 X 秒」，由浏览器本地计算，无任何外部请求：

```yml
uptime:
  enable: true
  since: "2020-01-01T00:00:00+08:00" # 建站时间，推荐 ISO 格式（含时区）
  template: "本站已运行 {d} 天 {h} 小时 {m} 分 {s} 秒"
```

| 字段 | 说明 |
| --- | --- |
| `uptime.enable` | 是否开启建站时长显示 |
| `uptime.since` | 起始时间，推荐 ISO 格式（如 `2020-01-01T00:00:00+08:00`） |
| `uptime.template` | 文案模板，`{d}`/`{h}`/`{m}`/`{s}` 为占位符（时/分/秒补零） |

:::tip
文案模板中的占位符可自由组合，例如 `"已平稳运行 {d} 天"`。时、分、秒采用等宽数字渲染，逐秒更新时不会跳动。
:::
