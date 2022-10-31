# 避免 package-lock 冲突

团队协作开发的过程中，`package-lock.json` 文件至关重要，它保存了项目中依赖的确切版本，确保了团队开发环境的统一。
实际协作过程中，经常会遇到 `pacakge-lock.json` 文件冲突，该怎么做呢？

## 确保包管理器统一

`package.json` 文件中新增配置：

```
"scripts": {
  "preinstall": "npx only-allow npm"
}
```

## 确保 node/npm 版本统一

`package.json` 文件和 `.npmrc` 文件中添加配置，强制限制 `node` 和 `npm` 版本。

`package.json` 文件新增配置：

```
"engines": {
  "node": "16.13.0", 
  "npm": "8.1.0"
}
```

`.npmrc` 新增配置：

```
engine-strict = true
```

## 确保 npm 源统一

`.npmrc` 文件中新增配置：

```
registry = "https://registry.npmjs.org/"
```

## 参考

- [如何限制项目使用指定的 node 版本](https://juejin.cn/post/7132083546117636103)
