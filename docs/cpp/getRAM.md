# C++获取当前系统内存消耗

来自

https://stackoverflow.com/a/64166

```
#include "windows.h"
#include <iostream>
#include <typeinfo>

#include "psapi.h"

int main()
{
    MEMORYSTATUSEX memInfo;
    memInfo.dwLength = sizeof(MEMORYSTATUSEX);
    GlobalMemoryStatusEx(&memInfo);
    DWORDLONG totalVirtualMem = memInfo.ullTotalPageFile;
    std::cout<<"totalVirtualMem: " <<totalVirtualMem/1e9<<std::endl;


    DWORDLONG virtualMemUsed = memInfo.ullTotalPageFile - memInfo.ullAvailPageFile;
    std::cout<<"virtualMemUsed: " <<virtualMemUsed/1e9<<std::endl;

    std::cout<<typeid(memInfo.ullTotalPageFile).name()<<std::endl;


    DWORDLONG totalPhysMem = memInfo.ullTotalPhys;
    std::cout<<"totalPhysMem: " <<totalPhysMem/1e9<<std::endl;


    DWORDLONG physMemUsed = memInfo.ullTotalPhys - memInfo.ullAvailPhys;
    std::cout<<"physMemUsed: " <<physMemUsed/1e9<<std::endl;



    auto a = new char[1000000000];

    PROCESS_MEMORY_COUNTERS_EX pmc;
    GetProcessMemoryInfo(GetCurrentProcess(), (PROCESS_MEMORY_COUNTERS*)&pmc, sizeof(pmc));
    SIZE_T virtualMemUsedByMe = pmc.PrivateUsage;
    SIZE_T physMemUsedByMe = pmc.WorkingSetSize;


    std::cout<<"virtualMemUsedByMe: " <<virtualMemUsedByMe/1e9<<std::endl;
    std::cout<<"physMemUsedByMe: " <<physMemUsedByMe/1e9<<std::endl;

    return 0;
}
```

输出
```
totalVirtualMem: 12.5064
virtualMemUsed: 6.39812
unsigned __int64
totalPhysMem: 8.47989
physMemUsed: 5.47799
virtualMemUsedByMe: 1.0026
physMemUsedByMe: 1.00385
```


其中可以看出physMemUsedByMe是该程序所消耗的物理内存。由于我们申请了10亿大小的char数组，恰好应该是1G。打印出来的结果也与我们所期望的相符。

totalPhysMem 是计算机的总内存。由于我这个笔记本是8G的，恰好与之相符。physMemUsed则是消耗了的内存。也与我系统的内存占用相符。
