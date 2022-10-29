# Houdini isn't scary 系列笔记

这是Houdini的入门系列教程“Houdini isn't scary”的笔记。

原教程来自Youtube

[b站上的翻译视频](https://www.bilibili.com/video/BV1nt4y1J74v/?spm_id_from=333.337.top_right_bar_window_custom_collection.content.click&vd_source=e15eb8f98a9dde1c9cc874314025b575)

## 1 面板
### Scence view快捷键
- 左键旋转
- 右键拉近拉远
- 中键平移
- G - 回到物体的中心
- H - 回到平面中心
- Space - 按住暂时回到视图(View Mode)（可以旋转视角之类的）
- Esc 回到View Model
- 1 透视视图 2 俯视图 3正视图 4右视图 5 uv视图（注：可以和空格键合用）

![image](https://user-images.githubusercontent.com/48758868/198538265-5853c040-989b-4538-9bc9-51b3416ad652.png)

### 节点网络
- L 规整节点排布(Layout?)
- p 弹出参数面板
- c 更改颜色
- 节点上长按中间展示节点信息
![image](https://user-images.githubusercontent.com/48758868/198820353-2618ee1a-06c6-42e6-bd0c-c9e0ee9de621.png)

## 2 甜甜圈

### 甜甜圈主体
首先创建一个torous
control+左键
![image](https://user-images.githubusercontent.com/48758868/198548512-a367946b-4b36-40d1-8575-21ac4f3167a7.png)

重命名节点为donut
进入该节点

然后新建color节点
![image](https://user-images.githubusercontent.com/48758868/198549096-596c11a9-1509-4976-83c2-b3d3c17ec9d7.png)

增加山噪声

![image](https://user-images.githubusercontent.com/48758868/198549526-2626617d-15c7-46a6-afad-2bfb52ca9f18.png)

甜甜圈主体就制作完了

还需增加个null节点，这个节点啥也不做。只是为了外界引用方便。
我们可以将其命名为donut_out

![image](https://user-images.githubusercontent.com/48758868/198550054-2317a989-7daf-4396-b9ec-68d5f2f7ebe5.png)

### 酥皮
回到最外层，创建geo节点，命名为icing
![image](https://user-images.githubusercontent.com/48758868/198550411-d5579952-ea0b-4101-915f-56478e63f788.png)

然后进入该节点

创建一个object merge节点，从而引用我们的甜甜圈主体
![image](https://user-images.githubusercontent.com/48758868/198551169-988e5fb8-66dc-483e-a0f1-d2aafc9b3ab2.png)

创建group节点并命名group name(注意不是节点名）
![image](https://user-images.githubusercontent.com/48758868/198552516-febc1ebc-9b83-416d-8ec2-9ab7f78950d9.png)

Group type改为Points，
然后点击Base group开始选择
![image](https://user-images.githubusercontent.com/48758868/198553181-a2e02771-5322-4e69-98b4-d3cab6c5a5d6.png)

按住空格按3到正面视角，然后框选点，最后Enter

然后新建delete节点，删掉没选的部分

![image](https://user-images.githubusercontent.com/48758868/198554968-7c26fc0a-f610-4b83-bd43-413a8e2d35d1.png)


增加icing部分，需要polyextrude来增加一定的厚度。
默认不会画出背面，所以要勾选下

![image](https://user-images.githubusercontent.com/48758868/198555918-85b17883-5585-4691-842c-6544216f025f.png)
还可以单独为正面和反面命名组
![image](https://user-images.githubusercontent.com/48758868/198556378-70bda620-0176-49f1-ba32-bfcb2928b271.png)

最后加一个color

![image](https://user-images.githubusercontent.com/48758868/198556895-f44020a3-284f-42f4-a51e-9d27cd6af49e.png)


然后同理，输出到null上，重命名为icing_out

![image](https://user-images.githubusercontent.com/48758868/198557318-8617ac39-d2de-4b90-9439-f2f635ab4f07.png)

酥皮就做好了


### 糖针

同理，新建一个springkles的geo节点，然后进入，然后用obj_merge引入之前的icing
![image](https://user-images.githubusercontent.com/48758868/198819550-cef412dc-d9ff-4a65-b736-8a70847651ad.png)

删除除了正面以外的所有组
![image](https://user-images.githubusercontent.com/48758868/198819745-76f3af86-d956-4c4b-bdac-3056925a5bd8.png)

撒点，并且可以点击display points来高亮这些点
![image](https://user-images.githubusercontent.com/48758868/198819778-5479866f-0c83-4756-9fb6-54883dc06c9d.png)

调小点的数量（Force totoal count）并增加随机性（缩小Relax Iterations）
![image](https://user-images.githubusercontent.com/48758868/198819869-11181e90-728c-4446-a12f-ce545edfe878.png)

接下来，我们希望把这些点的地方替换为糖针。于是就先制作tube, 稍微缩小一下，然后使用copy to points。
这个节点顾名思义，就是把一些geometry copy到点所在的位置上。

![image](https://user-images.githubusercontent.com/48758868/198820087-368d5183-8b76-4064-a7b8-43995a2def9f.png)

接下来是**重点**

我们希望有一种统一的调整参数的方法，而houdini中有一个概念叫做attribute。其实就是图元的大小、颜色等等属性。我们可以随意地创建和修改属性。我们首先创建属性来统一地缩放糖针。

使用节点attribute create。

我们修改名称为pscale，然后Class为Point, Value则按缩放到0.1

![image](https://user-images.githubusercontent.com/48758868/198820898-3dee5acf-8c1d-4af3-9137-78320c810ca3.png)

其中pscale是一个houdini能够识别的内置变量，它的含义就是几何体的大小缩放。

同理，我们可以让颜色随机化，也使用一个attribute。这次我们使用attribute randomize节点。

我们随机化Cd这个属性。这个属性代表的是Color diffuse，也就是最基础的漫反射颜色。
![image](https://user-images.githubusercontent.com/48758868/198821051-6077291a-e708-4202-8b0d-dfb9c9fb911e.png)

接着，我们发现糖针的朝向都是竖直向上的，这显然不对劲。我们希望糖针和酥皮的法向垂直，也就是躺在酥皮之上。

于是我们在scatter节点之前增加normal节点。

为什么要在这里加呢？因为点是没有法向的，只有面才有法向，因此要回到撒点之前加法向。
![image](https://user-images.githubusercontent.com/48758868/198821182-5bdae4d7-670b-40e3-bddf-6fc5a6148b98.png)

实际上，这个加法向的操作就是增加了一个normal属性。

怎么查看当前图元有什么属性呢？
一种方法是点击节点的info。比如点击scatter节点的info.

![image](https://user-images.githubusercontent.com/48758868/198821209-dd082fac-8b44-4abb-ba4f-c6f7dc807ed5.png)

info中显示了当前有三个属性，Cd,P 和N。分别代表颜色、位置和法向

还有一种方法是利用Geometer Spreadsheet

你会发现每个图元的数值都清晰可见

![image](https://user-images.githubusercontent.com/48758868/198821287-de4943d9-b41a-49b7-a775-d5d085d507e9.png)

最后也是新建一个null节点，命名为sprinkles_out

回到obj根目录，大功告成

![image](https://user-images.githubusercontent.com/48758868/198821944-02eda98d-b433-4f82-900e-190ee6ed1451.png)

### 动力学：空中撒点

现在让我们学习如何从空中撒糖针，然后粘到酥皮上。

首先建立一个geo节点，重命名为dynamic_sprinkles

进入节点后，增加一个平面grid，并将其放置在空中


然后增加transform,向左上方平移。这个平面相当于是生成撒点的源。
![image](https://user-images.githubusercontent.com/48758868/198825770-617ed373-950b-4e0e-be77-cc1d9ad66888.png)

接着是k帧。（注意：我当时点了好几次都不行，可能是houdini的bug，重启houdini就好了）

在translate的数值上点击**alt+鼠标左键**

会高亮为绿色

![image](https://user-images.githubusercontent.com/48758868/198825827-cb564154-f152-4638-819d-d2a82b992bcb.png)

这就是设置了一个key帧，下面也会同步显示出来一个绿色的钥匙标志

拖动时间轴到230帧。这时候会变蓝色。

![image](https://user-images.githubusercontent.com/48758868/198825938-715ba189-bc5a-4854-a0a8-f390030a33ad.png)

然后把平移数值改成另一个位置。这时候会变黄色。在此点击alt+鼠标左键，就在230帧又key了一帧。又变为绿色。

![key帧](https://user-images.githubusercontent.com/48758868/198826182-84d46f22-306d-4d88-b09b-92a1d017d81c.gif)


这下动画就做好了。

接着是如何撒糖针.

首先创建一个POP network节点。POP代表Particle Operator
(注意不要和DOP弄混了，POP可以看做是DOP的一种配置好了的“套餐”。所以它的类型还是DOP NetWork）

![image](https://user-images.githubusercontent.com/48758868/198826317-b06be72f-8ff7-46f7-8556-87f90a735d8f.png)

双击进入这个节点

![image](https://user-images.githubusercontent.com/48758868/198826400-2f944dac-9b32-4e95-876a-d2baa874012d.png)


