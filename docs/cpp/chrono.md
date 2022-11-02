# 利用std::chrono来进行计时, 以测试性能

1. 首先要`#include <chrono>`

2. 其次，先记录开始时间
`auto start = std::chrono::steady_clock::now();`

3. 然后记录结束时间
`auto end = std::chrono::steady_clock::now();`

4. 接着求时间差
`std::chrono::duration<double> elapsed_seconds = end - start;`

5. 最后打印
`std::cout << "elapsed seconds: " << elapsed_seconds.count() << std::endl;`


## 完整例子
用Eigen做一百次一亿维向量点乘，然后记录时间

main.cpp
```cpp
#include <chrono>
#include <iostream>
#include <Eigen/Dense>
EIGEN_DONT_INLINE
double simple_function(Eigen::VectorXd &va, Eigen::VectorXd &vb)
{
  // this simple function computes the dot product of two vectors
  // of course it could be expressed more compactly
  double d = va.dot(vb);
  return d;
}
int main()
{
  int len = 100000000;
  int num_repetitions = 100;
  // generate two random vectors
  Eigen::VectorXd va = Eigen::VectorXd::Random(len);
  Eigen::VectorXd vb = Eigen::VectorXd::Random(len);
  double result;

  auto start = std::chrono::steady_clock::now();
  for (auto i = 0; i < num_repetitions; i++)
  {
    result = simple_function(va, vb);
  }
  auto end = std::chrono::steady_clock::now();
  
  std::chrono::duration<double> elapsed_seconds = end - start;
  std::cout << "result: " << result << std::endl;
  std::cout << "elapsed seconds: " << elapsed_seconds.count() << std::endl;
}
```

CMakeLists.txt

记得要更改自己的Eigen库的位置
```
cmake_minimum_required(VERSION 3.5 FATAL_ERROR)
project(recipe-06 LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 设置默认构建类型 注意：因为默认是多构建方式，在编译时仍需使用cmake --build build --config=Release 指定才行！
if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release CACHE STRING "Build type" FORCE)
endif()
message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")

# 告诉cmake eigenConfig.cmake的位置 并增加Eigen库
list(APPEND CMAKE_PREFIX_PATH "E:/codes/vcpkg/installed/x64-windows/share/eigen3")
find_package(Eigen3 3.3 REQUIRED CONFIG)

add_executable(linear-algebra main.cpp)

# 链接Eigen库
target_link_libraries(linear-algebra
PRIVATE
    Eigen3::Eigen
)
```


编译运行

```
cmake -B build
cmake --build build --config=Release
.\build\Release\linear-algebra.exe
```

结果
```
result: -4500.21
elapsed seconds: 8.13039
```
