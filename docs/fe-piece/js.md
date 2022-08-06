# JS

## API 备忘

### parseInt

`parseInt` 解析一个字符串参数，并返回指定基数的十进制整数或 `NaN`。

```
parseInt(string[, radix])
```

- `string`： 要被解析的值。若参数不为字符串，则默认会将其转为字符串。字符串开头的空白符将会被忽略。
- `radix`： 基数。介于 `2-36` 之间的整数。

:::tip
**注意**： 在 `radix` 为 `0` 或 `undefined`，或没有指定的情况下，`JS` 作如下处理：

- 如果字符串 `string` 以 `0x` 或者 `0X` 开头，则基数是 `16`。
- 如果字符串 `string` 以 `0` 开头，基数是 `8` 或者 `10`，一般为 `10`，具体视环境而定。
- 如果字符串 `string` 以其它任何值开头，则基数是 `10`。
:::

:::tip

返回 `NaN` 的情况

- `radix` 不在 2-36 范围之内
- `string` 左起第一个数大于进制数 `radix`
- 第一个非空字符不为数字
:::

### map

`map` 创建一个新数组，其值由原数组中每个元素执行回调函数的结果组成。

```
arr.map(function callback(currentValue[,index[, array]]) {
  // Return element for new_array
}[, thisArg])
```

- `callback`：生成新数组元素的回调函数。
  - `currentValue`：数组中正在处理的当前元素。
  - `index`：数组中正在处理的当前元素的索引。
  - `array`: 被调用的数组。
- `thisArg`: 执行 `callback` 函数时使用的 `this` 值。

## var、let 及 const

![var_let_const](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/var_let_const.jpg)

[深入理解 let](https://github.com/gengarneko/blog-vuepress/tree/master/docs/frontEnd/es6)

## event.target & event.currentTarget

- event.target：事件触发者
- event.currentTarget：事件监听者

```
<div id="outer">
  <div id="inner">123</div>
</div>

<script>
  document.getElementById('outer').onclick = function(e){
    console.info('e.target', e.target) // <div id="inner">...</div>
    console.info('e.currentTarget', e.currentTarget) // <div id="outer">...</div>
  }
</script>
```

[event.target 和 event.currentTarget](https://segmentfault.com/a/1190000003021586)

## Object.is 和 ===

主要在于对 `NaN` 和 `±0` 的处理不同。

```
NaN === NaN  // false
+0 === -0  // true

Object.is(NaN, NaN)  // true
Object.is(+0, -0)  // false
```

## Number.isNaN & isNaN

- `Number.isNaN` 只在参数值为 `NaN` 时，返回 `true`
- `isNaN` 会尝试将参数转换为数值，任何不能被转换为数值的的值都会返回 `true`

```
Number.isNaN('aa') // false
isNaN('aa') // true
```

## async/await 与 Promise

因为 `async/await` 本身就是 `promise` + `generator` 的语法糖。所以 `await` 后面的代码是 `microtask` 。

```
async function async1() {
 console.log('async1 start')
 await async2()
 console.log('async1 end')
}
```

可视为

```
async function async1() {
 console.log('async1 start')
 Promise.resolve(async2()).then(() => {
  console.log('async1 end')
 })
}
```

可近似视为

```
async function async1() {
  new Promise((resolve, reject) => {
    console.log('async1 start')
    resolve(async2())
  }).then(() => {
    console.log('async1 end')
  })
}
```

:::warning
Promise.resolve(v) 与 new Promise(r => r(v)) 不完全等价。  
待后续研究。
:::

[从一道题浅说 JavaScript 的事件循环](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)
