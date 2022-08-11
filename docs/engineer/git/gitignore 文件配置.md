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

## 检查 check-ignore

```
# https://git-scm.com/docs/git-check-ignore
git check-ignore test.txt
```

## 配置全局 git ignore

```
# install touch-cli
# https://www.npmjs.com/package/touch-cli
npm install touch-cli -g

# 根目录，如 C:\Users\xxx
# 创建 .gitignore-global 文件
touch .gitignore-global
# output: Touching .gitignore-global
# directory: C:\Users\xxx\.gitignore-global

# 将其添加至 Git 配置
git config --global core.excludesfile .gitignore-global

# 检查当前全局 excludesfile
git config --get core.excludesfile
# output: .gitignore-global
```

## 参考

- [gitignore](https://321paranoiawhy.github.io/post/gitignore/)