
# find_package的简单用法

find_package是一个较为复杂的命令。详情请参考最后的参考资料。我们这里只讲最基本的简明扼要的用法和原理。

## 基本用法

我们要搜索一个名为 PackageName 的包。
```
find_package(PackageName)
```


因为对于项目来说，有些包是可选的。但有些是必要的。对于必要的，可以指定REQUIRED，这样找不到对应的包就会报错。

```
find_package(PackageName REQUIRED)
```



另外，有些包其中有许多的组件，你可以指定COMPONENTS 来只使用某些组件
```
find_package(PackageName COMPONENTS xxx)
```

## 搜索的是什么？
find_package其实搜索的是.cmake文件。更具体地说：
- findPackageName.cmake文件，或者是
- PackageNameConfig.cmake文件

这两种只要找到其中之一即可。找第一个的叫做MODULE模式，找第二个的叫做CONFIG模式。你可以指定MODULE或CONFIG关键字来指定只找某种模式的。否则是两种模式都找，先找第一个，找不到再找第二个。


这些文件里，其实设定的就是库和包含路径的位置。更具体的说，就是设置了这三个变量

- PackageName_FOUND 找到了就是True，没找到就是未设定
- PackageName_INCLUDE_DIR 即头文件目录
- PackageName_LIBRARY 即库文件



## 去哪搜索？
1. 首先，可以通过-D从外部传入搜索路径
```
<PackageName>_ROOT
```
或者是
```
<PackageName>_DIR
```

2. 其次，你可以通过设定CMAKE_MODULE_PATH指定搜索MODULE模式的位置

```
CMAKE_MODULE_PATH = /path/to/FindXXX.cmake
```

这些FindXXX.cmake或者XXXConfig.cmake的路径通常第三方库的作者会放在自己项目的cmake目录下。

3. 当然，官方内置了一些FindXXX.cmake和XXXConfig.cmake。这些位置也是被搜索的路径位于cmake的安装目录下，例如
```
C:\Program Files\CMake\share\cmake-3.23\Modules
```

4. 通过外界或手动设定CMAKE_PREFIX_PATH也可以指定搜索路径


5. 当然，还会搜索系统的`PATH`环境变量，比如

```
/usr/local/
```


6. 最后你可以以如下方式指定路径

```
find_package(PackageName [PATHS path1 [path2 ... ]])
```
或者将`PATHS` 关键字替换为`HINTS`


总之，一共有九种搜索路径，详情请参考[cmake官方文档](https://cmake.org/cmake/help/latest/command/find_package.html)


## 怎样使用？

```
if(XXX_FOUND)
    add_executable(main main.cpp)
    target_link_libraries(main XXX::XXX)
endif()
```

这个双冒号前面的是包的命名空间，后面的是包的组件。具体的要看包提供者。如果不知道，可以使用vcpkg install xxx来查看。例如

```
(base) PS E:\codes\vcpkg> vcpkg install freeglut
    find_package(GLUT REQUIRED)
    target_link_libraries(main PRIVATE GLUT::GLUT)
```



## 编写自己的FindXXX.cmake
关键就在于设定那三个变量
- PackageName_FOUND 找到了就是True，没找到就是未设定
- PackageName_INCLUDE_DIR 即头文件目录
- PackageName_LIBRARY 即库文件

具体可以参考官方写的FindZLIB.cmake

## 参考资料

- [cmake官方文档](https://cmake.org/cmake/help/latest/command/find_package.html)
- [知乎文章](https://zhuanlan.zhihu.com/p/97369704)
- [youtube视频](https://www.youtube.com/watch?v=wAh2n_UWgyw)
- [简书文章](https://www.jianshu.com/p/46e9b8a6cb6a)


