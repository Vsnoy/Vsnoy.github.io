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

## 挑选合并

```
// 合并某个提交
git cherry-pick <hash>

// 合并某几个提交
git cherry-pick <hash-1> <hash-2>
```
