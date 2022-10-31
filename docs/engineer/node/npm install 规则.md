# npm install 规则

## 5.0.x 版本

不管 `package.json` 中依赖是否有更新，`npm install` 都会根据 `package-lock.json` 下载。针对这种安装策略，有人提了个 `issue`，然后就演变成了 `5.1.0` 版本后的规则。

## 5.1.0 版本后

当 `package.json` 中的依赖项有新版本时，`npm install` 会无视 `package-lock.json` 去下载新版本的依赖项并且更新 `package-lock.json`。针对这种安装策略，又有人提了个 `issue`，得出 `5.4.2` 版本后的规则。

## 5.4.2 版本后

如果只有一个 `package.json` 文件，运行 `npm install` 会根据它生成一个 `package-lock.json` 文件，这个文件相当于本次 install 的一个快照，它不仅记录了 `package.json` 指明的直接依赖的版本，也记录了间接依赖的版本。

如果 `package.json` 的语义化版本 和 `package-lock.json` 中版本兼容 (`package-lock.json` 版本在 `package.json` 指定的版本范围内），即使此时 `package.json` 中有新的版本，执行 `npm install` 也还是会根据 `package-lock.json` 下载。

如果手动修改了 `package.json` 的版本，且和 `package-lock.json` 中版本不兼容，那么执行 `npm install` 时 `package-lock.json` 将会更新到兼容 `package.json` 的版本。

## 参考

- [很多人上来就删除的 package-lock.json，还有这么多你不知道的](https://mp.weixin.qq.com/s/9H7T-m0TEwg-WjwAW4cqJA)
