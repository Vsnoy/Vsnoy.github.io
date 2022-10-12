# git 版本回退

## git reset

回退，并舍弃提交记录。使用需要谨慎，不建议在多人协作时使用。

```
git reset --hard HEAD~n

git reset --hard HEAD^..

git reset --hard <commit>
```

```
git push -f
```

## git revert

回退，但保留提交记录。

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
