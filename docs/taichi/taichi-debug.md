# 为taichi程序暂停和reset以便于调试

先定义一个全局变量paused，相当于FLAG
```cpp
paused = ti.field(dtype=ti.i32, shape=())
```

再把主循环包起来
```cpp
    while window.running:
        if window.is_pressed('r'):
            # Reset
            initialize_mass_points()
            current_t = 0

        if window.is_pressed(ti.ui.SPACE):
            paused[None] = not paused[None]
        if paused[None] == True:
            for i in range(substeps):
                substep()
                current_t += dt
            update_vertices()
```