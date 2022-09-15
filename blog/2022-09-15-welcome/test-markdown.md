---
slug: test
title: 博客的Markdown用法
authors: [chunlei]
tags: [welcome, test]
---

大家好， 我们来测试一下新的博客。

早安！**午安！** `晚安`
## 官方文档

这是docusaurus的
[官方文档](https://docusaurus.io/docs/blog) 

还可以使用它的插件
[插件](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).


## 如何建立新的博客

:::tip
只需要在blog文件夹下面创建md文件即可建立新的博客！
:::

md文件的命名规范如下所示：

- `2022-09-15-welcome.md`
- `2022-09-15-welcome/index.md`

docusaurus就会自动提取前面的日期，然后显示到文章的开头！


## 图片

可以把博客的插图放到同一个文件夹下面

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

## front matter
解释一下开头的这一串元数据。这叫front matter
```
---
slug: /
title: 测试第一个新博客
authors: [chunlei]
tags: [welcome, test]
---
```
下面分别说一下

### 标签
在md的最开头，使用
```md
tags: [welcome, test]
```
就可以分类啦！可以有多个哦。

### 子弹头
```md
slug: /
```
这个其实就是当前页面所在的网址（从根目录开始的相对路径）。

### 标题
```md
title: 测试第一个新博客
```
无需赘言


## 作者
我们可以这样写
```md
authors: [chunlei]
```
就会自动读取authors.yaml中保存的作者信息

也可以在这里把信息写全了
```md
authors:
  name: chunlei li
  title: phD student
  url: https://github.com/chunleili
  image_url: https://github.com/chunleili.png
```
