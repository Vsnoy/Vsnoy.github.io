# gitattributes 文件配置

通过 `.gitignore` 文件，可以忽略特定的文件或文件夹，如果想忽略特定某几行代码呢？  
那就需要用到 `.gitattributes` 文件结合过滤器来实现了。

## 创建 .gitattributes 文件

在文件夹根目录下手动创建 `.gitattributes` 文件即可。

## 添加内容

```
*.js filter=_config
```

- *.js 表示过滤所有。js 结尾的文件
- filter 表示过滤器
- _config 表示过滤器名称

## 添加过滤器

### 单行忽略

配置后，添加了 // @gitignore 结尾的代码行会被忽略提交

```
git config --global filter._config.clean "sed '/\/\/\s@gitignore$/'d"
git config --global filter._config.smudge cat
```

### 多行忽略

配置后，// #BEGIN 到 // #END 之间的代码行会被忽略提交

```
git config --global filter._config.clean "sed '/\/\/\s#BEGIN/,/\/\/\s#END$/d'"
git config --global filter._config.smudge cat
```

## 删除过滤器

```
git config --global --unset filter._config.clean
git config --global --unset filter._config.smudge
```

## 参考

- [gitattributes](https://www.cnblogs.com/layezi/p/16265806.html)