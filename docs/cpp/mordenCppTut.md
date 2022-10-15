# 现代cpp教程笔记

参考
现代cpp教程
[https://changkun.de/modern-cpp/](https://changkun.de/modern-cpp/)

以下所有代码运行在win10+ VS2019+ cmake+ VS Code的环境下

CMakeLists.txt内容为
```
cmake_minimum_required(VERSION 3.18)
set(CMAKE_CXX_STANDARD  17)
set(CXX_STANDARD_REQUIRED TRUE)
project(modernCpp)
set(CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} -g -O0")
add_executable(a main.cpp)
```
CMake变体选择Debug 编译器VS2019-amd64

@[toc]
## constexpr

constexpr将表达式在编译器就计算好，从而运行时为一个常量。这就使得可以指定变量作为数组大小。
### 用法1：指定数组大小
```cpp
#include <iostream>

int main() {
    constexpr int len = 10;
    char arr[len];                      
    arr[1] ='c';
    std::cout << arr[1] <<std::endl;
    
    return 0;
}
```

去掉constexpr 关键字，在g++8.1上仍然通过，但是在msvc 2019上不通过。原因是g++将其自动优化了。

### 用法2：分支预测
可以用来预测参数的类型，在模板中有用。

```cpp
#include <iostream>

template<typename T>
bool isInt(T n){
    if constexpr(std::is_same<decltype(n), int>::value)
        return true;
    else
        return false;
}

int main() {
    std::cout << isInt(5) << std::endl;
    std::cout << isInt(3.14) << std::endl;
}
```
其中if constexpre做了静态的分支判断。这是因为类型信息本来就是静态的（运行时常量）

std::is_same<decltype(n), int>::value
用法是，先用decltype判断类型，然后用is_same判断类型是否相等。

### 用法3：constexpr返回值的函数

```cpp
#include<iostream>

constexpr int fibonacci(const int n) {
    if(n == 1) return 1;
    if(n == 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main(){
    std::cout<<fibonacci(10)<<std::endl;
    char a[fibonacci(10)];
}
```
返回值不仅可以是constexpr，而且该函数还能递归。最后返还的值，可以作为数组大小。

## auto
auto是个语法糖，用来自动推断类型。

### 自动推导类型

最简单的用法是这样：推导简单的类型
```cpp
int main(){
    auto i =5;
}
```

或者这样：推导new返回的指针类型。
```cpp
int main(){
    auto p = new int(2);
}
```
这就有点像是js中的let了。

还可以这样推导自定义的类型

```cpp
#include <iostream>
class A{
    int a,b;
};
int main(){
    auto pa = new A();
}
```
### 简化迭代器、智能指针等冗长写法
简化迭代器冗长写法

```cpp
#include <iostream>
#include<vector>
#include<iterator>
int main(){
    std::vector<int> vec{1,2,3,4};
    //for(std::vector<int>::const_iterator it = vec.cbegin(); it != vec.cend(); ++it) //冗长写法
    for(auto it = vec.cbegin(); it != vec.cend(); ++it) //简化写法
        std::cout<<*it<<std::endl;
}
```
`std::vector<int>::const_iterator`被简化为了auto



简化智能指针冗长写法

```cpp
#include<iostream>
#include<memory>
int main(){
    //std::shared_ptr<int> p = std::make_shared<int>(5); //冗长写法
    auto p = std::make_shared<int>(5); //简化写法
    std::cout<<p<<std::endl;
}
```


### atuo推导函数返回值

```cpp
#include<iostream>
template<typename T, typename U>
auto add(T x, U y){
    return x + y;
}
int main(){
    std::cout<<add(3,33)<<std::endl;//自动推导为整型
    std::cout<<add(3,3.3)<<std::endl;//自动推导为double型
}
```
### 非类型模板参数推导
一般来说，在模板中给的typename xxx是个类型，比如int, double之类的。但其实我们还可以直接传递一个具体的参数，比如100。

```cpp
template <typename T, int BufSize> 
//template <typename T, auto BufSize> 为更好的写法。
class buffer_t {
public:
    T& alloc();
    void free(T& item);
private:
    T data[BufSize];
};

int main(){
buffer_t<int, 100> buf; // 100 作为模板参数
}
```
这里的具体参数100，叫做非类型模板参数。这样有点类似于常规的函数参数了。

实际上，我们可以将其进一步泛化，把int BufSize改为auto BufSize
这样，使用的时候仍然可以给100，而且我们在设计模板的时候无需关心类型。




## range for

也是个语法糖，相当于不用定义迭代器了，直接在某个列表内循环（类似于python 的for i in List)

