# .gitignore 文件配置

`.gitignore` 文件用于统一配置不提交到仓库中的文件。常见配置如下：

```
.vscode

dist
node_modules
```

:::tip

- 其余如一些系统、编辑器文件之类的配置，可借助 `vscode` 插件 `gitignore` 生成。

- `.gitignore` 文件只能忽略那些原来没有被 `track` 的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 文件是无效的。解决方法如下：

  ```
  // 针对单个文件
  git rm --cached <file>
  git add <file>
  git commit -m 'update .gitignore'
  ```

  ```
  // 针对所有文件
  git rm -r --cached .
  git add .
  git commit -m 'update .gitignore'
  ```

:::
