# GGUI输出图片序列以生成视频

只需要调用window.save_image这个API

```
        filename = f'./results/frame_{frame:05d}.png'
        window.save_image(filename)
        window.show()
```