```cpp
#include <iostream>
#include <vector>
#include <iterator>
int main() {
    std::vector<int> vec = {1, 2, 3, 4};
    for (auto it = vec.begin(); it != vec.end(); ++it)//冗长写法
        std::cout << *it << std::endl; //冗长写法

    for (auto element : vec)//简化写法
        std::cout << element << std::endl; //简化写法
}
```
可见range for直接取值，而不是指针，所以不需要用*解引用。

如果需要修改值的话，那就写为引用。

```cpp
#include <iostream>
#include <vector>
int main() {
    std::vector<int> vec = {1, 2, 3, 4};
    for (auto &element : vec)
    {
        element+=1;
        std::cout << element << std::endl; 
    }
}
```



## tuple
也是个语法糖。和python里面的元组类似。
注：需要c++17
### 函数返回元组以实现多个返回值
```cpp
#include <iostream>
#include <tuple>

auto f() {
    return std::make_tuple(1, 2.3, "456");
}

int main() {
    auto [x, y, z] = f();
    std::cout << x << ", " << y << ", " << z << std::endl;
    return 0;
}
```
就是先把多个值打包成元组，然后接收返回值的时候再解包。

越来越像python了...


## using
### using做别名替代typedef
原本用typedef yyy xxx的地方都可以换成using xxx = yyy
这样的好处是更加清晰。因为在typedef一个函数对象的时候，会造成心智负担。比如

```cpp
typedef int (*process)(void *);
using NewProcess = int(*)(void *);
```
把某个函数对象（其参数为一个void \*，其返回值为一个int \*）赋予别名process的时候，假如用typedef，就是上面那行。
看起来很不直观。

下面的新写法则简单直观得多。




## 面向对象
### 委托构造
这是个语法糖。
在写构造函数的时候，往往要重载多个版本。为了让功能一致的部分能够复用，可以采用委托构造。

```cpp
#include <iostream>
class Base {
public:
    Base() {
        std::cout << "in the first constructor" << std::endl;
    }
    Base(int value) : Base() { // 委托 Base() 构造函数
        std::cout << "in the second constructor" << std::endl;
    }
};

int main() {
    Base a;
    Base b(2);
}
```
输出

```cpp
in the first constructor
in the first constructor
in the second constructor
```
也就是调用第二个构造函数的时候，首先调用了第一个构造函数，然后调用第二个。相当于第二个重载的构造函数复用了第一个构造函数的部分，并且加上了自己的部分。这就实现了代码复用。

假如将
```cpp
 Base(int value) : Base() { // 委托 Base() 构造函数
```
改为
```cpp
  Base(int value) { // 委托 Base() 构造函数
```
则输出

```cpp
in the first constructor
in the second constructor
```
也就是调用第二个构造函数的时候只调用第二个。



### 继承构造
这也是个语法糖。

父类有多个版本的构造函数的时候，子类也必须一一对应着写多个版本，这很麻烦。
使用using关键字，可以把父类的构造函数复用到子类中。

原本冗长的写法是这样
```cpp
#include <iostream>
class Base {
public:
    int value1,value2;
    Base() {} //version1
    Base(int v1):value1(v1) {}//version2
    Base(int v1, int v2):value1(v1),value2(v2) {}//version3
};

class Subclass : public Base {
public:
    Subclass():Base() {} //version1
    Subclass(int v1):Base(v1) {}//version2
    Subclass(int v1, int v2):Base(v1,v2) {}//version3
};
int main() {
    Subclass s(1,2);

    std::cout << s.value1 << std::endl;
    std::cout << s.value2 << std::endl;
}
```
父类有几个构造函数，子类就要写几个。

但是假如用using关键字，可以直接复用父类的构造函数

