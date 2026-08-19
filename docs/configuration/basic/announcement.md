---
sidebar_position: 13
---

# 公告横幅

在**全站**导航栏下方展示一条可关闭的公告，适合发布站点通知、新文章预告或活动信息。

## 配置

```yml
announcement:
  enable: true
  content: 欢迎来到我的个人主页        # 公告文本（纯文本）
  link: https://example.com/post/1     # 可选，"了解更多"跳转链接
  link_text: 了解更多                   # 链接文案
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `announcement.enable` | 是否开启公告横幅 |
| `announcement.content` | 公告文本，纯文本（HTML 会被转义） |
| `announcement.link` | 可选跳转链接，外链自动新窗口打开 |
| `announcement.link_text` | 链接文案，默认「了解更多」 |

## 交互逻辑

- 访客点击 × 关闭后，关闭状态记在其浏览器 `localStorage` 中，**刷新/再次访问不再展示**
- 公告内容（或链接）发生变化后，指纹随之变化，横幅**自动重新展示**给所有访客
- 无需任何手动操作，改文案即可触达

## 说明

- 横幅在所有页面（首页、文章页、子页等）生效
- 默认隐藏、JS 判定后展示，关闭过公告或未开启 JS 的访客不会看到布局闪烁
