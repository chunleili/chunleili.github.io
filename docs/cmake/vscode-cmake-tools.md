# vscode cmake插件的一些技巧
绝大部分可以通过cmake tools  doc找到

[https://github.com/microsoft/vscode-cmake-tools/blob/HEAD/docs/how-to.md#debug-a-project](https://github.com/microsoft/vscode-cmake-tools/blob/HEAD/docs/how-to.md#debug-a-project)


![在这里插入图片描述](https://img-blog.csdnimg.cn/a1a6ab18458b4937a25b19c7186d408e.png)

## 快捷键
- 运行 shift + F5
- 调试 control+ F5
- 构建  F7
![在这里插入图片描述](https://img-blog.csdnimg.cn/b5a857b9c2614b19ab811c88ac2ac561.png)
## 传入调试参数
.vscode/settings.json
```
    "cmake.debugConfig": {
        "args": ["arg1", "arg2"]
    }
```

## 让cmake 配置 intellisense
.vscode/c_cpp_properties.json
```
{
    "configurations": [
        {
            "name": "CMake",
            "compileCommands": "${config:cmake.buildDirectory}/compile_commands.json",
            "configurationProvider": "ms-vscode.cmake-tools"
        }
    ],
    "version": 4
}
```

## 重新配置
control+shift+P然后选择cmake configure
![在这里插入图片描述](https://img-blog.csdnimg.cn/5d5f1a3228f34ce49139a19a7d08c785.png)
