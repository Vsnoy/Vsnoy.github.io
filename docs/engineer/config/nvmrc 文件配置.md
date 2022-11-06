# .nvmrc 文件配置

`.nvmrc` 文件用于配合 `nvm` 工具更方便地切换项目指定的 `node` 版本。

```
# 项目指定 node 版本
v16.14.0
```

配置完后，直接在控制台使用 `nvm use` 命令即可切换到该 `node` 版本。

:::warning
遗憾的是，`nvm` 官方工具只支持 `linux/mac` 环境，`windows` 环境下的替代品 `nvm for windows` ,
不能像 `nvm` 官方工具那样支持配置 `.nvmrc` 文件。

因而该配置文件只适合在非 `windows` 环境下使用。
:::
