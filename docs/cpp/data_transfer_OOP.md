# C++ 不同对象之间传递数据

## 问题描述

现有一个类A，这个类是别人已经写好的类。

我想在A之后，新建一个类B，这个类B接受A中某个成员data的数据，并实现新的功能。

数据流动：
对象a -> 对象b 

然而我不清楚对象a是何时出生，何时死亡，何时被调用的。它肯定是会被调用，并且其指针会传递来传递去，然而面对庞大的源码我不清楚它是在何时实例化的，当然也不清楚它的指针在哪。


### 代码描述
A.h
```cpp
#pragma once
struct A
{
    int data = 666;//the data I want to transfer
    //... other lengthy codes already have
    void a_func_must_be_called();
};
```

B.h
```cpp
#pragma once
#include<cstdio>
struct B
{
    int data;
    void do_something_with_transfered_data()
    {
        printf("I got lucky number from A! It is: %d\n", this->data);
        this->data+=222;
        printf("Now the lucky number becomes %d", this->data);
    }
};
```


注意，我们看不到main.cpp，也就是看不到A和B是何时出生和被调用的。


如上代码所示。我们有个类A，它里面存储了一个幸运数字data=666. 我希望在B中也获取这个幸运数字，然后  +222

## 解法：对象组合

思路概述：在A中增加新的成员，即B的对象b。然后在A中某个必定会被调用的函数中将A的数据成员data传递给b, 并且调用b中你想增加的新功能。

```cpp
#pragma once
#include "B.h" //1. 包含B的头文件，让A知晓类B的存在。
struct A
{
    int data = 666 ;//the data I want to transfer
    //... other lengthy codes already have

    //2. 对象组合：让B在A内被实例化。
    B b;

    //3. 找到A中一个必定被调用且已经存在的的函数，然后把A的数据传给b对象。
    void a_func_must_be_called()
    {
        b.data =  this->data;
        //4. 传完数据，调用B中我们想实现的新功能
        b.do_something_with_transfered_data();
    }
};
```

这样的做法，实际上是颠倒了逻辑关系。

我们主观上认为b是后来者，它接收a传来的数据，并对数据进行操作。这有点类似于管道式的数据处理。

然而实际上，我们在实现的代码中，却是先在A中定义了B的对象b。也就是b反倒先比b诞生。而且b的操作也是先进行操作的。

我本想生个儿子，让儿子干新的活儿。然而实际上儿子却先比老子生出来。

结果
```
I got lucky number from A! It is: 666        
Now the lucky number becomes 888
```
## 假如A中必定会被调用的函数是个静态函数

以上用法对非静态函数完全正确，然而
假如a_func_must_be_called()是个静态函数，那么就会报错。
```
非静态成员引用必须与特定对象相对
```
![image](https://user-images.githubusercontent.com/48758868/198202181-62a345fc-c75e-4259-8b03-563fed3fb04e.png)

这是因为静态函数不知晓this指针，也就是说静态函数不知晓当前具体的对象a是谁。


那么我们先得让静态方法能够访问非静态数据。

这需要在调用的时候，传递当前对象的指针即可。这个指针就相当于是this指针。

main.cpp中
```cpp
    A* ptr = new A();
    ptr->a_func_must_be_called(ptr);
```


其次，我们要让静态函数接收这个指针。

最后，**定义一个B的单例函数（自由函数即可）**，并在A中使用这个函数来获取一个**全局的静态B对象**。
A.h
```cpp
#pragma once
#include "B.h" //包含B的头文件，让A知晓类B的存在。

static B get_b_instance()
{
	static B singleton;
	return singleton;
}

struct A
{
    int data = 666 ;//the data I want to transfer
    //... other lengthy codes already have

    void static a_func_must_be_called(A* ptr)
    {
        get_b_instance().do_something_with_transfered_data(ptr->data);
    }

};
```

B.h
```cpp
#pragma once
#include<cstdio>
struct B
{
    int data;
    void do_something_with_transfered_data(int data_from_a)
    {
        printf("I got lucky number from A! It is: %d\n", data_from_a);
        this->data = data_from_a + 222;
        printf("Now the lucky number becomes %d", this->data);
    }
};
```

最终结果
```
I got lucky number from A! It is: 666
Now the lucky number becomes 888
```
