---
sidebar_position: 9
---

# Upgrade

The theme is continuously iterated. When you encounter issues, check whether the theme has been updated. The upgrade method depends on how you installed it.

## Choose an Upgrade Method

| Install method | Upgrade command |
| --- | --- |
| npm install | `npm install hexo-theme-tranquility@latest` |
| Git clone | `cd themes/tranquility && git pull` |

---

## Step 1: Pull updates

### npm install method

Run in your blog's root directory:

```bash
npm install hexo-theme-tranquility@latest
```

### Git clone method

Pull the latest code in the theme directory:

```bash
cd themes/tranquility
git pull
```

## Step 2: Read the release notes

Read the [release notes](https://github.com/zycwer/hexo-theme-tranquility/releases) to understand the changes and caveats of this upgrade. For the full version evolution summary, see the [Changelog](./changelog.md).

## Step 3: Update your configuration

Check [`_config-template.yml`](https://github.com/zycwer/hexo-theme-tranquility/blob/main/_config-template.yml) for new or modified options, and update your `_config.tranquility.yml` accordingly.

New versions may introduce new config options or adjust defaults. Fields not present in your config file will fall back to the old value or the theme's built-in default. To avoid missing anything, review the config file comments line by line after upgrading.

:::tip Tip for npm install users
With the npm install method, defaults live inside the package and update automatically on upgrade. Fields you **have overridden** in `_config.tranquility.yml` keep your values; fields you **have not overridden** automatically follow the new defaults.
:::

## Step 4: Verify

Run `hexo s` locally to preview. Once everything looks correct, you can deploy.
