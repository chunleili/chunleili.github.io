# 在zeno中渲染流体

我们之前渲染流体的流程都是在blender中的。教程如下所示：
https://blog.csdn.net/weixin_43940314/article/details/125260073

实际上zeno渲染流体更加方便。

我们已有的数据为80个时间帧的粒子的位置。以obj格式存储。后缀为pos.1.obj, pos.2.obj...

本文核心目的有两个：
1. 从粒子位置数据进行表面重建。
2. 从表面重建的结果渲染流体。

本文采用的zeno版本为2022-7-28构建的gup cuda版本。

## 1表面重建
我们将要采取的核心节点为**SmoothLiquidSDF节点**

### 输入obj数据
先输入obj数据，用readObjPrim和StringEval。如果不用stringEval会导致无法读取$F这个内置变量。这个变量代表帧号。

![image](https://user-images.githubusercontent.com/48758868/197704975-0ef2476c-0681-4333-a075-49fad1386cc9.png)


此时显示此节点，应该能看到粒子
如果没看到，请点击ReadObjPrim节点后 alt+f

![image](https://user-images.githubusercontent.com/48758868/197705146-c38a26cb-0fa5-45f7-a5c3-34615b38f777.png)

### 将数据转换为vdb格式
使用节点：PrimToVDBPointDataGrid
由于SmoothLiquidSDF节点输入数据必须是vdb格式的，所以我们要转换一下。
转换需要个Dx，取粒子直径即可。我们输入数据的粒子半径为3.0，故此处取6.0

![image](https://user-images.githubusercontent.com/48758868/197706082-d24fd94e-2fd5-4b78-91de-33a80214528d.png)

### 表面重建：SmoothLiquidSDF节点
必须的两个输入数据为：
1. inParticles，需要vdbPoint格式数据。
2. Dx, 重建的网格精度。越小越细腻。我们的这里大概取1.0


![image](https://user-images.githubusercontent.com/48758868/197706817-77f8d196-22ce-46a2-88bc-9fa2baace3f7.png)

此时点击运行，可以看到表面重建结果

![image](https://user-images.githubusercontent.com/48758868/197706875-ad27f22b-a205-4dbb-b75d-e4f81ff65802.png)


### 输出表面结果为obj格式
同样需要先转换格式。由于SmoothLiquidSDF节点输出的为vdb数据，所以转换回prim

然后再writeObjPrim

![image](https://user-images.githubusercontent.com/48758868/197707553-90b1165a-c947-4a32-bddd-90262a62b230.png)

注意显示WriteObjPrim

输出结果

![image](https://user-images.githubusercontent.com/48758868/197707761-718d854d-fd6c-4190-a4a9-8e7c4f4825f6.png)


## 2渲染

**单独新建一个zeno图**

### 输入Obj
![image](https://user-images.githubusercontent.com/48758868/197708175-508320c7-77a9-4f6c-a2c9-e595df29d1dd.png)
### BindMaterial 绑定材质
![image](https://user-images.githubusercontent.com/48758868/197708238-af1cdf18-9b47-4a30-87c8-7a1917c54484.png)
这个节点无需输出任何东西，它是根据mtlid来识别材质的。注意要显示它
### ShaderFinalize 用BSDF制作材质
![image](https://user-images.githubusercontent.com/48758868/197708502-042636a6-e362-40e7-8715-33ed47ce8a38.png)

这个节点参数比较长。只需要记住更改metallic为1，opacity 0.9即可。
并且它是根据mtlid来标识材质的。
### 结果
点击左上角的显示-光线追踪
![image](https://user-images.githubusercontent.com/48758868/197708772-199284a7-d509-4dcc-8aa6-8738285e2092.png)

运行即可得到
![image](https://user-images.githubusercontent.com/48758868/197708975-abb80ce8-b371-4750-b73a-f114d7915deb.png)


