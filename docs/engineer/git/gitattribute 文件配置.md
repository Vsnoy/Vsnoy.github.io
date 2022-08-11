# gitattributes 文件配置

## 创建 .gitattributes 文件

在文件夹根目录下手动创建 `.gitattributes` 文件即可。

## 添加过滤器

```
*.js filter=_config
```

- *.js 表示过滤所有。js 结尾的文件
- filter 表示过滤器
- _config 表示过滤器名称

## 配置过滤器

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