---
sidebarDepth: 2
---

# this 指向

:::tip
`this` 指向取决于函数的调用方式（箭头函数除外，其使用的是词法绑定）。
:::

## 绑定规则

### 默认绑定（直接函数调用）

这适用于最最普通的函数调用，没有其余规则掺杂，仅仅针对于独立函数。

```
function foo() {
  console.log(this) 
}

foo() //window
```

可以看到，此时函数 `foo` 中的 `this` 指向的是 `window` 。这是因为默认绑定规则下， `this` 指向全局。但这只是在非严格模式下，如果是在严格模式下， `this` 会绑定到 `undefined` 。

:::tip 拓展

```
var a = 2

var obj = {
  a: 1,
  foo: function() {
    setTimeout(function() {
      console.log(this.a)  // this 指向 window
    }, 1000)
  }
}

obj.foo() // 2 不是 1
```

等同于

```
var a = 2

var obj = {
  a: 1,
  foo: function() {
    function setTimeout(fn, delay) { // 相当于 fn = callback，fn 相当于 callback 别名
      // 相当于直接调用 callback()，非对象调用，属第一种默认绑定，此时 this 绑定全局
      fn()
    }
    
    function callback() {
      console.log(this.a)
    }  
    
    setTimeout(callback, 1000)
  }
}

obj.foo() // 2 不是 1
```

:::

### 隐式绑定（对象方法调用）

当函数的调用位置有上下文对象（即通过对象方法调用）时，this 指向这个上下文对象。

```
function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}

obj.foo() // 2
```

而当出现多级调用时，this 绑定的是离它最近的一个上下文对象。

```
function foo() {
  console.log(this.a)
}

var obj1 = {
  a: 1,
  foo: foo
}

var obj2 = {
  a: 2,
  obj1: obj1
}

obj2.obj1.foo() // 1
```

:::tip 拓展

#### this 丢失

需要注意的是，隐式绑定下， `this` 容易丢失绑定的对象，常见的两种情况是 **引用赋值** 和 **回调函数**。

##### 引用赋值

```
var a = 1

function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}

// obj.foo 指向 foo，因此 bar 也指向 foo，实际相当于 bar = foo，bar 相当于 foo 的函数别名
// 相当于 bar = function foo() { console.log(this.a) }
var bar = obj.foo 

// 相当于直接调用 foo()，非对象调用，属于第一种默认绑定，此时 this 绑定全局
bar() // 1

obj.foo() // 2
```

这里看起来 `bar()` 和 `obj.foo()` 是一样的，但其实 `bar` 引用的是 `foo` 函数本身，因此此时的 `bar()` 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。

##### 回调函数

```
var a = 1 

function foo() {
  console.log(this.a)
}

function doFoo(fn) { // 相当于 fn = foo，fn 相当于 foo 别名
  // 相当于直接调用 foo()，非对象调用，属于第一种默认绑定，此时 this 绑定全局
  fn() // 1
}

var obj = {
  a: 2,
  foo: foo
}

// obj.foo 指向 foo，则相当于 doFoo(foo)
doFoo( obj.foo ) // 1
```

这也解释了为什么 `setTimeout` 方法中回调函数的 `this` 会指向 `window` ，因为其运行在与所在函数完全分离的执行环境上。
:::

### 显式绑定（call、apply、bind）

`call()`、`apply()` 和 `bind()` 方法，可以将 `this` 强制指向希望绑定的对象上。

三者区别：

- `call` 和 `apply` 会调用函数，`bind` 不会调用函数
- `call` 、bind 与 `apply` 传参方式不一样，`call` 或 `bind` 传参使用逗号隔开，`apply` 使用数组传递

```
function foo(b) {
  console.log(this.a + b)
}

var obj = {
  a:2
}

foo.call(obj, 1)    // 3
foo.apply(obj, [1])   // 3
foo.bind(obj, 1)()  // 3
```

函数 `foo` 中的 `this` 被强制的绑定到了 `obj` 这个对象上。

### new 绑定（构造函数）

如果在一个函数前面带上 `new` 来调用，那么将会创建一个新对象，同时函数中的 `this` 会绑定到这个新对象上。在 `JS` 中，把这些使用 `new` 操作符时被调用的函数称为构造函数。

```
function foo(a) {
  this.a = a
  console.log(this)
}
var bar = new foo(2) // foo {a: 2}
```

如此，`foo` 中的 `this` 就被绑定到了 `bar` 上。

### 词法绑定（箭头函数）

不同于前面介绍的四种绑定规则，箭头函数内部的 `this` 是词法绑定，由执行上下文确定，其 `this` 指向在定义时就确定好了，与函数调用无关。

可简单理解为：箭头函数中的 `this` 指向的是当前所在父级执行上下文中的 `this` 对象。

:::tip
执行上下文可分为两类（eval 函数忽略）

- 全局执行上下文  
    遇到全局代码执行，创建一个全局执行上下文。
- 函数执行上下文  
    遇到一个函数执行，创建一个函数执行上下文。
:::

```
var a = 2

var obj = {
  a: 1,
  foo: function() {
    console.log(this) // this 指向 obj
    setTimeout(() => {
      console.log(this.a) // this 指向 obj
    }, 1000)
  }
}

obj.foo() // 1 不是 2

-------------------------
以上等同于下方这种写法
-------------------------

var a = 2

var obj = {}
obj.a = 1

obj.foo = function() {
 console.log(this) // this 指向 obj
 
 setTimeout(() => {
  // 箭头函数没有自己的 this，故指向父级执行上下文中的 this，此处即 foo 函数执行上下文
  console.log(this.a) // this 指向 obj
 }, 1000)
}

obj.foo() // 1 不是 2
```

```
var a = 2

var obj = {
  a:1,
  foo: () => {
    console.log(this.a)  // this 指向 window
  }
}

obj.foo() // 2 不是 1

-------------------------
以上等同于下方这种写法
-------------------------

var a = 2;

obj.a = 1;
obj.foo = () => {
  // 箭头函数没有自己的 this，故指向父级执行上下文中的 this，此处即 window 全局执行上下文
  console.log(this.a)  // this 指向 window
}

obj.foo() // 2 不是 1
```

## 优先级与判断方法

介绍了各种 this 绑定规则，那么当不同的调用规则混合使用时，我们就需要判断优先级。

:::tip
优先级顺序：词法绑定 > new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定。
:::

因此我们可以得出以下的判断方法：

:::tip

1. 词法绑定？绑定到父级指向上下文中的 `this`。
2. new 绑定？绑定到新创建的对象。
3. 显式绑定？绑定到指定的对象。
4. 隐式绑定？绑定到该对象。
5. 默认绑定？绑定到全局对象，严格模式下绑定到 `undefined` 。
:::

## 参考

- [关于 this 的指向问题](https://shuliqi.github.io/2018/07/02/%E5%85%B3%E4%BA%8Ethis%E7%9A%84%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98/)
- [JavaScript 中的 this 指向](https://www.clloz.com/programming/front-end/js/2020/06/30/js-this/)
- [解惑 JavaScript 中的 this 指向问题](https://blackstarxing.github.io/2018-11-01-javascript-this-disabuse.html)
