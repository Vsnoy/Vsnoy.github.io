# git stash 储藏

## 储藏

`git stash` 会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录。

```
git stash save <message>
```

## 恢复

```
git stash apply // 恢复最后一次储藏
git stash apply@{num} // 恢复某次储藏

git stash pop // 恢复最后一次储藏，并删除该储藏记录
git stash pop stash@{num} // 恢复某次储藏，并删除该储藏记录
```

## 删除

```
git stash clear // 清空所有储藏记录

git stash drop stash@{num} // 删除某个储藏记录
```

## 查看

```
git stash list // 查看储藏列表

git stash show // 查看最后一次储藏 diff
git stash show stash@{num} // 查看某次储藏 diff
```
