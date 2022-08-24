# JS

## 数组去重

- Set

```
[...new Set(arr)]
Array.from(new Set(arr))
```

- 双层 for 循环

```
for (const i = 0; i < arr.length; i++) {
  for (const j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1)

      // 去重后会改变数组长度，所以要将数组长度 arr.length 和下标 j 减一
      arr.length--
      j--
    }
  }
}
```

- filter + indexOf

```
// 利用 indexOf 返回指定值第一次出现的索引的索引，若后面发现 indexOf 返回值和元素自身索引对不上，就去重
arr.filter((item, index, array) => array.indexOf(item) === index)
```

- filter + Object 键值对

```
// 利用一个空对象，将数组值依次存入对象，若存的时候发现对象中已经有该值了，就去重
// 对象属性都是字符串，通过 typeof item + item，来将数字拼成字符串，防止误差
// 赋值语句返回值是等号右边的值
const obj = {}
array.filter((item) => obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
```

## 判断数组方式

- Array.isArray(arr)
- arr instanceof Array
- arr.constructor === Array
- Object.prototype.toString.call(arr) === '[object Array]'
- 等等

## Object.is 和 === 区别

主要在于对 `NaN` 和 `±0` 的处理不同。

```
NaN === NaN  // false
+0 === -0  // true

Object.is(NaN, NaN)  // true
Object.is(+0, -0)  // false
```

## Number.isNaN 和 isNaN 区别

- `Number.isNaN` 只在参数值为 `NaN` 时，返回 `true`
- `isNaN` 会尝试将参数转换为数值，任何不能被转换为数值的的值都会返回 `true`

```
Number.isNaN('aa') // false
isNaN('aa') // true
```

## this 指向 <Badge text="重点" />

- 词法绑定（箭头函数）：绑定到父级执行上下文中的 this
- new 绑定（构造函数）：绑定到新创建的对象
- 显式绑定（call/apply/bind）：绑定到指定的对象
- 隐式绑定（对象方法）：绑定到该对象
- 默认绑定（直接函数）：绑定到全局对象 window

## new 原理 <Badge text="重点" />

- 创建一个新的空对象
- 将新对象的原型设置为构造函数的 `prototype`
- 将新对象绑定到构造函数中的 `this`
- 若构造函数没有显式返回其他对象，则返回该新对象

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

## 节流防抖 <Badge text="重点" />

- 节流：一段时间内只执行一次。适用于轮播图、高频点击等场景。
- 防抖：只执行最后一次。适用于输入校验、搜索联想等场景。

```
// 节流
function throttle(fn, wait) {
  let timer

  return function(...args) {
    if(timer) return
    fn.apply(this, args)
    setTimeout(() => timer = null, wait)
  }
}
```

```
// 防抖
function debounce(fn, wait) {
  let timer

  return function(...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}
```

## 深浅拷贝 <Badge text="重点" />

- 浅拷贝
  - 扩展运算符
  - Object.assign
  - Array.prototype.slice
  - Array.prototype.concat
- 深拷贝
  - JSON.parse(JSON.stringify(obj))
  - lodash.cloneDeep()

```
// 浅拷贝手写实现
function shallowCopy(obj) {
  // 只拷贝对象
  if(typeof obj !== 'object') return

  // 根据 obj 的类型判断是新建一个数组还是对象
  let newObj = Array.isArray(obj) ? [] : {}

  // 遍历 obj，并且判断是 obj 的属性才拷贝
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}
```

```
// 深拷贝手写实现
function deepCopy(obj) {
  // 只拷贝对象
  if(typeof obj !== 'object') return

  // 根据 obj 的类型判断是新建一个数组还是对象
  let newObj = Array.isArray(obj) ? [] : {}

  // 遍历 obj，并且判断是 obj 的属性才拷贝。属性值是对象时，采用递归。
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }

  return newObj
}
```

## 事件循环

JS 中任务队列分为宏任务和微任务队列。首先执行宏任务，然后执行该宏任务产生的微任务，微任务执行完毕后，再执行下一个宏任务，如此循环往替，便称为事件循环。

- 宏任务
  - script 整体
  - setTimeout
  - setInterval
  - setImmediate (nodeJS)
  - requestAnimationFrame (html5)
- 微任务
  - await
  - Promise.then
  - process.nextTick (nodeJS)
  - MutationObserver (html5)

## 闭包

闭包是指函数在执行时对其定义处词法作用域的引用。

作用

- 延伸变量的作用范围
- 在函数外部能够访问到函数内部的变量

表现形式

- 返回函数
- 函数参数
- 立即执行函数表达式

## 原型链

当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型对象，于是就这样一直找下去，也就是原型链的概念。

## 作用域链

在当前作用域查找一个变量时，如果这个作用域内部无法查到这个变量，那么它就会去它的父级作用域查找，若还没有，则依次向上级作用域查找，直到访问到 window 对象为止。这一层层的关系就是作用域链。

## 执行上下文

执行上下文类分类

- 全局执行上下文
- 函数执行上下文
- eval 执行上下文

执行上下文的三个重要属性

- 变量对象
- 作用域链
- this
