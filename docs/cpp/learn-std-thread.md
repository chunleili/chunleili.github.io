# std::thread入门

参考
[https://immortalqx.github.io/2021/12/04/cpp-notes-3/](https://immortalqx.github.io/2021/12/04/cpp-notes-3/)

对应代码
[https://github.com/chunleili/learnStdThread](https://github.com/chunleili/learnStdThread)


## 简介
thread是C++11之后的一个并行STL库。由于是STL的一部分，好处是跨平台。与之相比，pthread.h只支持linux，因此建议用std::thread来代替pthread。

thread无非就是一个C++类。所以创建线程就是类的实例化，而结束则会自动调用析构函数。

thread的构造函数具有变长参数。第一个参数需要的是个函数指针/函数对象，第二个和之后的参数就是这个函数的参数。非常简单。

其中有两个成员函数最为重要：join()和detach()。

简单来说join就是主线程等待子线程的完成，而detach就是让子线程放飞自我。


## hello world
下面是个示例程序

```cpp
#include <iostream>
#include <thread>

using namespace std;

void output(int i)
{
	cout << i << endl;
}

int main()
{
	
	for (uint8_t i = 0; i < 4; i++)
	{
		thread t(output, i);
		t.join();	
	}
		
	return 0;
}
```
输出
```
0
1
2
3
```

解释下:
`thread t(output, i);`是创建线程。每次循环都创建一个新的线程。

`t.join();`	然后利用join等待该线程的执行完毕。

在这里执行该线程就是打印一下i。

在这次循环完毕后，由于对象t是在该作用域内实例化的，因此作用域结束时自动析构。

然后再创建一个线程对象，也是t。再执行。然后等待。最后析构。如此往复4次。

## 构造函数
下面我们详解一下构造函数

第一个参数是函数对象，可以用普通函数、成员函数，functor，lambda等。

### 假如用lambda(我个人比较喜欢，简洁干净）


```c
#include <iostream>
#include <thread>

using namespace std;

int main()
{
	
	for (int i = 0; i < 4; i++)
	{
		thread t([i](){
			 cout << i << endl; 
		});
		t.join();	
	}
		
	return 0;
}
```


### 如果用functor（函数对象，也就是重载了operator()的类）

这种方式要注意：不能使用`thread t(Task(), i);`。尽管这个有可能不出BUG，但是也有可能会出BUG。因为编译器会认为你在进行函数声明。如果你非想要创建一个匿名变量，那么请用`{}`

```c
#include <iostream>
#include <thread>

using namespace std;

class Task
{
public:
	void operator()(int i)
	{
		cout << i << endl;
	}
};


int main()
{
	for (int i = 0; i < 4; i++)
	{
		Task task;
		thread t(task, i);
		//do not use this, because it may be viewed as a function declaration
		//thread t(Task(), i);
		//If you want to use this, you should use initializer_list
		//thread t{(Task()), i};
		t.join();	
	}
		
	return 0;
}
```




### 如果用成员函数方式

这类方式最麻烦，因为第二个参数还需要传入所对应的对象的指针。

```cpp
#include <iostream>
#include <thread>

using namespace std;

class Task
{
public:
	void do_work(int i)
	{
		cout << i << endl;
	}
};


int main()
{
	cout<<"member func"<<endl;
	for (int i = 0; i < 4; i++)
	{
		Task task;
		thread t(&Task::do_work, &task, i);
		t.join();	
	}
		
	return 0;
}
```

## detach
上面说的都是join的例子。因为join会阻塞主线程，等待子线程的执行完毕，所以不会出现乱序的BUG。但是如果detach，那么子线程就是放飞自我，主线程也不会等待子线程，导致谁也不知道哪个子线程先执行完毕。


### 一个有BUG的程序

```c
#include <iostream>
#include <thread>

using namespace std;

void output(int i)
{
	cout << i << endl;
}

int main()
{
	cout<<"detach thread\n";
	for (uint8_t i = 0; i < 4; i++)
	{
		thread t(output, i);
		t.detach();	
	}
	
	getchar();

	return 0;
}
```
输出
```
detach thread
02
3
1
```

这显然是个有BUG的程序。因为子线程放飞自我之后，你根本无法预测哪个先结束。你甚至不能保证主线程main函数最后return 0。因为有可能主线程结束了，子线程还在运行着呢。

信不信由你：如果你不加上`getchar();` 你甚至可能什么都打印不出来。因为主线程先结束了，子线程还没结束呢。

### 另一个有BUG的程序
detach另外一个错误是容易导致悬空指针。

```c
#include <iostream>
#include <thread>

using namespace std;

int main()
{

	auto fn = [](const int *a)
	{
		for (int i = 0; i < 10; i++)
		{
			cout << *a << endl;
		}
	};

	cout << "detach thread another bug\n";
	[fn]
	{
		int a = 1010;
		thread t(fn, &a);
		t.detach();
	}();
}
```
在这个例子中，a的地址被传给子线程的fn函数。但是由于是detach，主线程不需要等待子线程。这就导致很可能主线程已经执行完毕，并且销毁了a变量，导致这个指针是个悬空的指针。

正确的改进方式是把传递指针改成传值。

因此在多线程的程序中，通常都采用传值而非传址。



## 即使是传递引用也会变成拷贝传值

为了防止上述错误，有时即使是传递引用，也会变成拷贝。（VS是如此，apple-clang则直接报错）

例如
```c
#include <iostream>
#include <thread>

using namespace std;

class Node
{
public:
	int a = 1;
	int b = 2;
};

void func(Node &node)//will become copy even if we pass by reference
{
	node.a = 10;
	node.b = 20;
}

int main()
{
	Node node;

	thread t(func, node);
	t.join();

	cout << node.a << endl ;
	cout << node.b << endl ;
}
```
output
```
1
2
```

在上面的例子中，即使我们指定了传递引用，也会变成拷贝。所以func根本没改变node原有的值。所以最后打印出来还是1 2。

apple-clang则直接会报错：`error: attempt to use a deleted function`

将引用改为传值则会修正BUG.


## 获取线程的id
有两种方式获取id

1. 从子线程内获取 `this_thread::get_id()`
2. 从外部主线程获取 `t.get_id()`

```
#include <iostream>
#include <thread>

using namespace std;

void func()
{
	cout << "In func thread id:"<<this_thread::get_id() << endl;
}

int main()
{
	for (size_t i = 0; i < 4; i++)
	{
		thread t(func);

		cout << "In main thread id:"<<t.get_id() << endl;

		t.join();

		cout<<"-----------------"<<endl;
	}
}
```
输出
```
In main thread id:27424
In func thread id:27424
-----------------
In main thread id:20068
In func thread id:20068
-----------------
In main thread id:19404
In func thread id:19404
-----------------
In main thread id:21680
In func thread id:21680
-----------------
```

在apple-clang中则传递的是一个16进制数字。

## TODO
mutex
condition_variable
