# 使用vscode debug cpp/python混合编程的程序（从python调用的C++编译的dll）
## 1. 安装插件 Python C++ Debugger


https://marketplace.visualstudio.com/items?itemName=benjamin-simmonds.pythoncpp-debug


![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5026a7fe33fc45389f37a8c55f99b5b9.png)


## 2. 在.vscode/launch.json中增加配置

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d3c52f8f5aa443b897a5e8d8c73df701.png)

拷贝自 https://marketplace.visualstudio.com/items?itemName=benjamin-simmonds.pythoncpp-debug

```json
        {
            "name": "Python C++ Debug",
            "type": "pythoncpp",
            "request": "launch",
            "pythonLaunchName": "Python: Current File",
            "cppAttachName": "(Windows) Attach",
          },
          {
            "name": "(Windows) Attach",
            "type": "cppvsdbg",
            "request": "attach",
            "processId": ""
          },
          {
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal"
          }
```


## 3. 开始调试

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/1dc550e17bb8494c8c93ee906226ed2f.png)


## 大致原理
采用了attach process的方式，大致是根据dll的process id将debugger挂载上去。
具体可查看
https://marketplace.visualstudio.com/items?itemName=benjamin-simmonds.pythoncpp-debug
