# 探索Partio(2) 继续探索粒子格式库partio
[上一节内容](https://blog.csdn.net/weixin_43940314/article/details/127746739)讲了安装与Hello World例子。

## 原理
### 类模型
有三个核心的类：
1. ParticlesInfo 是元数据。记录粒子数目、有哪些属性。
2. ParticlesData 只读粒子数据
3. ParticlesDataMutable 可写可读粒子数据

对应的有三个重要函数。原型都在Partio.h之中。
```c
readHeaders()
	返回元数据，如粒子数目和有哪些属性。
readCached()
	返回只读的ParticlesData 
create() and read()
	返回可读可写的ParticlesDataMutable
```
### 属性数据模型
所有的粒子属性都是以下三种基本数据结构的组合
```c
    VECTOR[3]
    FLOAT[d]
    INT[d]
```

    其中 VECTOR[3] 和FLOAT[3] 是一样的
    VECTOR[4]是无效的，FLOAT[4]是有效的。FLOAT可以指定任意维度 FLOAT[1...infinity]

### 遍历
有多种遍历的方式:
- 若使用SIMD ， 则推荐dataAsFloat()和data(arrayOfIndices)
- 推荐Cache ParticleAttributes 而非循环
- 使用迭代器，这比data()或dataAsFloat 的方式要快


### 后端
有三种实现

- SimpleParticles
- ParticleHeaders
- SimpleParticlesInterleaved

### 读写器

可以自己在io文件夹添加新的读写器。

1. 需要实现这三个接口：
ParticlesInfo, ParticlesData and ParticlesDataMutable
2. 然后在io/readers.h中添加函数原型
3. 在io/ParticleIO.cpp中添加后缀绑定




## 实践（例子）
参考`src\tests\testio.cpp`

### 读取文件
 	
```c
  Partio::ParticlesDataMutable* data=Partio::read("E:/codes/try/partio/my_partio/test.bgeo");
```
参数：只需要提供绝对路径即可。
返回值：`Partio::ParticlesDataMutable* `是partio内部数据结构的指针

注意路径必须是`const char*`。如果是`std::string`，需要利用`.c_str()`方法转换为`const char *`格式。

read方法会先忽略你的.gz后缀，然后调用reader()函数匹配后缀，最后在相应后缀的函数（每个io目录下的文件对应一种格式）中读取文件。入口函数在 `src\lib\io\ParticleIO.cpp`


### 写入文件
write函数同理。

```c
Partio::write(filename,*p);
```
只需要给出绝对路径（同样需要`const char *`格式），并给出一个指针即可。

这个指针的数据类型是partio内部数据结构的指针`Partio::ParticlesData*`，
也可以是`ParticlesDataMutable *`

### 完整例子注解
```cpp
// 首先必须引入头文件Partio.h
#include <Partio.h>
#include <iostream>

// 生产数据用于测试
Partio::ParticlesDataMutable* makeData()
{
    // 利用create创建可读写对象foo(这里用的是引用)
    Partio::ParticlesDataMutable& foo=*Partio::create();
    // 利用addAttribute方法增加三种属性：位置、寿命、id。
    Partio::ParticleAttribute positionAttr=foo.addAttribute("position",Partio::VECTOR,3);
    Partio::ParticleAttribute lifeAttr=foo.addAttribute("life",Partio::FLOAT,2);
    Partio::ParticleAttribute idAttr=foo.addAttribute("id",Partio::INT,1);
    
    // 增加的同时遍历5个粒子：
    for(int i=0;i<5;i++){
        // 粒子的编号
        Partio::ParticleIndex index=foo.addParticle();
        // 获取对应属性、对应编号的粒子数据的指针。
        float* pos=foo.dataWrite<float>(positionAttr,index);
        float* life=foo.dataWrite<float>(lifeAttr,index);
        int* id=foo.dataWrite<int>(idAttr,index);
        
        // 在指针处写入数据
        pos[0]=.1*i;
        pos[1]=.1*(i+1);
        pos[2]=.1*(i+2);
        life[0]=-1.2+i;
        life[1]=10.;
        id[0]=index;
        
    }
    // 返回foo对象指针
    return &foo;
}

void testEmptySaveLoad(const char* filename)
{
    Partio::ParticlesDataMutable* p=Partio::create();
    p->addAttribute("position",Partio::VECTOR,3);
    std::cerr<<"Testing empty save with file '"<<filename<<"'"<<std::endl;
    Partio::write(filename,*p);
    p->release();
    Partio::ParticlesDataMutable* pread=Partio::read(filename);
    pread->release();
}

// 测试读与写。第一个参数是数据指针p, 第二个参数是文件绝对路径
void testSaveLoad(Partio::ParticlesData* p,const char* filename)
{
    std::cerr<<"Testing with file '"<<filename<<"'"<<std::endl;
    // 写数据
    Partio::write(filename,*p);

    // 读数据（与读无关）
    Partio::ParticlesData* pnew=Partio::read(filename);
    // 释放读了的数据对象
    pnew->release();
}

int main(int argc,char *argv[])
{
    {
        // 生产数据
        Partio::ParticlesDataMutable* foo=makeData();
        // 测试各个格式的读写
        testSaveLoad(foo,"test.bgeo");
        testSaveLoad(foo,"test.bgeo.gz");
        testSaveLoad(foo,"test.geo");
        testSaveLoad(foo,"test.geo.gz");
        testSaveLoad(foo,"test.ptc");
        testSaveLoad(foo,"test.ptc.gz");
        testSaveLoad(foo,"test.pdb");
        testSaveLoad(foo,"test.pdb.gz");
        testEmptySaveLoad("testEmpty.geo");
        testEmptySaveLoad("testEmpty.bgeo");
        testEmptySaveLoad("testEmpty.pdb");
        testEmptySaveLoad("testEmpty.ptc");
        // 释放对象
        foo->release();
    }
    return 0;
}
```

下期
[探索Partio(3): 将Partio数据封装成单例](https://blog.csdn.net/weixin_43940314/article/details/128526529)
