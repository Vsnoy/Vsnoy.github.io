# git tag 打标签

## 查看标签

```
// 查看所有标签
git tag

// 查看所有标签及说明
git tag -n

// 查看指定标签
git show <tag name>
```

## 创建标签

```
// 给上个提交打标签
git tag <tag name>

// 给某个提交打标签
git tag <tag name> <commit>

// 给某个提交打标签并附上说明
git tag -a <tag name> -m <tag description> <commit>
```

## 推送标签

```
// 推送本地指定标签到远程
git push origin <tag name>

// 推送本地所有标签到远程
git push origin --tags
```

## 删除标签

```
// 删除本地标签
git tag -d <tag name>

// 删除远程标签
git push origin --delete tag <tag name>
```

## 参考

- [git tag 的使用](https://juejin.cn/post/7074777378714550303)
