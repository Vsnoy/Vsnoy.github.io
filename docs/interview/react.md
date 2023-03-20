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

### 受控组件和非受控组件

- 受控组件：只能通过 React 修改数据或状态的组件，就是受控组件
- 非受控组件：与受控组件相反，如 input、select 等组件，本身控件自己就能控制数据和状态的变更，而且 React 是不知道这些变更的

### 事件机制

React 基于浏览器的事件机制，自身实现了一套事件机制，称为合成事件。
目的是为了抹平不同浏览器之间的差异性，实现全浏览器的一致性。

合成事件并没有注册到具体的 DOM 节点上，而是注册到 document 根节点上（v17 之后开始注册到 root 容器节点上），
由统一的事件处理函数 dispatchEvent 来执行事件分发。

合成事件采用事件冒泡机制，当在某具体元素上触发事件时，需要冒泡到顶部被挂载事件的那个元素时，才会真正地执行事件；
而原生事件，当某具体元素触发事件时，会立刻执行该事件。因此若要比较事件触发的先后顺序时，原生事件会先执行，合成事件会后执行。

PS：v17 之后，事件注册到 root 容器节点上，是为了渐进升级，避免 React 多版本共存的场景中事件系统发生冲突。

### 为什么 React 事件要自己绑定 this

React 基于浏览器的事件机制，自身实现了一套事件机制，称为合成事件。

合成事件并没有注册到具体的 DOM 节点上，而是注册到 document 根节点上（v17 之后开始注册到 root 容器节点上），
由统一的事件处理函数 dispatchEvent 来执行事件分发，直接调用对应的事件处理函数。

而函数直接调用，则其中的 this 属于显式绑定，指向 window（严格模式下指向 undefined），而不是组件实例，所以需要自己手动绑定。

### 为什么 React 组件首字母必须大写

babel 在编译时会判断 JSX 中组件的首字母。

- 当首字母为小写时，其被认定为原生 DOM 标签， createElement 的第一个变量被编译为字符串
- 当首字母为大写时，其被认定为自定义组件， createElement 的第一个变量被编译为对象

```
React.createElement(
  type,
  [props],
  [...children]
)
```

### setState 执行机制

属于 `React` 控制之内的会走异步批处理，控制之外的会走同步非批处理。

- 在原生事件或异步代码中，`setState` 是同步，非批处理。
- 在合成事件或钩子函数中，`setState` 是异步，批处理。

React 本身执行的过程和代码都是同步的，只是合成事件和生命周期钩子函数的调用顺序在更新之前，
导致在合成事件和钩子函数中没法立马拿到更新后的值，就是我们所说的异步了。

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

子孙组件（接收方式二）
const value = useContext(context)

