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
- beforeDestory
- detoryed
- activated
- deactivated

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

### 为什么要避免 v-if 和 v-for 连用

`Vue2` 中 `v-for` 优先级高于 `v-if` ，`Vue3` 中则相反。

在 `Vue2` 中同时使用时，`v-for` 会优先作用，造成性能浪费；  
在 `Vue3` 中同时使用时，`v-if` 会优先作用，导致其访问不了 `v-for` 中的变量。

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

### 响应式原理

响应式，即数据驱动视图自动化更新。我们修改数据，视图也会随之响应更新。

- `Vue2` 采用数据劫持结合发布订阅模式，通过 `Object.defineProperty` 来劫持各个属性的 `setter/getter` 。当我们访问数据时，会触发 `getter` 进行依赖收集；修改数据时，会触发 `setter` 派发通知，触发相应的监听回调。

  ```
  Object.defineProperty(obj, key, {
    // 拦截 get，当我们访问 data.key 时会被这个方法拦截到
    get: function getter () {
        // 我们在这里收集依赖
        return obj[key];
    },

    // 拦截 set，当我们为 data.key 赋值时会被这个方法拦截到
    set: function setter (newVal) {
        // 当数据变更时，通知依赖项变更 UI
    } 
  })
  ```  
  
- `Vue3` 与 `Vue2` 响应式原理核心思想一致，区别在于 `Vue3` 数据劫持是基于 `Proxy` 代理，其拦截的是整个对象，而不再是某个属性。`Proxy` 可以创建一个代理对象，实现对原对象的代理。外界对原对象进行的访问，都必须通过这层代理对象的拦截。

  ```
  let nObj = new Proxy(obj, {
    // 拦截 get，当我们访问 nObj.key 时会被这个方法拦截到
    get: function (target, propKey, receiver) {
      return Reflect.get(target, propKey, receiver);
    },

    // 拦截 set，当我们为 nObj.key 赋值时会被这个方法拦截到
    set: function (target, propKey, value, receiver) {
      return Reflect.set(target, propKey, value, receiver);
    }
  })
  ```

:::tip
Vue2 响应式缺点

- 无法监测到对象属性的新增或删除
- 无法监测到数组的变化（push、pop、shift、unshift、splice、sort、reverse 除外）
  - 对数组基于下标的修改
  - 对数组 length 的修改
:::

### 双向数据绑定原理

双向绑定，即数据和视图相互驱动更新。在 `Vue` 中，一般使用 `v-model` 来体现双向绑定。

```
<input v-model="value" />
<input v-bind:value="value" v-on:input="value = $event.target.value" />
```

:::tip
聊到这个时候，也要谈谈响应式原理，即数据驱动视图。
:::

### 数据更新，视图会立即同步执行重新渲染吗

不会立即同步执行重新渲染。

`Vue` 实现响应式并不是数据发生变化之后 `DOM` 立即变化，而是按一定的策略进行 `DOM` 的更新。
`Vue` 在更新 `DOM` 时是异步执行的。只要侦听到数据变化， `Vue` 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 `watcher` 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 `DOM` 操作是非常重要的。
然后，在下一个的事件循环 `tick` 中，`Vue` 刷新队列并执行实际（已去重的）工作。

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
| destoryed | onUnMounted |
| activated | onActivated |
| deactivated | onDeactivated |
