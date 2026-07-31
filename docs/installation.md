---
sidebar_position: 2
---

# 安装

## 前置条件

- [Node.js (>=16)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Hexo](https://hexo.io/)
- 一个可用的 Hexo 博客

如果你还不了解以上内容，请从 [Hexo 文档](https://hexo.io/zh-cn/docs/) 获取相关帮助。

## 步骤

### 方式一：通过 npm 安装（推荐）

#### 1. 安装主题

运行时依赖（`hexo-pagination`、`moment`、`opentype.js` 等）会随主题自动装齐，无需手动安装：

```sh
cd hexo
npm install hexo-theme-tranquility
```

#### 2. 配置 theme 字段

配置博客根目录下 `_config.yml` 中的 `theme` 字段为 `tranquility`（参考 [Themes | Hexo](https://hexo.io/zh-cn/docs/themes)）：

```yml
theme: tranquility
```

#### 3. 移除冲突依赖

`hexo-generator-category` 与 `hexo-generator-archive` 与本主题的「子页」设计冲突，必须移除（npm 无法自动卸载别的包）：

```bash
npm uninstall hexo-generator-category hexo-generator-archive
```

#### 4. 主题配置

在博客根目录新建 `_config.tranquility.yml`，**只需写需要修改的项**，其余走包内默认值（Hexo 会深合并覆盖）。具体配置项查看[配置](./configuration/basic/slogan.md)或阅读主题仓库的 [`_config-template.yml`](https://github.com/zycwer/hexo-theme-tranquility/blob/main/_config-template.yml) 注释。

### 方式二：通过 Git 克隆安装

#### 1. 克隆主题仓库

将本仓库克隆到你的 Hexo 目录的 `themes/tranquility` 文件夹下：

```sh
cd hexo
git clone https://github.com/zycwer/hexo-theme-tranquility.git themes/tranquility
```

#### 2. 配置 theme 字段

配置博客根目录下 `_config.yml` 中的 `theme` 字段为 `tranquility`（参考 [Themes | Hexo](https://hexo.io/zh-cn/docs/themes)）：

```yml
theme: tranquility
```

#### 3. 移除冲突依赖并安装必要依赖

```bash
npm uninstall hexo-generator-category hexo-generator-archive
npm install hexo-pagination moment opentype.js
```

`hexo-generator-category` 与 `hexo-generator-archive` 与本主题的「子页」设计冲突，必须移除。

#### 4. 主题配置

将主题目录下的配置文件 `themes/tranquility/_config-template.yml` 复制到博客根目录下，并重命名为 `_config.tranquility.yml`：

```bash
cp themes/tranquility/_config-template.yml _config.tranquility.yml
```

在 `_config.tranquility.yml` 中个性化主题配置，具体配置项查看[配置](./configuration/basic/slogan.md)或阅读配置文件的注释。

## 步骤 5：报错排查

阅读报错可以更快地定位问题。

### 缺少依赖

随着主题的更新可能会依赖更多的第三方模块，此时用户需要自己添加新的依赖。例如，运行报错内容如下：

```log
...
Error: Cannot find module 'a_third_module'
...
```

显然根据提示，缺少名为 `a_third_module` 的模块，安装该依赖即可：

```bash
npm install a_third_module
```

参考 [npm-install | npm Docs](https://docs.npmjs.com/cli/v8/commands/npm-install)。
