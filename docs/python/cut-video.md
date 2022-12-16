# 利用python自己写个小脚本来剪辑视频！

请看

https://www.bilibili.com/video/BV1xG4y137WJ/

源码：
https://github.com/chunleili/cut_video

或者你可以用
```
pip install cut_video
```
来下载。默认会安装命令行工具cut_video。把名为full.mp4的文件和to_erase.json文件放在当前文件夹下运行cut_video即可!

例如
```json
[   ["0:22", "1:14"],
    ["1:25", "1:30"],
    ["2:13", "2:25"]
]
```
