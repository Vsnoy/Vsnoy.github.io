# git 版本回退

## git reset

回滚。彻底回滚到某次提交，该提交之后的所有提交记录都会舍弃。  
使用需要谨慎，不建议在多人协作时使用。

```
git reset --hard HEAD~n

git reset --hard HEAD^..

git reset --hard <commit>
```

```
git push -f
```

## git revert

撤销。仅针对某次提交进行撤销，该提交之后的所有提交记录依然保留。

```
git revert HEAD~n

git revert HEAD^..

git revert <commit>
```

```
git push
```

## 参考

- [git 版本回退](https://blog.csdn.net/weixin_42412601/article/details/124070871)
