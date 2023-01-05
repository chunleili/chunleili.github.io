# zeno的安装

## Windows10 + VS2019/2022

先参考官方的安装指南
https://github.com/zenustech/zeno/blob/master/BUILD.md

这里面就几个要点
1. Qt版本要5.14.2, 因为这个是开源不需安装器的最后一个版本。并且要先注册，才能安装。不挂梯子会有些慢。并且注意要勾选binaries 否则不会安装核心组件。其他的组件可以不安装。
2. 设置系统变量Qt5_DIR
```
名称为：Qt5_DIR
变量值：D:/App/Qt5/Qt5.14.2/5.14.2/msvc2017_64/lib/cmake/Qt5
```
注意这个不是在Path里面，而是单独的一个系统变量。
如图所示
![image](https://user-images.githubusercontent.com/48758868/197574475-9f42837b-e132-40d5-9064-1820b0107756.png)
这是为了不需要每次手动设置Qt5_DIR和相关路径，以让zeno找到Qt5

3. 为系统Path变量增加路径
```
D:\App\Qt5\Qt5.14.2\5.14.2\msvc2017_64\bin
```
这是为了让zeno找到Qt5的动态库，比如Qt5Core.dll之类的。你也可以手动复制到zeno的build bin下面，当然这样会麻烦一点。

如果没有手动复制也没有设置环境变量，就会提示找不到xxx.dll


## 结果

![image](https://user-images.githubusercontent.com/48758868/197575318-4996c01d-5916-4723-8cc3-4a488e0a22d2.png)
![image](https://user-images.githubusercontent.com/48758868/197575393-b687a509-1f12-46bb-b1c4-b136a4d980ad.png)

