# 利用cmake的add_subdirectory管理内部和外部库

## 问题描述
内容参考自 [cmake菜谱](https://www.bookstack.cn/read/CMake-Cookbook/content-chapter7-7.7-chinese.md)


请从 [这里下载源码](https://github.com/dev-cafe/cmake-cookbook/tree/v1.0/chapter-7/recipe-07) 

假如你有一个稍微大一点的项目，那么就需要引用许多外部库。同时，你还有许多自己写的内部库。最后，你把他们都链接到自己的可执行文件上。

你的项目结构可能如下所示

- 根目录
  - 自己的项目
    - 内部库A
    - 内部库B
  - 外部库

## 实践

### 项目结构

为了更好的说明，我们采用了如下的[项目源码](https://github.com/dev-cafe/cmake-cookbook/tree/v1.0/chapter-7/recipe-07 ).

我们把所有的CMakeLists.txt文件都清理干净，然后从头开始写。

目录如下
```
.
├── external
│   ├── conversion.cpp
│   └── conversion.hpp
├── src
│   ├── evolution
│   │   ├── evolution.cpp
│   │   └── evolution.hpp
│   ├── initial
│   │   ├── initial.cpp
│   │   └── initial.hpp
│   ├── io
│   │   ├── io.cpp
│   │   └── io.hpp
│   ├── main.cpp
│   └── parser
│       ├── parser.cpp
│       └── parser.hpp
└── tests
    ├── catch.hpp
    └── test.cpp
```

解释：
- external存放外部库
- tests存放测试 使用catch2测试
- src是本项目源码目录
  - evolution/initial/io/parser都是内部库
  - main 可执行目标


我们从上到下依次来建立CMakeLists.txt以管理项目

### 根目录 CMakeLists.txt
在根目录中建立 CMakeLists.txt

内容如下
```
# cmake最低版本
cmake_minimum_required(VERSION 3.20)
# 本项目名
project(organize-3rd-parties)

# 设置C++17标准，需要满足标准，不用C++拓展语法
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# 进入src文件夹下面的CMakeLists.txt
add_subdirectory(src)

# 进入external文件夹下面的CMakeLists.txt
add_subdirectory(external)

# # 开启测试
# enable_testing()
# # 进入 tests 文件夹下面的CMakeLists.txt
# add_subdirectory(tests)
```

我们这里先暂时把测试的部分注释掉。只关注管理内部和外部库。


### src目录 CMakeLists.txt
在src中建立 CMakeLists.txt

内容如下
```
# 将main.cpp编译成可执行文件
add_executable(main main.cpp)

# 进入各个内部库子目录
add_subdirectory(evolution)
add_subdirectory(initial)
add_subdirectory(io)
add_subdirectory(parser)

# 链接外部库和内部库到可执行目标
target_link_libraries(main 
    PRIVATE         #不会传播
        evolution   #内部库
        initial     #内部库
        io          #内部库  
        parser      #内部库
        conversion  #外部库
)
```

### 内部和外部库目录的 CMakeLists.txt
以下几个库的管理方式都是一样的
src\evolution
src\initial
src\io
src\parser
external\CMakeLists.txt

我们举一个例子即可

src\evolution\CMakeLists.txt
```
# 编译静态库，暂不添加任何源码。
add_library(evolution "")

# 随后用target_sources添加源码。
# 这种方式更好，因为可以更细粒度地访问权限。
# 例如对cpp文件就是PRIVATE，而hpp则是PUBLIC
target_sources(evolution
PRIVATE
    # 注：${CMAKE_CURRENT_LIST_DIR}代表当前的CMakeLists.txt文件所在的绝对路径。
    ${CMAKE_CURRENT_LIST_DIR}/evolution.cpp
PUBLIC
    ${CMAKE_CURRENT_LIST_DIR}/evolution.hpp
)

# 增加头文件目录
target_include_directories(evolution
PUBLIC
    ${CMAKE_CURRENT_LIST_DIR}
)
```

对其他几个库同理，只要更改名字即可

注意：即使是外部库，也是同样的做法。对cmake来说，没有任何的区别。


### 构建运行结果(无测试）
cmake是一个元构建系统。就是说：它先生成对应系统下的原生构建工具（如VS的MSBuild 或者Linux的makefile）所需要的构建文件，然后再运行这些原生构建工具进行构建。


最基本的cmake使用分为两步
1. configure(配置): 用于生成VS的sln文件(Windows)，或者makefile文件(Linux/Mac)
2. build(构建): 用于生成可执行文件和静态库，相当于VS点击build，或者makefile运行make命令

最后运行生成的可执行文件即可


我们这里采用的是Win10 + VS2022

总结起来就两步
```
cmake -B build
cmake --build build --config=Release
```

下面，我们详细观察输出结果

首先进行配置
```cpp
PS E:\learn\cmake> cmake -B build
-- Selecting Windows SDK version 10.0.22000.0 to target Windows 10.0.19043.
-- Configuring done
-- Generating done
-- Build files have been written to: E:/learn/cmake/build
```

然后构建

注意：假如你在Windows下使用VS，那么**--config=Release是必要的**。因为默认会进行Debug模式的构建。
**而且实际上VS会把所有的四种变体都生成，因此你在配置步骤指定CMAKE_BUILD_TYPE是没有用的！**

```
PS E:\learn\cmake> cmake --build build --config=Release
MSBuild version 17.3.1+2badb37d1 for .NET Framework
  Checking Build System
  Building Custom Rule E:/learn/cmake/external/CMakeLists.txt
  conversion.cpp
  conversion.vcxproj -> E:\learn\cmake\build\external\Release\conversion.lib
  Building Custom Rule E:/learn/cmake/src/evolution/CMakeLists.txt
  evolution.cpp
  evolution.vcxproj -> E:\learn\cmake\build\src\evolution\Release\evolution.lib
  Building Custom Rule E:/learn/cmake/src/initial/CMakeLists.txt
  initial.cpp
  initial.vcxproj -> E:\learn\cmake\build\src\initial\Release\initial.lib
  Building Custom Rule E:/learn/cmake/src/io/CMakeLists.txt
  io.cpp
  io.vcxproj -> E:\learn\cmake\build\src\io\Release\io.lib
  Building Custom Rule E:/learn/cmake/src/parser/CMakeLists.txt
  parser.cpp
  parser.vcxproj -> E:\learn\cmake\build\src\parser\Release\parser.lib
  Building Custom Rule E:/learn/cmake/src/CMakeLists.txt
  main.cpp
  main.vcxproj -> E:\learn\cmake\build\src\Release\main.exe
  Building Custom Rule E:/learn/cmake/CMakeLists.txt
```

可执行未见位于
`build\src\Release\main.exe`

运行
```
PS E:\learn\cmake\build\src\Release> .\main.exe 10 10 10
length: 10
number of steps: 10
rule: 10
     *
    *
   *
  *
 *
*
         *
        *
       *
      *
     *
```


**至此，我们已经学会了如何使用add_subdirectory来管理内部和外部库。**

下面是加餐。

### 补充1：测试
首先我们要开启测试：

在根目录CMakeLists.txt 把注释的部分解除注释
```
# 开启测试
enable_testing()
# 进入 tests 文件夹下面的CMakeLists.txt
add_subdirectory(tests)
```




我们采用catch2这个测试框架。你可以从[这里找到catch2源码](https://raw.githubusercontent.com/catchorg/Catch2/v2.x/single_include/catch2/catch.hpp)

由于catch2是个header-only的库（最新版已经不是了），所以你只需要把头文件所有源码全部复制下来，然后新建一个catch.hpp保存即可。保存的文件建议放在tests文件夹下，这样我们写的测试用例直接include catch.hpp即可使用。

新建 `tests\CMakeLists.txt`
```
# 编译测试用例为可执行文件
add_executable(test1
    test.cpp
)

# 把待测试的库连接到测试用例上
target_link_libraries(test1 evolution)

# 告知cmake增加了测试，名为my_test，执行test1这个可执行文件
add_test(
    NAME my_test
    COMMAND test1
)
```

构建和运行测试
```
cmake -B build
cmake --build build --config=Release
cd build
ctest -C Release
```

注意：
1. ctest 是cmake运行测试的一个工具。这个工具会去寻找add_test来查看测试在哪。
2. ctest 也需要编译之后才能用。它其实本质上和其他的目标没什么不同。
3. 需要进入build目录才能使用ctest命令，否则会报错找不到测试用例。
4. 在Windows下需要指定-C命令，同样是因为VS必须指定构建的变体才行。

输出结果
```
Test project E:/learn/cmake/build
    Start 1: my_test
1/1 Test #1: my_test ..........................   Passed    0.02 sec

100% tests passed, 0 tests failed out of 1

Total Test time (real) =   0.03 sec
```



### 补充2：把输出的exe放到根目录的bin目录下
默认情况下输出的exe在
`build\src\Release\main.exe`

这是在build目录下模拟了源文件目录的结构。

如果你希望把exe文件 或者 库文件直接输出到根目录的bin 或者 lib目录下，你可以把根目录下面的CMakeLists.txt增加如下3行：


```
# cmake最低版本
cmake_minimum_required(VERSION 3.20)
# 本项目名
project(organize-3rd-parties)

# 设置C++17标准，需要满足标准，不用C++拓展语法
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# 静态库输出目录
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/lib)
# 动态库输出目录
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/bin)
# 可执行文件输出目录
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/bin)


# 进入src文件夹下面的CMakeLists.txt
add_subdirectory(src)

# 进入external文件夹下面的CMakeLists.txt
add_subdirectory(external)

# 开启测试
enable_testing()
# 进入 tests 文件夹下面的CMakeLists.txt
add_subdirectory(tests)
```

实际上，就是利用了几个cmake的内置变量

|变量名| 含义  |
|------------------------------|--|
|CMAKE_ARCHIVE_OUTPUT_DIRECTORY  | 静态库输出目录  |
|CMAKE_LIBRARY_OUTPUT_DIRECTORY| 动态库输出目录  |
|CMAKE_RUNTIME_OUTPUT_DIRECTORY|可执行文件输出目录  |

更多内置变量含义请参考[我的博文](https://blog.csdn.net/weixin_43940314/article/details/127715087?csdn_share_tail=%7B%22type%22:%22blog%22,%22rType%22:%22article%22,%22rId%22:%22127715087%22,%22source%22:%22weixin_43940314%22%7D)。我会持续更新。

输出结果：

在构建完成之后会出现bin和lib这两个目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/04f1a4da48f04d949e93cba246da9af5.png)
