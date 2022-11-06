# .npmrc 文件配置

`.npmrc` 文件用于统一配置项目中 `npm` 安装依赖使用的源。

```
# 项目指定 npm 源
# 官方源：https://registry.npmjs.org/
# 淘宝源：https://registry.npmmirror.com/

registry=https://registry.npmjs.org/
```

:::tip
个人开发时，除对 `.npmrc` 文件进行配置外，也可借助 `nrm` 工具快速切换 `npm` 源。
:::
