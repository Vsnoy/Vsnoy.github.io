# npm 包打补丁

## 安装 patch-package 包

```
npm i patch-package -D
```

## 修改 npm 包

进入 `node_modules` 中找到要改的文件，直接对源码进行修改

## 给要修改的 npm 包生成补丁

```
npx patch-package <package-name>
```

## package.json 中添加 npm script

在 `package.json` 文件中添加脚本命令（`npm install` 结束后都会自动执行该命令，对 `node_modules` 中的包打补丁）

```
"scripts": {
  "postinstall": "patch-package",
}
```

## 参考

- [如何做到修改了 node_module 中的包，却不受重新安装的影响](https://juejin.cn/post/6955736879106883597)
- [手把手教你使用 patch-package 给 npm 包打补丁](https://juejin.cn/post/6962554654643191815)
