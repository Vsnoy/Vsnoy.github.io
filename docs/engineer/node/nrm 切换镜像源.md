# nrm 切换镜像源

## 安装

```
npm install -g nrm
```

## 查看源

```
nrm ls
```

结果如下：

```
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```

## 切换源

```
nrm use xxx
```

## 添加源

```
nrm add <registry> <url>
```

## 删除源

```
nrm delete <registry>
```

:::tip
也可以不依赖 `nrm` 切换镜像源。

```
// 查看当前镜像源
npm config get registry

// 设置当前镜像源
npm set registry <url>
```

:::

## 参考

- [nrm 管理 npm 源](https://347830076.github.io/myBlog/npm/nrm.html)
