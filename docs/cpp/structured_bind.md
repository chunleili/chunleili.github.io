# 结构化绑定
```
#include<iostream>
#include<map>
#include<vector>
#include<tuple>
using namespace std;

//VS2022

int main()
{
    //绑定一个数组
    int arr[] = {1,2,3,4,5};
    auto [a,b,c,d,e] = arr;
    std::cout<<"bind a array:"<<std::endl;
    std::cout<<"a="<<a<<", b="<<b<<", c="<<c<<", d="<<d<<", e="<<e<<std::endl;

    //绑定一个结构体
    struct S{
        int a;
        int b;
        int c;
    };
    S s{1,2,3};
    auto [x,y,z] = s;
    std::cout<<"bind a structure:"<<std::endl;
    std::cout<<"x="<<x<<", y="<<y<<", z="<<z<<std::endl;


    //绑定一个pair
    std::pair<int,int> p{1,2};
    auto [m,n] = p;
    std::cout<<"bind a pair:"<<std::endl;
    std::cout<<"m="<<m<<", n="<<n<<std::endl;


    //绑定一个tuple
    std::tuple<int,int,int> t{1,2,3};
    auto [i,j,k] = t;
    std::cout<<"bind a tuple:"<<std::endl;
    std::cout<<"i="<<i<<", j="<<j<<", k="<<k<<std::endl;

    //绑定map
    std::map<int,int> mp{{1,2},{3,4}};
    for(auto [key,value]:mp)
    {
        std::cout<<"key="<<key<<", value="<<value<<std::endl;
    }

    // 绑定vector中的struct
    struct employee
    {
        unsigned id;
        std::string name;
        std::string role;
        unsigned salary;
    };
    std::vector<employee> employees{{1,"h","boss",1000},{2,"l","worker",500}};
    for(const auto &[id,name,role,salary]:employees)
    {
        std::cout<<"id="<<id<<", name="<<name<<", role="<<role<<", salary="<<salary<<std::endl;
    }

    //注意：绑定的个数必须和结构体中的成员个数一致，否则会报错

    // std::tuple<int, float, long> tup(1, 2.0, 3);
    // auto [a, b] = tup; // Does not work
    // 报错： 标识符的数目必须与类似于元祖类型的结构化绑定中 "std::tuple_size<std::tuple<int,float,long>>::value" 的值相匹配
    
    // int arr2[] = {1,2,3,4,5};
    // auto [a, b] = arr2; // Does not work
    // 报错： 元素数量比绑定名称数量多

    return 0;
}
```