```cpp
#include <iostream>
class Base {
public:
    int value1,value2;
    Base() {} //version1
    Base(int v1):value1(v1) {}//version2
    Base(int v1, int v2):value1(v1),value2(v2) {}//version3
};

class Subclass : public Base {
public:
    // Subclass():Base() {} //version1
    // Subclass(int v1):Base(v1) {}//version2
    // Subclass(int v1, int v2):Base(v1,v2) {}//version3
    using Base::Base;
};
int main() {
    Subclass s(1,2);

    std::cout << s.value1 << std::endl;
    std::cout << s.value2 << std::endl;
}
```

假如Subclass新增了一个成员变量value3，那么只需要再重载一个版本的构造函数就好了。

```cpp
#include <iostream>
class Base {
public:
    int value1,value2;
    Base() {} //version1
    Base(int v1):value1(v1) {}//version2
    Base(int v1, int v2):value1(v1),value2(v2) {}//version3
};

class Subclass : public Base {
public:
    int value3;
    // Subclass():Base() {} //version1
    // Subclass(int v1):Base(v1) {}//version2
    // Subclass(int v1, int v2):Base(v1,v2) {}//version3
    using Base::Base;
    Subclass(int v1, int v2, int v3):Base(v1,v2), value3(v3) {}
};
int main() {
    Subclass s(1,2,3);

    std::cout << s.value1 << std::endl;
    std::cout << s.value2 << std::endl;
    std::cout << s.value3 << std::endl;
}
```
### overide和final
#### overide
这也是语法糖。

在以前，只需要在父类指定virtual就表示该函数要在子类中被重写。

然而不需要在子类中的同名函数中给出任何标识（不需要virtual）。这就让虚函数看起来长得和普通函数完全一样。

所以增加一个overide标识，表示该函数是被重写了的虚函数。

这样做除了看上去好看之外，还有一个优点：就是防止不是虚函数的普通函数被重写了。一旦你试图这么做，编译器就会报错。（没错，virtual关键字和是否能被重写毫无关系，即使普通成员函数也能被重写，请看我之前的博客）。
```cpp
struct Base {
    virtual void foo(int);
};
struct SubClass: Base {
    virtual void foo(int) override; // 合法
    virtual void foo(float) override; // 非法, 父类没有此虚函数
};
```
报错
```
使用“override”声明的成员函数不能重写基类成员C/C++(1455)
```

#### final
也是语法糖
它有两个用法
##### 保证类不再被继承

```cpp
struct Base {
    
};
struct SubClass final: Base {
};
struct SubSubClass: SubClass {
};
int main() {
}
```
会报错

```cpp
error C3246: “SubSubClass”: 无法从“SubClass”继承，因为它已被声明为“final”
```

##### 保证虚函数不再被重写

```cpp
struct Base {
    virtual void func() final;
};
struct SubClass final: Base {
    void func();
};

int main() {
}
```


会报错

```cpp
error C3248: “Base::func”: 声明为“final”的函数无法被“SubClass::func”重写 
```

### =delete
这是语法糖，用来
禁用默认赋值构造函数和默认拷贝构造函数。

以往的做法是把他们设定为private。

很多时候我们都是不允许对象被拷贝或者赋值的，因为会造成内存泄漏（他们都是浅拷贝，一旦析构，指针所指的内容就丢失了。）

```cpp
class Magic {
    public:
    Magic() = default; // 显式声明使用编译器生成的构造
    Magic& operator=(const Magic&) = delete; // 显式声明拒绝编译器生成构造
    Magic(int magic_number);
};
int main() {
    Magic a;
    Magic b;
    b=a;
}
```
会报错

```cpp
error C2280: “Magic &Magic::operator =(const Magic &)”: 尝试引用已删除的函数
```


## Lambda表达式
这个是重中之重。
其实也可以看作一种语法糖，就是在原地定义了一个函数对象。

### 用lambda替代函数
最简单的一个例子

```cpp
#include <iostream>
auto add = [](auto x, auto y) {//简化的写法
    return x+y;
};

template<typename T>//原本的写法
auto old_add(T x, T y) {
    return x+y;
}

int main()
{
    auto res = add(1, 2);
    auto res1 = old_add(1.1, 2.2);
    std::cout << res << std::endl;
    std::cout << res1 << std::endl;
}
```


### 用lambda捕获外部变量
如果只是单纯的把原本的函数换了个写法，这没什么的。lambda表达式的一个精髓在于它可以捕获外部变量。

关键就在于[]。

分两种捕获：值捕获和引用捕获

#### 值捕获

