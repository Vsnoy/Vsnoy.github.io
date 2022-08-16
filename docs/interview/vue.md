# Vue

## Vue 基础

### 生命周期钩子函数

`Vue` 的生命周期就是 `Vue` 实例从创建到销毁的过程。

`activated` 和 `deactivated` 是 `keep-alive` 独有的生命周期。用 `keep-alive` 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 `deactivated` 钩子函数，命中缓存渲染后会执行 `activated` 钩子函数。

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestory
- detoryed

在 `created` 、`beforeMount` 、`mounted` 阶段可进行异步请求。  
在 `mounted` 阶段可操作 `DOM`。

### 父子组件生命周期钩子函数执行顺序

- 挂载过程
  1. 父组件 beforeCreate
  2. 父组件 created
  3. 父组件 beforeMount
  4. 子组件 beforeCreate
  5. 子组件 created
  6. 子组件 beforeMount
  7. 子组件 mounted
  8. 父组件 mounted

- 更新过程
  1. 父组件 beforeUpdate
  2. 子组件 beforeUpdate
  3. 子组件 updated
  4. 父组件 updated

- 卸载过程
  1. 父组件 beforeDestroy
  2. 子组件 beforeDestroy
  3. 子组件 destroyed
  4. 父组件 destoryed

### created 和 mounted 钩子函数区别

- created：在模板渲染成 `HTML` 前调用，即通常初始化某些属性值，然后再渲染成视图。
- mounted：在模板渲染成 `HTML` 后调用，通常是初始化页面完成后，再对 `HTML` 的 `DOM` 节点进行一些需要的操作。

### 在哪个生命周期钩子函数内调用异步请求

可以在钩子函数 `created` 、`beforeMount` 、`mounted` 中进行调用，因为在这三个钩子函数中，`data` 已经创建，可以将服务端返回的数据进行赋值。

推荐在 `created` 钩子函数中调用异步请求，有以下优点：

- 能更快获取到服务端数据，减少页面加载时间，用户体验更好。
- SSR 不支持 beforeMount、mounted 钩子函数，放在 created 中有助于一致性。

### 在哪个生命周期钩子函数内操作 DOM

在钩子函数 `mounted` 被调用前，`Vue` 已经将编译好的模板挂载到页面上，所以在 `mounted` 中可以访问操作 `DOM` 。

### 父组件如何监听子组件的生命周期钩子函数

以父组件监听子组件 `mounted` 生命周期钩子函数为例，有以下两种方法

```
// Parent.vue
<Child @mounted="doSomething"/>
    
// Child.vue
mounted() {
  this.$emit("mounted");
}
```

```
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>
    
//  Child.vue
mounted(){
  console.log("mounted");
}
```

### data 为什么必须是一个函数

`Vue` 组件可以复用，则可能存在多个实例，如果使用对象形式定义 `data` ，则会导致它们共用一个 `data` 对象，那么状态变更将会影响所有组件实例。

### 常用指令

- v-if
- v-else
- v-show
- v-on
- v-bind
- v-for
- v-model
- v-cloak

### v-if 和 v-show 区别

- `v-if` 是动态地向 `DOM` 树内添加或者删除 `DOM` 元素，性能消耗大，适合单次切换。
- `v-show` 是通过设置 `DOM` 元素的 `display` 样式属性控制显隐，性能消耗低，适合频繁切换。

### v-model 实现原理

```
<input v-model="value" />
<input v-bind:value="value" v-on:input="value = $event.target.value" />
```

```
在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件

父组件：
<Child v-model="message"></Child>

子组件：
<div>{{value}}</div>

props:{
  value: String
},
methods: {
  test1(){
    this.$emit('input', '小红')
  },
},
```

### 为什么要避免 v-if 和 v-for 连用

`Vue2` 中 `v-for` 优先级高于 `v-if` ，`Vue3` 中则相反。

在 `Vue2` 中同时使用时，`v-for` 会优先作用，造成性能浪费；  
在 `vue3` 中同时使用时，`v-if` 会优先作用，导致其访问不了 `v-for` 中的变量。

一般我们在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目（比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性（比如 activeUsers)，让其返回过滤后的列表。  
  
```
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>

computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```

- 为了避免渲染本应该被隐藏的列表（比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 （比如 ul、ol)。
  
