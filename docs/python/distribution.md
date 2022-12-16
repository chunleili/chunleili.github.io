# python：如何把你的python包发布出去（pip install）
## 介绍
实际上分为两步
1. 打包
2. 发布

我们要发布的网站是https://pypi.org/。也就是用户通过pip install XXX，就可以安装你的包。

## 1 通过setuptools打包
需要我们编写setup.py

```
from setuptools import setup, find_packages
import os

VERSION = '0.0.5'
DESCRIPTION = 'Easily cut the video by moviepy'

setup(
    name="cut_video",
    version=VERSION,
    author="chunlei li",
    author_email="li_cl@foxmail.com",
    description=DESCRIPTION,
    long_description_content_type="text/markdown",
    long_description=open('README.md',encoding="UTF8").read(),
    packages=find_packages(),
    install_requires=['moviepy'],
    keywords=['python', 'moviepy', 'cut video'],
    data_files=[('cut_video', ['cut_video/clip_to_erase.json'])],
    entry_points={
    'console_scripts': [
        'cut_video = cut_video.main:main'
    ]
    },
    license="MIT",
    url="https://github.com/chunleili/cut_video",
    scripts=['cut_video/cut_video.py'],
    classifiers= [
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: Microsoft :: Windows"
    ]
)
```
其中含义请见
![在这里插入图片描述](https://img-blog.csdnimg.cn/663bb4f3f861408f8b68e6cd4829d65a.png)

然后运行

```
python setup.py bdist_wheel sdist
```
意思是调用setuptools的setup这个函数。其中bdist表示二进制的可执行文件格式，wheel是python很常见的打包后的二进制格式（包括pyd即python动态库和元数据）。其中sdist代表源码，打包后为.tar.gz格式。

- sdist: source distribution
- bdist: binary distribution


打包后会多出许多东西

例如
```
*.egg-info
build
dist
```
等等

几乎都不用管。**只需要在意dist目录下面的两个东西即可**。那就是我们即将发布的东西。一个是源码，一个是二进制文件。

![在这里插入图片描述](https://img-blog.csdnimg.cn/37c4ffeed42343f9b1c543fdc8ef24b3.png)

## 2 发布
需要先去 https://pypi.org/  注册一个账号。


如果没有安装twine，需要先安装一下

```
pip install twine
```

最后上传dist目录下面的源码和二进制文件即可

```
twine upload dist/*
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/937d9816f974452fab8c3daa5469cb27.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/584394d42e6845d390bb4b994f9dcb76.png)

## 参考资料
https://zhuanlan.zhihu.com/p/276461821

https://packaging.python.org/en/latest/tutorials/packaging-projects/

https://youtu.be/tEFkHEKypLI
