# 【长期更新】C++常见错误与错因记录

主要使用的平台是VS 2019

## COMPILE ERROR

## expected expression（mac)
平台：苹果clang++

解释：在函数中定义模板是不可以的

### 未定义基类 C2504
解释：在基类还没定义前就继承自基类。实际上是因为命名空间给定错误。


## LINK ERROR

### error LNK1104: 无法打开文件

```
[build] LINK : fatal error LNK1104: 无法打开文件“E:\Dev\SPlisHSPlasH\bin\SPHSimulator.exe” [E:\Dev\SPlisHSPlasH\build\Simulator\SPHSimulator.vcxproj]
[proc] The command: D:\App\CMake\bin\cmake.EXE --build e:/Dev/SPlisHSPlasH/build --config Release --target SPHSimulator -j 10 -- exited with code: 1 and signal: null
[build] Build finished with exit code 1
```

基本上就是没有结束前一次运行的结果

## 使用错误

认为std vector的resize具备清零的功能是常见的错误。

实际上，应当使用`std::fill(v.begin(),v.end(),0.0);`来进行清零。
