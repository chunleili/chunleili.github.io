# Houdini渲染流体（进阶版）--ysy

工程文件：

链接：https://pan.baidu.com/s/1eneV39-jC2N197P4etzDsA 
提取码：xzn7 

或者

链接: https://pan.baidu.com/s/1d-YoI8htr7QtkMm4qbIBtw?pwd=mt5w 
提取码: mt5w 


最终效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/d1de95eb21b447a78f4d9aec6a86def1.png)


2022-11-10
To be finished

Learn from ysy

The corresponding [csdn blog](https://blog.csdn.net/weixin_43940314/article/details/127785069?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22127785069%22%2C%22source%22%3A%22weixin_43940314%22%7D) 

## 渲染流程

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








### 5 attribute wrangle增加速度大小

增加属性speed
![在这里插入图片描述](https://img-blog.csdnimg.cn/b27787b3924f43e2847d5c27d5a798ee.png)



## 6 Stage

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






## 要安装的插件
安装配置Houdini 19.5.403
以下需要下载的文件可以在百度网盘下载（Houdini，redshift，Solaris，OCIO）：
链接：https://pan.baidu.com/s/1_J8zMDLJgPrufD7nJXDwiA 
提取码：1234

1.下载Houdini19.5.403
https://www.sidefx.com/download/
2.查找安装的houdini对应的rs版本号
https://docs.redshift3d.com/display/RSDOCS/Houdini+Plugin+Configuration
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a570e48f4ed8462b93e25a8ea3c1bf57.png)

在Maxon 软件上下载对应版本的redshift或者去官网下载。
在maxon官网安装maxon，其中redshift需要版权，申请学生认证购买。
3.由于安装的Houdini19.5.403在官网没有对应最新版的redshift，前往论坛下载最新的redshift和Solaris：
https://redshift.maxon.net/topic/31230/houdini-solaris-plugins-custom-builds
解压以后改成对应版本，OUT放到houdini文件夹下面，stage那个压缩包则是放到Solaris下面，然后文件名也是一样的版本号。
 
![在这里插入图片描述](https://img-blog.csdnimg.cn/dd058e692fab40adbdd4c95cf4282477.png)

4,找到houdini的env文件，用记事本打开
一般在C:\Users\Administrator\Documents\houdinixxx（linux在~/houdinixxx）
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/07488bde8c58463bb30fba3e0ac43127.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/47752a8a8f3648d08f214d4dd56d366e.png)

 
添加如下：
HOUDINI_PATH = "/usr/redshift/redshift4houdini/${HOUDINI_VERSION};&"
PXR_PLUGINPATH_NAME = "/usr/redshift/redshift4solaris/${HOUDINI_VERSION}"
OCIO="/home/lj/Downloads/houdini19.0.383/RedshiftOCIOConfigs-main/redshift-custom-config/config.ocio"
HOUDINI_NVIDIA_OPTIX_DSO_PATH="/home/lj/Pictures/optix"

其中OCIO在官网或网盘下载
5.打开houdini，菜单edit-references-rendering 勾选redshift保存即可
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/07842f022da34fba8af4cbc0845f308e.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/4354448ea4b642b38d3db5ced4b5b80e.png)


6.OCIO
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/eeaedaf840544f10bb9487bee9d09b5c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3bc515e342ce4edb98424f831d7f03be.png)

 
Ubuntu系统卸载Houdini
在opt/hfs19.0.383 目录下
sudo su
source houdini.uninstall


## OICO 颜色管理设置
OCIO颜色管理设置
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/dad562b4edae4820bf99d6e56755df2d.png)

将渲染生成的exr图片序列输入，
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/77cb2253cc66455d838e8452517fc402.png)

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/b0fc18330b7b46a9b194a9aef6e8b658.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/dd1dd7ae790d4bafb1bd297f746bbca8.png)

 
点击render输出图片颜色管理修正后的exr文件序列
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/842afa7067d742af830fd9c4c1de255a.png)

## 将Exr多个图片合成视频
1.安装Adobe_After_Effects2022。
2.新建项目。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/8056e5ee57294dffa2edbb5c334dc58b.png)

3.导入所有Exr文件。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/1c61306058214db6b509ba4f00cbe8f8.png)

4.选中所有导入的文件，拖入下方红框内，点击确定。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a88f8518c19f4b69b390c5a1608318ec.png)

5. 点击渲染队列，然后按Ctrl+M。
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/1c751d265d4e499486d46c37dffaedc7.png)

6.设置输出参数后点击渲染即可得到视频文件。
 
![在这里插入图片描述](https://img-blog.csdnimg.cn/4a19ddf5be93403e91828c6fc6371602.png)