```
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

### 双向绑定/响应式原理

- `Vue2` 采用数据劫持结合发布订阅模式，通过 `Object.defineProperty` 来劫持各个属性的 `setter/getter` ，在数据变动时发布消息给订阅者，触发相应的监听回调。  
- `Vue3` 采用基于代理 `proxy` 的 `observer` 实现，提供全语言覆盖的反应性跟踪，消除了 `Vue2` 基于 `Object.defineProperty` 实现所存在的诸多限制。

:::tip

Vue2 缺点

- 无法监测到对象属性的新增或删除
- 无法监测到数组的变化（push、pop、shift、unshift、splice、sort、reverse 除外）
  - 对数组基于下标的修改
  - 对数组 length 的修改
  :::

### methods、computed、watch 区别

- methods  
没有缓存，只要调用，就会执行。
- computed  
具有缓存性，依赖于其他属性值，只有当属性值发生改变的时候才会重新计算。
- watch  
没有缓存，监听 data 中的属性，属性值只要发生变化就会执行。

```
export default {
  data() {
    return {
      firstName: 'Violet',
      lastName: 'Evergarden',
      
      msg: ''
    }
  },
  methods:{
    getFullName() {
      console.log(this.fullNameA, this.fullNameB)
    }
  },
  computed:{
    fullNameA() { // 仅读取
      return this.firstName + ' ' + this.lastName
    },
    fullNameB: { // 读取和设置
      get() {
        return this.firstName + ' ' + this.lastName
      }
      set(val) {
        this.msg = val
      }
    }
  },
  watch:{
    firstName(newVal, oldVal) {
      this.fullName = newVal + ' ' + this.lastName
    },
    lastName: {
      handler(newVal, oldVal) {
        this.fullName = this.firstName + ' ' + newVal
      }
    }
  }
}
```

### slot 插槽用法

插槽可分为三种：默认插槽、具名插槽、作用域插槽。

- 默认插槽

```
父组件：
<Child>
  <template>默认插槽</template>
</Child>

子组件：
<div>
  <slot>默认插槽 - 后备内容</slot>
</div>

渲染成：
<div>
  <div>默认插槽</div>
</div>
```

- 具名插槽

```
父组件：
<Child>
  <template v-slot:violet>具名插槽</template>
</Child>

子组件：
<div>
  <slot name="violet">具名插槽 - 后备内容</slot>
</div>

渲染成：
<div>
  具名插槽
</div>
```

- 作用域插槽

```
父组件：
<Child>
  <template v-slot:violet="slotProps">
    作用域插槽 - {{slotProps.user.name}}
  </template>
</Child>

子组件：
<div>
    <slot name="violet" :user="user">作用域插槽 - 后备内容</slot>
</div>

data(){
  return {
    user: {
      name: 'violet'
    }
  }
}

渲染为：
<div>
  作用域插槽 - violet
</div>
```

### keep-alive 作用

可以使被包含的组件保留状态，避免重新渲染。

```
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"></router-view>
</kepp-alive>

{
  path: '/',
  name: 'xxx',
  component: () => import('../src/views/xxx.vue'),
  meta: {
    keepAlive: true // 需要被缓存
  }
}
```

```
// 将缓存 name 为 A 或 B 的组件
<keep-alive include='A, B'>
  <router-view/>
</keep-alive>

// 将不缓存 name 为 C 的组件
<keep-alive exclude='C'>
  <router-view/>
</keep-alive>
```

### 数据更新，视图会立即同步执行重新渲染吗

不会立即同步执行重新渲染。

`Vue` 实现响应式并不是数据发生变化之后 `DOM` 立即变化，而是按一定的策略进行 `DOM` 的更新。
`Vue` 在更新 `DOM` 时是异步执行的。只要侦听到数据变化， `Vue` 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 `watcher` 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 `DOM` 操作是非常重要的。
然后，在下一个的事件循环 `tick` 中，`Vue` 刷新队列并执行实际（已去重的）工作。

### $nextTick 作用

`Vue` 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
`nextTick` 的回调函数会等到同步任务执行完毕，`DOM` 更新后才触发。

```
<div id="app">
  <div id="div" v-if="showDiv">hello，我是小四</div>
  <button @click="getText">获取 div 内容</button>
</div>

