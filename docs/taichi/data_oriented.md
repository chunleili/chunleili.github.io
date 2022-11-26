# 面向对象data_oriented 
又叫ODOP(objective data-oriented programming)
1. 在类前面增加装饰器@ti.data_oriented，该装饰器会被继承
2. python函数和taichi函数可以同时存在类内
3. 可以把全局的field定义都移动到类内，或者是__init__函数。
4. 通过普通的python方法（建议是__init__）在不同的内之间传递数据
