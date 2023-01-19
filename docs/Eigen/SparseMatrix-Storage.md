# 3.1稀疏矩阵操作

参考: [https://eigen.tuxfamily.org/dox-devel/group__TutorialSparse.html](https://eigen.tuxfamily.org/dox-devel/group__TutorialSparse.html)

稀疏矩阵就是绝大部分元素都为0的矩阵。

稀疏矩阵与稠密矩阵不仅数据结构上不同，可用的算法也是不同的。

我们首先看数据结构

## 数据结构

假设我们要存储如下矩阵
```
0	3	0	0	0
22	0	0	0	17
7	5	0	1	0
0	0	0	0	0
0	0	14	0	8
```

采用压缩列存储方案（Compressed Column Storage）存储。这点Youssad的Iterative Methods一书中有更详尽的描述。

我们需要存储的是如下四个数组：
1. 值 Value
2. 行号 InnerIndices
3. 每列起始索引 OuterStarts
4. 该列非0值个数 InnerNNZs

注：
- 在Eigen中，默认为列主序，inner代表的是一列，故Inner Indices是行号。
- NNZ代表Number of Non-Zeros
- OuterStarts存储的起始索引是对应Value和InnerIndices中的索引，而非原本矩阵的索引。

故实际存储的数据为

```
Values:			22	7	_	3	5	14	_	_	1	_	17	8
InnerIndices:	1	2	_	0	2	4	_	_	2	_	1	4
OuterStarts:	0	3	5	8	10	12
InnerNNZs:		2	2	1	1	2	
```
例子：

一列一列地看
- 第一列：
	- 第一列有22和7两个非零值，22对应行号为1，7对应行号为2。
	- 第一列的第一个元素22，在Values和InnerIndices数组中的索引是0，故OuterStarts=0.
	- 这一列非零数InnerNNZs为2，故从22到7是第一列。
- 第二列
	- 第二列有3和5两个非零值，3对应的行号为0，5对应行号为2 
	- 第二列的第一个元素3，在Values和InnerIndices数组中的索引是3，故OuterStarts=3.
	- 这一列非零数InnerNNZs为2，故从3到5是第二列。
...


我们注意到有些多余的空间。这是为了将来插入新元素时快速插入留的空位。

可以采用SparseMatrix::makeCompressed()来释放多余的空间。这种叫做压缩模式

释放之后存储的数组为
```
Values:			22	7	3	5	14	1	17	8
InnerIndices:	1	2	0	2	4	2	1	4
OuterStarts:	0	2	4	5	6	8
```

我们注意到，由于不再有多余的空间，因此也不需要存储InnerNNZs了。因为`InnerNNZs[j] == OuterStarts[j+1] - OuterStarts[j]`

另外，Eigen大多数与外部库交互的包装类，返回的都是压缩模式的矩阵。但是一旦我们插入新的元素，就自动会转化为非压缩模式。



