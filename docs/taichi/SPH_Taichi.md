# 【taichi】关于SPH_Taichi的探索与尝试
这是太极实习生张铭睿同学做的SPH太极库。请看

https://www.bilibili.com/video/BV1mg411y7i9?p=10&vd_source=e15eb8f98a9dde1c9cc874314025b575

是作者的讲解。

我们来探索一下这个库。

这只是个笔记，写得会比较细碎。

## 安装问题
除了requirements里面的安装，还要安装一些库。其中pyglet如果安装不正确版本会报错。
```
pyglet==1.5.27
```

## 体素化采样
SPH_Taichi采用trimesh体素化采样粒子。每个体素中间放一个粒子

把这段代码随便拷到一个文件，运行一下（要记得更改模型文件路径哦）

```python
import taichi as ti   
import trimesh as tm  # load the triangle mesh
import numpy as np


def main():
    ti.init(arch=ti.cuda)

    mesh = tm.load("E:/Dev/SPH_Taichi/data/models/Dragon_50k.obj")

    voxelized_mesh = mesh.voxelized(pitch=0.02).fill()
    voxelized_points_np = voxelized_mesh.points 
    num_particles_obj = voxelized_points_np.shape[0]
    voxelized_points = ti.Vector.field(3, ti.f32, num_particles_obj)
    voxelized_points.from_numpy(voxelized_points_np)
#     np.savetxt("voxelized_points_np.csv",voxelized_points_np)

    window = ti.ui.Window("Test voxelize", (768, 768))
    canvas = window.get_canvas()
    scene = ti.ui.Scene()
    camera = ti.ui.make_camera()
    camera.position(5, 2, 2)
    while window.running:
        camera.track_user_inputs(window, movement_speed=0.005, hold_key=ti.ui.LMB)
        scene.set_camera(camera)
        scene.ambient_light((1, 1, 1))
        scene.point_light(pos=(0.5, 1.5, 1.5), color=(1, 1, 1))

        scene.particles(voxelized_points, color = (0.68, 0.26, 0.19), radius = 0.01)
        canvas.scene(scene)
        window.show()

if __name__ == "__main__":
    main()
```

展示结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/216b4295c018463a927a4b2f1efda6c8.png)
