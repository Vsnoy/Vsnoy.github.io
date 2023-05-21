---
sidebarDepth: 0
---

# git log 简洁模式

使用别名自定义 `git logp` 指令，简化 `log` 输出日志

```
git config --global alias.logp "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
```

```
git config --list|grep alias

// alias.logp=log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
```

```
git logp

// * 7dcf359 2023-05-16 | update [Vsnoy]
// * 7ac2b61 2023-05-14 | update [Vsnoy]
// * 3302973 2023-05-10 | update [Vsnoy]

git logp --max-count=1
// * 7dcf359 2023-05-16 | update [Vsnoy]
```

## 参考

- [Git 基础操作：git log 简洁模式](https://blog.csdn.net/hl_java/article/details/108782904)
