# Houdini粒子的导入与导出
## Houdini导入到splish
1. 在Houdini中使用file导入任意几何模型

2. 使用points from volume采样点，使其粒子化
![在这里插入图片描述](https://img-blog.csdnimg.cn/e21f04f1055c4e6cb25b2e97b067efd6.png)




使用file导出粒子化之后的模型，后缀写bhclassic

![在这里插入图片描述](https://img-blog.csdnimg.cn/dc37fa3df44448ef8733d8eb1841b68b.png)
创建json场景文件（建议放到MyScences文件夹）

我们可以复制Scences/ViscousBunny.json然后修改particleFile这一行即可

同时建议将bhclassic复制到models文件夹下

![在这里插入图片描述](https://img-blog.csdnimg.cn/d969e14972674b71a9458d15e3471041.png)
结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/a31533b4920b451d9d8130a48cb239a1.png)

## splish导出到Houdini
勾选Houdini exporter(mypartio)
![在这里插入图片描述](https://img-blog.csdnimg.cn/be725c115efd4abca04ba84884686abd.png)

空格运行一段时间后

结果位于bin/output文件夹。格式为bgeo.gz

![在这里插入图片描述](https://img-blog.csdnimg.cn/440d72598043461e8f45a8a0ff122e1e.png)

该格式可以直接导入Houdini之中

![在这里插入图片描述](https://img-blog.csdnimg.cn/c7dba99d4d074a87a35f22adf2416a9e.png)
