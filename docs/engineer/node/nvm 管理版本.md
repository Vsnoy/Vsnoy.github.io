# nvm 管理版本

## 安装

下载地址：https://github.com/coreybutler/nvm-windows/releases

选择 `nvm-setup.exe` 下载安装

## 查看版本

```
// 查看 nvm 版本
nvm v

// 查看当前 node 版本
nvm current

// 查看已安装的 node 版本
nvm ls

// 查看可下载的 node 版本列表
nvm ls available
```

## 安装版本

```
nvm install <version>
```

## 删除版本

```
nvm uninstall <version>
```

## 切换版本

```
nvm use <version>
```

## 设置代理

```
// 查看代理
nvm proxy

// 设置代理
nvm proxy http://127.0.0.1:7890

// 删除代理
nvm proxy none
```

## 参考

- [nvm 管理 node 版本](https://347830076.github.io/myBlog/tool/nvm.html)