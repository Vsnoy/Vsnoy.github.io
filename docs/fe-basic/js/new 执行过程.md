# new 执行过程

## 执行过程

- 创建一个新的空对象
- 将新对象的原型设置为构造函数的 `prototype`
- 将新对象绑定到构造函数中的 `this`
- 若构造函数没有显式返回其他对象，则返回该新对象

## 模拟实现

```
// con 指 constructor，构造器
// ret 指 return，返回值
function new(con, ...args) {
  const obj = {}
  obj.__proto__ = con.prototype
  const ret = con.apply(obj, args)
  return typeof ret === 'Object' && ret !== null ? ret : obj
}
```

```
// 简写
function new(con, ...args) {
  const obj = Object.create(con.prototype)
  const ret = con.apply(obj, args)
  return ret instanceof Object ? ret : obj
}
```

## 参考

- [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)
- [深度解析 new 原理及模拟实现](https://muyiy.cn/blog/3/3.5.html)
- [new 调用构造器](http://file.jing999.cn/workspace/Js/extends.html)
