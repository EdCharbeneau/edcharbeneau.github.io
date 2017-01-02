---
layout: post
title: Path Name Too Long Windows
permalink: /path-name-too-long-windows/
path: 2017-01-01-path-name-too-long-windows.md
---

### The file name you specified is not valid or too long. **Solution**

Thanks to `npm` and the deeply nested `node_modules` directory, Windows users who are developing JavaScript applications will be faced with the dreaded **The file name you specified is not valid or too long.** error. Don't worry though, there's a really simple fix. Since npm and the node_modules directory is to blame, one can assume that npm is already installed, so let's use an npm package to resolve this issue once and for all.

Use npm to install the [rimraf](https://www.npmjs.com/package/rimraf) package. Rimraf is a handy tool that mimics the Unix command `rm` with the parameter `rf` or `rm -rf` which is used to remove all files in a directory. Make sure you install rimraf globally with -g.

    npm install -g rimraf

Now you can simply target the stubron project or directory that's causing the **The file name you specified is not valid or too long** error and wipe it away.

    rimraf <your directory>

Use `rimraf` with care, as it is very unforgiving. Don't point **rimraf** at anything you don't wish to completely elimante from your disk.