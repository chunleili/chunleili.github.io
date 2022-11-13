# cmake使用install安装库

如果你是库开发者，你应该学习install命令。这个命令很简单，其实就是把编译出来的文件（可执行文件、静态库、动态库、头文件等）拷贝到相应的目录下面。

## 原理
一个典型的install命令如下所示
```
install(TARGETS main mylib mylib-shared main
ARCHIVE #静态库 
    DESTINATION lib
LIBRARY #动态库
    DESTINATION lib
RUNTIME #可执行文件
    DESTINATION bin
)
```

以上命令会安装一个动态库，一个静态库，一个可执行文件。CMAKE会根据target类型自动推断。TARGETS 表示我们现在要安装的是TARGETS，除此之外你还可以安装FILES、DIRECTORY等。这里不讲。
 
通过ARCHIVE/LIBRARY/RUNTIME关键字分别指定静态库、动态库和可执行文件的属性。比如指定安装后缀DESTINATION。例如静态库安装路径就是前缀+后缀=${CMAKE_INSTALL_PREFIX}/install/lib。还可以从/开始直接指定绝对路径。

其中CMAKE_INSTALL_PREFIX可以通过顶层目录中的CMakeLists.txt来定义（注意，需要是顶层目录）。你也可以通过-D CMAKE_INSTALL_PREFIX=xxx来从外部命令行传递。



## 实例


目录结构
```
.
├── CMakeLists.txt
└── src
    ├── CMakeLists.txt
    ├── main.cpp
    ├── mylib.cpp
    └── mylib.h
```
  
我们这里编译一个可执行文件main，一个静态库，一个动态库。

顶层的 CMakeLists
```
cmake_minimum_required(VERSION 3.16)
project(learn-cmake LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release CACHE STRING "Build type" FORCE)
endif()


# 设置安装的位置前缀。默认在Unix-like是/usr/local, 在Windows是C:\Program Files。注意！这个设置必须在顶层的CMakeLists.txt当中指定！
set(CMAKE_INSTALL_PREFIX ${CMAKE_SOURCE_DIR}/install)
message("CMAKE_SOURCE_DIR: ${CMAKE_SOURCE_DIR}")
message("CMAKE_INSTALL_PREFIX: ${CMAKE_INSTALL_PREFIX}")

add_subdirectory(src)
```




src/CMakeLists.txt
```
add_executable(main main.cpp)

# 编译静态库
add_library(mylib mylib.cpp mylib.h)

# 编译动态库。注意在Windows平台需要将WINDOWS_EXPORT_ALL_SYMBOLS设置为ON（默认为OFF)，以设置符号可见性。
if(WIN32) 
    set(WINDOWS_EXPORT_ALL_SYMBOLS ON)
endif()
add_library(mylib-shared SHARED mylib.cpp mylib.h)


# 安装可执行文件，静态库和动态库。CMAKE会根据target类型自动推断。
# 通过ARCHIVE/LIBRARY/RUNTIME关键字分别指定静态库、动态库和可执行文件的属性。比如指定安装后缀DESTINATION。例如静态库安装路径就是前缀+后缀=${CMAKE_SOURCE_DIR}/install/lib。还可以从/开始直接指定绝对路径。
install(TARGETS main mylib mylib-shared main
ARCHIVE #静态库 
    DESTINATION lib
LIBRARY #动态库
    DESTINATION lib
RUNTIME #可执行文件
    DESTINATION bin
)
```

src/main.cpp

```
#include<iostream>
int main()
{
    std::cout<<"hello world\n";
    return 0;
}
```

mylib.cpp

```
#include "mylib.h"

float sum(float a, float b)
{
    return a+b;
}
```
mylib.h
```
float sum(float a, float b);
```



## 运行结果

```
cmake -B build
cmake --build build --config=Release --target=install
```
输出
```
MSBuild version 17.3.1+2badb37d1 for .NET Framework
  Checking Build System
  Building Custom Rule E:/learn/cmake/src/CMakeLists.txt
  main.cpp
  main.vcxproj -> E:\learn\cmake\build\src\Release\main.exe
  Building Custom Rule E:/learn/cmake/src/CMakeLists.txt
  mylib.cpp
  mylib.vcxproj -> E:\learn\cmake\build\src\Release\mylib.lib
  Building Custom Rule E:/learn/cmake/src/CMakeLists.txt
  mylib.cpp
  mylib-shared.vcxproj -> E:\learn\cmake\build\src\Release\mylib-shared.dll
  Building Custom Rule E:/learn/cmake/CMakeLists.txt
  -- Install configuration: "Release"
  -- Installing: E:/learn/cmake/install/bin/main.exe
  -- Installing: E:/learn/cmake/install/lib/mylib.lib
  -- Installing: E:/learn/cmake/install/bin/mylib-shared.dll
  -- Up-to-date: E:/learn/cmake/install/bin/main.exe
```

会在当前项目根目录下产生install文件夹，并且在Install文件夹中出现

```
.
├── bin
│   ├── main.exe
│   └── mylib-shared.dll
└── lib
    └── mylib.lib
```

执行main.exe

```
hello world
```
