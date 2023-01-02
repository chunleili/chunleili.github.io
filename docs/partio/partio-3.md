# 探索Partio(3): partio的数据封装成单例类

我们将partio的数据封装成单例类。这样在程序的任何地方都可以方便的引用partio的数据。单例我们采用static。我们只要在程序的任何地方读入数据，在其他地方就能找到并使用该数据。这些数据即partio_data这个成员。


```cpp
#include <string>

#include "Partio.h"
using namespace Partio;

class PartioSingleton
{
public:
    static inline PartioSingleton *current = nullptr;
    static inline Partio::ParticlesDataMutable *partio_data = nullptr;
    static PartioSingleton *getCurrent()
    {
        if (current == nullptr)
        {
            current = new PartioSingleton();
        }
        return current;
    }
    PartioSingleton()
    {
        partio_data = Partio::create();
    }

    void read(const char *c_filename)
    {
        partio_data = Partio::read(c_filename);
    }

    void print()
    {
        Partio::print(partio_data);
    }
};

// PartioSingleton *PartioSingleton::current = nullptr;
// ParticlesDataMutable *PartioSingleton::partio_data = nullptr;

// 测试一下在随便一个函数和随便一个类中使用PartioSingleton::getCurrent()是否能够正常工作
void func()
{
    auto *d = PartioSingleton::getCurrent();
    std::cout << "-----------I am in func" << std::endl;

    d->print();
}

class someClass
{
public:
    someClass()
    {
        auto *d = PartioSingleton::getCurrent();
        std::cout << "----------I am in someClass" << std::endl;
        d->print();
    }
};

int main()
{
    auto *d = PartioSingleton::getCurrent();
    d->read("ice-cream.bhclassic");
    // d->print();

    // d->read("test.bgeo");
    // d->print();

    func();

    someClass a;

    return 0;
}
```

输出
```
(base) PS E:\Dev\my_partio\build\Release> ."E:/Dev/my_partio/build/Debug/test_heapdata.exe" 
-----------I am in func
Particle count 5
Attribute count 3
attribute position type=VECTOR count=3
attribute life type=FLOAT count=2
attribute id type=INT count=1
num to print 5
0: position=(0,0.1,0.2) life=(-1.2,10)  id=0,
1: position=(0.1,0.2,0.3)       life=(-0.2,10)  id=1,
2: position=(0.2,0.3,0.4)       life=(0.8,10)   id=2,
3: position=(0.3,0.4,0.5)       life=(1.8,10)   id=3,
4: position=(0.4,0.5,0.6)       life=(2.8,10)   id=4,
----------I am in someClass
Particle count 5
Attribute count 3
attribute position type=VECTOR count=3
attribute life type=FLOAT count=2
attribute id type=INT count=1
num to print 5
0: position=(0,0.1,0.2) life=(-1.2,10)  id=0,
1: position=(0.1,0.2,0.3)       life=(-0.2,10)  id=1,
2: position=(0.2,0.3,0.4)       life=(0.8,10)   id=2,
3: position=(0.3,0.4,0.5)       life=(1.8,10)   id=3,
4: position=(0.4,0.5,0.6)       life=(2.8,10)   id=4,
```

完整的repo请看

[https://github.com/chunleili/my_partio](https://github.com/chunleili/my_partio)



关于Partio的往期回顾


[探索Partio(1): 仿真粒子数据格式转换器partio的用法](https://blog.csdn.net/weixin_43940314/article/details/127746739)

[探索Partio(2): 继续探索粒子格式库partio](https://blog.csdn.net/weixin_43940314/article/details/127791571)
