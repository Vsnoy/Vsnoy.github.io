# React

## React 基础

### 生命周期钩子函数

- 挂载阶段
  - constructor
  - getDerivedStateFromProps
  - render
  - componentDidMount

- 更新阶段
  - getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapShotBeforeUpdate
  - componentDidUpdate

- 卸载阶段
  - componentWillUnmount

### 父子组件生命周期钩子函数执行顺序

- 挂载过程
  1. 父组件 constructor
  2. 父组件 getDerivedStateFromProps
  3. 父组件 render
  4. 子组件 constructor
  5. 子组件 getDerivedStateFromProps
  6. 子组件 render
  7. 子组件 componentDidMount
  8. 父组件 componentDidMount

- 更新过程
  1. 父组件 getDerivedStateFromProps
  2. 父组件 shouldComponentUpdate
  3. 父组件 render
  4. 子组件 getDerivedStateFromProps
  5. 子组件 shouldComponentUpdate
  6. 子组件 render
  7. 子组件 getSnapShotBeforeUpdate
  8. 父组件 getSnapShotBeforeUpdate
  9. 子组件 componentDidUpdate
  10. 父组件 componentDidUpdate

- 卸载过程
  1. 父组件 componentWillUnmount
  2. 子组件 componentWillUnmount

### 类组件和函数组件区别

- 状态  
  - 类组件可以有自己的状态 State
  - 函数组件之前没有，现在可以使用 useState 来使用状态
- 生命周期  
  - 类组件有自己的生命周期
  - 函数组件之前没有，现在可以使用 useEffect 来实现类似功能
- 性能优化  
  - 类组件可以使用 shouldComponentUpdate 和 React.PureComponent
  - 函数组件可以使用 React.memo

### 类组件事件绑定 this 的四种方式

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

### refs 的四种方式

- 类组件

```
class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.aRef = React.createRef()
    this.bRef = React.createRef()
    this.cRef = React.createRef()
  }

  changeText = () => {
    this.refs.aRef.innerText = 'Hello, A'
    this.bRef.current.innerText = 'Hello, B'
    this.cRef.innerText = 'Hello, C'
  }

  render() {
    return (
      <div>
        // 传入字符串
        <div ref="aRef">Hi, A</div>
        
        // 传入对象
        <div ref={this.bRef}>Hi, B</div>
        
        // 传入回调函数
        <div ref={e => this.cRef = e}>Hi, C</div>

        <button onClick={this.changeText}>ref 内容切换</button>
      </div>
    )
  }
}
```

- 函数组件

```
function MyComponent() {
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

### refs 转发

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

### 事件机制与合成事件

`React` 基于浏览器的事件机制，自身实现了一套事件机制，包括事件注册、事件合成、事件冒泡、事件分发等。在 `React` 中，这套事件机制被称之为合成事件。

合成事件，是 `React` 模拟原生 DOM 事件所有能力的一个对象，它根据 W3C 标准定义事件，兼容所有浏览器，拥有与原生事件相同的接口。

为什么要另外实现一套事件机制呢？原因是为了解决跨平台、兼容性问题。

### 合成事件与原生事件区别

- 对于事件名称命名方式，原生事件为全小写，合成事件采用小驼峰
- 对于事件函数处理语法，原生事件使用引号，合成事件使用大括号
- 对于阻止浏览器的默认行为，原生事件使用 return false，合成事件采用 event.prenventDefault()

### setState 执行机制

属于 `React` 控制之内的会走异步批处理，控制之外的会走同步非批处理。

- 在原生事件或异步代码中，`setState` 是同步，非批处理。
- 在合成事件或钩子函数中，`setState` 是异步，批处理。

React 本身执行的过程和代码都是同步的，只是合成事件和生命周期钩子函数的调用顺序在更新之前，
导致在合成事件和钩子函数中没法立马拿到更新后的值，就是我们所说的异步了。

### super() 和 super(props) 的区别

- super()，为了继承父类中的 this 对象
- super(props)，为了在 constructor 中使用 this.props

### 组件通信

- props/回调

```
父组件：
<Child name="rem" callback={this.changeName}></Child>

