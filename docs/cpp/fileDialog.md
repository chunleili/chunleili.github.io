# Windows平台的文件对话框选择器(fileDialog)

代码

https://github.com/chunleili/fileDialog


## 用法

一个Windows平台上的file dialog（文件选择器）

使用Windos API commdlg.h 中的 OPENFILENAME


代码借鉴自 ： 
https://github.com/InteractiveComputerGraphics/SPlisHSPlasH

用法
```
	std::string path = fileDialog(0, ".", "All Files (*.*)\0*.*\0");
	std::cout <<"Open file: "<< path << std::endl;
```

返回的path就是选择的文件名


![image](https://user-images.githubusercontent.com/48758868/212315837-c33242f7-a320-4f48-96f3-99bfac37b069.png)
