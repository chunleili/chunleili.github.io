# 使用ctest配置googletest
## 介绍
以下讨论均为C++

我们首先要理解什么是测试。测试就是把程序的某个函数单独拿出来，然后为它单独写一个main函数。运行这个main函数，看看打印结果是不是预期的，那就是测试了。

**googletest是什么：**

由于测试是软件开发通用流程的一部分，因此当然可以用第三方工具来规范化测试流程。其中GoogleTest就是谷歌家推出的测试框架。它为你定义了一些方便的宏，还提供了好看的测试输出（比如测试失败的时候到底哪里错了？正确值是多少？）。我们要记住，它只是个方便的工具，你完全你可自己手写一个简陋的测试框架，只要写自己的main函数即可。

**ctest是什么：**

ctest是cmake中的一个类似于脚本化测试的工具。当你要管理项目的时候，一般会用到cmake。ctest是用来调用和定义测试的。你的测试可以是一个程序，一个脚本（python powershell bash等）。ctest不清楚你的测试程序是啥，它只知道去调用一个可执行的文件即可。

**两者区别？**
这就跟汽车外壳和汽车引擎的区别一样。ctest是那个外壳。gtest是那个引擎。ctest只知道去执行某个可执行文件，它不管你那个里面是什么，你可以就打印个hello world也没关系。而gtest是用来生成测试的可执行文件的。因为我们手写测试程序可能千奇百怪，不符合规范，因此可以借助googletest来写一个规范的测试。

ctest还可以搭配任何其他测试框架使用，比如catch2, boost.test等等。只不过gtest是最流行的。

虽说是ctest。但它不过是cmake语法的一部分而已。

