# React

## 官方重点语录备忘

- 一个元素的 `key` 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 `id` 来作为元素的 `key` 。当元素没有确定 `id` 的时候，万不得已你可以使用元素索引 `index` 作为 `key` 。
- 如果列表项目的顺序可能会变化，我们不建议使用索引来用作 `key` 值，因为这样做会导致性能变差，还可能引起组件状态的问题。如果你选择不指定显式的 `key` 值，那么 React 将默认使用索引用作为列表项目的 `key` 值。
- 数组元素中使用的 `key` 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 `key` 值。

[列表 & Key](https://zh-hans.reactjs.org/docs/lists-and-keys.html)

---

- 与 `class` 组件中的 `setState` 方法不同，`useState` 不会自动合并更新对象。
- 如果你的更新函数返回值与当前 `state` 完全相同，则随后的重渲染会被完全跳过。
- 如果你更新 `State Hook` 后的 `state` 与当前的 `state` 相同时，`React` 将跳过子组件的渲染并且不会触发 `effect` 的执行。（ `React` 使用 `Object.is` 比较算法 来比较 `state` ）
- 需要注意的是，`React` 可能仍需要在跳过渲染前渲染该组件。不过由于 `React` 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心。如果你在渲染期间执行了高开销的计算，则可以使用 `useMemo` 来进行优化。

[Hook API 索引之 useState](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)

## 其他重点语录备忘

- 函数组件的每一帧会有自己独立的 `state` 、`function` 、`props`。
- 如果某些情况下 `key` 不起作用（可能是组件初始化的开销太大）
- `React` 组件中的 `key` 属性的值改变，`React` 将会创建新的实例，而不是更新现有的实例。
- `React` 本身执行的过程和代码都是同步的，只是合成事件和生命周期钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，就是我们所说的异步了。
- 更新 DOM 之前一定会重渲染，但重渲染不代表一定会更新 DOM，二者不等价。

## JSX & React.createElement

```
// JSX 形式
<div>
  <button onClick={this.handleClick}>点击</button>
</div>

// React.createElement 形式
React.createElement(
  "div", 
  null, 
  React.createElement(
    "button", 
    { onClick: this.handleClick }, 
    "点击"
  )
)
```

## 类组件事件绑定 this 的四种方式

```
// constructor 中使用 bind  
this.handleClick = this.handleClick.bind(this)

// 定义处使用类变量语法
handleClick = () => { ... }

// render 方法中使用 bind
<button onClick={this.handleClick.bind(this)}> 点击 </button>

// render 方法中使用箭头函数
<button onClick={() => {this.handleClick()}}> 点击 </button>
```
