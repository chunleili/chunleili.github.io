需求：通过对控制点的K帧得到了动画，该控制点控制vellum的运动。我们需要输出该控制点随时间变化的位置。


## 1. 找到控制点数据？
控制点显然是这俩红点
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b6f4bcb1fa74256ada1904b87ffdf29.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/a913d98ce7b947919b4aa0f353d4d40d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/962920d9b9664209970453838a68362c.png)



我们分析发现，是通过transform来k帧的，显示bezier()表示是k帧出来的

这是控制点pin1，pin2也是同理。

**因此数据在pin1和pin2这两个group中**


## 2.  清理控制点

![在这里插入图片描述](https://img-blog.csdnimg.cn/4d6d1ef8effb4d34b2317a6de3733436.png)

首先，使用split将两个组分离出来

然后使用delete attribute吧除了坐标以外的多余的东西删掉

然后用vex将多个点平均成一个

run over detail(once)
```
int npt = npoints(0);
vector pos = {0,0,0};
for(int i = 0;i < npt; i++){
    pos += point(0, "P", i);
    removepoint(0,i,1);
}
    
addpoint(0,pos/npt);
```

为啥有多个点呢？你看一下，实际上控制点是一组点，而我们只需要一个

![在这里插入图片描述](https://img-blog.csdnimg.cn/e6404b967c4c4046aa04fe96dc3de6e8.png)

最后用file输出

注意file输出的时候要先高亮一下这个节点。并且后缀`$F`表示时间帧数

然后播放，我们可以调整先播放到50帧。

对CP2也如法炮制即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/d2d87b4a4f4c43a8ac04b8dbeb6c783a.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/bd242a5068a84c2985280a6c57d7a597.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/642ed1e8de0d4143a6191d964d9def46.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/4696c22338c946d383637f67d9731250.png)
