# 在SPlisHSPlaSH中获取鼠标位置
## 获取世界坐标
需求： 我希望当鼠标点击的时候，获取鼠标位置，然后传出一个**三维世界坐标**(x,y,z)。

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

这个变量就是世界坐标！并且，仅当鼠标点击的时候，才会调用selection！



## 题外话：屏幕空间坐标
我们同样可以获得屏幕空间坐标，位于
`GUI\OpenGL\MiniGL.cpp`
```
void MiniGL::mousePress(GLFWwindow* window, int button, int action, int mods)
{
	//TODO: get mouse in screen space
	printf("x:%f\t",mouse_pos_x_old);
	...
}
```
同样是点击才会获取

结果为：
```
x:969.000000    y:293.000000
```


## 在MinGL中获取世界坐标(OpenGL通用)
另一个获取世界坐标的通用方法是使用函数gluUnProject

这个函数的用法可以在`GUI\OpenGL\MiniGL.cpp`的unproject函数找到

打印出来的就是当前鼠标的位置（m_oldMousePos打印的其实是上一次点击的位置）
![image](https://user-images.githubusercontent.com/48758868/198176576-ede534f3-5d4d-44ae-97fb-8207a61e9db4.png)

我们借此可以学习一下gluUnProject的使用方法
```
void MiniGL::unproject(const int x, const int y, Vector3r &pos)
{
	GLint viewport[4];
	GLdouble mv[16], pm[16];
	glGetIntegerv(GL_VIEWPORT, viewport);
	glGetDoublev(GL_MODELVIEW_MATRIX, mv);
	glGetDoublev(GL_PROJECTION_MATRIX, pm);

	GLdouble resx, resy, resz;
	gluUnProject(x, viewport[3] - y, znear, mv, pm, viewport, &resx, &resy, &resz);
	pos[0] = (Real) resx;
	pos[1] = (Real) resy;
	pos[2] = (Real) resz;

	printf("current world pos:(%.4f,\t%.4f,\t%.4f)\n",pos[0],pos[1],pos[2]);
}
```
这个函数的9个参数依次为
屏幕空间x坐标，屏幕空间y坐标，znear，modelview矩阵，projection矩阵，视口，3个世界坐标返回值

(viewport[3] - y 是为因为viewport存储值依次为视口左下角x,视口左下角y, 视口宽度, 视口高度, 而这里要把零点从左下角转换到左上角)

![获取鼠标位置](https://user-images.githubusercontent.com/48758868/198177981-01df083b-3c9d-4adc-bfb7-276600469266.gif)


## 对应视频讲解

https://www.bilibili.com/video/BV11G4y187Qz/
