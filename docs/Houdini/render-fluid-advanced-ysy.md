# Houdini渲染流体（进阶版）--ysy

2022-11-10
To be finished

Learn from ysy

The corresponding [csdn blog](https://blog.csdn.net/weixin_43940314/article/details/127785069?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22127785069%22%2C%22source%22%3A%22weixin_43940314%22%7D) 

### 1 文件导入

利用file导入原始文件，利用rop geometry保存成bgeo.sc加快读取速度



![请添加图片描述](https://img-blog.csdnimg.cn/87f92a5eadca4263957b5d91d72c2806.png)



### 2 split

只分出流体部分

![请添加图片描述](https://img-blog.csdnimg.cn/30afe2eb7149468983c8408e7470f824.png)






### 3 表面重建前放大10倍



### 4 particle fluid surface表面建模


![在这里插入图片描述](https://img-blog.csdnimg.cn/2af73f9887b04d3cb3b3edfc2d00d3a3.png)




参数

调节particle seperation

voxel scale

influence scale

droplet scale

![在这里插入图片描述](https://img-blog.csdnimg.cn/4a058bcfbe2b4f139b326faced98516a.png)





在filter面板

dilate

smooth

erode



![在这里插入图片描述](https://img-blog.csdnimg.cn/fde7bbf940fe4d17a78196ffc16592f6.png)








### 4 attribute wrangle增加速度大小

增加属性speed
![在这里插入图片描述](https://img-blog.csdnimg.cn/b27787b3924f43e2847d5c27d5a798ee.png)



## Stage

切换到stage窗口



### 1 Geometry Sequence导入序列

### 2 SOP Import导入静止物体


![在这里插入图片描述](https://img-blog.csdnimg.cn/cdc9d1ac38be41f59915371d003caa50.png)



### 3 matrial library 材质



![在这里插入图片描述](https://img-blog.csdnimg.cn/57f4c770f5db4489bfd8c166378991d4.png)







#### water


![在这里插入图片描述](https://img-blog.csdnimg.cn/f2515f776a36479b83d47e28c5c742ca.png)


### 4 camera


![在这里插入图片描述](https://img-blog.csdnimg.cn/0c35210a18f1455287e56b7e4152edeb.png)

### 5 backdrop(背板)： SOP Create



![请添加图片描述](https://img-blog.csdnimg.cn/6c27e451a52d47beb59be05499f4a08b.png)


![请添加图片描述](https://img-blog.csdnimg.cn/3e722928e4e746e38bc6f6562325b884.png)






### 6 assign material


![请添加图片描述](https://img-blog.csdnimg.cn/46bd5e42c8ab4886833a690b0f23bd80.png)




![请添加图片描述](https://img-blog.csdnimg.cn/b253b6bdea0e4de1950aec12ec006471.png)


### 7 灯光



![请添加图片描述](https://img-blog.csdnimg.cn/e40c420fa7e54fce8afd84825d69e3ce.png)

### 8 render geometry setting: water


![请添加图片描述](https://img-blog.csdnimg.cn/6a907db3e1254c6d9b07b0a03aa3f90b.png)



![请添加图片描述](https://img-blog.csdnimg.cn/8877247738af405ea2f8b11c9e4fa527.png)


### 9  render geometry setting: solid

增加motion blur


![请添加图片描述](https://img-blog.csdnimg.cn/7e0eb4dec8464a8da6efb0868ce1dfab.png)



### 10 redshift渲染


![请添加图片描述](https://img-blog.csdnimg.cn/ec85c2267f1b492d8aecfe83fdd489ea.png)






注意Denoising中开启OptiX是用GPU降噪。该功能有可能导致程序崩溃。

![请添加图片描述](https://img-blog.csdnimg.cn/048e32f667034a7c9c0541a3005b3876.png)

