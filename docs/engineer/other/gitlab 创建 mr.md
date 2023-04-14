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

## 参考

- [MR 和 PR 的区别](https://www.cnblogs.com/hi3254014978/p/15860103.html)