```cpp
#include <iostream>
int main() {
    int value = 1;
    auto func = [value]() {
        return value;
    };
    auto v = func();
    std::cout<<v<<std::endl;
}
```
打印结果
1

#### 引用捕获

```cpp
#include <iostream>
int main() {
    int value = 1;
    auto func = [&value]() {
        value = 2;
    };
    func();
    std::cout<<value<<std::endl;
}
```
打印结果
2

#### 自动捕获
可以省略value，直接写成[=]或者是[&]，前者是值捕获，后者是引用捕获。
值捕获
```cpp
#include <iostream>
int main() {
    int value = 1;
    auto func = [=]() {
        return value;
    };
    auto v = func();
    std::cout<<v<<std::endl;
}
```
打印结果
1



```cpp
#include <iostream>
int main() {
    int value = 1;
    auto func = [&]() {
        value = 2;
    };
    func();
    std::cout<<value<<std::endl;
}
```
打印结果
2

#### 为捕获的参数赋予默认值

```cpp
#include <iostream>
int main() {
    int v2 = 2;
    auto func = [v1=1, v2]() {
        return v1+v2;
    };
    auto res = func();
    std::cout<<res<<std::endl;
}
```
输出3

```cpp
#include <iostream>
int main() {
    int v2 = 2;
    auto func = [v1=1, &v2]() {
        v2 *= 10;
        return v1+v2;
    };
    auto res = func();
    std::cout<<res<<std::endl;
}
```
输出21

## 函数对象包装器
###  std::function
在现代编程语言中，可以像函数一样调用的对象不止有函数，还有仿函数（类中重载operator ()），lambda表达式等。这被称为是闭包类型。因此他们被统称为可调用对象（callable）。我们可以传递一个可调用对象，将其作为其他函数的参数。一种传统的做法就是传递函数指针。

既然函数指针能够传递，lambda表达式就也能够。例如


```cpp
#include <iostream>

using funcType = void(int);
void outerFunc(funcType f){ //lambda表达式被作为参数传递给外层函数。
    std::cout<<"this is outerFunc"<<std::endl;
    f(1); //在外层函数中调用内层的lambda表达式
}

int main() {
    auto f = [](int val){
        std::cout<<"I am callable! And the value is: "<<val<<std::endl;
    }; //定义一个lambda表达式，作为内层的函数

    outerFunc(f); // 客户调用外层的函数。
    
}
```

输出
this is outerFunc
I am callable! And the value is: 1

可见，可以用lambda表达式替代函数指针，实现函数回调。

回调函数的用处在于：
在外层函数当中，前后可以加上一些处理，这样就类似python中的装饰器。
同时可以将内层函数作为变动的部分，只要函数类型一致（参数和返回值数量和类型一致）即可以替换被调用的内层函数，实现变化的需求。

上面还没有用到std::function。这里开始说std::function。

它是一种通用的函数封装器。它可以装入任何类型的函数。比起函数指针，std::function更加类型安全。我们可以替换上面代码中的lambda表达式和using funcType = void(int);这几行，把它换成用std::function。

```cpp
#include <iostream>
#include <functional>

// using funcType = void(int);
void outerFunc(std::function<void(int)> f){ //这里把funcType f换成了std::function<void(int)> f
    std::cout<<"this is outerFunc"<<std::endl;
    f(1); //在外层函数中调用内层的lambda表达式
}

int main() {
    std::function<void(int)>  f = [](int val){ //这里把auto 换成了std::function<void(int)>
        std::cout<<"I am callable! And the value is: "<<val<<std::endl;
    }; //定义一个lambda表达式，作为内层的函数

    outerFunc(f); // 客户调用外层的函数。
}
```
输出结果仍然是
this is outerFunc
I am callable! And the value is: 1

### std::bind和std::placeholder

在我们调用函数的时候，需要一个一个地写出实参来调用。假如这时候有一个参数是我目前不知道的，但是后面会知道，那么我可以提前留一个空，等后面再填写。这就是std::bind和std::placeholder的用法。这两者几乎总是一起使用。前者将函数对象与目前已知的参数绑定在一起，后者则是参数的占位符，等后面调用的时候再填写。

std::bind就是一个函数的打包器，他将函数和函数参数打包到一起，然后赋予一个新的名字。

