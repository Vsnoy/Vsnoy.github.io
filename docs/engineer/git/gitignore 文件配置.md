# gitignore 文件配置

## 创建 .gitignore 文件

在文件夹根目录下手动创建 `.gitignore` 文件即可。

## 添加忽略文件

```
# 忽略 test.txt 文件
test.txt

# 忽略所有 txt 文件
*.txt

# 忽略 .gitignore 文件
.gitignore
```

## 添加忽略文件夹

```
# 忽略 node_modules 文件夹
node_modules

# 忽略 dist 文件夹 (build directory)
dist

# 忽略开头含有 ignore 的文件夹
ignore*

# 忽略中间含有 ignore 的文件夹
*ignore*/

# 忽略末尾含有 ignore 的文件夹
*ignore/

# 不忽略 ignore 文件夹
!ignore
```

:::tip
`.gitignore` 只能忽略那些原来没有被 `track` 的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 是无效的。

解决方法如下：

```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

:::

## 参考

- [gitignore](https://321paranoiawhy.github.io/post/gitignore/)