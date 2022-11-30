# 在windows中并行编译cmake

实际上，在window中是可以并行执行cmake的。但是命令与linux不同

在windows当中，要使用-j 18这样的命令
而linux则使用--parllel 18这样的命令

```
cmake --build build --config Release --target install -j 18 --
```
