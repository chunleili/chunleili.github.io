# 在SPlisHSPlaSH中获取鼠标位置

需求： 我希望当鼠标点击的时候，获取鼠标位置，然后传出一个三维坐标(x,y,z)。

我们只需要找到相应的变量即可。splishsplash的默认gui是imgui。它的实现位于`Simulator\GUI\imgui\Simulator_GUI_imgui.cpp`。它实现的类就叫做Simulator_GUI_imgui

这里被外界调用的入口是void Simulator_GUI_imgui::run()。当然这个我们无需关系，我们只要找到那个世界坐标的物理量即可。

观察这个类，发现有一个变量名为：`Vector3r m_oldMousePos;`

非常符合我们的要求！

我们只需在某个必定被调用的回调函数中打印一下，就知道对不对了！

首先搜索`m_oldMousePos`，发现它在两个函数中有被调用，一个是selection，一个是mouseMove。

在mouseMove中打印，发现它未必被调用。后发现selection必定被调用。而且selection中是调用moveMove的。
```
	if (selected)
		MiniGL::setMouseMoveFunc(2, mouseMove);
	else
		MiniGL::setMouseMoveFunc(-1, NULL);
```
那么显然就在selection中！

我们在该函数中倒数第二行打印
![image](https://user-images.githubusercontent.com/48758868/198032983-c2fd6510-43d3-445c-b0f4-9a269dfa92ab.png)
```
	printf("gui->m_oldMousePos: (%f\t,%f\t,%f)\n", gui->m_oldMousePos[0],gui->m_oldMousePos[1],gui->m_oldMousePos[2]);

	MiniGL::unproject(end[0], end[1], gui->m_oldMousePos);
```


发现得到了预期的结果！
```
gui->m_oldMousePos: (0.015165   ,2.968639       ,7.893096)
```

因此总结：
在`Simulator\GUI\imgui\Simulator_GUI_imgui.cpp`获取gui->m_oldMousePos这个变量，这个变量必定会被selection函数所调用。

这个变量就是世界坐标！
