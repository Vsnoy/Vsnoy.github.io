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

- 函数组件的每一帧会有自己独立的 `props`、`state` 、`function`、`effect`。
- 如果某些情况下 `key` 不起作用（可能是组件初始化的开销太大）
- `React` 组件中的 `key` 属性的值改变，`React` 将会创建新的实例，而不是更新现有的实例。
- `React` 本身执行的过程和代码都是同步的，只是合成事件和生命周期钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，就是我们所说的异步了。
- 更新 DOM 之前一定会重渲染，但重渲染不代表一定会更新 DOM，二者不等价。

## 新架构 (v16 以后）

- Scheduler（调度器）：负责调度任务的优先级
- Reconciler（协调器）：负责找出 UI 变化
- Renderer（渲染器）：负责将 UI 变化渲染到页面上

:::tip

- Scheduler 对应 Schedule 阶段
- Reconciler 对应 Render 阶段
- Renderer 对应 Commit 阶段

旧架构没有 Schedule 阶段，一旦更新流程开始，就会递归更新子组件，中途无法中断。

:::

## Hooks 列表

- useState、useReducer
- useEffect、useLayoutEffect
- useMemo、useCallback
- useRef
- useContext
- useImperativeHandle
- useTransition、useDeferredValue
- 等等

[React Hooks 大全](https://mp.weixin.qq.com/s/Qm7BHndYlvsSmNXZqifwcw)

## 元素 & 组件

- 元素是用来展现 DOM 节点或组件的一个对象
- 组件可以是类或者函数，它将 Props 作为输入然后返回一个元素的树形结构作为输出

[元素与组件区别](https://ld246.com/article/1551068452927)

## 类组件 & 函数组件

- 状态  
  - 类组件可以有自己的状态 State
  - 函数组件之前没有，现在可以使用 useState 来使用状态
- 生命周期  
  - 类组件有自己的生命周期
  - 函数组件之前没有，现在可以使用 useEffect 来实现类似功能
- 性能优化  
  - 类组件可以使用 shouldComponentUpdate 和 React.PureComponent
  - 函数组件可以使用 React.memo

## 调和 & Diff 算法

- 调和：将虚拟 DOM 转成 真实 DOM 的最少操作的过程
- Diff 算法：调和的具体实现

## useEffect & 生命周期

- useEffect 模拟 componentDidMount

  ```
  useEffect(() => {}, [])
  ```

- useEffect 模拟 componentDidUpdate

  ```
  const flag = useRef(true)

  useEffect(() => {
    if (flag.current) {
      flag.current = false
    } else {
      ...
    }
  }, [])
  ```

- useEffect 模拟 componentWillUnmount

  ```
  useEffect(() => {
    return () => {}
  }, [])
  ```

## 合成事件 & 原生事件

- 对于事件名称命名方式，原生事件为全小写，合成事件采用小驼峰
- 对于事件函数处理语法，原生事件使用引号，合成事件使用大括号
- 对于阻止浏览器的默认行为，原生事件使用 return false，合成事件采用 event.prenventDefault()

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

## refs 转发

```
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

// 你可以直接获取 DOM button 的 ref
const ref = React.createRef()
<FancyButton ref={ref}>Click me!</FancyButton>
```

## refs 的四种方式

- 类组件

```
class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.bRef = createRef()
  }

  changeText = () => {
    this.refs.aRef.innerText = 'Hello, A'
    this.bRef.current.innerText = 'Hello, B'
    this.cRef.innerText = 'Hello, C'
  }

  render() {
    return (
      <div>
        {/* 传入字符串（不推荐） */}
        <div ref="aRef">Hi, A</div>
        
        {/* 传入对象 */}
        <div ref={this.bRef}>Hi, B</div>
        
        {/* 传入回调函数 */}
        <div ref={e => this.cRef = e}>Hi, C</div>

        <button onClick={this.changeText}>ref 内容切换</button>
      </div>
    )
  }
}
```

- 函数组件

```
const MyComponent = () => {
  const dRef = useRef()

  const changeText = () => {
    dRef.current.innerText = 'Hello, D'
  }

  return (
    <div>
      // 传入 hooks
      <div ref={dRef}>Hi, D</div>
      
      <button onClick={changeText}>ref 内容切换</button>
    </div>
  )
}
```

## context 的三种方式

- 类组件

```
const ThemeContext = createContext("light")

class ThemedButton extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context;

    return (
      <button style={{ background: theme }}>
        I am styled by theme context!
      </button>
    )
  }
}

class Toolbar extends Component {
  render() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

```

```
const ThemeContext = createContext("light")

class ThemedButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <button style={{ background: theme }}>
            I am styled by theme context!
          </button>
        )}
      </ThemeContext.Consumer>
    )
  }
}

class Toolbar extends Component {
  render() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

```

- 函数组件

```

const ThemeContext = createContext('light')

const ThemedButton = () => {
  const theme = useContext(ThemeContext)
  
  return (
    <button style={{ background: theme }}>
      I am styled by theme context!
    </button>
  )
}

const Toolbar = () => (
  <div>
    <ThemedButton />
  </div>
)

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
)

```

## 代码复用的三种方式

- HOC：参数为组件，返回值为新组件的函数
- Render Props：告知组件需要渲染什么内容的函数 Prop
- Hooks

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

:::tip
为什么需要在 React 类组件中为事件处理程序绑定 this ？

- 事件绑定作为回调函数参数传递给函数，丢失其上下文，执行的是默认绑定，不是隐式绑定
- 类声明和类表达式的主体以严格模式执行，this 指向 undefined

:::

## 动态添加 className 或 style

### className

```
<div className={index === current_index ? "active" : ''}>是否选中</div>

<div className={`violet ${index === current_index ? "active" : ''}`}>是否选中</div>
<div className={["violet", index === current_index ? "active" : ''].join(' ')}>是否选中</div>
```

```
<div className={`${styles.violet} ${index === current_index && styles.active }`}>是否选中</p>
<div className={`${styles.violet} ${index === current_index ? styles.active : '' }`}>是否选中</p>
```

### style

```
<div style={{display: index === current_index ? "block" : "none"}}>是否隐藏</div>
<div style={{backgroundColor: "pink", display: index === current_index ? "block" : "none"}}>是否隐藏</div>
```
