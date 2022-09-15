---
slug: deploy
title: 如何部署到github pages
authors: [chunlei]
tags: [docusaurus, front-end]
---

我们测试一下如何部署到github-pages

1. 首先建立新的分支gh-pages。这个不要和main分支搞混，这个分支不用去管，deploy的时候会自动更新代码。


2. 然后把docusaurus.config.js中的部分代码更改为

```js
  organizationName: 'chunleili', // Usually your GitHub org/user name.
  projectName: 'chunleili.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
```

3. 最后运行部署

假如是windows
```
cmd /C 'set "GIT_USER=chunleili" && yarn deploy'
```

假如是linux
```
GIT_USER=chunleili yarn deploy
```
