---
sidebar_position: 28
---

# 无障碍（prefers-reduced-motion）

主题尊重操作系统的「减少动态效果」（`prefers-reduced-motion: reduce`）偏好，对前庭功能敏感、易晕动症的用户更友好。

该行为自动生效，无需配置。用户在系统设置中开启「减少动态效果」即可。

## 全局降级

- 所有 CSS 动画与过渡的时长压缩为 `0.01ms`
- `scroll-behavior` 设为 `auto`（不再使用平滑滚动）

## HeartCurve 静态绘制

心形曲线（HeartCurve）组件检测到该偏好时，会跳过 `requestAnimationFrame` 动画循环，仅静态绘制一帧，避免持续动画带来的视觉负担。

## 回到顶部按钮降级

回到顶部按钮在该偏好下也会降级：

- 平滑滚动退化为瞬时定位（`behavior: auto`），不再播放滚动动画

## 关联功能

无障碍降级会影响以下功能的运行时行为：

- 回到顶部按钮的滚动动画
- HeartCurve 心形曲线动画
- 所有 CSS 过渡与动画的时长
- 标签云 3D 动画（建议在无障碍场景下使用静态标签云，见[标签云](./tagcloud.md)）
