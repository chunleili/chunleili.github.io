依然是张铭睿同学的SPH_Taichi

# 测试使用json读取场景文件参数

```
import json

def test_json():
    scene_file_path = 'E:\Dev\SPH_Taichi\data\scenes\dragon_bath.json'
    with open(scene_file_path, "r") as f:
        config = json.load(f)

    # get all data
    print('---------get all data----------')
    print(config)

    # get density0
    print('---------get density0----------')
    someKey = 'Configuration'
    someValue = 'density0'
    density0 = config[someKey][someValue]
    print(density0)
    print(type(density0))

    # get gravitation
    print('---------get gravitation----------')
    someKey2 = 'Configuration'
    someValue2 = 'gravitation'
    gravitation = config[someKey2][someValue2]
    print(gravitation)
    print(type(gravitation))

    # # get geometryFile
    print('---------get geometryFile----------')
    rbs = config["RigidBodies"]
    geometryFile=rbs[0]['geometryFile']
    print(geometryFile)
    print(type(geometryFile))


if __name__ == '__main__':
    test_json()
```

要注意的就是最后一个测试中的rbs[0]。这是因为RigidBodies是一个列表。也就是说可能会有多个RigidBodies。因此我们取第一个。

输出
```
---------get all data----------
{'Configuration': {'domainStart': [0.0, 0.0, 0.0], 'domainEnd': [5.0, 3.0, 2.0], 'particleRadius': 0.01, 'numberOfStepsPerRenderUpdate': 1, 'density0': 1000, 'simulationMethod': 4, 'gravitation': [0.0, -9.81, 0.0], 'timeStepSize': 0.0004, 'stiffness': 50000, 'exponent': 7, 'boundaryHandlingMethod': 0, 'exportFrame': False, 'exportPly': False, 'exportObj': False}, 'RigidBodies': [{'objectId': 1, 'geometryFile': './data/models/Dragon_50k.obj', 'translation': [3.5, 0.05, 1.0], 'rotationAxis': [0, 1, 0], 'rotationAngle': 0, 'scale': [1, 1, 1], 
'velocity': [0.0, 0.0, 0.0], 'density': 1000.0, 'color': [255, 255, 255], 'isDynamic': False}], 'FluidBlocks': [{'objectId': 0, 'start': [0.1, 0.1, 0.5], 'end': [1.2, 2.9, 1.6], 'translation': [0.2, 0.0, 0.2], 'scale': [1, 1, 1], 'velocity': [0.0, -1.0, 0.0], 'density': 1000.0, 'color': [50, 100, 200]}]}
---------get density0----------
1000
<class 'int'>
---------get gravitation----------
[0.0, -9.81, 0.0]
<class 'list'>
---------get geometryFile----------
./data/models/Dragon_50k.obj
<class 'str'>
```
