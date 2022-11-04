# 使用Houdini的Karma渲染器渲染流体
## 介绍
在之前我们讲过使用默认的Mantra渲染器渲染。但是Mantra将在2024年被Houdini官方停止更新。因为他们推出了一个新的更好的渲染器Karma。与Mantra相比，不仅CPU渲染速度变快，而且还支持XPU（GPU CPU混合）。速度有了很大的提升。此外还支持流行的开源场景格式USD和开源材质包MaterialX。并且原本Mantra的材质和灯光90%以上都是兼容的。因此十分有必要学习一下。

我们参考的是

[捷佳大佬的视频](https://www.bilibili.com/video/BV1YS4y1R7db?p=5&vd_source=e15eb8f98a9dde1c9cc874314025b575)

表面建模流程与之前一致，不再赘述


值得一提的是：我们这里用的是ROP(Render Operator)中的Karma。这是为了兼容Mantra的操作方式而提供的节点。实际上，Karma原生支持USD（也就是Solaris布局，或者stage，或者叫LOP(Lighting Operator)）。但是这里为了方便，我们还采用原来的旧方式。

## 实践
当前的节点为：


![在这里插入图片描述](https://img-blog.csdnimg.cn/43f1a9301f4f4fa4a46da248ebadfedf.png)

环境光别忘了加environment map，其他的没什么好说的。fluid也需要设置材质。和之前一样从Material Platte拖拽Basic Liquid即可。

其中ROP Network 和你放在out中是一样的。ROP的意思是**Render Operator**

增加**Karma**即可

![在这里插入图片描述](https://img-blog.csdnimg.cn/7bc24909e396465aa4a2f3ce7d024246.png)


注意到可以选择**XPU渲染**

点击**Render to MPlay**即可查看效果

需要等待一段时间，请耐心

![在这里插入图片描述](https://img-blog.csdnimg.cn/bb12a653da1f4e9a9835d4ec72cda864.png)
至此，你已经学会了使用Karma



### 在viewport中查看
假如你觉得在MPlay中查看不方便，可以点击karma viewport

会跳出小窗口

![](https://img-blog.csdnimg.cn/7ddfd0137c0a49ce87c7350039e9f7f8.png)

这个窗口其实是一个scene view

与Mantra不同，
**Karma不支持在Render view中查看渲染结果**





但是我们可以稍加改造，让这个scence view也内嵌显示。以下是方法：

在上面的地址栏右键 **edit path as text**
![在这里插入图片描述](https://img-blog.csdnimg.cn/f1b60d2c2b3a4290b6a26bde0fec80c4.png)

然后复制

同理edit path as text 然后把刚才的地址复制上去，再点击钉子，定住窗口。

![在这里插入图片描述](https://img-blog.csdnimg.cn/c00beb340b04432cb5abce60cf357403.png)

这样，你就把刚才的窗口内嵌成标签页了。你在这里可以更改IPR(交互式渲染)的窗口，也就是用Houdini GL(openGL)还是Karma
![在这里插入图片描述](https://img-blog.csdnimg.cn/96d476f4089649a096dca2d2312be0e7.png)

必须注意的一点是：

**在这个Karma的Scene view中不支持更改相机视角！**

**你必须在原本的Scene View中调节视角。**

同时，**Karma的分辨率与相机是不同步的**！你必须手动调节！

