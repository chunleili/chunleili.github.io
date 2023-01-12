# 解决导入obj模型时出现模型镂空的问题

这实际上是因为导入的模型采用四边形而非三角形的面片，导致splish采样不全。

使用houdini的divide节点就能将任意面片转化为三角形面片。从而解决问题。

未解决问题前

![在这里插入图片描述](https://img-blog.csdnimg.cn/8de945bf7f3e4ecaa7de87dcf3738816.png)



解决问题后
![在这里插入图片描述](https://img-blog.csdnimg.cn/0163b11a2b074fe99cac21017c77fdb5.png)
