这是个header-only的库，不需要安装。

但是可以开启编译example：
```
cmake -B build -DAMGCL_BUILD_EXAMPLES=1
```
编译poisson3Db example
```
cmake --build build  --config=Release --target=poisson3Db
```
下载数据（matrix maket格式）
https://sparse.tamu.edu/FEMLAB/poisson3Db
解压到amgcl根目录

运行example
```
.\amgcl\build\tutorial\1.poisson3Db\Release\poisson3Db.exe .\poisson3Db.mtx .\poisson3Db_b.mtx
 ```
结果

```
Matrix .\poisson3Db.mtx: 85623x85623
Done read matrix
RHS .\poisson3Db_b.mtx: 85623x1
Solver
======
Type:             BiCGStab
Unknowns:         85623
Memory footprint: 4.57 M

Preconditioner
==============
Number of levels:    3
Operator complexity: 1.20
Grid complexity:     1.08
Memory footprint:    58.93 M

level     unknowns       nonzeros      memory
---------------------------------------------
    0        85623        2374949     50.07 M (83.20%)
    1         6361         446833      7.78 M (15.65%)
    2          384          32566      1.08 M ( 1.14%)

Iters: 24
Error: 8.33789e-09

[poisson3Db:     5.071 s] (100.00%)
[  read:         4.541 s] ( 89.57%)
[  setup:        0.095 s] (  1.87%)
[  solve:        0.432 s] (  8.52%)
```


你要把设置参数之类的放在main函数里面。每个case都是个单独的main函数。BOOST和MPI不需要安装也行。安装BOOST之后可以运行时指定参数。