<script>
var app = new Vue({
  el: "#app",
  data: {
    showDiv : false
  },
  methods: {
    getText: function() {
      this.showDiv = true;

      // var text = document.getElementById('div').innnerHTML;
      // console.log(text);

      this.$nextTick(function() {
        var text = document.getElementById('div').innnerHTML;
        console.log(text);  
      });
    }
  }
})
</script>
```

### 常用修饰符

- .prevent  
阻止事件的默认行为
- .stop  
阻止单击事件冒泡
- .self  
事件在该元素自身触发时触发回调
- .once  
事件只触发一次

### 组件通信

- props/$emit

```
父组件：
<Child name="violet" @emit="emitA"></Child>

methods: {
  emitA(msg){
    console.log(msg)
  }
}

子组件：
<div @click="emitB"></div>

props: ['name'],
methods: {
  emitB(){
    this.$emit("emit", "Violet 天下第一")
  }
}
```

- eventBus

```
// main.js
Vue.prototype.eventBus = new Vue()

组件 A （发送事件）
this.eventBus.$emit('sayHello', "Hello Vue")

组件 B （接收事件）
this.eventBus.$on('sayHello', (msg) => {
  console.log(msg)
})
```

- provide/inject

```
父组件：
provide() {
  return {
    num: this.num
  };
}

子组件：
inject: ['num']
```

- Vuex
- 等等

## Vue Router

### 如何配置 404 页面

将 `404` 页面对应路由配置放到所有路由的配置信息的最后，避免对其他路由 `path` 匹配造成影响。

```
const router = new VueRouter({
  mode:"history",
  routes: [
    {
      name: "A",
      path: "/a",
      component: () => import("@/views/A.vue")
    }, 
    {
      name: "B",
      path: "/b",
      component: () => import("@/views/B.vue")
    }, 
    {
      name: "404",
      path: "*",
      component: () => import("@/views/404.vue")
    }
  ]
})
```

### hash 和 history 模式区别

- hash 模式：基于 H5 `hashchange` 事件
  - url 路径中会出现 # 号，# 号及其后面的字符即为 hash 值
  - hash 值不包括在 http 请求中，它是交由前端路由处理，所以 hash 值改变时不会刷新页面，也不会向服务器发送请求
- history 模式：基于 H5 History API 中新增的 `pushState` 和 `replaceState` 方法
  - url 路径中不会出现 # 号
  - 依赖后台配置，若后台没给相应配置，页面刷新就会出现 404

### $route 和 $router 区别

- $route 路由信息对象，可用于获取 name 、 path 、 query 、 params 等路由信息参数
- $router 路由实例对象，可用于路由跳转，想要导航到不同 URL，则使用 $router.push 方法

### 路由传参的两种方式及区别

- params 传参

```
// 传递参数
<router-link :to="{ name: 'A', params: { id: uid } }">跳转</router-link>

this.$router.push({ name: 'A', params: { id: uid } })
this.$router.push({ '/a/' + uid })

// 接收参数
this.$route.params.id
还可通过配置 props 来接收，待试验

// 路由配置
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "A",
      path: "/a/:id",
      component: () => import("@/views/A.vue")
    }
  ]
})
```

- query 传参

```
// 传递参数
<router-link :to="{ name: 'B', query: {id: uid} }">跳转</router-link>
<router-link :to="{ path: '/b', query: {id: uid} }">跳转</router-link>

this.$router.push({ name: 'B', query: {id: uid} })
this.$router.push({ path: '/b', query: {id: uid} })
this.$router.push({ '/b?id' + uid })

// 接收参数
this.$route.query.id

// 路由配置
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "B",
      path: "/b",
      component: () => import("@/views/B.vue")
    }
  ]
})
```

:::tip

- params 传参必须使用 name 引入路由；query 传参则没有限制，path、name 皆可
- 使用 params 时，如若路由配置中 path 后面未添加参数名，页面刷新时数据会丢失；query 则没有限制
- 使用 params 时，如若路由配置中 path 后面未添加参数名，参数不会在地址栏中显示，而若路由配置中 path 后面添加了参数名，参数会在地址栏中显示；query 所传参数则默认在地址栏中显示。二者链接格式如下。
  
  ```
  // params
  history 模式：http://localhost:8080/a/111
  hash 模式：http://localhost:8080/#/a/111
                                                                              
  // query
  history 模式：http://localhost:8080/b?id=222
  hash 模式：http://localhost:8080/#/b?id=222
  ```

:::

### 声明式导航和编程式导航

- 声明式导航

```
<router-link to="/home"></router-link> 

