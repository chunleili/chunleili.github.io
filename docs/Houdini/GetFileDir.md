如图片挂掉请参考[csdn](https://blog.csdn.net/weixin_43940314/article/details/147341911?sharetype=blogdetail&sharerId=147341911&sharerefer=PC&sharesource=weixin_43940314&spm=1011.2480.3001.8118)


## 创建null节点并命名为control并增加filedir参数
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5d7771d5923d4899b5f240c74bc5384b.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/32ad3852f18e4211ac9dfff0902b9204.png)


## 创建python节点

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/18c73df321214b3b91a9ae2da1847b77.png)

```cpp
node = hou.pwd()
geo = node.geometry()

node = hou.node('/obj/output_tetgen/control')
filedir = node.parm('filedir').eval()
print("filedir:",filedir)
```

得到输出
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/9b54ef83cc594c00b72b5f46871bc6e2.png)
