# 用Eigen的Vector替代std::vector实现真正数学意义上的向量

## 三维点坐标
### 单个点 vec3f

单个点直接使用Eigen::Vector3f即可，记住要`include Eigen/Dense`

为了方便使用，我们在Common中给他起个别名vec3f


common.h
```cpp
#include <vector>
#include <iostream>
#include <Eigen/Dense>
 
using vec3f = Eigen::Vector3f;
```

main.cpp
```
#include "Common.h"
 
int main()
{
  std::vector<vec3f> pos_in{{1.1,2,3},{3,4,5}};
  std::cout<<pos_in[1]<<std::endl;
}
```

output:
```
3
4
5
```

以后凡是使用三维点的地方，都只需要`#include "Common.h"`，然后利用vec3f即可。可以用std::cout来打印，因为Eigen库里面实现了std空间中cout模版的特化。

但是目前不可以进行加减等运算，这是因为我们目前使用的std::vector不支持这些运算。

显然我们更希望管理一个点集合，这样才能进行加减。

### 点集Points
我们定义了一系列的点集. 主要是套用
`Eigen::Matrix<vec3f, Eigen::Dynamic, 1>`

同样的，我们可以在Common中起一个别名为Points

Common.h
```cpp
#include <vector>
#include <iostream>
#include <Eigen/Dense>
 
using vec3f = Eigen::RowVector3f;
using std::vector;
using Points = Eigen::Matrix<vec3f, Eigen::Dynamic, 1>
```


main.cpp
```
#include "Common.h"
using namespace Eigen;
int main()
{
    int numParticles = 10;
    Points  pos_in(numParticles);
    
    pos_in[0] = vec3f {1,2,3};
    pos_in[1] = vec3f {1.1,4,5};

    Points pos_in2(numParticles);
    pos_in2[0] = vec3f {2,2,3};
    pos_in2[1] = vec3f {2.1,4,5};

    Points res(numParticles);
    res = pos_in + pos_in2;
    for(auto&& x:res)
        std::cout<<x<<std::endl;
}
```

打印的时候会发现所有的数值都是竖着打印的，这样很难看清哪三个是一个点。因此我们不妨在Common.h中将vec3f改为行向量.

`using vec3f = Eigen::RowVector3f;`

output
```
3 4 6
3.2   8  10
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
```

### 两点距离
使用.norm()方法可以计算两个点的距离。
```
    vec3f distVec = pos_in[1] - pos_in2[1];
    float dist = distVec.norm();
    std::cout<<distVec<<std::endl;
    std::cout<<dist<<std::endl;
```

其中
```
    pos_in[0] = vec3f {1,2,3};
    pos_in[1] = vec3f {1.1,4,5};

    pos_in2[0] = vec3f {2,2,3};
    pos_in2[1] = vec3f {2.1,5,5};
```

output
```
-1 -1  0
1.41421
```


