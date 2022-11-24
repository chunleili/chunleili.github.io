# argparse读取命令行参数

```python
# 测试使用 argparse 读取命令行参数

import argparse

def test_argparse():
    parse = argparse.ArgumentParser(description='test argparse')
    parse.add_argument('--par', default='blabla', help='some-help')
    args = parse.parse_args()
    print('the arguments:')
    print(args)
    print(args.par)

    parse.add_argument('--ILove', default='you', help='some-help')
    arg2 = parse.parse_args()
    print('the arguments:')
    print(arg2.ILove)
    

if __name__ == '__main__':
    test_argparse()
```



运行
```
PS E:\Dev\SPH_Taichi> python .\tests\test_argparse.py --par something --ILove him
the arguments:
something
him
```
