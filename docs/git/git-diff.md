# vs code 可视化git diff比较历史文件与当前文件（git lens插件）

首先我们需要安装git lens插件 和git graph插件

然后 我想比较first和 当前HEAD的文件差异
![在这里插入图片描述](https://img-blog.csdnimg.cn/69895eb3321b4c238c01fc95fe90c6e0.png)

如果使用命令行，就是
```
git diff HEAD first 文件路径
```

但是这样很不方便，不能可视化

如果安装了git lens

只需要

1. 打开想看的文件
2. 打开侧边栏的git标志，然后打开FILE HISTORY。这里就显示了所有与该文件修改有关的commit


![在这里插入图片描述](https://img-blog.csdnimg.cn/c8de8ae4ef184b138f3a3d960b611d76.png)
3.  点击open change with working file。然后点击右上角clear file annotations
![在这里插入图片描述](https://img-blog.csdnimg.cn/20c2374534d14721804d034f4ade5d08.png)

这样就好了！

左边就是历史的文件，右边是当前的
