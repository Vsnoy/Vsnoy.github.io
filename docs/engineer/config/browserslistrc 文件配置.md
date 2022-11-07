# .browserslistrc 文件配置

`.browserslistrc` 文件用于为各前端工具共同配置需要兼容的浏览器。例如：

- 搭配 `babel` 转义 `JS` 代码，将老浏览器不支持的新语法转义为可运行代码
- 搭配 `Autoprefixer` 编译 `CSS` 代码，自动添加浏览器前缀

```
[production]
>0.2%
not dead
not op_mini all

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version
```

:::tip
除在 `.browserslist` 文件中配置外，也可在 `package.json` 文件 `browserslist` 选项中配置。
:::

[Browser list 详解](https://eick.gitbook.io/notes/javascript/browser-list-xiang-jie)