参考博文：
[https://matgomes.com/integrate-google-test-into-cmake/](https://matgomes.com/integrate-google-test-into-cmake/)


## 实践
### 目录结构
```
├── CMakeLists.txt
├── scripts
│   ├── build.sh
│   └── clean-build.sh
├── src
│   ├── CMakeLists.txt
│   └── multiply
│       ├── CMakeLists.txt
│       ├── include
│       │   └── multiply
│       │       └── multiply.h
│       └── multiply.cpp
└── tests
    ├── CMakeLists.txt
    └── multiply_test.cpp
```
test目录是单独存放测试的地方。你可以认为测试程序（也是个可执行文件目标）与项目本身的程序是互无瓜葛的，井水不犯河水。

src存放的就是项目本身的源码。
下面就是一个multiply。代表multiply这个目标。

头文件单独放在include当中。
并且include的目录结构与源码目录结构一致。

### 根目录CMakeLists.txt
```
cmake_minimum_required(VERSION 3.16)
project(MultiplyTest LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

enable_testing()

add_subdirectory(src)
add_subdirectory(tests)
```
其中注意enable_testing()代表开启ctest, 要尽量把它往前放。

### src

`src/CMakeLists.txt`
```
add_subdirectory(multiply)
```

`src\multiply\CMakeLists.txt`
```
add_library(multiply multiply.cpp)

target_include_directories(multiply PUBLIC include)
```

`src\multiply\multiply.cpp`
```cpp
#include <multiply/multiply.h>

int multiply(int a, int b)
{
    return a*b;
}

float multiply(float a, float b)
{
    return a*b;
}

double multiply(double a, double b)
{
    return a*b;
}
```

`src\multiply\include\multiply\multiply.h`
```cpp
int multiply(int a, int b);

float multiply(float a, float b);

double multiply(double a, double b);
```

### tests
#### 测试文件: gtest
如上文所说，gtest不过就是规范一下测试的写法并增加了一些宏。我们写测试不过就是写main函数而已。

其中最重要的两个宏：
- TEST(testName, subName)
- ASSERT_EQ(expected, actual)

`tests\multiply_test.cpp`
```cpp
#include <multiply/multiply.h>
#include <gtest/gtest.h>

TEST(MultiplyTests, TestIntegerOne_One)
{
    const auto expected = 1;
    const auto actual = multiply(1, 1);
    ASSERT_EQ(expected, actual);
}

TEST(MultiplyTests, TestIntegerZero_Zero)
{
    const auto expected = 0;
    const auto actual = multiply(0, 0);
    ASSERT_EQ(expected, actual);
}

TEST(MultiplyTests, TestIntegerZero_One)
{
    const auto expected = 0;
    const auto actual = multiply(0, 1);
    ASSERT_EQ(actual, expected);
}

int main(int argc, char** argv)
{
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
```




#### 使用ctest并引入gtest的CMakeLists.txt
首先，我们要先安装gtest。你可以用vcpkg之类的安装，也可使用cmake自带的语法FetchContent。gtest也需要编译。

其次，要编译并连接测试程序。multiply_test 是我们写的测试程序，也就是单独定义的一个main函数。我们要把被测的函数编译成的静态库multiply链接到multiply_test 上，同时也把gtest链接到multiply_test 上。


`tests\CMakeLists.txt`
```
include(FetchContent)

# 将Googletest下载到本地的build当中，作为本地项目的一部分。所有googletest的目标都将可见。
FetchContent_Declare(
    googletest
    GIT_REPOSITORY https://github.com/google/googletest.git
    GIT_TAG release-1.11.0
)

FetchContent_MakeAvailable(googletest)

# 将下载下来的googletest编译成库 使用IMPORTED关键字
add_library(GTest::GTest INTERFACE IMPORTED)
# 链接gtest
target_link_libraries(GTest::GTest INTERFACE gtest_main)


# 将我们写的tests编译成可执行文件
add_executable(multiply_test multiply_test.cpp)

# 把GTest和被测函数都链接到 可执行文件 上
target_link_libraries(multiply_test
 PRIVATE
  GTest::GTest
  multiply)

# 增加测试
add_test(multiply_gtests multiply_test)
```

### 构建运行ctest
像构建运行正常程序那样构建运行你的测试程序。

（我的环境是win10 + VS2022）
```
 cmake -B build
 cmake --build build --config=Release
```

然后运行ctest（注意: 必须先进入build文件夹才行！）
```
ctest
```
或者你可以加上`--verbose`，这样打印的信息更全面。

输出：
```powershell
PS E:\Dev\zenoPBD\build> ctest --verbose
UpdateCTestConfiguration  from :E:/Dev/zenoPBD/build/DartConfiguration.tcl
UpdateCTestConfiguration  from :E:/Dev/zenoPBD/build/DartConfiguration.tcl
Test project E:/Dev/zenoPBD/build
Constructing a list of tests
Done constructing a list of tests
Updating test list for fixtures
Added 0 tests to meet fixture requirements
Checking test dependency graph...
Checking test dependency graph end
test 1
    Start 1: multiply_gtests

1: Test command: E:\Dev\zenoPBD\build\tests\Release\multiply_test.exe
1: Test timeout computed to be: 10000000
1: [==========] Running 3 tests from 1 test suite.
1: [----------] Global test environment set-up.
1: [----------] 3 tests from MultiplyTests
1: [ RUN      ] MultiplyTests.TestIntegerOne_One
1: [       OK ] MultiplyTests.TestIntegerOne_One (0 ms)
1: [ RUN      ] MultiplyTests.TestIntegerZero_Zero
1: [       OK ] MultiplyTests.TestIntegerZero_Zero (0 ms)
1: [ RUN      ] MultiplyTests.TestIntegerZero_One
1: [       OK ] MultiplyTests.TestIntegerZero_One (0 ms)
1: [----------] 3 tests from MultiplyTests (0 ms total)
1:
1: [----------] Global test environment tear-down
1: [==========] 3 tests from 1 test suite ran. (0 ms total)
1: [  PASSED  ] 3 tests.
1/1 Test #1: multiply_gtests ..................   Passed    0.04 sec

100% tests passed, 0 tests failed out of 1

Total Test time (real) =   0.05 sec
```
