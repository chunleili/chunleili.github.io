# git恢复单个文件

来源：https://blog.51cto.com/u_15715491/5464688

假设文件名为xxx.cpp
 
1. git log xxx.cpp

查看文件历史，找到要恢复的版本
记录下哈希码

2. git reset 哈希码 xxx.cpp

这步就是**回退**，此时会产生工作区和暂存区。工作区仍然是你现在的代码。暂存区则存的是恢复之后的代码。


3. git checkout -- xxx.cpp
这步是为了清除工作区。此时工作区也变成了恢复之后的代码。

4. git commit -m “将指定文件回退到指定版本”