```cpp
#include <iostream>
#include <functional>

void func(int val1, double val2, char val3){ 
    std::cout<<"I am the func with param: "<<val1<<'\t'<<val2<<'\t'<<val3<<'\n';
}

int main() {
    auto newFunc = std::bind(func, 1, 1.1, 'a');
    newFunc();
}
```

输出：I am the func with param: 1     1.1     a

这里将函数func和它的实参打包放到新函数newFunc当中。新函数不需要任何实参就能调用了。

然后用placeholder留空，留下的空可以作为newFunc的新参数，让调用newFunc的人去填空。

```cpp
#include <iostream>
#include <functional>

void func(int val1, double val2, char val3){ 
    std::cout<<"I am the func with param: "<<val1<<'\t'<<val2<<'\t'<<val3<<'\n';
}

int main() {
    auto newFunc = std::bind(func, std::placeholders::_1, 1.1, 'a'); //留下第一个空白，让调用newFunc的人去填空。
    newFunc(1);
}
```
输出结果不变
I am the func with param: 1     1.1     a

注意这里std::placeholders::_1的位置要和空的顺序相关，假如强行写std::placeholders::_2，则会报错如下(VS2019)

```
tuple index out of bounds [E:\learn\cppModernCppTut\build\a.vcxproj]
“operator __surrogate_func”: 未找到匹配的重载函数 [E:\learn\cppModernCppTut\build\a.vcxproj]
```

但是下面这种写法是可以的。也就是说，placeholders的顺序是空白的顺序，不是参数的顺序。
auto newFunc = std::bind(func, 1, std::placeholders::_1, 'a');


## 右值引用
右值引用是核心中的核心，是重点内容。

左右之分最早源于赋值号（也就是等于号）两边。

赋值号左边的，是有名字的，后面仍然要使用的对象。
赋值号右边的，是没有名字的，马上就要消亡的临时对象。

C++11将右值进一步划分为：纯右值和将亡值。

表达式计算的临时返回值，函数的返回值，字面量都是右值。


### 纯右值
纯右值就是字面量或者相当于字面量的的对象。例如表达式计算的临时结果（如1+2的结果），lambda表达式（lambda表达式也是一种表达式），字面量（如10, 'a', true).

这里有个常见的误区，认为字符串也是像字符一样的右值。实际上，字符串是一个左值，它属于const char 数组类型（注意数组的大小也是类型之一）

我们可以用前面说到过的std::is_same<decltype(xxx), yyy>::value来判断它的类型。或者使用typeid(xxx).name()

```cpp
#include <iostream>
#include <typeinfo>

int main() {
    std::cout<<
    typeid("adsf").name()<<std::endl;

    static_assert(std::is_same<decltype("0as"), const char(&)[4]>::value, "not same type");

    const char (&arr)[3] = "as";
    
	const char*   p   = "01234"; //这里发生了隐式类型转换
}
```

输出
char const [5]

输出数组大小为5是因为字符串“adsf”含有4个字符，并且字符串自动会在后面添加一个结束符\0。

### 将亡值
C++引入右值引用之后，出现了将亡值的概念。它将原本即将消亡的右值强行赋予一个名字，从而延长了它的生命周期。

右值引用的一个作用是防止函数返回时候产生大量的拷贝。

我们知道函数的参数可以传递值，也可以传递引用。传递引用的时候只是把地址赋给了函数内部，而没有拷贝对象。值传递则是把值拷贝一份给函数内部。假如传递的值很大的时候，我们就需要占用大量时间来拷贝对象。因此通常做法是传递引用。

传统C++中，返回值则一定是值传递。没法做到传递引用。因此必须要花时间去拷贝对象。

但是右值引用功能推出以后，我们就可以让返回值也传递引用了。

实际上，STL中的vector就被改造为了可以传递右值引用的对象。

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<int> func(){
    vector<int> vec{1,2,3,4,5,6,7};
    return vec;
}

