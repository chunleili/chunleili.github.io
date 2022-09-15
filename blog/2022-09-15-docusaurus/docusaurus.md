---
slug: how-to-docusaurus
title: 怎样利用docusaurus创建博客/文档
authors: [chunlei]
tags: [docusaurus, front-end]
---

# 怎样利用docusaurus创建博客/文档？

请务必参考docusaurus的官方文档

https://www.docusaurus.cn/docs

详细讲解请参考这个视频

https://www.bilibili.com/video/BV1rW4y1i7zC?spm_id_from=333.999.0.0&vd_source=e15eb8f98a9dde1c9cc874314025b575


总的来说就三步：
1. 下载脚手架
```javascript
npx create-docusaurus myPage classic
```
:::tip 提示
请先安装npm，以及docusaurus
:::

2. 更改/新增markdown

新增一个md就是新增一个页面。

3. 部署

把改好的repo push到github上去，然后采用vercel自动导入github repo。当你push的时候，就自动部署。



使用vercel是比较方便快捷的，但是缺点是你必须能翻墙才能看到页面。



另一种方案是github pages。就是设置一个github repo的名为为<你的名字>.github.io，然后新建一个gh-pages分支。这个分支和你的master分支要分开。master分支存的是你写的源码，而gh-pages分支存的是build出来的代码。然后用

```
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```

这个命令来部署，如果没有安装yarn就要先npm install yarn一下。

