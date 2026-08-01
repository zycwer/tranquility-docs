---
sidebar_position: 9
---

# 升级

本主题在不停迭代，当使用过程中遇到问题时可以查看主题是否已经有了更新。升级方式取决于你的安装方式。

## 选择升级方式

| 安装方式 | 升级命令 |
| --- | --- |
| npm 安装 | `npm install hexo-theme-tranquility@latest` |
| Git 克隆 | `cd themes/tranquility && git pull` |

---

## 步骤 1：拉取更新

### npm 安装方式

在博客根目录执行：

```bash
npm install hexo-theme-tranquility@latest
```

### Git 克隆方式

进入主题目录拉取最新代码：

```bash
cd themes/tranquility
git pull
```

## 步骤 2：查看 release 说明

阅读 [更新说明](https://github.com/zycwer/hexo-theme-tranquility/releases)，了解本次升级带来的变更与注意事项。完整的版本演进摘要可参考[更新日志](./changelog.md)。

## 步骤 3：对照配置模板修改

查看 [`_config-template.yml`](https://github.com/zycwer/hexo-theme-tranquility/blob/main/_config-template.yml) 的新增和修改项，对照修改你的 `_config.tranquility.yml` 文件。

新版本可能引入新的配置项或调整默认值，未在新配置文件中体现的字段将沿用旧值或主题内置默认值。为避免遗漏，建议在升级后逐项核对配置文件注释。

:::tip npm 安装方式提示
npm 安装方式的默认配置在包内，升级后默认值会自动更新。你 `_config.tranquility.yml` 中**未覆盖**的字段会自动跟随新版默认值，**已覆盖**的字段保持你的设置不变。
:::

## 步骤 4：验证

本地运行 `hexo s` 预览，确认无报错后即可部署。
