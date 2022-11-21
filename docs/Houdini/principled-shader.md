# Houdini Principled shader几个最重要的参数讲解

Principled shader 是迪士尼推出的原理化着色器。因为它大而全，所以几乎把世界上所有的材质都涵盖在内了。所有的DCC软件都支持这个shader。blender之中叫原理化BSDF。Houdini则叫Principled Shader，标志就是迪士尼的LOGO。

![在这里插入图片描述](https://img-blog.csdnimg.cn/862cd649fe4243a3bfa93ebbcd124c5c.png)

principled shader有一大堆的参数，我们一开始不必一一知晓。只需要弄明白几个最重要的参数即可。

1. base color是乘法关系。如果你的geo本来有颜色，shader的颜色会乘上去。如果你不希望这样，使用纯白色的shader
2. 要表现透明材质（如水和玻璃等）时，不要用opacity。而是要用transparency。opacity只是让你的shader无效化（变淡）。
3. 如果不是渲染金属材质，不要动metallic。metallic要么0，要么1。调到一半会导致一半是金属，一半是其他材质的奇怪景象。
4. 最常用的参数是调整roughness。这会让你的模型变得更加明亮。
5. 使用texture来赋予纹理等。注意base color也会乘上去。
6. emission用来调发光物体。



![在这里插入图片描述](https://img-blog.csdnimg.cn/9bd98481671b4e08bfdc8e47cb0f57bf.png)
