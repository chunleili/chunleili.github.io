# 在zeno中单独的测试某个文件

## 描述
环境：Win10 + VS Code
生产环境中用VS2019 + cmake
此测试中使用minGW g++
(gcc version 8.1.0 (x86_64-win32-seh-rev0, Built by MinGW-W64 project))

需求：我希望把某个函数单独抽离出来，自己写main函数进行测试。

## 示例：测试核函数
testKernels.cpp文件
```cpp
#include "../PBF/SPHKernels.h"
#include "../Utils/myPrint.h"
#include <vector>
float CubicKernel::m_radius;
float CubicKernel::m_k;
float CubicKernel::m_l;
float CubicKernel::m_W_zero;

int main()
{
    constexpr float h = 0.1;
    constexpr int num = 1000;
    CubicKernel::set(h);

    std::vector<float> res(num);
    for (size_t i = 0; i < num; i++)
    {
        float dist = h/num * i;
        res[i] = CubicKernel::W(dist);
    }
    printScalarField("cubicW.csv",res);
}
```

SPHKernels.h
```cpp
#pragma once

#include <array>
#include <cmath>

#include <zeno/utils/vec.h>

struct CubicKernel
{

    static float m_radius;
    static float m_k;
    static float m_l;
    static float m_W_zero;

    static void set(float val)
    {
        m_radius = val;
        static const float pi = (3.14159265358979323846);

        const float h3 = m_radius*m_radius*m_radius;
        m_k = (8.0) / (pi*h3);
        m_l = (48.0) / (pi*h3);
        m_W_zero = W(0.0);
    }

    static float W(const float rl)
    {
        float res = 0.0;
        const float q = rl/m_radius;
        {
            if (q <= 0.5)
            {
                const float q2 = q*q;
                const float q3 = q2*q;
                res = m_k * ((6.0)*q3- (6.0)*q2+ (1.0));
            }
            else
            {
                res = m_k * ((2.0)*pow((1.0)-q,3));
            }
        }
        return res;
    }

    static zeno::vec3f gradW(const zeno::vec3f &r)
    {
        zeno::vec3f res;
        // const float rl = r.norm();
        const float rl = zeno::length(r);
        const float q = rl / m_radius;

        {
            if (rl > 1.0e-6)
            {
                const zeno::vec3f gradq = r * ( 1.0 / (rl*m_radius));
                if (q <= 0.5)
                {
                    res = m_l*q*( 3.0*q -  2.0)*gradq;
                }
                else
                {
                    const float factor = (1.0) - q;
                    res = m_l*(-factor*factor)*gradq;
                }
            }
        }
        return res;
    }
};

struct Poly6Kernel
{

    static float W(float dist, float h=0.1)
    {
        float coeff = 315.0 / 64.0 / 3.14159265358979323846;
        float res = 0.0;
        if(dist > 0 && dist < h)
        {
            float x = (h * h - dist * dist) / (h * h * h);
            res = coeff * x * x * x;
        }
        return res;
    }
};

struct SpikyKernel
{
    static zeno::vec3f gradW(const zeno::vec3f& r, float h=0.1)
    {
        float coeff = -45.0 / 3.14159265358979323846;
        zeno::vec3f res{0.0, 0.0, 0.0};
        float dist = zeno::length(r);
        if (dist > 0 && dist < h)
        {
            float x = (h - dist) / (h * h * h);
            float factor = coeff * x * x;
            res = r * factor / dist;
        }
        return res;
    }
};
```

当前目录为`E:\Dev\zenos\zeno\projects\PBD\test>`

编译命令
```
 g++ -I"E:\Dev\zenos\zeno\zeno\include" -std=c++17 .\testKernels.cpp
```
 运行
 ```
 .\a.exe
 ```
 输出结果
 cubicW.csv
 
 ## 要点
 1. 因为用到了zeno的vec，所以要include zeno的头文件目录-I"E:\Dev\zenos\zeno\zeno\include"
 2. 指定c++版本为17
 
