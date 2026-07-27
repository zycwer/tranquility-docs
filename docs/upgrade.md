---
sidebar_position: 9
---

# 升级

本主题在不停迭代，当使用过程中遇到问题时可以查看主题是否已经有了更新。主题升级的步骤如下。

## 步骤 1：拉取更新

进入主题目录拉取最新代码：

```bash
cd themes/tranquility
git pull
```

## 步骤 2：查看 release 说明

阅读 [更新说明](https://github.com/zycwer/hexo-theme-tranquility/releases)，了解本次升级带来的变更与注意事项。完整的版本演进摘要可参考[更新日志](./changelog.md)。

## 步骤 3：对照配置模板修改

查看 `themes/tranquility/_config-template.yml` 的新增和修改项，对照修改你的 `_config.tranquility.yml` 文件。

新版本可能引入新的配置项或调整默认值，未在新配置文件中体现的字段将沿用旧值或主题内置默认值。为避免遗漏，建议在升级后逐项核对配置文件注释。
