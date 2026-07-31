---
sidebar_position: 2
---

# Installation

## Prerequisites

[Node.js (>=16)](https://nodejs.org/), [Git](https://git-scm.com/), [Hexo](https://hexo.io/), and a working Hexo blog. If you're new to these, start with the [Hexo docs](https://hexo.io/docs/).

## Steps

### Option A: Install via npm (Recommended)

#### 1. Install the theme

Runtime dependencies (`hexo-pagination`, `moment`, `opentype.js`, etc.) are installed automatically with the theme:

```sh
cd hexo
npm install hexo-theme-tranquility
```

#### 2. Enable the theme

Set the `theme` field to `tranquility` in your blog's root `_config.yml` (see [Themes | Hexo](https://hexo.io/docs/themes)):

```yml
theme: tranquility
```

#### 3. Remove conflicting dependencies

`hexo-generator-category` and `hexo-generator-archive` conflict with this theme's "Subpage" design and must be removed (npm cannot uninstall other packages automatically):

```bash
npm uninstall hexo-generator-category hexo-generator-archive
```

#### 4. Theme configuration

Create `_config.tranquility.yml` in your blog's root directory with **only the options you want to override** — the rest fall back to the in-package defaults (Hexo deep-merges them). See the [Configuration](./configuration/basic/slogan.md) section or read the comments in the theme repo's [`_config-template.yml`](https://github.com/zycwer/hexo-theme-tranquility/blob/main/_config-template.yml).

### Option B: Install via Git Clone

#### 1. Clone the theme

Clone this repository into your Hexo blog's `themes/tranquility` folder:

```sh
cd hexo
git clone https://github.com/zycwer/hexo-theme-tranquility.git themes/tranquility
```

#### 2. Enable the theme

Set the `theme` field to `tranquility` in your blog's root `_config.yml` (see [Themes | Hexo](https://hexo.io/docs/themes)).

#### 3. Install dependencies

Remove conflicting dependencies and install the required ones:

```bash
npm uninstall hexo-generator-category hexo-generator-archive
npm install hexo-pagination moment opentype.js
```

### 4. Theme configuration

Copy `themes/tranquility/_config-template.yml` to your blog's root directory and rename it to `_config.tranquility.yml`. Personalize the theme by editing `_config.tranquility.yml`. See the [Configuration](./configuration/basic/slogan.md) section or read the comments in the config file.

## Troubleshooting (for non-developers)

Reading error messages helps locate issues quickly. For example:

#### Missing dependencies

As the theme evolves, it may depend on more third-party modules. Users need to add new dependencies themselves. For example:

```log
...
Error: Cannot find module 'a_third_module'
...
```

The message clearly indicates the `a_third_module` module is missing — just install it:

```bash
npm install a_third_module
```

See [npm-install | npm Docs](https://docs.npmjs.com/cli/v8/commands/npm-install).
