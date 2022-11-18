# 使用ffmpeg快速剪辑视频

## 剪切视频
```
ffmpeg -ss 00:00:00 -t 00:00:30 -i test.mp4 -vcodec copy -acodec copy output.mp4
* -ss 指定从什么时间开始
* -t 指定需要截取多长时间
* -i 指定输入文件
```


## 合并视频

```c
ffmpeg -f concat -i list.txt -c copy concat.mp4
```
list.txt文件中

```c
file 'PBD1.mkv'
file 'PBD2.mkv'
file 'PBD3.mkv'
```

来源：
[https://www.jianshu.com/p/eff314074177](https://www.jianshu.com/p/eff314074177)

[https://www.cnblogs.com/x_wukong/p/12692122.html](https://www.cnblogs.com/x_wukong/p/12692122.html)
