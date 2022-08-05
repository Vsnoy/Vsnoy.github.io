# git rebase 合并多个 commit

## 查看历史提交记录

```
commit 3ca6ec
commit 1b4056
commit 53f244
commit 3a4226
```

## 选择要合并的 commit

这里以合并前三条 `commit` 记录为例，有三种方式

```
git rebase -i HEAD~3

git rebase -i HEAD^^^

git rebase -i 3a4226b
```

## 合并提交

保留第一行的 `pick`，将第二行及以后的 `pick` 修改为 `f` 或 `s` 保存，退出。

```
pick 3ca6ec3
f 1b40566
f 53f244a
```

## 合并冲突

当合并存在有冲突时，需要执行手动合并冲突。合并完成后执行如下命令，继续进行变基操作。

```
git rebase --continue
```

如果你想放弃这次合并的话，执行如下命令

```
git rebase --abort  
```

## 编辑提交信息

多条 `commit` 合并后的 `commit`，附上提交信息。

```
git commit --amend -m <message>
```

## 强制 Push

```
git push -f
```

## 参考

- [Git Rebase](https://anonymity94.github.io/articles/git-rebase.html)
- [Git 合并多个 commit](https://segmentfault.com/a/1190000007748862)
