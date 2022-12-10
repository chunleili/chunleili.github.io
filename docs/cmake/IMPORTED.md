# 引入闭源/编译好的库：使用IMPORTED关键字

## 用法
```
add_library(glfw STATIC IMPORTED)
set_property(TARGET glfw PROPERTY IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/lib-vc2019/glfw3.lib)
target_include_directories(glfw INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/include)
```

第一步是add_library，并指定IMPORTED。这代表是外部已经编译好的库

第二步是set_preperty。指定外部库的位置。

第三步是设定头文件。注意要用INTERFACE

## 例子
下载好64位glfw然后拷贝到extern/glfw下面


根目录CMakeLists.txt
```
cmake_minimum_required(VERSION 3.20)
project(tryIMPORTED)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(main main.cpp)

# 设定外部库

# glfw
add_library(glfw STATIC IMPORTED)
set_property(TARGET glfw PROPERTY IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/lib-vc2019/glfw3.lib)
target_include_directories(glfw INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/extern/glfw/include)

target_link_libraries(main glfw)

# opengl
find_package(OpenGL REQUIRED)
target_link_libraries(main OpenGL::GL)


```

