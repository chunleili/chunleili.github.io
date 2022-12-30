# cmake配置OpenGL的环境

我仅在Win10+VS2019+VS Code环境下测试过。

github repo请看：

https://github.com/chunleili/OpenGL


目录结构

```
.
├── CMakeLists.txt
├── README.md
├── extern
│   ├── assimp
│   ├── eigen
│   ├── glad
│   ├── glew
│   ├── glfw
│   ├── glm
│   └── imgui
├── rename_to_vcpkg_if_use_vcpkg.json
├── res
│   └── shader
└── src
    ├── include
    └── main.cpp
 ```

## 第三方库配置  方法1：使用vcpkg的MANIFEST模式
这种方法最快捷省事。但是一旦用了vcpkg，就要全部使用vcpkg。

在项目根目录下建立vcpkg.json文件。
内容如下
```json
{
    "name": "opengl",
    "version": "0.0.1",
    "description": "learn the OpenGL",
    "dependencies": [
        "eigen3",
        "imgui",
        "glfw3",
        "glm",
        "glad",
        "assimp"
    ]
}
```

根目录下的CMakeLists.txt中添加
```
# 假如使用了vcpkg，可以直接使用find_package来找到库
find_package(Eigen3 CONFIG REQUIRED)
target_link_libraries(main PRIVATE Eigen3::Eigen)

find_package(imgui CONFIG REQUIRED)
target_link_libraries(main PRIVATE imgui::imgui)

find_package(assimp CONFIG REQUIRED)
target_link_libraries(main PRIVATE assimp::assimp)

find_package(glfw3 CONFIG REQUIRED)
target_link_libraries(main PRIVATE glfw)

find_package(glad CONFIG REQUIRED)
target_link_libraries(main PRIVATE glad::glad)

find_package(glm CONFIG REQUIRED)
target_link_libraries(main PRIVATE glm::glm)
```

这种方式非常简便。只要你config一下cmake就会自动在build/vcpkg_install目录下为你下载并且配置第三方库。

## 第三方库配置 方法2：从源码构建第三方库
这种方式的好处是别人使用的时候，不需要安装vcpkg。并且保证了版本的稳定性（vcpkg更新比较激进）

在extern文件夹下放置各个第三方库的源码。

项目根目录的CMakeLists.tst
```cmake
set(EXTERN_DIR ${PROJECT_SOURCE_DIR}/extern)
# # assimp
# add_subdirectory(extern/assimp)

# eigen
add_library(Eigen INTERFACE)
target_include_directories(Eigen INTERFACE ${EXTERN_DIR}/eigen)
# glm
add_subdirectory(extern/glm)
# opengl
find_package(OpenGL REQUIRED) # windows SDK中有opengl的库
# glfw
add_subdirectory(extern/glfw)
# glad
add_library(glad INTERFACE)
target_include_directories(glad INTERFACE ${EXTERN_DIR}/glad/include)
target_sources(glad INTERFACE ${EXTERN_DIR}/glad/src/glad.c)

#glad和glew使用一个即可。这里使用glad, 因此不再使用glew
option(USE_GLEW "use glew(Not recommend, now we use glad instead)" OFF)
if(USE_GLEW)
    add_subdirectory(extern/glew)
    # 如果使用GLEW 并且还要link一下！
endif()

#imgui 
add_subdirectory(extern/imgui)

target_link_libraries(main PRIVATE
    OpenGL::GL
    glad
    glfw
    glm
    Eigen
    imgui
    # assimp
)
```

这里imgui原作者并未提供cmake支持。因此我自己写了一下cmake。如下

extern/imgui下面的CMakeLists.txt
```
#imgui 
add_library(imgui INTERFACE)
target_include_directories(imgui INTERFACE
 ${EXTERN_DIR}/imgui
 ${EXTERN_DIR}/imgui/backends
 )
file(GLOB IMGUI_FILES 
    ${EXTERN_DIR}/imgui/*.h 
    ${EXTERN_DIR}/imgui/*.cpp 
    ${EXTERN_DIR}/imgui/backends/imgui_impl_opengl3.*
    ${EXTERN_DIR}/imgui/backends/imgui_impl_glfw.*
    ${EXTERN_DIR}/imgui/backends/imgui_impl_opengl3_loader.h
)
target_sources(imgui INTERFACE ${IMGUI_FILES})

target_link_libraries(imgui INTERFACE glad glfw OpenGL::GL)

add_executable(imgui_example ${EXTERN_DIR}/imgui/examples/example_glfw_opengl3/main.cpp)
target_link_libraries(imgui_example PRIVATE imgui glad glfw)
```

