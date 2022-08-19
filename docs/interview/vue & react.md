# Vue & React

## 虚拟 DOM

- 实现原理
  - 用 JS 对象模拟真实 DOM 树，对真实 DOM 进行抽象
  - diff 算法 — 比较两棵虚拟 DOM 树的差异
  - pach 算法 — 将差异应用到真正的 DOM 树
- 优缺点
  - 优点
    - 保证性能下限
    - 防范 XSS 攻击
    - 无需手动操作 DOM
    - 跨平台
  - 缺点
    - 在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
    - 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢

## 性能优化

- 通用
  - 压缩图片
  - 节流防抖
  - 压缩 css、js
  - 组件按需引入
  - key 保证唯一
- Vue
  - 路由懒加载
  - keep-alive 缓存组件
  - v-for 遍历的同时避免使用 v-if
- React
  - 使用 Fragments 避免额外标记
  - 使用 useMemo、useCallback
  - 使用 shouldComponentUpdate、PureComponent、React.memo 来避免不必要的 render
  - 类组件中事件绑定 this 方式，选用 constructor 中绑定 bind 和定义阶段使用箭头函数这两种方式，可避免随着 render 多次生成新的方法实例。

## 对 MVVM 的理解

- Model：代表数据模型，数据和业务逻辑都在 Model 层中定义
- View：代表 UI 视图，负责数据的展示
- ViewModel：负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作

以 Vue 为例：

```
<body>
  <!-- Vue 实例控制的这个元素区域，就是 MVVM 的 V-->
  <div id ="app">
    <p>{{ msg }}</p>
  </div>

  <script>
    // 创建一个 Vue 的实例。vm 对象，就是 MVVM 中的 VM。
    var vm = new Vue({
      el: '#app', 
      // data 就是 MVVM 中的 M 
      data:{ 
        msg: '欢迎学习 Vue' 
      }
    });
  </script>
</body>
```

## Vue、React 对比

- 相同点
  - 都使用虚拟 DOM
  - 都支持服务端渲染
  - 都是数据驱动视图
- 不同点
  - 写法不一样  
    - Vue 使用模板语法
    - React 使用 JSX 语法。
  - 数据绑定不一样  
    - Vue 数据双向绑定
    - React 数据是单向的
  - 状态管理不一样  
    - Vue 状态数据由 data 管理
    - React 中状态数据则由 state 管理，且不能直接修改 state 状态，需要通过 setState 去更新
  - 虚拟 DOM 不一样  
    - Vue 会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树
    - React 中每当组件的状态改变时，整个组件树都会被重新渲染

## Vuex、Redux 对比

- 相同点  
  - 整体流程一致。定义全局 State，触发，修改 State。
- 不同点
  - Vuex 以 mutations 代替 Redux 中的 reducer
  - Vue 中的数据是可变的，而 Redux 使用的是不可变数据  
  - Vuex 支持异步处理；Redux 本身不支持，异步处理需要借助中间件

```
Vuex: view —> mutations —> state 变化 —> view 变化（同步操作） 
      view —> actions —> mutations —> state 变化 —> view 变化（异步操作）

// redux 流程还待完善，不是特别理解
Redux: view —> actions —> reducer —> state 变化 —> view 变化（异步中间件）
```

![vuex](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/vuex.jpg)

![redux](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/redux.jpg)

### 为什么 Vuex 中的 Mutation 和 Redux 中的 Reducer 中不可以作异步操作

因为更改 state 的函数必须是纯函数，纯函数没有任何副作用。如果是异步则会引入额外的副作用，导致更改后的 state 不可预测。

## key 值作用

用于在虚拟 DOM 树中标识节点，追踪元素被修改、添加、移除。可用于管理可复用的元素，更高效地更新虚拟 DOM。
