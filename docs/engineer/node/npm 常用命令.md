# npm 常用命令

:::tip
后面用到就记录下，持续更新。
:::

## 查看

```
// 查看指定包的仓库
npm repo <package>

// 查看设置列表
npm config list

// 查看全局安装包
npm list -g --depth 0

// 查看某个依赖的最新版本
npm view <package> version

// 查看依赖是否过时
npm outdated
```

## 换源

```
// 查看当前源
npm config get registry

// 设置当前源
npm config set registry <url>
```

## 代理

```
// 设置代理
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

// 删除代理
npm config delete proxy
npm config delete https-proxy
```

## 其他

```
// 更新版本号
npm version xxx

// 清理缓存
npm cache clean -f

// 删除 node_modules
rm -rf node_modules

// 删除 node_modules，清理缓存，重新安装
rm -rf node_modules && npm cache clean -f && npm install
```