<router-link :to="{ name: 'Home' }"></router-link> 

<router-link :to="{ name: 'Home', params: { id: 1 } }"></router-link> 

<router-link :to="{ path: '/home', query: { id: 1 } }"></router-link>
```

- 编程式导航

```
this.$router.push('/home')

this.$router.push({ name: 'Home' })

this.$router.push({ name: 'Home', params: { id: 1 } })

this.$router.push({ path: '/home', query: { id: 1 } })

// 不会记录本次历史
this.$router.replace('/home')

// 跳转到历史的某一次，如果是负数就是后退
this.$router.go(-1)
```

### Vue Router 示例

```
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "A",
      path: "/a",
      component: () => import("@/views/A.vue")
    }, 
    {
      name: "B",
      path: "/b",
      redirect: '/b/b1',
      component: () => import("@/views/B.vue"),
      children: [
        {
          name: "B1",
          path: "b1",
          component: () => import("@/views/B1.vue")
        }, 
        {
          name: "B2",
          path: "b2/:id",
          props: true, // 将 url 中的参数传递给组件，在组件中通过 props 来接收
          component: () => import("@/views/B2.vue")
        }
      ]
    }
  ]
})

export default router
```

## Vuex

### Vuex 有哪些属性

State、Getters、Mutations、Actions、Modules

- State

```
基本数据存储
this.$store.state.xxx 属性
```

- Getters

```
从基本数据派生出的数据，类似于计算属性，不过不具备缓存性
this.$store.getters.xxx 属性
```

- Mutations

```
更改 vuex 中 state 数据，只能进行同步操作
this.$store.commit('xxx 方法名', '值')
```

- Actions

```
与 Mutations 差不多，不同之处在于 Actions 可以包含任意异步操作
this.$store.dispatch('xxx 方法名', '值')
```

- Modules

```
将 Vuex 中的 Store 分割成模块，每个模块拥有自己的 State、Getters、Mutations、Actions 
```

### Mutations 和 Actions 的区别

总体而言，两者差不多，区别主要有以下两点：

- Action 提交的是 Mutation，而不是直接变更状态
- Action 可以包含任意异步操作

### Vuex 示例

```
import Vue from 'vue'
import Vuex from 'vuex'

// 使用 vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    incrementCount(state, getters) {
      return state.count + 10;
    }
  },
  mutations: {
    incrementSync(state, payload) {
      state.count += payload.num;
    }
  },
  actions: {
    incrementAsync(context, payload) {
      let num = payload.num;
      setTimeout(() => {
        context.commit('incrementSync', {
          num
        })
      }, 1000);
    }
  }
})

export defalut store

-------------------------------------

// 调用 state
this.$store.state.count

// 调用 getters
this.$store.getters.incrementCount

// 调用 mutations
this.$store.commit('incrementSync', {
  num: 10
})

// 调用 actions
this.$store.dispatch('incrementAsync', {
  num: 10
})
```

## Vue 3.x

### 有什么变化

- 响应式原理的改变
- 组合式 API 的引入

```
<template>
  <button @click="increment">
    Count: {{ count }}
  </button>
</template>
 
<script>
// Composition API 将组件属性暴露为函数，因此第一步是导入所需的函数
import { ref, computed, onMounted } from 'vue'
 
export default {
  setup(props, context) {
    // 对应于 Vue2 中的 data 函数
    const count = ref(0)
 
    // 对应于 Vue2 中的方法
    function increment() {
      count.value++
    }
    
    // 对应于 Vue2 中的计算属性
    const twiceCount = computed(() => { count.value * 2 })
    
    watch(count, (newVal, oldVal) => {
      console.log(newVal)
    })
    
    // 对应于 Vue2 中的 mounted 声明周期
    onMounted(() => {
      console.log('component mounted!')
    })

    return {
      count,
      increment,
      twiceCount
    }
  }
}
</script>
```

### 生命周期钩子函数对比

| Vue2          | Vue3            |
| ------------- | --------------- |
| beforeCreate  | ❌setup（替代）    |
| created       | ❌setup（替代）    |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| beforeDestory | onBeforeUnmount |
