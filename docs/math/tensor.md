# 张量通俗入门

（如果图片或者公式挂了，请参考[CSDN博客](https://blog.csdn.net/weixin_43940314/article/details/123559800?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167591199416800217097244%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167591199416800217097244&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-2-123559800-null-null.blog_rank_default&utm_term=%E5%BC%A0%E9%87%8F&spm=1018.2226.3001.4450)

## 1 张量
张量就是一组有序数。

或者说，张量就是一组有序数的表现方式，或者说是记号。比如向量是一种表现方式，矩阵是一种表现方式，张量同样也是一种表现方式。它本质就是一组有序的数字而已。

值得指出的是，张量是比向量和矩阵更高级的记号。它向下包含了向量和矩阵。凡是向量和矩阵能表示的，张量都能更简洁地表示。

在很多地方，我们不提是几阶张量，就默认是2阶。

（在数学上，张量也是一种向量，也是一种矩阵。通俗来讲，其实三者都是一回事，只不过记号不同，是西红柿和番茄的区别。）

### 1.1 为什么张量记号简便
为什么要用张量记号，说起来，无非是简便。当然，熟悉了之后，还可以将知识抽象到更高层次。

为什么会简便？

比如应力记号$\sigma$
如果写成矩阵就是

$$
\mathbf{\sigma} =
\begin{pmatrix}
\sigma_{xx} & \sigma_{xy} &\sigma_{xz} \\
\sigma_{yx} & \sigma_{yy} &\sigma_{yz} \\
\sigma_{zx} & \sigma_{zy} &\sigma_{zz} \\
\end{pmatrix}
$$

![在这里插入图片描述](https://img-blog.csdnimg.cn/82d5c6fe44af4f028636df1fa1edbc7e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAYmVpZG91MTEx,size_10,color_FFFFFF,t_70,g_se,x_16#pic_center)
（图片引自wiki）

这样写有两个缺点：
1. x y z这样的下标记号太费字母了。
假如有四个分量呢？取mnkl?五个呢？六个呢？那26个英文字母都取完了。
2. 写成矩阵太占地方了，一下子就要写9个分量。

第一点好办，无非是符号问题，干脆全换成1，2，3。反正数字用不完。
于是就变成了
$$
\mathbf{\sigma} =
\begin{pmatrix}
\sigma_{11} & \sigma_{12} &\sigma_{13} \\
\sigma_{21} & \sigma_{22} &\sigma_{23} \\
\sigma_{31} & \sigma_{32} &\sigma_{33} \\
\end{pmatrix}
$$

第二点怎么办呢？
我们发现，无非是123这三个数在变来变去，干脆直接用i=1,2,3和j=1,2,3来代替吧！

于是就写成了
$$
\sigma_{ij} 
$$
其中i=1,2,3；j=1,2,3

于是只用这一个记号，就代表了9个分量的矩阵。

#### 1.1.1 用张量记号简写求偏导
额外要提醒的一点是：张量也可以简写求偏导操作。
例如
$$
(\frac{\partial \phi }{\partial x} ,\frac{\partial \phi }{\partial y} ,\frac{\partial \phi }{\partial z} )
$$
就可以简写为
$$
\frac{\partial \phi}{\partial x_i} 
$$
我们还可以更简洁一点，连求导符号和分式也省去了，写成
$$
\phi_{,i} 
$$
你看，就一个**逗号**，就代表了对三个分量分别求偏导。

### 1.2 张量的阶
标量是0阶张量
矢量是1阶张量
2阶张量可用矩阵表示
此外，常见的还有4阶张量，也可用矩阵表示

什么是张量的阶呢？就是自由下标的个数。

例如
$$
x_i 
$$

是1阶张量，因为$i=1,2,3$， 它就有3个分量。（在力学中，它可以代表位置）

$$
\sigma_{ij} 
$$

是2阶张量，因为$i=1,2,3; j=1,2,3$ ，它就有9个分量。（在力学中，它可以代表应力）
$$
c_{mnkl} 
$$是4阶张量，因为$m=1,2,3; n=1,2,3; k=1,2,3; l=1,2,3$，它就有3\*3\*3\*3=81个分量。（在力学中，它可以代表刚度矩阵）


像这种能够自由变换的下标，叫自由下标。它不一定是1，2，3；也可以是x、y、z。只是一种用来区分不同的记号罢了。


### 1.3 张量的运算规则
我们为标量定义了加、减、乘、除，这是标量的运算规则。
向量也有加、减、乘（有许多种乘），也是其运算规则。
矩阵也有加、减、乘和取逆，也是其运算规则。
张量同理。

张量有加、减、乘（有许多种乘）。

乘有三种：
 1. 点乘
 2. 叉乘
 3. 并乘


#### 1.3.1 爱因斯坦求和约定与哑标
刚才说了自由下标，与之对应的，就是哑标。哑标是会被消掉的。
爱因斯坦在推导相对论的时候，为了记号方便，就发明了张量表示法。他又发现经常会有相同下标求和的情况发生，于是规定：**凡是在一项内有相同下标出现的，一律默认求和。**

写起来，就是这样
$$
x_iy_i=x_1y_1+x_2y_2+x_3y_3
$$

其实说来，就是省略了一个求和的$\Sigma$
如果不省略，就是
$$
\sum_i x_iy_i=x_1y_1+x_2y_2+x_3y_3
$$
#### 1.3.2 张量的加减
加减很简单，对应的分量加减即可。
例如
$$
x_i +y_i= \begin{pmatrix}
 x_1+y_1\\
 x_2+y_2\\
x_3+y_3
\end{pmatrix}
$$

#### 1.3.3 张量的点乘(dot product)

首先说明，
==点乘是降阶的。==
这一点要牢记。

那么降低多少呢？
假如a有4阶，b有2阶，那么a点乘b得到的就是4-2=2阶
假如a有2阶，b有1阶，那么a点乘b得到的就是2-1=1阶（矩阵乘向量）
假如a有2阶，b有2阶，那么a点乘b得到的就是2-2=0阶（矩阵乘矩阵）
假如a有1阶，b有1阶，那么a点乘b得到的就是1-1=0阶（向量乘向量）


所以我们还明白了：==点乘结果的阶数就是阶数大的减去阶数小的。==

例如
$$
c_{mnkl} \epsilon_{kl}=\sigma_{mn}
$$

你看，左边的kl重复了，所以满足爱因斯坦求和约定，自动求和，变成了哑标，即
$$
\sum_k\sum_lc_{mnkl} \epsilon_{kl}
$$
这个求和以后，就只剩下两个自由下标了。所以就变成了2阶张量。




##### 1.3.3.2 二阶张量的双点积
向量（也就是一阶张量）的点乘都写成一个点的点积。
而二阶张量的点乘都写成两个点的点积。如
$$
\mathbf{a}:\mathbf{b}
$$
这里我没有写下标。a和b都代表二阶张量。假如写上下标
$$
a_{ij}b_{ij}
$$
你就会发现，ij都是哑标，直接就加没了。所以两个2阶张量点乘的结果是0阶张量，即一个数，或者说是标量。

为什么要写两个点呢？这是因为有两个下标被爱因斯坦求和约定给求和了，同时**它又是两个二阶的张量相乘，所以就写成两个点**。

双点积应该很常见，因为它其实就是两个矩阵对应分量一对一的相乘。
假如写成矩阵形式的话，

$$
\begin{matrix}
a:b & = \\
\begin{pmatrix}
 a_{11} & a_{12} & a_{13} \\
 a_{21} & a_{22} & a_{23}\\
 a_{31} & a_{32} & a_{33}
\end{pmatrix}:
\begin{pmatrix}
 b_{11} & b_{12} & b_{13} \\
 b_{21} & b_{22} & b_{23}\\
 b_{31} & b_{32} & b_{33}
\end{pmatrix}  &= \\
\begin{pmatrix}
 a_{11}b_{11} & a_{12}b_{12} & a_{13}b_{13} \\
 a_{21}b_{21} & a_{22}b_{22} & a_{23}b_{23} \\
 a_{31}b_{31} & a_{32}b_{32} & a_{33}b_{33}
\end{pmatrix}
\end{matrix}
$$


##### 1.3.3.3 张量的缩并(tensor contraction)
上面提到了，点乘是降阶的，所以又叫缩并。就是把张量并排放到一起后，哑标给消掉了。
（待补充）




#### 1.3.4 并乘(dyadic product)/张量积(tensor product)




==并乘是升阶的。==

那么升多少呢？

==并乘结果的阶数就是阶数大的加上阶数小的。==
这里和点乘就只有一字之差：“加”和“减”。



$$
\mathbf{a} \otimes \mathbf{b} =a_ib_j
$$
并乘除了写圈圈里面一个叉子，还可以什么都不写，就紧贴着。
$$
\mathbf{a}\mathbf{b}  =a_ib_j
$$

可以想象，i和j都是自由下标，结果为2阶张量，所以这其实是9个分量
$$
\left(\begin{array}{l}
a_{1} \\
a_{2} \\
a_{3}
\end{array}\right)\left(\begin{array}{lll}
b_{1} & b_{2} & b_{3}
\end{array}\right)=\left(\begin{array}{lll}
a_{1} b_{1} & a_{1} b_{2} & a_{1} b_{3} \\
a_{2} b_{1} & a_{2} b_{2} & a_{2} b_{3} \\
a_{3} b_{1} & a_{3} b_{2} & a_{3} b_{3}
\end{array}\right)
$$



向量并乘又被称为**外积(outer product)**（与内积相对应）
矩阵并乘又被称为**克罗内克积(kronecker product)**
张量的并乘又被称为**直积(direct product)**，或者就叫**张量积（tensor product)**。

(PS 张量积这种说法比较普遍)
(待补充）

#### 1.3.5 张量的叉乘(cross product)
==叉乘是不升不降的。==
例如向量的叉乘
$$
\mathbf{e_j}\times \mathbf{e_k}=e_{ijk}\mathbf{e_i}
$$


$$
\mathbf{a}\times \mathbf{b}=e_{ijk}a_j b_k \mathbf{e_i}
$$

这里$\mathbf{e_i}$代表坐标轴的单位向量

$e_{ijk}$叫做置换符号(又叫Racci符号）

$$
e_{i j k}=\left\{\begin{array}{c}
1 & ijk两个相同\\
-1 & ijk正序轮换：  123，231，312\\
0  & ijk逆序轮换：  132，321，213
\end{array}\right.
$$


### 1.4 克罗内克三角（Kronecker delta）
克罗内克三角（Kronecker delta），或者叫克罗内克函数

它是一个二阶张量
$$
\delta_{i j}= \begin{cases}0 & \text { if } i \neq j \\ 1 & \text { if } i=j\end{cases}
$$

可见，它其实就是单位阵。

可用克罗内克三角来化简许多运算

他有一条很好的**性质**，那就是他能换下标

比如
$$
a_{i}\delta_{ij}=a_j
$$
其实这个换了相当于没换，因为只有一个下标。假如有两个，那就有区别了
$$
a_{i}b_j\delta_{ij}=a_ib_i
$$
可见后面那个$\delta$把b的下标j换成了下标i


### 1.5 张量的几何解释：线性变换
（此节内容来自A brief on tensor analysis）

我们都知道，矩阵的几何含义是对任意向量v进行线性变换。

张量其实也是一种线性变换（我们这里指的是二阶张量）。


说矩阵是一种线性变换，这种说法其实不严谨。应该说：**矩阵左乘**是一种线性变化，即

$$
\mathbf{A}\mathbf{v} \hspace{0.2in} \forall \mathbf{v}
$$

(这里黑体，表示用的是向量记号，没有用张量记号；张量记号是不需要黑体的，只需要加下标)
向量$\mathbf{v}$的任意性表示了主体在于A

同理，不能说二阶张量本身是一种线性变换，而应该说：二阶张量(点乘/叉乘/并乘）分别是一种线性变化。即
$$
\mathbf{p}\cdot \mathbf{v} \hspace{0.2in} \forall \mathbf{v}
$$

$$
\mathbf{p}\times  \mathbf{v} \hspace{0.2in} \forall \mathbf{v}
$$

$$
\mathbf{p}  \mathbf{v} \hspace{0.2in} \forall \mathbf{v}
$$


（待完善）


### 1.6 张量的梯度散度和旋度

### 1.6.1 散度
对一个二阶张量来说

$$
\begin{matrix}
\nabla \cdot \boldsymbol{\sigma}&\\
=\left[\begin{array}{lll}
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}
\end{array}\right]\left[\begin{array}{ccc}
\sigma_{x x} & \sigma_{x y} & \sigma_{x z} \\
\sigma_{y x} & \sigma_{y y} & \sigma_{y z} \\
\sigma_{z x} & \sigma_{z y} & \sigma_{z z}
\end{array}\right]&\\
=\left[\begin{array}{c}
\frac{\partial \sigma_{x x}}{\partial x}+\frac{\partial \sigma_{y x}}{\partial y}+\frac{\partial \sigma_{z x}}{\partial z} \\
\frac{\partial \sigma_{x y}}{\partial x}+\frac{\partial \sigma_{y y}}{\partial y}+\frac{\partial \sigma_{z y}}{\partial z} \\
\frac{\partial \sigma_{x z}}{\partial x}+\frac{\partial \sigma_{y z}}{\partial y}+\frac{\partial \sigma_{z z}}{\partial z}
\end{array}\right]^T&\\
=\frac{\partial \sigma_{j i}}{\partial x_{j}}
\end{matrix}
$$

故张量的散度就是一个向量（一阶张量）。


### 1.6.2 梯度

### 1.7 张量的高斯定理




-----

参考
1. https://zhuanlan.zhihu.com/p/139105732
2. https://zhuanlan.zhihu.com/p/62612523
3. https://zhuanlan.zhihu.com/p/56850779
4. http://fdjpkc.fudan.edu.cn/d201354/15048/list.htm
5. https://www.jianshu.com/p/b7391573a9fd
6. https://zhuanlan.zhihu.com/p/83101486

