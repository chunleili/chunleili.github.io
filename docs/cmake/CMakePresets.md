# 使用CMakePresets指定配置和构建信息
一个范本
```
{
    "version": 6,
    "configurePresets": [
        {
            "name": "vs2022",
            "description": "Default",
            "generator": "Visual Studio 17 2022",
            "architecture": "x64",
            "binaryDir": "build",
            "toolchainFile": "E:/codes/vcpkg/scripts/buildsystems/vcpkg.cmake",
            "cacheVariables": {
                "ZENO_WITH_SPH": true,
                "ZENO_WITH_FastFLIP": false,
                "ZENO_WITH_TOOL_FLIPtools": true,
                "ZENO_WITH_ZenoFX":true,
                "ZENO_WITH_zenvdb":true,
                "ZENOFX_ENABLE_OPENVDB":true,
                "ZENO_WITH_FBX":true
            }
        },
        {
            "name": "vs2019",
            "description": "Default",
            "generator": "Visual Studio 16 2019",
            "inherits": "vs2022"
        }
    ],
    "buildPresets": [
        {
            "name": "vs2022-Rel",
            "description": "VS 2022 Release",
            "configurePreset": "vs2022",
            "configuration": "Release"
        },
        {
            "name": "vs2022-Debug",
            "description": "VS 2022 Debug",
            "configurePreset": "vs2022",
            "configuration": "Debug"
        }
    ]
}
```
