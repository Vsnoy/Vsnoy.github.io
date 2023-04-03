# Vue & React

## 虚拟 DOM

从本质上来说，虚拟 DOM 就是一个 JS 对象，通过对象的方式来对真实 DOM 进行抽象。
在对真实 DOM 进行更新前，会先对前后两颗虚拟 DOM 树进行比较，而后将其中的差异一次性应用到真实 DOM 树上。
从而有效减少了页面渲染的次数，减少了重绘重排的次数，提高了渲染性能。

- 实现原理
  - 用 JS 对象模拟真实 DOM 树，对真实 DOM 进行抽象
  - diff 算法 — 比较两棵虚拟 DOM 树的差异
  - patch 算法 — 将差异应用到真正的 DOM 树
- 优缺点
  - 优点
    - 跨平台
    - 减少 DOM 操作，将多次 DOM 操作合并为一次操作
    - 避免手动操作 DOM，原生 DOM API 操作较为繁琐
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
  - 使用 lazy 和 Suspense 将页面设置为懒加载
  - 使用 shouldComponentUpdate、PureComponent、React.memo 来避免不必要的 render
  - 类组件中事件绑定 this 方式，选用 constructor 中绑定 bind 和定义阶段使用箭头函数这两种方式，可避免随着 render 多次生成新的方法实例。

## 对 MVVM 的理解

MVVM 是 ​​Model-View-ViewModel ​​​缩写。  
Model 代表数据模型，View 代表 UI 视图，ViewModel 是 连接 View 和 Model 之间的桥梁。  
数据会绑定到 ViewModel 并自动将数据渲染到视图中，视图变化的时候会通知 ViewModel 层更新数据。

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
  - 组件化
  - 都使用虚拟 DOM
  - 都是数据驱动视图
  - 都是单向数据流
- 不同点
  - 写法（Vue 推荐模板写法，React 推荐 JSX 写法）
  - 响应式（Vue 数据驱动视图自动化更新，React 则需要通过 setState 手动更新）
  - 数据绑定（Vue 支持单向或双向数据绑定，React 默认只支持单向数据绑定，若要实现双向数据绑定，可使用受控组件）
  - Diff 算法

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

用于标记节点，帮助识别哪些元素改变了。可用于管理可复用的元素，更高效地更新虚拟 DOM。
