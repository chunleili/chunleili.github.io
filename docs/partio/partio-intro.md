# 粒子格式库partio的安装与使用

## 说明
partio是迪士尼2010年推出的仿真粒子格式转换器。

可以用来统一houdini、renderMan、Maya等不同软件中的粒子数据格式(GEO, BGEO, PTC, PDB, PDA)。


[http://partio.us/index.html](http://partio.us/index.html)

它可以作为C++的一个库使用，也同时具有python的API。但是python API较慢，建议C++。

## 使用方法

### 数据格式
首先了解下数据格式。

partio只是个数据转换器，它在磁盘上是没有自己的格式的。但是你可以想象它在内存中具有一定的数据格式。基本格式就是粒子编号+粒子属性。

如下所示
```cpp
Number of particles:  9998

Type      Count     Name                          
----      -----     ----                          
VECTOR    3         position                      
VECTOR    3         v                             
INT       1         id                            
INT       1         parent                        
FLOAT     3         Cd                            

particle 0 position 0.536567 1.17344 0.523275
particle 1 position 0.495414 0.913424 0.434151
```
粒子具有id，然后具有4个属性。

### 库的使用方法
首先请注意：该库依赖于zlib。因此请先自行安装zlib。windows下建议用vcpkg安装。


我们下载好源代码，把里面的lib文件夹下面的源码拷贝到自己的项目中。

比如我们新建一个空白的文件夹my_partio

目录结构为
.
├── CMakeLists.txt
├── DataDir.h
├── Filesystem.h
├── Partio.h
├── PartioAttribute.h
├── PartioIO.h
├── PartioIterator.h
├── PartioVec3.h
├── core
├── io
├── test.bgeo
└── test_mypartio.cpp

![在这里插入图片描述](https://img-blog.csdnimg.cn/e5db94c5366f48a5850405025ae79514.png)


其中test.bgeo是从下载的源码的data文件夹下拷贝过来的，用于测试。


我们写一个最简单的测试程序
 test_mypartio.cpp
```cpp
#include "Partio.h"
using namespace Partio;
int main()
{
    // 读取文件
    Partio::ParticlesDataMutable* data=Partio::read("E:/codes/try/partio/my_partio/test.bgeo");
    // 计算粒子数目
    std::cout<<"Number of particles "<<data->numParticles()<<std::endl;
}
```

更改CMakeLists.txt文件

```
cmake_minimum_required(VERSION 3.21)

project(test_mypartio)

file(GLOB io_cpp "io/*.cpp")
file(GLOB core_cpp "core/*.cpp")

add_library(mypartio  ${io_cpp} ${core_cpp})
set_target_properties(mypartio PROPERTIES
    OUTPUT_NAME mypartio
    POSITION_INDEPENDENT_CODE ON
)


IF(MSVC)
  target_compile_definitions(mypartio 
  PRIVATE 
    PARTIO_WIN32=1
    _USE_MATH_DEFINES=1
    )
    target_compile_options(mypartio 
    PRIVATE 
      /W0)
  # ADD_DEFINITIONS (-DPARTIO_WIN32 -D_USE_MATH_DEFINES)
  # set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /W0")
ELSE(MSVC)
  target_compile_options(mypartio 
  PRIVATE  
    -Wextra 
    -Wno-unused-parameter
    -fPIC
    -w)
  # ADD_DEFINITIONS (-Wextra -Wno-unused-parameter)
  # SET( CMAKE_CXX_FLAGS "-fPIC -w")
ENDIF(MSVC)

target_compile_definitions(mypartio 
PRIVATE 
  PARTIO_USE_ZLIB=1)
# ADD_DEFINITIONS (-DPARTIO_USE_ZLIB)


target_include_directories(mypartio
    PUBLIC
    ${CMAKE_CURRENT_LIST_DIR}
    )

find_package(ZLIB REQUIRED)
if (ZLIB_FOUND)
    target_link_libraries(mypartio PUBLIC ZLIB::ZLIB)
endif()
# target_include_directories(mypartio PRIVATE ../zlib/src)


option(TEST_MYPARTIO "test my partio" ON)
if(TEST_MYPARTIO)
    add_executable(test_mypartio test_mypartio.cpp)
    target_compile_definitions(test_mypartio PRIVATE  PARTIO_USE_ZLIB)
    target_link_libraries(test_mypartio mypartio )
endif()
```



打印结果：

```cpp
Number of particles 5
```
