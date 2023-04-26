# Package

## UI 库

### Antd Pro

#### ProTable 组件

```
- rowKey

- headerTitle

- columns
  - title
  - tooltip
  - dataIndex
  - valueType
  - hideInTable
  - hideInSearch
  - fieldProps
  - width
  - ellipsis
  - render
  
- request
  - 返回格式有严格要求
  - 不分页返回格式：{data: [], total: 20, success: true}
  - 分页返回格式： {data: [], pageSize: 10, current: 1, total: 20, success: true}

- actionRef

- options

- search

- pagination

- toolBarRender
```

#### ProForm 组件

```
- submitter
```

## 工具库

### moment

:::tip

- years | quarters | months | weeks | days | hours | minutes | seconds | milliseconds
- y | Q | M | w | d | h | m | s | ms
:::

```
// 格式化日期字符串
moment(string).format('YYYY-MM-DD HH:mm:ss')

// 日期加减
moment(string).add(number, string)
moment(string).subtract(number, string)

// 获取日期时间单位头尾
moment(string).startOf(string)
moment(string).endOf(string)

// 获取日期、年、季度、月、周、周几（0-6）、时、分、秒、毫秒
moment(string).date()
moment(string).year()
moment(string).quarter()
moment(string).month()
moment(string).week()
moment(string).day()
moment(string).hour()
moment(string).minute()
moment(string).second()
moment(string).millisecond()

// 获取时间差
moment(string).diff(moment(string), string)

// 判断日期是否在另一个日期之前、之后还是之间
moment(string).isBefore(string)
moment(string).isAfter(string)
moment(string).isBetween(string, string)
```
