# Webpack

## webpack 五大核心概念

- entry 入口
- output 输出
- loader 解析器
- plugin 插件
- mode 模式

## webpack 构建流程

- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。
- 确定入口：根据配置中的 entry 找出所有的入口文件。
- 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
- 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
- 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表。
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

## webpack 与 grunt、gulp 的不同

- grunt、gulp 是基于任务运行的工具：它们会自动执行指定的任务，就像流水线，把资源放上去然后通过不同插件进行加工，它们包含活跃的社区，丰富的插件，能方便的打造各种工作流。
- webpack 是基于模块化打包的工具：webpack 把一切都当做模块，当 webpack 处理程序时，会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有的模块打包成一个或者多个 bundle。

## loader 是什么？有哪些常见的 loader？

webpack 自身只能识别 js 文件，对于非 js 文件，需要借助特定的 loader 解析器处理，并将它们转换为有效模块。

- babel-loader：将 es6 转换成 es5
- ts-loader：将 ts 转换成 js
- style-loader：将 css 注入到 js 中
- css-loader：加载并解析 css
- less-loader：将 less 转换成 css
- 等等

:::tip
loader 解析顺序是从下到上，从右到左。
:::

## plugin 是什么？有哪些常见的 plugin？

plugin 插件赋予了 webpack 各种灵活的功能，目的在于解决 loader 无法实现的其他事。诸如打包优化，文件压缩，文件分离等。

- webpack-merge：提取公共配置，减少重复配置代码
- webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积
- mini-css-extract-plugin: 分离样式文件，将 CSS 提取为独立文件
- 等等

## loader 和 plugin 区别

## bundle、chunk 和 module 区别

- bundle 是由 webpack 打包出来的文件
- chunk 是指 webpack 在进行模块的依赖分析的时候，代码分割出来的代码块
- module 是开发中的单个模块

module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：

- 我们直接写出来的是 module
- webpack 处理时是 chunk
- 最后生成浏览器可以直接运行的是 bundle

## webpack 热更新原理

## webpack 文件指纹

文件指纹是打包后输出的文件名的后缀。

- Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
- Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
- Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

:::tip

- 入口文件和它的依赖的模块构成的一个代码块，被称为一个 chunk
- 一个入口对应一个 chunk，多个入口，就会产生多个 chunk
:::
