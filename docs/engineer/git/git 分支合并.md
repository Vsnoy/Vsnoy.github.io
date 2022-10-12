# git 分支合并

## 合并所有提交

直接合并另一个分支所有提交。

```
git merge <branch>
```

## 合并部分提交

合并其他分支部分提交。

```
// 合并某个提交
git cherry-pick <hash>

// 合并某几个提交
git cherry-pick <hash-1> <hash-2>
```

如果 `cherry-pick` 了重复的提交导致报错，可使用以下命令。

```
// 跳过该次提交，其他 cherry-pick 保留
git cherry-pick –-skip

// 放弃 cherry-pick
git cherry-pick --abort
```
