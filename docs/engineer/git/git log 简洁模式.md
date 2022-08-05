# git log 简洁模式

使用别名自定义 `git logp` 指令，简化 `log` 输出日志

```
git config --global alias.logp 'log --pretty=format:%cd:%cn:%h:%s'
```

```
git config --list|grep alias
alias.st=status
alias.ck=checkout
alias.br=branch
alias.cf=config
alias.fc=fetch
alias.brv=branch --v
alias.geturl=config --get remote.origin.url
alias.logp=log --pretty=format:%cd:%cn:%h:%s
```

```
git logp
Thu Sep 24 20:14:23 2020 +0800:author111:fa25b2abe:aaaaa
Thu Sep 24 18:01:15 2020 +0800:author2222:57340e88a:bbbbbb
Thu Sep 24 17:58:13 2020 +0800:author111:362e52925:ccccccccccc 
```

## 参考

- [Git 基础操作：git log 简洁模式](https://blog.csdn.net/hl_java/article/details/108782904)
