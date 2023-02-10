# 为taichi程序暂停和reset以便于调试

先定义一个全局变量paused，相当于FLAG

再把主循环包起来
```python
paused = ti.field(int, shape=())

def main():
    initialize()
    while window.running:
        for e in window.get_events(ti.ui.PRESS):
            if e.key == ti.ui.SPACE:
                paused[None] = not paused[None]
            if e.key == 'r': initialize()
        if not paused[None]:
            # do something
```
