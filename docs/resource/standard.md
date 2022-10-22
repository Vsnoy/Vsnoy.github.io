# 开发规范

:::tip
看到不错的规范就记录下，持续更新。
:::

## 命名规范

### 项目、目录及文件命名

小写形式，中划线分隔。

### 组件命名

大驼峰形式。

### 函数命名

小驼峰形式。

### 常量命名

大写形式，下划线分隔。

### 变量命名

小写形式，下划线分隔。

### 类名命名 [^1]

小写形式，中划线分隔。

## 注释规范

```
/**
 * @author Trauma
 * @description 获取书本相关信息
 * @param {string} title - 书本标题。
 * @param {number} page - 书本页数。
 * @return {object} 书本信息
 */
function getBookInfo(title, page) {
  ...

  return book_info
}
```

```
/**
 * @author Trauma
 * @description 人相关组件
 * @prop {string} name - 姓名
 * @prop {number} age - 年龄
 */
const Person = ({name, age}) => {
  return xxx
}
```

[^1]: CSS 类命名
