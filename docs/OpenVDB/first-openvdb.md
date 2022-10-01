# OpenVDB的安装与第一个demo

## 介绍
OpenVDB是迪士尼推出的开源库，主要用于处理图形学中的各种数据结构。例如稀疏数据结构，还有与之相关的各类应用（比如网格转换为SDF等）。

OpenVDB是个C++的库。因此你下载源码之后编译出来的是静态库和动态库。把库配置好，头文件配置好，就是把vdb安装好了。

参考：
- [官方安装文档](https://www.openvdb.org/documentation/doxygen/build.html)

- [github repo](https://github.com/AcademySoftwareFoundation/openvdb)



## 安装

安装主要参考github

首先安装依赖

就是常规的cmake安装流程
从github上clone下来
然后参考github，安装boost tbb blosc这三个依赖库

```
cmake -B build
cmake --build build
```

另外你还可以make install。这样的好处是还可以把编译好的库安装到安装目录（其实就是把编译出来的静态和动态库拷贝到/usr/local/lib/以及把头文件拷贝到/usr/local/include/)

## 第一个demo

参考官方文档

在CMakeLists.txt中写入

```cmake
cmake_minimum_required(VERSION 3.20)
project(main)
list(APPEND CMAKE_MODULE_PATH "/usr/local/lib/cmake/OpenVDB")
find_package(OpenVDB REQUIRED)
add_executable(main main.cpp)
target_link_libraries(main OpenVDB::openvdb)
```
其CMAKE_MODULE_PATH就是FindXXX.cmake的位置。这些.cmake文件是vdb作者已经写好的，在你安装（make install)的时候会自动安装。

然后再利用find_package来查找这个cmake配置文件。

最后是link这个lib


main.cpp：
```cpp
#include <openvdb/openvdb.h>
#include <iostream>
int main()
{
    // Initialize the OpenVDB library.  This must be called at least
    // once per program and may safely be called multiple times.
    openvdb::initialize();
    // Create an empty floating-point grid with background value 0.
    openvdb::FloatGrid::Ptr grid = openvdb::FloatGrid::create();
    std::cout << "Testing random access:" << std::endl;
    // Get an accessor for coordinate-based access to voxels.
    openvdb::FloatGrid::Accessor accessor = grid->getAccessor();
    // Define a coordinate with large signed indices.
    openvdb::Coord xyz(1000, -200000000, 30000000);
    // Set the voxel value at (1000, -200000000, 30000000) to 1.
    accessor.setValue(xyz, 1.0);
    // Verify that the voxel value at (1000, -200000000, 30000000) is 1.
    std::cout << "Grid" << xyz << " = " << accessor.getValue(xyz) << std::endl;
    // Reset the coordinates to those of a different voxel.
    xyz.reset(1000, 200000000, -30000000);
    // Verify that the voxel value at (1000, 200000000, -30000000) is
    // the background value, 0.
    std::cout << "Grid" << xyz << " = " << accessor.getValue(xyz) << std::endl;
    // Set the voxel value at (1000, 200000000, -30000000) to 2.
    accessor.setValue(xyz, 2.0);
    // Set the voxels at the two extremes of the available coordinate space.
    // For 32-bit signed coordinates these are (-2147483648, -2147483648, -2147483648)
    // and (2147483647, 2147483647, 2147483647).
    accessor.setValue(openvdb::Coord::min(), 3.0f);
    accessor.setValue(openvdb::Coord::max(), 4.0f);
    std::cout << "Testing sequential access:" << std::endl;
    // Print all active ("on") voxels by means of an iterator.
    for (openvdb::FloatGrid::ValueOnCIter iter = grid->cbeginValueOn(); iter; ++iter) {
        std::cout << "Grid" << iter.getCoord() << " = " << *iter << std::endl;
    }
}
```

编译运行之后得到结果
```
Testing random access:
Grid[1000, -200000000, 30000000] = 1
Grid[1000, 200000000, -30000000] = 0
Testing sequential access:
Grid[-2147483648, -2147483648, -2147483648] = 3
Grid[1000, -200000000, 30000000] = 1
Grid[1000, 200000000, -30000000] = 2
Grid[2147483647, 2147483647, 2147483647] = 4
```