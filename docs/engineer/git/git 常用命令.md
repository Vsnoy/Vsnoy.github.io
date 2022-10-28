# git 常用命令

:::tip
后面用到就记录下，持续更新。
:::

## 配置

```
// 查看配置
git config --global --list

// 添加配置
git config --global xxx xxx

// 删除配置
git config --global --unset xxx
```

## 分支

```
// 查看本地所有分支
git branch

// 查看本地和远程所有分支
git branch -a

// 切换分支
git checkout <branch>

// 创建分支并切换到该分支
git checkout -b <branch>

// 合并分支
git merge <branch>

// 删除本地分支
git branch -d <branch>

// 删除远程分支
git push origin --delete <branch>
```

## 标签

```
// 查看标签
git tag

// 给某个提交打标签
git tag <tag name> <commit>

// 给某个提交打标签并附上说明
git tag -a <tag name> -m <tag description> <commit>

// 推送本地指定标签到远程
git push origin <tag name>

// 推送本地所有标签到远程
git push origin --tags

// 删除本地标签
git tag -d <tag name>

// 删除远程标签
git push origin --delete tag <tag name>
```

## 代理

```
// HTTP 代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

// Socks5 代理
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890
```

## 其他

```
// 合并某个提交
git cherry-pick <commit>

// 合并某几个提交
git cherry-pick <commit-1> <commit-2>
```

## 参考

- [git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)
