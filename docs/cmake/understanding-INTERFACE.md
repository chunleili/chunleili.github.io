# 彻底弄懂cmake中的 INTEFACE 可见性/传递性 问题

参考
- [https://kubasejdak.com/modern-cmake-is-like-inheritance](https://kubasejdak.com/modern-cmake-is-like-inheritance)
- [https://leimao.github.io/blog/CMake-Public-Private-Interface/](https://leimao.github.io/blog/CMake-Public-Private-Interface/)

## 原理
从 modern cmake(>=3.0) 开始，使用的范式从 director-oriented 转换到了 target-oriented。 这其中最重要的有三个概念：
1. target
2. target相应的properties
3. 可见性

所谓target就是编译的目标，一般就三种：
- 静态库: 使用add_library()
- 动态库: 使用add_library() 指定SHARED关键字
- 可执行文件: 使用add_executable

所谓properties就是target的属性，最常见的有以下五种：
-  编译标志：使用target_complie_option
-  预处理宏标志：使用 target_compile_definitions
- 头文件目录：使用 target_include_directories
- 链接库：使用 target_link_libraries
- 链接标志：使用 target_link_options

所谓可见性就是上述这些属性在不同target之间的传递性。有三种：
- PRIVATE
- PUBLIC
- INTERFACE

上面的这些都是很好理解。但INTERFACE是不好理解的。我们详细讲解。

### INTERFACE

说到INTERFACE，我们先来看其他两种可见性：PUBLIC和PRIVATE。

假设我们有目标A和目标B。目标A编译成可执行文件，是我们最终要运行的目标。而目标B则编译成目标A的一个依赖，比如说，静态库。

PUBLIC的意思就是 目标B的属性 不仅自己使用，还传递给依赖它的目标A。

PRIVATE的意思就是 目标B的属性  不会传递，只给目标B自己使用。

而INTERFACE则极为特殊：它的属性都 不会自己使用，只传递给目标A。

INTERFACE就是纯粹的利他主义，我自己不用，但我甘于奉献，让别人用。INTERFACE只做个纯粹的“接口”。这类似于电话接线员。接线员不能听到任何信息，他们只是把信息转发给别人。

那么为啥会有这么奇怪的INTERFACE呢？

这是因为有些目标是没有实质内容的，比如header-only的库。他们没办法编译成静态库。因为它们是没有源码的，只有头文件。一旦编译，就会报错。他们的唯一作用，就是被别人引用。

我们参考cmake官方文档上的这个例子

[cmake-buildsystem(7)](https://cmake.org/cmake/help/latest/manual/cmake-buildsystem.7.html?highlight=interface#interface-libraries)

```cpp
add_library(Eigen INTERFACE)

target_sources(Eigen INTERFACE
  FILE_SET HEADERS
    BASE_DIRS src
    FILES src/eigen.h src/vector.h src/matrix.h
)

add_executable(exe1 exe1.cpp)
target_link_libraries(exe1 Eigen)
```

这里 Eigen库是个header-only的库。

首先我们声明它的可见性为INTERFACE。这表示**它自己不会使用自己的任何属性**。它只是个接线员。（注意：源文件也可以看做是一种"属性"，因此，Eigen这个库的所有源文件和头文件都不会被它自己使用，所以**它不会编译出任何东西**）

使用target_souces来指定它的源文件。

最后两行，我们编译出exe1这个可执行目标，然后把Eigen链接到exe1上。

exe1由于引用了Eigen，所以Eigen的所有属性都传递到exe1身上。也就是说，Eigen的所有源码都作为了exe1的源码。


### INTERFACE的实现机制
我们还可以从它内部的实现机制来理解INTERFACE是什么

我们这里就以target_include_directories为例，其他的属性同理。

在cmake内部，有两个变量：INCLUDE_DIRECTORIES 和 INTERFACE_INCLUDE_DIRECTORIES 。

这两个变量存储的都是头文件目录。和系统的PATH变量类似，里面可以有多个路径，以分号分割。

但是区别是：INCLUDE_DIRECTORIES 是**当前目标搜索的头文件目录**，而INTERFACE_INCLUDE_DIRECTORIES 是**下一个目标要搜索的头文件目录**。

当目标B去搜索头文件的时候，就会在INCLUDE_DIRECTORIES 中搜索。这是简单清晰的。


而假如A引用了B（或者说目标A依赖于目标B），那么INTERFACE_INCLUDE_DIRECTORIES 中的路径就会赋给目标A的INCLUDE_DIRECTORIES。

所以，使用PRIVATE PUBLIC和INTERFACE就能控制是否将当前搜索路径传递给下一个目标。

PRIVATE就是不把当前的INCLUDE_DIRECTORIES 传递给INTERFACE_INCLUDE_DIRECTORIES 。

PUBLIC就是把当前的INCLUDE_DIRECTORIES 传递给INTERFACE_INCLUDE_DIRECTORIES 。

INTERFACE就是自己不使用当前的INCLUDE_DIRECTORIES ，但是把当前的INCLUDE_DIRECTORIES 传递给 INTERFACE_INCLUDE_DIRECTORIES 。




### 旧 cmake 和modern cmake 的区别 (什么是target-oriented）
了解旧cmake和modern cmake的区别 是我们理解为什么cmake会进行这样的设计的关键。

在cmake的早期版本中（2.xx，新版本叫modern cmake）是使用directory-oriented的方式来管理这些属性的传递性的。当你定义了一个属性，就意味着**当前文件夹和子文件夹**会使用这些属性。

旧版本的cmake在2015年左右经历过一次大更新，全面升级为modern cmake。所有旧的命令都变为了target-oriented。 以下是两者的对照表。

![在这里插入图片描述](https://img-blog.csdnimg.cn/99d34294ff2144d489df2e14be875383.png)

directory-oriented 方式有许多的不足之处。最大的不足之处在于：你必须按照实际目录的方式来管理cmake的依赖关系。**举个例子：假如你有两个平行的目录之间互相依赖，这样就变得十分麻烦。**

但是target-oriented 的方式是可以忽略实际的文件夹层次的。target可以随便放置在任何文件夹当中。只要你设计好target的依赖关系，所有的依赖关系都理清了。

### 与面向对象类比

为什么cmake会提出这样的设计呢？

这其实是类比面向对象思想的！

target 类比一个对象。properties就是对象的属性（成员函数、成员变量）。


在面向对象设计中，public private等关键字即是访问权限控制（相对于属性来说），同时也是继承类型（相对于类来说）的设置

同理，在cmake中，PRIVATE 、PUBLIC和 INTERFACE即是访问权限控制（相对于属性来说），同时也是继承类型（相对于target来说）的设置。




举个例子：


在面向对象中，假设我们有基类B和子类A。

对于类B来说，假设它具有两个属性。一个是public属性，一个是private属性。

```cpp
class A: public B
{
};

class B
{
public:
    int property1
private:
    int property2
};
```

当A以public的方式继承B的时候。所有B public的属性都会传递给 A public的属性。所有B private的属性则不会传递。

这也对照了cmake的设计：你在设置properties的时候，可以设定这个property是private还是 public的。而且，在设置target的时候，也需要设置这个target是private还是public的。

- 对于private的property，不会传递，只会自己用。

- 对于public的property，会传递，也自己用。

- 对于interface的property，会传递，但不会自己用。

而target则控制整个target的传递性

- 对于private的target，所有属性不会传递，只会自己用。
- 对于public的target，public和interface 属性会传递，所有属性也会自己用。
-  对于interface的target，所有interface 和 public属性会传递，但不会自己用。
