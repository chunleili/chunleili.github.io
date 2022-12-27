# cmake打印出生成表达式(如当前的配置(Release还是Debug))

生成表达式是在生成的的时候才会执行的，所以假如简单的采用

```
message("Config is $<CONFIG>")
```

这种做法，得到的结果会是

```
Config is $<CONFIG>
```

也就是会原封不动地把字符串打印出来，而没有当做变量。


为了解决这个问题，我们只需要定义一个假的目标就可以了。这个目标的唯一作用就是打印出当前的配置。然后我们编译 这个目标，这样在运行期就能打印出生成表达式了。

```
add_custom_target(print_config ALL
  COMMAND ${CMAKE_COMMAND} -E echo "Config is $<CONFIG>"
  VERBATIM
)
```

结果
```
Config is MinSizeRel
```


完整代码
```
cmake_minimum_required(VERSION 3.23)

project(learn_cmake)

# 使用这种做法无法打印出生成表达式，只会原封不动打印出$<CONFIG>
# message("Config is $<CONFIG>")

# 使用add_custom_target可以打印出生成表达式
add_custom_target(print_config ALL
  COMMAND ${CMAKE_COMMAND} -E echo "Config is $<CONFIG>"
  VERBATIM
)
```

这样的做法是可以推广的。我们可以用这种做法打印出许多生成表达式。
