# git 分支合并

## 合并所有提交

直接合并另一个分支所有提交。

```
// 合并分支，保留原来所有提交
git merge <branch>

// 合并分支，将原来所有提交合并为一个
git merge --squash <branch>
```

## 合并部分提交

合并其他分支部分提交。

```
// 合并某个提交
git cherry-pick <commit>

// 合并某几个提交
git cherry-pick <commit-1> <commit-2>
```

如果 `cherry-pick` 了重复的提交导致报错，可使用以下命令。

```
// 跳过该次提交，保留其他 cherry-pick 的内容
git cherry-pick –-skip

// 放弃 cherry-pick
git cherry-pick --abort
```

## Gitlab MR / Github PR 合并

可参考：<https://www.cnblogs.com/hi3254014978/p/15860103.html>

## Rebase 变基合并

待研究
