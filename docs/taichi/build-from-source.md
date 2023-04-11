windows-10
pre-requist: vulkan(GGUI后端需要)

```
function taichi-env{
    Set-Location d:/Codes/taichi
    conda activate ti-build
    $env:TAICHI_CMAKE_ARGS="-DTI_WITH_OPENGL:BOOL=ON
            -DTI_WITH_VULKAN:BOOL=ON
            -DTI_WITH_DX11:BOOL=ON
            -DTI_WITH_DX12:BOOL=ON
            -DTI_WITH_CC:BOOL=OFF
            -DTI_BUILD_TESTS:BOOL=ON
            -DTI_WITH_BACKTRACE=ON
            -DTI_WITH_C_API=ON"
    $env:PY="3.10"
    python .github/workflows/scripts/build.py --write-env=ti-env.ps1
    .  .\ti-env.ps1
    python setup.py develop
}
```

其中`python .github/workflows/scripts/build.py --write-env=ti-env.ps1`会自动生成ti-env.ps1脚本。该脚本中设置好了所有需要的taichi环境。并且会自动创建一个python虚拟环境。

`python setup.py develop`是使用setuptools安装taichi

在后续更改中，假如只更改了python源码，不需要重新编译（因为有虚拟环境）。
