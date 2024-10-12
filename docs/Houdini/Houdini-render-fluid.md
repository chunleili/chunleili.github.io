# 如何使用Houdini渲染流体？
版本：Houdini19.5 其他版本应该也差不多

如果这里的图挂了，请看[csdn](https://blog.csdn.net/weixin_43940314/article/details/127653109?sharetype=blogdetail&amp;sharerId=127653109&amp;sharerefer=WAP&amp;sharesource=)

渲染器与材质是直接关联的，不同渲染器有不同的灯光、材质。

我们首先讲解如何利用Houdini自带的Mantra渲染（CPU渲染，较慢），然后讲解更快的第三方渲染器Redshift（GPU渲染，较快）。

但是，在此之前，有一些通用步骤，即读取流体粒子帧数据和表面重建。

## Houdini基本常识
### Houdini中视角移动的方式

**Esc进入视图视角**，

然后**左键旋转，滚轮/右键拉近拉远，中键平移**。

**H键重置视角** 

**G键以某个物体为中心重置视角** 

### Houdini 节点
节点是Houdini核心中的核心！是第一公民。

这也是为什么Houdini被称为程序化建模软件。

Houdini中**所有操作**都可以作为一个节点。

在Network视图中用 **Tab键**创建节点。

## 读取数据和流体表面重建
### 粒子位置数据
首先，我们准备粒子数据。我这里的输入数据是从taichi生成的mpm3d模拟得到的序列（默认是ply格式）

如果是obj格式的话，它里面只有一些点的位置而已。
例如
```
v 1.00718 0.992176 1.00718
v 1.09713 0.992118 1.00712
v 1.2004 0.992209 1.00721
v 1.29996 0.992199 1.0072
v 1.4 0.9922 1.0072
v 1.5 0.9922 1.0072
v 1.6 0.9922 1.0072
v 1.7 0.9922 1.0072
v 1.8 0.9922 1.0072
v 1.9 0.9922 1.0072
v 2 0.9922 1.0072
v 2.1 0.9922 1.0072
v 2.2 0.9922 1.0072
v 2.3 0.9922 1.0072
v 2.4 0.9922 1.0072
v 2.5 0.9922 1.0072
v 2.6 0.9922 1.0072
...
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/72011fe46c6545d68884858c393fe099.png)


### 读取数据到houdini
我们新建一个geo节点，重命名为read_data
![在这里插入图片描述](https://img-blog.csdnimg.cn/c725f103b70f4a41a56c5021f2e7a3c5.png)
双击进入该节点

然后新建file节点，选择数据序列

![在这里插入图片描述](https://img-blog.csdnimg.cn/a71a7edd221c41f0853c7125c8ac8bad.png)

我们现在得到的就是一堆点。

### 重建表面
接下来重建表面。使用particle fluid surface这个节点。调整particle seperation。
![在这里插入图片描述](https://img-blog.csdnimg.cn/57942776a283480d8d821c719ec48ef7.png)
实际上这就完成了工作。但是这样的话，你每次使用的时候，都要重新读取粒子，然后重建表面。我们不如把表面缓存一下，以后直接使用这个缓存即可。

新建file cache节点，然后修改下面的时间帧。我们只需要50帧，因此改为50。（上面绿色的位置会随之更改。如果你直接去改绿色的位置是改不了的。）
并且，我们还可以指定输出文件序列的名字：`$OS`的意思就是当前节点的名字。`$HIP`的意思就是当前.hip文件的绝对路径。

输出的格式是.bgeo.sc。这是houdini特有的压缩格式，对于Houdini来说读写都很快。
![在这里插入图片描述](https://img-blog.csdnimg.cn/666d346b63534e518fa6c56e68847881.png)
输出完了，你可以去看一看。
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa277ae28105498d93caccc404ee7b96.png)
你会发现file cache之后的节点上会出现一个虚影，这就代表我们已经缓存了。

最后，我们新建一个null节点，重命名为fluid_surface。这个节点什么也不做，单纯就是为了以后好引用名字。
![在这里插入图片描述](https://img-blog.csdnimg.cn/d744768941d04429a5c2894ca701a55a.png)

回到最外层

![在这里插入图片描述](https://img-blog.csdnimg.cn/75ea512b4a874202a0f5c60b1779cf38.png)
至此，我们已经完成了流体读取数据和表面重建

## 灯光和摄像机 (Mantra ）
灯光和材质都是渲染器特定的，我们从此处开始使用Mantra渲染。

### 灯光

#### 面光源
首先增加面光源。control+左键 点击工具栏（shelf tool）的area light

然后就会自动进入灯光的视角，**点击锁定**，就可以移动灯光。

Houdini中移动的方式是先

**Esc进入视图视角**，

然后**左键旋转，滚轮/右键拉近拉远，中键平移**。

**H键重置视角** 

**G键以某个物体为中心重置视角** 


![在这里插入图片描述](https://img-blog.csdnimg.cn/bcb3bed5f9234defa7e57c5c19607c0d.png)
调整结束之后，再次点击锁，然后随便移动一下视角，就能退出。

如果你想再次进入灯光视角，就点击右上角的**look through light**。如下图所示
![在这里插入图片描述](https://img-blog.csdnimg.cn/9f5b373a4f5645df9daf8a067f40bc4b.png)

退出以后，随便移动下视角，你会发现会有一个黄色的矩形，那个就是刚才的面光源的位置。



然后调整灯光的亮度。可以调**参数Exposure**。

![在这里插入图片描述](https://img-blog.csdnimg.cn/00ee2c62c4e841da97af6279ff62c1e5.png)
如法炮制再制作另一个面光源。

#### 环境光和HDR背景

接下来增加环境光和HDR背景

增加**environment light节点**

然后选择**Environment Map**。在这里，我们可以导入**HDR背景**图。

你可以从 [https://polyhaven.com/](https://polyhaven.com/) 获取免费的HDR资源！

HDR的作用就是为环境添加环境光照。因为是环境，你得指定是什么样的环境。比如：**是厨房？还是广场？还是森林？**

我们要清楚，**HDR的背景图默认不会被渲染出来**（当然你也可以渲染出来），**添加HDR的主要目的是为了设置环境光照**！

![在这里插入图片描述](https://img-blog.csdnimg.cn/ee875faae8a642299ed1ad8357ab305c.png)
### 摄像机

设置相机的方式基本与面光源一致：look through, 锁定，调整，解锁并退出。

![在这里插入图片描述](https://img-blog.csdnimg.cn/f019b300d68d4617aec1b55bf44430fa.png)
## 设置材质和渲染器参数（Mantra）
### 材质
首先，切换到Material Platte

如果你发现自己的标签页上没有这玩意，就右键，然后选择Material Platte

这里面所有的东西，都是迪士尼的Principled shader，学名又叫BRDF或者BSDF。Blender里面又叫原理化BSDF。所有这些东西，都只是参数不同的预设而已。

![在这里插入图片描述](https://img-blog.csdnimg.cn/17acc48b0a62433099524e19e8573466.png)

我们把Basic fluid拖出来。这是个流体的预设。
![在这里插入图片描述](https://img-blog.csdnimg.cn/6484de66684346fabfca8420f127ab51.png)

然后再把它拖到我们的流体块上

这时我们就会发现流体有了材质。
![在这里插入图片描述](https://img-blog.csdnimg.cn/e5e0ae213dcd4b569e92c631418ab486.png)

如果你想调整流体的材质，可以双击进入Basic fluid， 然后调整参数。比如我们这里稍微调整一下不透明度（opacity）

![在这里插入图片描述](https://img-blog.csdnimg.cn/204093c19f8443c8935995dee991e124.png)

## 渲染器
我们跳转到out。会发现有个默认的mantra_ipr
![在这里插入图片描述](https://img-blog.csdnimg.cn/1ed0a159f58b4030bb266c1576c2cdb4.png)
然后点击渲染窗口


![在这里插入图片描述](https://img-blog.csdnimg.cn/a65fa327265340e9898668dad807a5dd.png)

设置好输出路径等之后，点击渲染（或Render To Disk）即可！
![在这里插入图片描述](https://img-blog.csdnimg.cn/c280ab4ef34a4a109abf169e62aa8f9d.png)

注意：你可以自己指定保存路径和渲染的范围。我这里只是渲染一帧。


Mantra是CPU渲染，所以很慢。而且会占满你的整个CPU（如图所示。一张图我已经渲染了1分17秒才进度87%，而且CPU满载，内存消耗1.11GB）

![在这里插入图片描述](https://img-blog.csdnimg.cn/a05a89bd08c44c1599e8c52297ee9bef.png)


如果你等不及的话，可以先保存一下没渲染完的截图。如下所示。

![在这里插入图片描述](https://img-blog.csdnimg.cn/a289640783204bad948a6bf362c8723d.png)
至此，完整的渲染流程结束！


结果如图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b256be323db46e4ac590dda37c213ee.jpeg)


