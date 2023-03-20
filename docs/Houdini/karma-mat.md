两步走：
1. material library节点导入材质到USD
2. assign material节点赋予材质到具体的物体



导入材质

一个很常见的混淆是Material VOP和Material Path

前者是用来导入旧的材质的（除了MTLX材质以外的任何材质）

后者是专门导入MTLX新材质的
![在这里插入图片描述](https://img-blog.csdnimg.cn/822f3f1f1c28490fb3cc04787af6c283.png)


赋予材质
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6cc13d4fe754b27ac2e6554cac58d99.png)


至于为什么要分这两步，并且还要分开旧材质和新材质呢？

这是因为USD的文件存储结构和旧的材质旧不太一样。所以任何旧的东西（包括材质、表面等）都要先导入到USD当中，相当于做一次格式转换，然后后续使用的时候，都要使用转换后的。也就是说，USD目前是出于一种半封闭状态的，其他的不太和它兼容，要想使用，就得先转换一下。
