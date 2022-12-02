# .editorconfig 文件配置

`.editorconfig` 文件用于统一团队中项目编码风格，使用时需要搭配 `EditorConfig` 扩展。

```
root = true # 控制 .editorconfig 配置是否生效

[*] # 匹配全部文件
indent_style = space # 缩进风格
indent_size = 2 # 缩进的空格数
charset = utf-8 # 字符集
trim_trailing_whitespace = true # 去除一行中的首尾空格
insert_final_newline = true # 文件以一个空白行结尾
end_of_line = lf # 换行符

[*.md] # 匹配 md 文件
trim_trailing_whitespace = false
```

:::tip
`editorconfig` 配置与 `prettier` 配置有重合的地方，实际上 `prettier` 已经足够用了，这里了解一下。
:::
