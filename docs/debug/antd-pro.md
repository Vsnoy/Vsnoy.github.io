# Antd Pro

## ProTable 组件 request 请求有数据，但页面没有渲染出来

request 返回的数据格式有严格要求

```
// 分页
{data: [], pageSize: 10, current: 1, total: 20, success: true}

// 不分页
{data: [], total: 20, success: true}
```

<https://blog.csdn.net/weixin_45432575/article/details/120152923>