子组件：
<button onClick={this.props.callback.bind(this, 'violet')}>点击</button>
```

- eventBus

```
import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

组件 A （发送事件）
eventBus.emit('sayHello', 'Hello React')

组件 B （接收事件）
eventBus.addListener('sayHello', (msg) => {
  console.log(msg)
})
```

- context

```
const context = React.createContext()

父组件：
<context.Provider value={{name: 'rem', callback: this.changeName}}>
  <Child />
</context.Provider>

子孙组件（接收方式一）:
static contextType = context

<div>{this.context.name}</div>
<button onClick={this.context.callback.bind(this, 'violet')}>点击</button>

子孙组件（接收方式二）:
<context.Consumer>
  {
    value => (
      <div>
        <div>{value.name}</div>
        <button onClick={value.callback.bind(this, 'violet')}>点击</button>
      </div>
    )
  }
</context.Consumer>

子孙组件（接收方式三）
const value = useContext(context)

<div>{value.name}</div>
<button onClick={value.callback.bind(this, 'violet')}>点击</button>
```

- Mobx
- Redux
- 等等

### React Diff 原理

- 把树形结构按照层级分解，只比较同级元素
- 给列表结构的每个单元添加唯一的 key 属性，方便比较
- React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
- 合并操作，调用 component 的 setState 方法的时候，React 将其标记为 dirty。到每一个事件循环结束，React 检查所有标记 dirty 的 component 重新绘制。
- 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

### React Fiber 理解

- React Fiber 是一种基于浏览器的单线程调度算法。
- React 16 之前 ，reconcilation 算法实际上是递归，想要中断递归是很困难的，React 16 开始使用了循环来代替之前的递归。
- React Fiber：一种将 recocilation （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算

## React hooks

### 使用 Hooks 要遵循的规范

- 只能在函数式组件和自定义 Hook 中使用。
- 只能在最顶层使用。不能在条件、循环、嵌套中使用。

### useEffect 和 useLayoutEffect 的区别

- useEffect 不会阻塞浏览器渲染，而 useLayoutEffect 会
- useEffect 会在浏览器渲染结束之后执行，而 useLayoutEffect 则是在 DOM 更新完成之后，浏览器渲染之前执行。

PS：后者总是比前者先执行，后者主要用于处理 DOM 操作、调整样式、避免屏闪等问题。举个栗子：移动方块。

### React Hooks 示例

```
import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from 'react';

const InfoContext = React.createContext()

function Child() {
  const info = useContext(InfoContext)
  const {name, age} = info

  return (
    <div>{name} {age}</div>
  )
}

export default function Parent() {
  const [count, setCount] = useState(0)
  const textRef = useRef()

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  useLayoutEffect(() => {
    textRef.current.innerText = '女友成双'
  })

  return (
    <div>
      <span>You clicked {count} times </span>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div ref={textRef}>我们的重制人生</div>

      <InfoContext.Provider value={{name: 'Violet', age: 20}}>
        <Child/>
      </InfoContext.Provider>
    </div>
  )
}
```

## React Router

### 路由信息

```
this.props.history.push()
this.props.history.replace()
this.props.history.go()

this.props.match.params

this.props.location.search
this.props.location.query
this.props.location.state
```

### 路由传参的四种方式及区别

- params 传参

```
传递参数：
<Link to='/A/996/Violet'>Page A</Link>

this.props.history.push("/A/996/Violet")

接收参数：
this.props.match.params

路由配置：
<Route exact path='/A/:id/:name' component={PageA}></Route>
```

- search 传参

```
传递参数：
<Link to='/B?id=996&name=Violet'>Page B</Link>

this.props.history.push("/B?id=996&name=Violet")

接收参数：
this.props.location.search
new URLSearchParams(this.props.location.search)
queryString.parse(this.props.location.search)

