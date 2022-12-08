# zeno将节点写死到程序内部

首先我们有个封装好的子图。

![在这里插入图片描述](https://img-blog.csdnimg.cn/5e12f6da7c42454bbe8e2ecf689b3b39.png)

然后control+shift+e保存为cpp格式

比方说，我们把它保存到projects/PBD目录下面

![在这里插入图片描述](https://img-blog.csdnimg.cn/9adab22ddf27471780d3aa39c7c560c1.png)

我们可以观察一下这个cpp文件

它实际上就是将节点的json文件序列化了一下。 创建了一个节点类的模板。

这个类的mydata变量，存储的实际上是json的ascii码（原版本直接存字符串，但是因为msvc字符串长度有限制）

![在这里插入图片描述](https://img-blog.csdnimg.cn/60c06494306843e387b30ac8ef02af0c.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c418f5e5a0714c0ebead98c134a77839.png)




并添加到cmake

（使用target_source）

![在这里插入图片描述](https://img-blog.csdnimg.cn/33a4a13415984cf4a70ea8f07ac06079.png)

重新编译



最后就可以看到写死的子图作为新节点了。

![在这里插入图片描述](https://img-blog.csdnimg.cn/9e74936a174a43f6986b31b2a1c9b174.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/e28d7010da484c4fb368b0b0fb3cb11c.png)
