# 在taichi中使用shape作为循环大小
对于C++选手来说，很熟悉的用法是
```cpp
for(int i = 0; i < pos.size(); i++)
    ...
```

对于python选手来说，通常采用
```python
for i in range(numParticles):
    ...
```
或者直接用struct for
```python
for i in pos:
    ...
```

其实还有一种邪典用法，就是用c++的写法去写taichi
```python
for i in range(pos.shape[0]):
    ...
```
为啥要用shape[0]呢？

因为pos.shape返回的是个元组，把它转换为数值才能用。

这里其实不是要去建议用邪典的写法，只是突然发现这种写法也能用。当然，最主要的是掌握pos.shape[0]这样的小技巧来获取taichi field的shape。
