# npm 常用命令

:::tip
后面用到就记录下，持续更新。
:::

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
// 查看设置列表
npm config list

// 查看全局安装包
npm list -g --depth 0

// 清理缓存
npm cache clean -f

// 版本号更新
npm version xxx
```
