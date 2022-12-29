# 三种使用断言的方法

断言主要是用来DEBUG的。
断言用来判断程序结果是否满足你预期的结果。

我们在zeno中使用断言来帮助我们debug

# 提前总结
就三种用法
```cpp
//用法1：运行时assert
assert(0 && "assert here");

//用法2：静态static_assert
 static_assert(0,"triggered the  static assert");

//用法3：throw运行时异常
 throw std::runtime_error("test the runtime err.");
```

不建议用第一种方式。因为zeno对第一种方式支持不好。

#     用法1：运行时assert
假如要用assert需要加入这两行
```cpp
#undef NDEBUG//先去掉NDEBUG宏让断言发挥作用
#include <cassert>//记住一定要在上一行的后面
```
（这样即使在Release模式也可以用断言，但是注意不要在头文件中这样用，因为宏会被传递）
在想要assert的地方
```cpp
assert(0 && "assert here");
```
输出效果：
程序编译运行正常，当运行到这一行程序的时候

在终端出现assertion failed
![在这里插入图片描述](https://img-blog.csdnimg.cn/fdf7b032fb924c4d8b569aa27a8f3664.png)

zeno可运行，且无任何输出信息

（这也是为什么不建议用这种方式）

#     用法2：static_assert

```cpp
    //用法2：静态static_assert
    static_assert(0,"triggered the  static assert");
```

编译不通过并报错如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/9ec9c4f246384d168c0c426a2a3e42de.png)
这个可以用在检查编译时的类型等错误。

# 用法3：

```cpp
//用法3：throw运行时异常
 throw std::runtime_error("test the runtime err.");
```

可正常编译运行，只有加载该节点并运行的时候才会产生报错信息。报错信息齐全（报告错误位置）且节点会变成红色。
![在这里插入图片描述](https://img-blog.csdnimg.cn/4100e18e3b4f47c28bb98e73e5688dc7.png)
在终端窗口也会出现报错信息。
![在这里插入图片描述](https://img-blog.csdnimg.cn/f475e84f38ba4a07920a8b9c6620a291.png)
因此检查运行时错误建议用这种方式。