## shader等文件的拷贝

由于shader源码是要从exe所在文件夹开始找的，所以一般可以将res/shader复制到exe所在目录

复制方法如下(利用add_custom_command)

```
# 复制shader等到build/bin目录
add_custom_command(
        TARGET main  POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${PROJECT_SOURCE_DIR}/res ${PROJECT_BINARY_DIR}/bin/$<CONFIG>/res
    )
```
每当编译main.exe的时候都会自动拷贝对应的res文件夹

## 完整的根目录下CMakeLists.txt
```
cmake_minimum_required(VERSION 3.23)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

project(OpenGL CXX)

# set default build type to release
if (NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()
message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")

# 设置输出目录为build/bin
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${PROJECT_BINARY_DIR}/bin)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PROJECT_BINARY_DIR}/bin)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_BINARY_DIR}/bin)
set(CMAKE_DEBUG_POSTFIX "_d")

# compile the source
add_executable(main "")
set(SRC_DIR ${PROJECT_SOURCE_DIR}/src)
target_include_directories(main PRIVATE ${SRC_DIR}/include)
file(GLOB_RECURSE SRC_FILES ${SRC_DIR}/*.cpp ${SRC_DIR}/*.h)
target_sources(main PRIVATE ${SRC_FILES})


# 复制shader等到build/bin目录
# file(COPY ${PROJECT_SOURCE_DIR}/res DESTINATION ${PROJECT_BINARY_DIR}/bin/$<CONFIG>)
add_custom_command(
        TARGET main  POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${PROJECT_SOURCE_DIR}/res ${PROJECT_BINARY_DIR}/bin/$<CONFIG>/res
    )

# -------------------------------------------------------------------------- #
#                           set external libraries                           #
# -------------------------------------------------------------------------- #
set(EXTERN_DIR ${PROJECT_SOURCE_DIR}/extern)
# # assimp
# add_subdirectory(extern/assimp)

# eigen
add_library(Eigen INTERFACE)
target_include_directories(Eigen INTERFACE ${EXTERN_DIR}/eigen)
# glm
add_subdirectory(extern/glm)
# opengl
find_package(OpenGL REQUIRED) # windows SDK中有opengl的库
# glfw
add_subdirectory(extern/glfw)
# glad
add_library(glad INTERFACE)
target_include_directories(glad INTERFACE ${EXTERN_DIR}/glad/include)
target_sources(glad INTERFACE ${EXTERN_DIR}/glad/src/glad.c)

#glad和glew使用一个即可。这里使用glad, 因此不再使用glew
option(USE_GLEW "use glew(Not recommend, now we use glad instead)" OFF)
if(USE_GLEW)
    add_subdirectory(extern/glew)
    # 如果使用GLEW 并且还要link一下！
endif()

#imgui 
add_subdirectory(extern/imgui)

target_link_libraries(main PRIVATE
    OpenGL::GL
    glad
    glfw
    glm
    Eigen
    imgui
    # assimp
)



# # 假如使用了vcpkg，可以直接使用find_package来找到库
# find_package(Eigen3 CONFIG REQUIRED)
# target_link_libraries(main PRIVATE Eigen3::Eigen)

# find_package(imgui CONFIG REQUIRED)
# target_link_libraries(main PRIVATE imgui::imgui)

# find_package(assimp CONFIG REQUIRED)
# target_link_libraries(main PRIVATE assimp::assimp)

# find_package(glfw3 CONFIG REQUIRED)
# target_link_libraries(main PRIVATE glfw)

# find_package(glad CONFIG REQUIRED)
# target_link_libraries(main PRIVATE glad::glad)

# find_package(glm CONFIG REQUIRED)
# target_link_libraries(main PRIVATE glm::glm)
```
