# Houdini isn't scary 系列笔记

这是Houdini的入门系列教程“Houdini isn't scary”的笔记。

原教程来自Youtube

[b站上的翻译视频](https://www.bilibili.com/video/BV1nt4y1J74v/?spm_id_from=333.337.top_right_bar_window_custom_collection.content.click&vd_source=e15eb8f98a9dde1c9cc874314025b575)

## 1 面板
- 左键旋转
- 右键拉近拉远
- 中键平移
- G - 回到物体的中心
- H - 回到平面中心
- Space - 按住暂时回到视图(View Mode)（可以旋转视角之类的）
- Esc 回到View Model
- 
![image](https://user-images.githubusercontent.com/48758868/198538265-5853c040-989b-4538-9bc9-51b3416ad652.png)

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
