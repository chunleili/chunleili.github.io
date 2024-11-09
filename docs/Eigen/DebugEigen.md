(参考https://eigen.tuxfamily.org/index.php?title=Developer%27s_Corner#Debugging_under_Visual_Studio）
假如我们直接想要检查Eigen中的VectorXf的值，我们会发现无法看到内部的值，如图

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/b060b9ec69ae456fa7925750727992ca.png)
只需要下载eigen.natvis这个文件，
（下载地址： https://gitlab.com/libeigen/eigen/-/blob/master/debug/msvc/eigen.natvis ）
（如果你git clone过Eigen文件夹，就发现它就在Eigen源码的Debug目录下面）

然后放到下面的目录即可
```%VSINSTALLDIR%\Common7\Packages\Debugger\Visualizers```

（其中%VSINSTALLDIR%是Visual studio的安装目录）

VS Code放在cpptools插件的Visualizers目录
```
C:\Users\cl-w\.vscode\extensions\ms-vscode.cpptools-1.22.11-win32-x64\debugAdapters\vsdbg\bin\Visualizers
```
这是现在的结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/8881b94130e84c73bd44c4324b48345c.png)

