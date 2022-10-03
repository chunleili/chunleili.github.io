# Mac/Linux配置Eigen
使用的IDE是VS Code
我这里用的是mac，但对Linux也成立

1. 直接把解压好的Eigen丢到/usr/local/include下面（注意名字就是Eigen）
2. CMakeLists.txt里面加上
```
include_directories("/usr/local/include/")
```

## 源文件
CMakeLists.txt

```
cmake_minimum_required(VERSION 3.20)
project(test)
include_directories("/usr/local/include/")
add_executable(main main.cpp)
```

main.cpp

```
#include <Eigen/Eigen>
using namespace std;

int main()
{
    cout<<"hello\n";
    Eigen::Matrix<int,2,2> a;
    a<<1,2,3,4;
    cout<<a;
    cout << endl;
}
```
输出

```
hello
1 2
3 4
```
