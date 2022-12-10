# cmake搭配vcpkg的manifest模式实现自动安装包
## 好处
类似于pip的requirements。你只需要指定该项目的依赖库，就会自动运行vcpkg为你安装所有的依赖库。并且安装在当前项目build下面。这些第三方库与你本地的已经装好了的第三方库是隔离开的，因此解决了版本问题。并且他人安装你的库的时候，都会自动安装第三方库。

## 用法

只需要两点

1. 根目录下建立vcpkg.json
2. CMakeLists.txt中使用find_package

此时运行cmake配置，即可自动为你下载并安装第三方库


vcpkg.json内容如下
```
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

对应的CMakeLists.txt中的find_package语句如下

```
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


安装结果

在build目录下会产生vcpkg_installed文件夹，所有的第三方库都会安装在这里。

![在这里插入图片描述](https://img-blog.csdnimg.cn/724beaf72300443782fafccbbdf45382.png)
