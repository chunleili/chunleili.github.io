# 带着uv进行模拟(冰激凌案例）


整个sop的路线图
![在这里插入图片描述](https://img-blog.csdnimg.cn/63695b3dd5304067bbdc1602d9c92f30.png)


## 前半部分：赋予材质并分离冰激凌球
![在这里插入图片描述](https://img-blog.csdnimg.cn/5f835ef33c144172864f43bf46584c13.png)

一般模型是分部分的，比方说下面这个冰激凌的，分为5个部分。三个不同的冰激凌球和水和杯子。这些部分在houdini中被称为group。
![在这里插入图片描述](https://img-blog.csdnimg.cn/9d9add4e30284111a5e5f45ff16df55f.png)


用material节点一口气赋予5个group材质。

![在这里插入图片描述](https://img-blog.csdnimg.cn/cfca2cbf617c4316abbe7fd9ed39d530.png)
具体的材质的指定要到mat去
![在这里插入图片描述](https://img-blog.csdnimg.cn/4d5cb37a952c48ef8a0bef0cda809907.png)

split将冰激凌球所对应的group分离出来
![在这里插入图片描述](https://img-blog.csdnimg.cn/7b9757d2d9514fa38a6bfdc2f5c2fa16.png)

如果想要指定输出模型的大小，可以利用matchsize节点
![在这里插入图片描述](https://img-blog.csdnimg.cn/02e9c054b67e475882a4ed6c9190e49a.png)
最后赋予normal则得到了分离出来并赋予材质的冰激凌球
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ccf067985b240afbfefab78f3f49fbc.png)
## 后半：传递属性到体积采样的点上
要点有二：
1. 体积采样
2. 属性传递
![在这里插入图片描述](https://img-blog.csdnimg.cn/ec36970d3ce94246ab263623781357cd.png)
我们得到的模型其实都是只有表面薄薄的一层，所以要**体积采样**为点云。（采用pointsfromvolume节点）

但是uv等属性也只是表面一层，因此要用**attribute transfer**这个节点。这个节点能够通过邻域扩散的方式将表面的属性传递到体积内部。

额外的一点是：由于uv和法线都是位于vertices上的，所以要用attribute promote把他们转移到points上。
![在这里插入图片描述](https://img-blog.csdnimg.cn/735901685c7b4510b5727f24db085639.png)
这里为了区分三个冰激凌球，还做了getgroupid的attribute wrangle。

对应的代码为

```c
int gid=0;
string mp = s@shop_materialpath;

if(mp == "/mat/ice1")
{
    gid = 1;
}
else if(mp == "/mat/ice2")
{
    gid = 2;
}
else if(mp == "/mat/ice3")
{
    gid = 3;
}

i@groupid = gid;
```
s@shop_materialpath也是从attrib promote提升过来的。

最后输出的数据为
![在这里插入图片描述](https://img-blog.csdnimg.cn/553ca889fb684e69b0a81067af36f926.png)
这些数据就是给模拟中输入的