int main() {
    vector<int> val;
    val = func();
    for(auto x : val)
        std::cout<<x<<"\t";
}
```

输出结果
1       2       3       4       5       6       7

虽然写法不变，但是实际上发生的不再是拷贝7个vecotr值，而是直接将func内部的vec生命周期延长，然后将其所有权转交给外部的val。


### 移动语义std::move
std::move可以将任何引用类型（左值引用或者右值引用）转换为右值引用。它只不过是个强制类型转化而已。

从功能上看，std::move就是将对象的所有权传递给别人。也就是说，当move以后，原本的对象就不再有任何资源了，资源被转移给了别人。
```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string str = "Hello";
    std::vector<std::string> v;
 
    v.push_back(str);
    std::cout << "After copy, str is \"" << str << "\"\n";

    v.push_back(std::move(str));
    std::cout << "After move, str is \"" << str << "\"\n";
}
```
输出
After copy, str is "Hello"
After move, str is ""

上面这段代码中：str是要被push_back到v中的一个字符串，第一种写法中，push_back的是值，也就是将str的值拷贝给了v[0]

第二种写法中，push_back的是右值引用，也就是将所有权转移给了v，因此原本的str的资源就为空了。

### 移动构造函数
```cpp
#include <iostream>
class A {
public:
    int val;
    A():val(123) {
        std::cout << "call constructor : " << val << std::endl;
    }
    A(A&& a):val(456) {
        std::cout << "call move when return from func: " << val << std::endl;
    }
};

A func() {
    std::cout << "enter func" << std::endl;
    A a;
    std::cout << "before leave func" << std::endl;
    return a;
}

int main() {
    A obj = func();
    std::cout << "obj: " <<obj.val<< std::endl;
    return 0;
}
```

输出结果
```
enter func
call constructor : 123
before leave func
call move when return from func: 456
obj: 456
```

这里的运行顺序如下：
首先在main中调用func()
进入func之后构造对象a，构造的时候调用构造函数，并给a.val赋值123.
然后在返回a的时候，调用移动构造函数，并给a.val赋值456
因此返回的值（也就是对象a的右值引用，或者说a的所有权）给了main中的对象obj，因此obj中的val值为456

假如我们不写移动构造函数，而是写拷贝构造函数

也就是上面的代码改为
```cpp
#include <iostream>
class A {
public:
    int val;
    A():val(123) {
        std::cout << "call constructor : " << val << std::endl;
    }
    A(A& a):val(789) {
        std::cout << "call copy when return from func: " << val << std::endl;
    }
};

A func() {
    std::cout << "enter func" << std::endl;
    A a;
    std::cout << "before leave func" << std::endl;
    return a;
}

int main() {
    A obj = func();
    std::cout << "obj: " <<obj.val<< std::endl;
    return 0;
}
```
输出结果
```cpp
enter func
call constructor : 123
before leave func
call copy when return from func: 789
obj: 789
```


唯一的区别就是原本的移动构造函数的参数为A&& a，而拷贝构造函数的参数为A& a
也就是只是差了一个&而已，但是函数func返回值的时候却有着不同的行为。

假如说同时写拷贝构造和移动构造呢？

```
#include <iostream>
class A {
public:
    int val;
    A():val(123) {
        std::cout << "call constructor : " << val << std::endl;
    }
    A(A&& a):val(456) {
        std::cout << "call move when return from func: " << val << std::endl;
    }
    A(A& a):val(789) {
        std::cout << "call copy when return from func: " << val << std::endl;
    }
};

A func() {
    std::cout << "enter func" << std::endl;
    A a;
    std::cout << "before leave func" << std::endl;
    return a;
}

int main() {
    A obj = func();
    std::cout << "obj: " <<obj.val<< std::endl;
    return 0;
}
```
结果为
```
enter func
call constructor : 123
before leave func
call move when return from func: 456
obj: 456
```
也就是只触发移动构造。

即：同时存在拷贝构造和移动构造的时候，函数返回对象的时候优先触发移动构造，而不是拷贝构造。

### 引用坍缩规则
传统的C++中不允许对引用继续引用。

但是在现代C++中，可以对引用继续使用引用。

对于右值的引用本身是一个左值。（被引用的对象是右值，但是自己是左值）


C++中的引用遵循如下的坍缩规则：
![在这里插入图片描述](https://img-blog.csdnimg.cn/75d052ccad0d492c9dfe51eeeaaa5e37.png)

这就是说，只有当函数的形参和实参都是右值引用的时候，函数接收到的形参才是真正的右值引用。

这就造成了一个麻烦：我想传入右值引用，但是调用的可能是左值引用的函数。因为一旦传过去，参数就可能坍缩成左值引用了。