<div>{value.name}</div>
<button onClick={value.callback.bind(this, 'violet')}>点击</button>
```

- Mobx
- Redux
- 等等

### React Diff 算法

React Diff 算法是 React 用于比较虚拟 DOM 的算法，它可以在更新组件时，只对需要更新的部分进行重新渲染，从而提高性能。

Diff 算法主要基于三大规律：

- DOM 节点跨层级移动的操作特别少，可忽略不计
- 相同类型的两个组件将会生成相似的树形结构，不同类型的两个组件将会生成不同的树形结构
- 对于同一层级的一组子节点，可以通过唯一的 id 进行区分

基于这三大规律，React Diff 算法也分为三部分：

- Tree Diff
  - 对虚拟 DOM 树进行分层比较，两棵树只会对同一层次的节点进行比较。即比较同一个父节点下的所有子节点。当发现节点不存在时，就会卸载该节点及其所有子节点。
- Component Diff
  - 对于同一类型组件，继续按照 Tree Diff 同层比较策略进行比较
  - 对于不同类型组件，则直接替换组件下的所有子节点
- Element Diff
  - 对于全新的节点，会执行插入操作
  - 对于已有的元素节点，根据其是否可复用，执行移动或删除操作

PS：v16 版本后基于 fiber 的 diff 算法，还待研究

### React Fiber 理解

Fiber 是 React v16 之后推出的新的协调引擎。

在 React v16 之前，React 一旦开始更新，就会递归遍历节点，期间无法中止。
当组件比较庞大，更新操作耗时较长时，就会导致主线程长时间被占用，从而无法响应用户的输入或动画的渲染，很影响用户体验。

Fiber 解决了这个问题，它将更新操作碎片化，分割成多个小任务。
每个任务执行完，就会判断有无超过切片时间，没超过就继续执行下一个任务，超过了就让出主线程。
这时 React 就会检查有无更高优先级的任务要做，如果有那就去执行，没有的话就继续更新。
这样就给其他任务一个执行的机会，避免主线程长时间被独占。

需要注意的是，当低优先级更新渲染任务被更高优先级的任务打断时，低优先级任务先前所做工作则会完全作废，需要重头再来。
而重头再来会导致 render 之前的生命周期重复调用，其中的逻辑也会重复执行，造成隐患，这也是 React 弃用旧版本生命周期的原因。

当低优先级任务长时间被打断无法执行时，会产生任务饥饿行为，这时就会提高低优先级任务的优先级，并让其立即执行。

:::tip 个人理解

- 切片中断任务，无高优先级任务打断，可以恢复
- 切片中断任务，有高优先级任务打断，则需要重头再来。
:::

#### 两大阶段

React Fiber 把一个更新过程分为两个阶段：

- Render 阶段：生成新的 fiber 树并 diff 出变化的节点（可被打断）
- Commit 阶段：更新 DOM，将发生变化的部分渲染到页面上（不可打断）

#### 三层架构

- Scheduler（调度器）：负责调度任务的优先级，高优先级任务优先进入协调器
- Reconciler（协调器）：负责生成新的 fiber 树并 diff 出变化的节点
- Renderer（渲染器）：负责更新 DOM，将发生变化的部分渲染到页面上

#### 双缓冲树

双缓冲是指将需要变化的部分，先在内存中计算改变，计算完成后一次性展示给用户，这样用户就不会感知到明显的计算变化。
新版本 React 中，更新渲染的过程会被频繁中断，如果不使用缓冲技术，那用户就会感知到明显的中断变化。

React 中最多会同时存在两棵 Fiber 树。
已经计算完成并展示到视图中的 Fiber 树称为 current Fiber 树，正在内存中构建的 Fiber 树称为 workInProgress Fiber 树。
workInProgress Fiber 树一旦构建完成，就会与 current Fiber 树互换，循环往复。

#### Fiber 节点之间是怎么关联的

每个 Fiber 节点都有一个 child 指针指向它第一个孩子节点，也会有一个 return 指针指向它的父节点，另外会有一个叫做 sibling 的指针指向它的兄弟节点，
如果它没有孩子、父亲或兄弟节点，指向就为空。由此 Fiber 节点通过指针之间的关联，就形成了一条 Fiber 链表，也就是我们常说的 Fiber 树。

### React 新特性

#### New Hooks

- useTransition
- useDeferredValue
- 等等

#### Auto Batches

合成事件、生命周期、原生事件、异步。  
setState 统统支持批处理。

如果想退出批处理，可用 flushSync 方法包裹，注意其内部的多个 setState 仍然为批处理。

#### Time Slice

在旧版本 React 中，React 一旦开始更新，就会递归遍历节点，期间无法中止。新版本中，更新操作被分解成多个小任务。
每个任务执行完，就会判断有无超过切片时间，没超过就继续执行下一个任务，超过了就让出主线程，让其有机会处理其他的操作，等不忙的时候在继续执行。
从而避免了长时间的阻塞，提高了应用的响应速度和流畅度。

#### Concurrent Mode

##### 为什么需要并发？

因为我们期望一些不重要的更新不会影响用户的操作，比如长列表渲染不会阻塞用户 input 输入，从而提升用户体验。

##### 并发模式是怎样的？

在多个更新并存的情况下，根据更新的优先级，优先执行紧急的更新，其次再执行不那么紧急的更新。  

举个栗子：你正在沙发上看电视，这时候外卖到了，就需要暂停电视去开门拿外卖。这里外卖明显是优先级更高的紧急任务，所以我们暂停优先级较低的电视，先去拿外卖。

##### 并发模式是如何实现的？

- 对于每个更新，为其分配一个优先级 lane[^1]，用于区分其紧急程度。
- 通过 Fiber 结构将不紧急的更新拆分成多段更新，并通过宏任务的方式将其合理分配到浏览器的帧当中。这样就能使得紧急任务能够插入进来。
- 高优先级的更新会打断低优先级的更新，等高优先级更新完成后，再开始低优先级更新。

#### Render API

```
ReactDOM.render(<App />, root)
ReactDOM.createRoot(root).render(<App />)
```

#### Strict Mode

开启严格模式后，每次 setState 更新，React 会渲染组件两次。（正式环境下只会渲染一次）

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

[^1]: lane 表示任务优先级，数字越小优先级越高
