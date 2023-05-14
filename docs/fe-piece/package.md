# Package

## UI 库

### Antd Pro

#### ProTable 组件

```
- rowKey
- headerTitle
- cardBordered
- columnsState（表格数据缓存）
  - persistenceKey
  - persistenceType
- columns
  - key
  - title
  - tooltip
  - dataIndex
  - valueType
  - valueEnum
  - hideInTable
  - hideInSearch
  - search
    - transform（常用于时间区间的转化）
  - order
  - width
  - sorter
    - 使用格式：(a, b) => a.xxx - b.xxx
  - ellipsis（自动缩略）
  - render（渲染表格数据列单元格内容）
  - renderFormItem（渲染表格数据列对应查询项内容，可用于个性化定义查询项）
  - formItemProps
  - fieldProps
  - filters
  - onFilter
  - initialValue（查询表单项初始值）
- request（请求数据，对返回格式有严格要求）
  - 不分页返回格式：{data: [], total: 20, success: true}
  - 分页返回格式： {data: [], pageSize: 10, current: 1, total: 20, success: true}
- actionRef
- options
  - density
  - fullScreen
  - reload
  - setting
- search
  - optionRender
  - collapsed
  - defaultCollapsed
- pagination
- editable
  - type（设置为 multiple，可同时编辑多行）
- toolbar
- toolBarRender
- dateFormatter
- expandable（嵌套表格）
- copyable
- rowSelection（批量操作）
```

#### ProForm 组件

```
- submitter
- formRef
```

#### ProDescriptions 组件

```
- title
- columns
- dataSource
- request（请求数据，对返回格式有严格要求）
  - 格式：{data: {}, success: true}
```

## 路由库

### React Router

- useNavigate（路由跳转）
- useParams（获取动态路由 params 参数，形如：/a/:id）
- useSearchParams（获取路径后面的 search 参数，形如：/a?name=violet）
- useLocation（获取路由跳转时附带的 state 参数）
- useRoutes

## 状态库

### Mobx

- when
- autorun
- reaction

### Recoil

- Atom（状态）
- Selector（派生状态）

- useRecoilState
- useRecoilValue
- useSetRecoilState

## 工具库

### qs

```
// parse 解析 url
const url = 'https://www.example.com/search?name=violet&age=20';
const params = qs.parse(url.split('?')[1]);

// stringify 拼接 url
const params = {name: 'violet', age: 20}
let url = 'https://www.example.com/search'
url += `?${qs.stringify(params)}`;
```

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
