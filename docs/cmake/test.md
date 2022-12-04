# 利用ctest+catch2进行测试
首先我们要开启测试：

在根目录CMakeLists.txt 把注释的部分解除注释
```
# 开启测试
enable_testing()
# 进入 tests 文件夹下面的CMakeLists.txt
add_subdirectory(tests)
```




我们采用catch2这个测试框架。你可以从[这里找到catch2源码](https://raw.githubusercontent.com/catchorg/Catch2/v2.x/single_include/catch2/catch.hpp)

由于catch2是个header-only的库（最新版已经不是了），所以你只需要把头文件所有源码全部复制下来，然后新建一个catch.hpp保存即可。保存的文件建议放在tests文件夹下，这样我们写的测试用例直接include catch.hpp即可使用。

新建 `tests\CMakeLists.txt`
```
# 编译测试用例为可执行文件
add_executable(test1
    test.cpp
)

# 把待测试的库连接到测试用例上
target_link_libraries(test1 evolution)

# 告知cmake增加了测试，名为my_test，执行test1这个可执行文件
add_test(
    NAME my_test
    COMMAND test1
)
```

构建和运行测试
```
cmake -B build
cmake --build build --config=Release
cd build
ctest -C Release
```

注意：
1. ctest 是cmake运行测试的一个工具。这个工具会去寻找add_test来查看测试在哪。
2. ctest 也需要编译之后才能用。它其实本质上和其他的目标没什么不同。
3. 需要进入build目录才能使用ctest命令，否则会报错找不到测试用例。
4. 在Windows下需要指定-C命令，同样是因为VS必须指定构建的变体才行。

输出结果
```
Test project E:/learn/cmake/build
    Start 1: my_test
1/1 Test #1: my_test ..........................   Passed    0.02 sec

100% tests passed, 0 tests failed out of 1

Total Test time (real) =   0.03 sec
```