路由配置：
<Route exact path='/B' component={PageB}></Route>
```

- query 传参

```
传递参数：
<Link to={{pathname: '/C', query: {id: 996, name: 'Violet'}}}>Page C</Link>

this.props.history.push({pathname: '/C', query: {id: 996, name: 'Violet'})

接收参数：
this.props.location.query

路由配置：
<Route exact path='/C' component={PageC}></Route>
```

- state 传参

```
传递参数：
<Link to={{pathname: '/D', state: {id: 996, name: 'Violet'}}}>Page D</Link>

this.props.history.push({pathname: '/D', state: {id: 996, name: 'Violet'})

接收参数：
this.props.location.state

路由配置：
<Route exact path='/D' component={PageD}></Route>
```

:::tip

- params 传参，使用 props.match.params 接收
- search 传参，使用 props.location.search 接收
- query 传参，使用 props.location.query 接收。刷新会丢失数据。
- state 传参，使用 props.location.state 接收。BrowserRouter 中刷新不会丢失数据，HashRouter 中刷新会丢失数据。

:::

### a 标签和 Link 标签区别

- a 标签在实现页面跳转时，整个页面会重新渲染
- Link 标签只会重新渲染更新变化的部分，避免了不必要的重渲染。

### 如何设置重定向

```
<Switch>
    <Route exact path='/' component={Page}></Route>

    // 方式一
    <Route path='/A'>
      <Redirect to='/'></Redirect>
    </Route>
    
    // 方式二
    <Redirect from='/A' to='/'></Redirect>
</Switch>
```

### React Router 示例

## Redux

### Redux 工作流程

- 首先，用户通过 dispatch 方法发出 Action。
- 然后，Store 自动调用 Reducer，返回新的 State。
- 最后，State 发生变化，Store 调用监听函数，更新 View。

### Redux 三大原则

- 单一数据源  
整个应用的 State 都被存储到一个状态树里面，并且这个状态树，只存在于唯一的 Store 中
- State 状态只读  
State 是只读的，唯一改变 State 的方法就是触发 Action
- 使用纯函数 Reducer 来修改 State

### React Redux 中 UI 组件和容器组件的区别

- UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑
- 两者通过 React Redux 中提供的 connect 方法联系起来  

```
import { connect } from 'react-redux'

// UIComponent 是 UI 组件，ContainerComponent 是容器组件
const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(UIComponent)
```

### Redux 示例

- 示例一

```
import { createStore } from 'redux'

// state
const initialState = {
  counter: 0,
}

// actionCreators
const addAction = num => ({ type: "ADD_NUMBER", num })
const subAction = num => ({ type: "SUB_NUMBER", num })

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

// store
const store = createStore(reducer)

// store 状态变更订阅
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

// action 派发
store.dispatch(addAction(1));
store.dispatch(subAction(1));
```

- 示例二

```
import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={this.props.addNumber.bind(this, 1)}>加一</button>
        <button onClick={this.props.subNumber.bind(this, 1)}>减一</button>
      </div>
    )
  }
}

// state
const initialState = {
  counter: 0,
}

// actionCreators
const addAction = num => ({ type: "ADD_NUMBER", num })
const subAction = num => ({ type: "SUB_NUMBER", num })

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

// store
const store = createStore(reducer)

// mapState
const mapStateToProps = state => ({
  counter: state.counter
})

// mapDispatch
const mapDispatchToProps = dispatch => ({
  addNumber(num) {
    dispatch(addAction(num))
  },
  subNumber(num) {
    dispatch(subAction(num))
  }
})

const App = connect(mapStateToProps, mapDispatchToProps)(Home)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

## Mobx

- @observable
- @action
- @computed

---

- autorun  
自动追踪可观察数据，当在可观察数据发生变化时执行（会初始化执行一次）
- reaction  
接收两个函数参数，第一个函数是用来追踪并返回数据作为第二个函数的输入
- when  
接收两个函数参数，第一个函数返回 true 时，执行第二个函数
