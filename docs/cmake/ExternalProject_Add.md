利用 ExternalProject_Add 解决第三方库target命名冲突问题

参考
[cmake菜谱第八章第一节](https://www.bookstack.cn/read/CMake-Cookbook/content-chapter8-8.1-chinese.md)

我们经常会遇到这种情况：

project A 是最外层项目
project B 是A使用的外部库
project C 是A和B使用的外部库

```
.
├── extern
│   ├── B
│   │   ├── extern
│   │   │   └── C
│   │   └── src
│   └── C
└── src
```

这就导致project C被引用了两遍，从而出现target命名冲突的问题。由于target均是全局的，因此一旦冲突就很难解决。

解决方案有以下几种：
1. 使用if(NOT target C)来保证target C只编译了一遍。缺点在于A中和B中C的版本和配置也许不同，但不得不使用同一个。
2. 重命名A和B中的targetC。比如改名为A_C和B_C。缺点是你需要魔改太多东西。
3. 使用超级构建，例如ExternalProject_Add。


我们这里重点讨论第三种


## ExternalProject_add解决target冲突
### 问题描述
首先我们要来看一下没有解决前的报错是什么样的：

报错如下：
```
[cmake] CMake Error at E:/codes/vcpkg/scripts/buildsystems/vcpkg.cmake:582 (_add_executable):
[cmake]   _add_executable cannot create target "Cexe" because another target with the
[cmake]   same name already exists.  The existing target is an executable created in
[cmake]   source directory "E:/codes/try/cmake-target-clash/extern/B/extern/C".  See
[cmake]   documentation for policy CMP0002 for more details.
[cmake] Call Stack (most recent call first):
[cmake]   extern/C/CMakeLists.txt:9 (add_executable)
[cmake] 
[cmake] 
[cmake] -- Configuring incomplete, errors occurred!
[cmake] See also "E:/codes/try/cmake-target-clash/build/CMakeFiles/CMakeOutput.log".
[cmake] CMake Error at E:/codes/vcpkg/scripts/buildsystems/vcpkg.cmake:623 (_add_library):
[cmake]   _add_library cannot create target "Clib" because another target with the
[cmake]   same name already exists.  The existing target is a static library created
[cmake]   in source directory "E:/codes/try/cmake-target-clash/extern/B/extern/C".
[cmake]   See documentation for policy CMP0002 for more details.
[cmake] Call Stack (most recent call first):
[cmake]   extern/C/CMakeLists.txt:10 (add_library)
[cmake] 
[cmake] 
[proc] The command: "C:\Program Files\CMake\bin\cmake.EXE" --no-warn-unused-cli -DCMAKE_EXPORT_COMPILE_COMMANDS:BOOL=TRUE -Se:/codes/try/cmake-target-clash -Be:/codes/try/cmake-target-clash/build -G "Visual Studio 16 2019" -T host=x64 -A x64 exited with code: 1 and signal: null
```
重点是这句

_add_executable cannot create target "Cexe" because another target with the same name already exists.  The existing target is an executable created in source directory "E:/codes/try/cmake-target-clash/extern/B/extern/C". 

显然，这告诉我们已经存在了一个Cexe目标。也就是因为嵌套引入C而导致的target重名冲突。


### 解决方案: 使用ExternalProject_Add添加外部库

```
# 使用ExternalProject可以解决target冲突问题
include(ExternalProject)
set_property(DIRECTORY PROPERTY EP_BASE ${CMAKE_BINARY_DIR}/ep_base_I_set)

ExternalProject_Add(External_C_name_I_set
  SOURCE_DIR
    ${CMAKE_CURRENT_LIST_DIR}/extern/C
  CMAKE_ARGS
    -DCMAKE_CXX_STANDARD=${CMAKE_CXX_STANDARD}
    -DCMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}
  INSTALL_COMMAND
    ""
  )

ExternalProject_Add(External_B_name_I_set
  SOURCE_DIR
    ${CMAKE_CURRENT_LIST_DIR}/extern/B
  CMAKE_ARGS
    -DCMAKE_CXX_STANDARD=${CMAKE_CXX_STANDARD}
    -DCMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}
  INSTALL_COMMAND
    ""
  )
```

首先要引入ExternalProject_Add这个cmake函数。这是一个cmake官方内置的函数。

接着为当前目录设置一下EP_BASE这个属性，这就代表ExternalProject Base。也就是外部项目的根目录。配置后会自动在该目录之下创建Build, Download, Install, Stamp和tmp文件夹。
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb32b3d87bce415e9a089b3bfcdb0082.png)
(注：我们也可以通过在ExternalProject_add指定PREFIX参数来指定外部库的根目录。如果什么都不指定，那么默认为`<name>-prefix` 其中name就是该外部库的名字。）


然后我们利用ExternalProject_add这个函数

解释下这函数的参数：
- 第一个参数代表你给定该外部项目的target名称（如External_B_name_I_set）
- SOURCE_DIR代表你要指定的源码位置
- CMAKE_ARGS代表你从外界传入的命令行参数
- INSTALL_COMMAND 为空保证了不会报出如下错误。由于默认会执行install，所以会报下面的错误。
```
[build] MSBUILD : error MSB1009: 项目文件不存在。 [E:\codes\try\cmake-target-clash\build\B.vcxproj]
[build]   开关:install.vcxproj
[build] E:\App\Microsoft Visual 
```

当你配置cmake后，会出现如下几个目标
![在这里插入图片描述](https://img-blog.csdnimg.cn/ca572ac75fa54a33880ece917afbd41b.png)


其中B和C都是**UTILITY目标，这些目标是不能被直接使用的**。（因此我们后面要手动将其设置为可以使用的目标）

**外部项目就像存在于一个独立封闭的空间，除了你自己在ExternalProject_Add中定义的 target名之外，什么都不会暴露出来。**

我们这时候编译External_B_name_I_set，**不会出现任何target冲突的错误**。

### UTILITY目标不可链接
上面说了。编译出来的是UTILITY目标，这些目标无法被直接使用。需要手动去设置将其变为正常的可链接的目标。

如果这时候直接去link会报错。
```
target_link_libraries(A PRIVATE
External_C_name_I_set
External_B_name_I_set
)
```

报错如下所示

```
[cmake] CMake Error at CMakeLists.txt:48 (target_link_libraries):
[cmake]   Target "External_B_name_I_set" of type UTILITY may not be linked into
[cmake]   another target.  One may link only to INTERFACE, OBJECT, STATIC or SHARED
[cmake]   libraries, or to executables with the ENABLE_EXPORTS property set.
```

它告诉我们UTILITY目标是个假目标，是不能被link的。

题外话：

假目标就是用来执行某些命令的假目标，比如add_custom_target当中的目标都是假目标。

不信我们可以定义一个假目标看看。

```
add_custom_target(hello_target
  COMMAND ${CMAKE_COMMAND} -E echo "hello I am a custom target"
  )
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/81db5bf1b4f2490893c525efaf3a1510.png)

ZERO_CHECK也是个假目标。ZERO_CHECK就是保证更改了cmake文件后编译时自动config。这个伪目标是cmake内置的。

### 解决UTILITY不可链接错误
如何解决呢？

1. 比较原始的方法，根据库的地址链接库。（由于我们这个例子比较简单，我们就不演示头文件了）。

2. 就是调用install命令。这种比较好，但是要求你所用的第三方库作者写了install命令（一般都会写）。


首先演示方案1：
```
ExternalProject_Get_Property(External_B_name_I_set BINARY_DIR )
message(STATUS "BINARY_DIR: ${BINARY_DIR}")
target_link_libraries(A PRIVATE
${BINARY_DIR}/$<CONFIG>/Blib.lib
)
unset(BINARY_DIR)
```

没什么可说的，就是找到Blib.lib的绝对地址然后链接而已。


其次演示方案2：

首先去掉INSTALL_COMMAND ""

为B和C编写install命令

TODO

