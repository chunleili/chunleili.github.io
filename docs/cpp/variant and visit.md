std::variant是C++ 17的重要新特性。它非常常用以至于不得不去学习它。它实际上是C语言中的union的拓展。它可以存储多种多样的类型，具体类型只有在运行时才能确定。你甚至可以存储自定义的类型。或者是定义一个元素都是variant的数组。这个数组里面每一个元素的类型都可以不相同！

而std::visit是与之配套的访问器。通过std::visit能够不关心具体类型地写出算法，实现算法的泛用。

```cpp
#include <variant>
#include <string>
#include <array>
#include <vector>
#include <iostream>
using namespace std;

int main()
{
    //常规用法：1. 先为variant起个别名
    using myVariant = std::variant<
        double,
        string,
        int
    > ;
    //2. 用variant 声明一个变量a
    myVariant a;
    //3. 给变量a赋值。
    a = 10;
    //4. 通过std::get<int>(a)获取a的变量。
    cout<<std::get<int>(a)<<"\n";
    //5. 给变量a重新赋值
    a = "hello";
    cout<<std::get<string>(a)<<"\n";
    //5. 这个变量（std::get<string>(a) 而非a）也可以赋值给别人。
    string s = std::get<string>(a);
    cout<<s<<"\n";
    a = 3.14;
    cout<<std::get<double>(a)<<"\n";

    //错误做法：会抛出std::bad_variant_access。
    //这是因为每次重新赋值，a都会被覆盖掉，因此a只能存最后一种类型。
    // a = 10;
    // a = "hello";
    // a = 3.14;
    // cout<<std::get<int>(a)<<"\n";
    // cout<<std::get<string>(a)<<"\n";
    // cout<<std::get<double>(a)<<"\n";

    //还可以用index()方法来得知目前存储的是第几种类型。
    myVariant b = "hello";
    cout <<"which type? : "<<b.index()<<endl ; //得到1（从0开始）
    //然后用其访问
    cout<<"access using index: "<<std::get<1>(b)<<endl;
    // cout<<std::get<b.index()>(b)<<endl;//错误做法，因为index运行时才知道

    //更好的get——get_if。它不会抛出异常，假如目前不是相应类型，那么就给出空指针nullptr。
    //但是它是个指针，因此要取地址和解引用
    b = 6;
    int * c= std::get_if<int>(&b);
    if(c)
    {
        cout<<"c is int: ";
        int c_val = *c;
        cout<<c_val;
    }
    else
    {
        cout<<"c is not int";
    }



    //std::visit是一种访问variant的方法。
    //假如你想给别人写库，你需要一种泛用的方法来访问variant。
    //因为你不知道客户中的 variant 存的是什么类型。
    // 它的参数有两个：第一个是一个可调用对象，可以用lambda表达式。第二个是要访问的variant。
    //最简单的用法：打印一下目前所存的值
    std::cout <<"\nAccess with std::visit\n";
    std::visit([](auto&& arg){std::cout <<" " <<arg;}, b);

    //复杂但实用的用法：遍历数组。
    //下面的例子解释如何遍历一个variant组成的数组。
    //由于每个元素都是variant, 而为每种variant都写一遍std::get_if实在是太麻烦了。
    //所以我们需要一种通用的访问variant的方法。
    using var_t = std::variant<int, long, double, std::string>;
    std::vector<var_t> vec = {10, 15l, 1.5, "hello"};
    std::cout <<"\nNow we iterate through a variant vector\n";
    // for (auto& v: vec) 
    //     cout<<v; //一种显而易见的错误，因为v是一个variant，你必须先取出来真正的类型，才能访问。

    //利用std::visit，即使无需取出真正的类型，也能访问。
    for (auto& v: vec) 
        std::visit([](auto&& arg){std::cout <<" " <<arg;}, v);


    //还是访问。你还可以用+号。对于数字就是加法，对于字符串就是连接。
    std::cout <<"\nTest for + operation \n";
    for (auto& v: vec) 
    {
        var_t w = std::visit([](auto&& arg) -> var_t {return arg + arg;}, v);
        std::visit([](auto&& arg){std::cout <<" " <<arg;}, w);
    }
    return 0;
}
```
