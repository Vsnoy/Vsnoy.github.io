# git 追加提交

## 将后续更改的内容添加至暂存区

```
git add .
```

## 追加提交并修改 commit 信息

```
// 第一种：需要进行命令行文本编辑操作，较为繁琐
git commit --amend

// 第二种：直接修改
git commit -m <message> --amend
```

```
// 如果要追加的提交已经推送到远程分支，需要强行推送
// 该操作在多人协作时较为危险，可能会引起冲突
git push -f
```
