# 函数返回多个值的最佳方式

让C++的函数有多个返回值的方式多种多样，比如

1. 返回结构体
2. 在参数中以引用的方式返回值
3. （对于同一类型数据）返回`std::vector`
4. 返回`std::pair`
5. 返回`std::tuple`
...

其中我认为最简洁最好用的就是返回元组。因为这种方式写的代码最少最简洁，而且适用范围最广。

注意这种方法需要C++17以上

下面是个简单的示例

```
#include <iostream>
#include <tuple>
#include <string>

std::tuple<std::string, int> f() // this function returns multiple values
{
    std::string x = "Hello";
    return std::make_tuple(x, 7); // return {x,7}; in C++17
}

int main()
{
    auto [s, n] = f(); // structured binding declaration
    std::cout << s << " " << n << "\n";
}
```

这里是搭配了C++17的结构化绑定`auto [s, n]`，这样我们就可以自动推断返回值类型，无需手动去写了。

假如你不想使用结构化绑定，也可以通过get的第几个模板参数方式来获取返回值。
```
    auto s = std::get<0>(f());
    auto n = std::get<1>(f());
```


当然还是建议`auto [s, n] = f();` 

这种方式既简洁又直观。
