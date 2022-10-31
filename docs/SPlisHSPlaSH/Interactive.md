# 在splishsplash中添加用户交互：用crtl+wasdfb移动刚体

思路：

1. 新建一个 Interactive 类，作为中介者。它是个单例
2. 从PBDWrapper::timeStep 获取刚体质心位置的指针，传给Interactive。
3. 从MinGL中获取键盘的输入。传递给Interactive。当接收键盘输入时，就操作刚体指针使之移动。


## 1 中介类Interactive和单例模式

```cpp
//用户交互（键盘鼠标）的中介类，用于传递和处理数据
struct Interactive
{
    //a singleton method to get the object
    static Interactive& get_inter()
    {
        static Interactive inter;
        return inter;
    }
}
```
get_inter是个单例方法，用于获取唯一的对象


使用的时候，
```cpp
Interactive::get_inter().xxmethod()
```
xxmethod()是你想进行的操作。


## 2 获取刚体控制权（质心位置指针）

我们需要知道在哪里调用了刚体。位置在
Simulator\PositionBasedDynamicsWrapper\PBDWrapper.cpp  
void PBDWrapper::timeStep()

我们在此调用内部的方法 set_rb_pos，从而把指针传过去
![image](https://user-images.githubusercontent.com/48758868/198996248-873f8d90-356d-4ac3-bd3e-5d950748448e.png)

我们自己定义的获取刚体控制权的set_rb_pos方法(传递的是引用，我们转换为指针)
```
    //获取刚体的控制权。
    void set_rb_pos(Vector3r& rb_pos)
    {
        // 获取并设定位置为鼠标点击位置 FIXME:
        // (rb_pos) = mouse_pos; 

        //用wasdfb来移动
        // 获取刚体质心指针
        p_rb_pos = &rb_pos; 
        std::cout<< "rb_pos: "<< (rb_pos)<<"\n";
    }
```

这个指针定义成一个内部的成员变量
```
    Vector3r* p_rb_pos = nullptr; //刚体质心位置的指针
```

## 3 从MinGL中获取键盘的输入并操作刚体指针移动刚体

先要找到键盘输入的位置，位于
GUI\OpenGL\MiniGL.cpp  MiniGL::keyboard

在一长串的if-else中间增加调用自己的方法
![image](https://user-images.githubusercontent.com/48758868/198995646-7fbd2c17-b969-445a-95dd-ef78f806205f.png)

这里的 get_key_input 是我们自己写的方法

```
    //获取键盘的输入：从GUI\OpenGL\MiniGL.cpp MiniGL::keyboard
    void get_key_input(enum KEY input)
    {
        const float move_speed = 0.1;

        if(input == KEY::down)
        {
            if(p_rb_pos != nullptr)
            {
                (*p_rb_pos)[1] -= move_speed;
                printf("down!\n");
            }
        }
        else if(input == KEY::up)
        {
            if(p_rb_pos != nullptr)
            {
                (*p_rb_pos)[1] += move_speed;
                printf("up!\n");
            }
        }
        ...
```
其中枚举类是
```
enum KEY{left=0, right, up, down, forward, backward};
```

![image](https://user-images.githubusercontent.com/48758868/198995870-a09cf4d3-56b0-4188-8bfa-5ca3291ea051.png)


## 最终结果

![out](https://user-images.githubusercontent.com/48758868/198999690-93aee220-66c4-4143-bdee-1b90dc6c2105.gif)


## 附录：Interactive.h 完整代码
```
#pragma once
#include "SPlisHSPlasH/Common.h"

//用户交互（键盘鼠标）的中介类，用于传递和处理数据
struct Interactive
{
    Vector3r mouse_pos; //鼠标位置
    enum KEY{left=0, right, up, down, forward, backward};
    Vector3r* p_rb_pos = nullptr; //刚体质心位置的指针

    //a singleton method to get the object
    static Interactive& get_inter()
    {
        static Interactive inter;
        return inter;
    }
    
    //把mouse_pos从外界传递给Interactive内部
    void get_mouse_pos(const Vector3r& rhs)
    {
        mouse_pos[0] = rhs[0];
        mouse_pos[1] = rhs[1];
        mouse_pos[2] = rhs[2];
        printf("mouse pos in Inter:(%.3f,\t%.3f,\t%.3f)\n", mouse_pos[0],mouse_pos[1],mouse_pos[2]);
    }

    //获取键盘的输入：从GUI\OpenGL\MiniGL.cpp MiniGL::keyboard
    void get_key_input(enum KEY input)
    {
        const float move_speed = 0.1;

        if(input == KEY::down)
        {
            if(p_rb_pos != nullptr)
            {
                (*p_rb_pos)[1] -= move_speed;
                printf("down!\n");
            }
        }
        else if(input == KEY::up)
        {
            if(p_rb_pos != nullptr)
            {
                (*p_rb_pos)[1] += move_speed;
                printf("up!\n");
            }
        }
        else if(input == KEY::left)
        {
            if(p_rb_pos != nullptr)
            {
                (*p_rb_pos)[0] -= move_speed;
                printf("left!\n");
            }
        }
        else if (input == KEY::right)
        {
            if (p_rb_pos != nullptr)
            {
                (*p_rb_pos)[0] += move_speed;
                printf("right!\n");
            }
        }
        else if (input == KEY::forward)
        {
            if (p_rb_pos != nullptr)
            {
                (*p_rb_pos)[2] -= move_speed;
                printf("forward!\n");
            }
        }
        else if (input == KEY::backward)
        {
            if (p_rb_pos != nullptr)
            {
                (*p_rb_pos)[2] += move_speed;
                printf("backward!\n");
            }
        }
    }

    //获取刚体的控制权。
    void set_rb_pos(Vector3r& rb_pos)
    {
        // 获取并设定位置为鼠标点击位置 FIXME:
        // (rb_pos) = mouse_pos; 

        //用wasdfb来移动
        // 获取刚体质心指针
        p_rb_pos = &rb_pos; 
        std::cout<< "rb_pos: "<< (rb_pos)<<"\n";
    }
};
```
