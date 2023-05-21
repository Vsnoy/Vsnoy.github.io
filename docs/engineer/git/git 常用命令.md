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
git config --global user.name <name>
git config --global user.email <email>

// 删除配置
git config --global --unset xxx

// 更新配置
git config --global --replace-all xxx xxx

// 设置别名
git config --global alias.xxx "xxx"
```

## 回退

```
// 本地已提交，需要保留已经更改的文件，将其回退到工作区
git reset HEAD^

// 本地已提交，需要保留已经更改的文件，将其回退到暂存区
git reset --soft HEAD^

// 本地已提交，不需要保留已经更改的文件，直接回退到工作区
git reset --hard HEAD^

// 本地已暂存，需要保留已经更改的文件，将其回退到工作区
git restore --staged .

// 本地工作区，不需要保留已经更改的文件，直接丢弃
git restore .
```

## 分支

```
// 查看本地所有分支
git branch

// 查看本地和远程所有分支
git branch -a

// 创建分支
git branch <branch>

// 切换分支
git checkout <branch>

// 创建分支并切换到该分支
git checkout -b <branch>

// 切换到最近一次分支
git checkout -

// 合并分支
git merge <branch>

// 删除本地分支
git branch -d <branch>

// 删除远程分支
git push origin --delete <branch>

// 将本地分支与远程分支关联
git branch --set-upstream-to=origin/<origin branch> <local branch>
```

## 储藏

```
// 查看储藏列表
git stash list

// 临时储藏修改
git stash

// 临时储藏修改，并添加描述信息
git stash save <message>

// 恢复最后一次储藏
git stash apply

// 恢复最后一次储藏，并删除该储藏记录
git stash pop

// 恢复某次储藏
git stash apply@{num}

// 恢复某次储藏，并删除该储藏记录
git stash pop stash@{num}

// 删除某个储藏记录
git stash drop stash@{num}

// 清空所有储藏记录
git stash clear
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

## 远程仓库

```
// 查看所有远程仓库
git remote -v

// 添加远程仓库
git remote add origin <repo>

// 修改远程仓库地址
git remote set-url origin <repo>

// 将本地分支推送到远程仓库
git push origin <branch>

// 将本地分支推送到远程仓库并关联
git push --set-upstream origin <branch>
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
