# 用Eigen求解BiCGStab

对应的github repo

https://github.com/chunleili/learn-eigen

主要代码

main.cpp
```
#include <Eigen/Sparse>
#include <unsupported/Eigen/SparseExtra>
#include <iostream>
using namespace Eigen;


int main()
{
    VectorXd x, b;
    SparseMatrix<double> A;

    /* ... fill A and b ... */
    Eigen::loadMarket(A, "e05r0500.mtx");
    Eigen::loadMarketVector(b, "e05r0500_rhs1.mtx");

    std::cout<<"A: "<<A.rows()<<" "<<A.cols() <<std::endl;
    std::cout<<"b: "<<b.rows()<<" "<<b.cols() <<std::endl;

    BiCGSTAB<SparseMatrix<double>, IncompleteLUT<double>> solver;
    solver.compute(A);
    x = solver.solve(b);
    std::cout << "#iterations:     " << solver.iterations() << std::endl;
    std::cout << "estimated error: " << solver.error() << std::endl;
    std::cout<< "solver info: "<< solver.info() <<std::endl;
    std::cout<< "Eigen::Success "<< Eigen::Success<<std::endl;
    
}
```

- loadMarket用来读取market matrix格式的矩阵数据
- BiCGSTAB<SparseMatrix<double>, IncompleteLUT<double>> solver;定义了一个求解器。第一
    个模板参数是矩阵的类型，第二个是Precondistioner。Preconditioner很重要，定义得好可以使收敛速度快几万倍。
- solver.compute()和 x=solver.solve(b)就是实际计算的步骤了
- 最后对比Eigen::Success和solver.info()来比较是否求解成功
  
  
  
  
  
  
  
  
