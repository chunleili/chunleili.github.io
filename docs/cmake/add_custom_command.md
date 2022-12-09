# 在编译结束之后拷贝库文件到指定位置

使用add_custom_command这个命令。
```
add_custom_command(
        TARGET ${PROJECT_NAME}  POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_BINARY_DIR}/$<CONFIGURATION> ${CMAKE_CURRENT_LIST_DIR}
        )
```

这个命令就是在你完成或者开始编译一个目标前，执行某些命令（例如拷贝，自动生成.in文件等）。

我们一行一行讲

```
TARGET ${PROJECT_NAME}  POST_BUILD
```

指定名为${PROJECT_NAME}的目标，在它编译完成之后执行命令。

```
COMMAND ${CMAKE_COMMAND} -E copy_directory
```

要执行的命令名字为 ${CMAKE_COMMAND} -E代表的是环境无关的文件操作 copy_directory是拷贝文件夹

```
${CMAKE_BINARY_DIR}/$<CONFIGURATION> ${CMAKE_CURRENT_LIST_DIR}
```
最后是指定从哪拷贝到哪。这里是把build/Release拷贝到当前目录
