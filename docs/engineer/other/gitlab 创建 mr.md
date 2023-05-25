# gitlab 创建 mr

## 创建本地功能分支

通常是根据开发分支切出一个功能分支。

```
git checkout -b <branch>
```

## 将写好的功能提交到本地分支

```
git add .
git commit -m <message>
```

## 将本地分支推送到远程仓库并关联

```
git push --set-upstream origin <branch>
```

## 创建 Merge Request

本地分支推送到 Gitlab 远程仓库后，到 Gitlab 网页上创建 MR，MR 在审核完成后，即可合并。

:::tip
Github 中的 PR 与 Gitlab 中的 MR 是一个意思，不同平台说法不一样。
:::

## MR 合并冲突解决

如果可以在 GitLab 页面上操作解决冲突，那再好不过，如果不行要求本地解决冲突，则遵循以下步骤。

- 本地切换到 develop 分支，拉取最新代码
- 然后本地切换到你 MR 对应的 feature 分支
- 而后在本地 feature 分支上通过 git merge 合并 develop 分支
- 在编辑器内解决冲突后，重新走 MR 流程

总结：MR 是在远程将功能分支合并到开发分支，而解决冲突是在本地将开发分支合并到功能分支。

## 参考

- [MR 和 PR 的区别](https://www.cnblogs.com/hi3254014978/p/15860103.html)
