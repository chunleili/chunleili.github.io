# 使用ffmpeg 将 图片序列转视频或者GIF


## 图片序列转换为视频

```bash
ffmpeg -f image2 -i ./tmp/%04d.png movie.mp4
```

## 视频转换为GIF

```bash
ffmpeg -i test.mp4 test.gif
```

## 图片序列转换为GIF

```bash
ffmpeg -f image2 -r 25 -i ./temp/%04d.png ./images/demo.gif
```

-r 调整帧率
-i表示输入文件
-y表示覆盖原有文件
-f 表示format

如果文件尺寸太大，可以考虑增加scale参数，先要用-vf（visual filter)来设置滤波器
```cpp
ffmpeg -i ./temp/%04d.png -vf fps=20,scale=480:-1 demo.gif
```




还可以采用H264编码格式，这会使体积小很多（参考： [https://avpres.net/FFmpeg/sq_H264](https://avpres.net/FFmpeg/sq_H264)）

```
ffmpeg -f image2  -start_number 50  -i  .\render.%04d.jpg -c:v libx264  -preset veryslow  -crf 18 -pix_fmt yuv420p movie.mp4
```


## 视频转换为图片序列

```python
ffmpeg -i test.mp4 -r 30-f image2 test_%d.jpeg
```

## 查看图片/视频帧率分辨率等信息

```cpp
ffprobe .\images\demo.gif
```
输出
![在这里插入图片描述](https://img-blog.csdnimg.cn/1187ba0f207845f8833b2fe8259be7f6.png)
分别是文件名，时长，分辨率和帧率


## 使用shutter encoder转换图片序列为视频
shutter encoder是一个开源的以ffmpeg为基础的软件。

使用比较简单


首先把图片序列拖拽到窗口

![在这里插入图片描述](https://img-blog.csdnimg.cn/9ffa67770b954198ad63a1f1d1a190f7.png)

然后选择编码格式为H264，输出格式为mp4

勾选图像序列

![在这里插入图片描述](https://img-blog.csdnimg.cn/a3a55699dd86467182b30fce809633ce.png)


最后点击启动功能即可

![在这里插入图片描述](https://img-blog.csdnimg.cn/dd79f5cf73b342c0bcd8e2c55efab949.png)
