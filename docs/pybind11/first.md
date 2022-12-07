# pybind11的Hello World

pybind11 是用来将c++的函数\类等封装为python模块的。从而在python中就可以调用C++的库。


## 安装
pybind11是个C++的header-only的库。因此无需安装，只需要有头文件即可。

自己新建一个C++文件夹。在文件夹内将pybind作为一个外部库，使用cmake来管理。

首先git clone
```
git clone https://github.com/pybind/pybind11 --depth=1
```

然后删掉.git文件


CMakeLists.txt
```
cmake_minimum_required(VERSION 3.23)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

project(tryPybind)

add_subdirectory(pybind11)
pybind11_add_module(tryPybind tryPybind.cpp)

add_custom_command(
        TARGET ${PROJECT_NAME}  POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_BINARY_DIR}/$<CONFIGURATION> ${CMAKE_CURRENT_LIST_DIR}
        )
```

注意pybind11_add_module这个cmake函数。它的用法如下
```
pybind11_add_module(<name> [MODULE | SHARED] [EXCLUDE_FROM_ALL]
                    [NO_EXTRAS] [THIN_LTO] [OPT_SIZE] source1 [source2 ...])
```
最基本的用法是，第一个是模块名，第二个是源文件

cmake中最后这个add_custom_command的意思是把输出的build/Release下面的所有文件拷到最外层，方便后面我们测试的时候导入模块。


## 绑定一个c++的函数
```cpp
#include <pybind11/pybind11.h>
#include <iostream>
namespace py = pybind11;

//绑定一个函数
int add(int i, int j) {
    return i + j;
}

PYBIND11_MODULE(tryPybind, m) {
    m.doc() = "pybind11 example plugin"; // optional module docstring

    m.def("add", &add, "A function that adds two numbers");
}

```

这段的意思就是：
- 利用PYBIND11_MODULE这个宏，它接受两个参数。第一个tryPybind是模块名，第二个参数不用管，就m就行。
- m.def就是定义一个python中的函数，函数名为add，函数绑定到c++的add函数


运行cmake

会产生三个文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/6d90fba7591842b4a3432ae6e074cbc1.png)
其中tryPybind.xxx.pyd是python的动态库

.exp是windows下面的导出库文件，它包含了导出函数和数据项的信息

.lib是windows下面的c++静态库



然后定义一个python脚本

pyTry.py

```python
import tryPybind

a = tryPybind.add(1, 2)
print(a)
```

打印结果

```
3
```
## 绑定一个c++的类
把c++的源码改为

tryPybind.cpp
```
#include <pybind11/pybind11.h>
#include <iostream>
namespace py = pybind11;

//绑定一个类
class SomeClass
{
    float scale;
public:
    SomeClass(float scale_) : scale(scale_) { };
    float multiply(float input) {
        float res =  scale * input;
        std::cout<<"res:"<<res<<std::endl;
        return res;
    }
};

PYBIND11_MODULE(tryPybind,m)
{
    py::class_<SomeClass>(m, "SomeClass")
        .def("multiply", &SomeClass::multiply)
        .def(py::init<float>());
}
```

python脚本改为

pyTry.py
```python
import tryPybind

print(dir(tryPybind))
a = tryPybind.SomeClass(2.1)
a.multiply(2.0)
```

输出结果

```
['SomeClass', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__']
res:4.2
```
