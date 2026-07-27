---
sidebar_position: 10
---

# 文章赞赏

通过 `reward` 配置项进行文章赞赏配置，包括头像、二维码和语句等：

```yml
reward: # 赞赏
  enable: true
  face: /assets/author-face.jpg # 头像图片
  paycode: /assets/pay-code.jpg # 支付码图片
  text: "给作者倒杯卡布奇诺"
  btnText: 喜欢作者
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `reward.enable` | 是否开启文章赞赏 |
| `reward.face` | 头像图片路径 |
| `reward.paycode` | 支付码图片路径 |
| `reward.text` | 赞赏文案 |
| `reward.btnText` | 赞赏按钮文案 |

开启后，每篇文章底部会展示一个「赞赏」按钮，点击后弹出包含头像、支付码与文案的赞赏浮层。
