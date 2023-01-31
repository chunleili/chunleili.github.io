# Windows 安装和设置conda
1. 下载miniconda3

2. 加入系统环境变量
包括

```
C:\App\Miniconda3\Scripts
C:\App\Miniconda3\bin
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/c213129386524a80970c6baca22f0cbc.png)


4. 以管理员运行powershell
```
conda init powershell
```

5. 改变powershell执行策略

先看看当前的执行策略
```
get-ExecutionPolicy
```

然后改变

```
set-ExecutionPolicy RemoteSigned
```
5. 重启powershell

