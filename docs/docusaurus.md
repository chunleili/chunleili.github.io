---
sidebar_position: 4
---

# Docusaurus Markdown 用法

Docusaurus 支持的markdown语法请查阅： **[Markdown](https://daringfireball.net/projects/markdown/syntax)**

一些基本用法比如用`#`来设定标题，以及使用两个星号来**加粗字体**，我们就不赘述了。


## 链接

链接到某个markdown页面

```md
链接到某个页面 [intro](intro.md).
```

**Result:** 链接到某个页面 [intro](intro.md).

## 图片
请把所有图片放到static/img文件夹内，例如
(`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)


## 代码

用三个反单引号（键盘最左上角的那个）包裹代码。代码支持高亮。你可以指定代码的语言。

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## 引用
只需要把文本缩进两次，就能让其变为引用，被引用块所包裹。

    只需要把文本缩进两次，就能让其变为引用，被引用块所包裹。

## 纯文本

只需要使用\`反单引号\`，就可以使用纯文本

只需要使用`反单引号`，就可以使用纯文本

## 警告

可以简单地使用警告和Tips块。用三个冒号开始和结尾，如下：

    :::tip 我的tip

    这是一个tip

    :::

    :::danger 我的警告

    这是一个danger警告

    :::

:::tip 我的tip

这是一个tip

:::

:::danger 我的警告

这是一个danger警告

:::

## 扉页
（扉页不是必须的）
Markdown文档可以增加一些头部的元数据，被称为[Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)

```


## 拓展的markdown语法：MDX

这是一些可选的高级功能，你可以不用。
[MDX](https://mdxjs.com/) 可以让你使用React做可交互的一些拓展功能。这时请保存为`.mdx`而非`.md`:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
