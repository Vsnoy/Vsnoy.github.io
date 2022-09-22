# npm 安装依赖后缀

| **命令**   | **简写** | **说明**                                                     |
| :--------- | :------- | :----------------------------------------------------------- |
| 无         | 无       | 将模块安装到本地 node_modules 目录下，npm 5.x 不保存在 package.json 中，npm 6.x 之后会保存，相当于 -S。 |
| --save     | -S       | 将模块安装到本地 node_modules 目录下，同时保存到 package.json 中的 dependencies 配置项中，在生产环境下这个包的依赖依然存在。 |
| --save-dev | -D       | 将模块安装到本地 node_modules 目录下，同时保存到 package.json 中的 devDependencies 配置项中，仅供开发时使用。 |
| --global   | -g       | 安装的模块为全局模块，如果命令行模块，会直接链接到环境变量中。 |
