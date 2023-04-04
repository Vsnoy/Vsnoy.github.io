# Vue

## 指令列表

- v-if
- v-else
- v-show
- v-on
- v-bind
- v-for
- v-model
- v-cloak
- 等等

## 修饰符列表

- 事件修饰符
  
  ```
  .stop 阻止事件冒泡行为
  .prevent 阻止事件的默认行为
  .self 事件只在自身触发
  .once 事件只触发一次
  .native 当作原生标签看待
  ```

- 按键修饰符

  ```
  .keyup 键盘抬起
  .keydown 键盘按下
  ```

- 表单修饰符

  ```
  .lazy 延迟双向数据实时绑定
  .trim 去除两边空格
  .number 限制输入为数字
  ```

- 等等

[Vue 常用修饰符](https://blog.csdn.net/m0_67381422/article/details/125358264)
[Vue 32 个修饰符](https://blog.csdn.net/lgno2/article/details/122572348)

## v-if & v-show

- `v-if` 是动态地向 `DOM` 树内添加或者删除 `DOM` 元素，性能消耗大，适合单次切换。
- `v-show` 是通过设置 `DOM` 元素的 `display` 样式属性控制显隐，性能消耗低，适合频繁切换。

## created & mounted

- created：在模板渲染成 `HTML` 前调用，即通常初始化某些属性值，然后再渲染成视图。
- mounted：在模板渲染成 `HTML` 后调用，通常是初始化页面完成后，再对 `HTML` 的 `DOM` 节点进行一些需要的操作。

## methods & computed & watch

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

## ref & reactive

- ref 通常用来定义基本数据类型（也支持对象和数组），reactive 通常用来定义对象和数组
- ref 在 script 中访问数据时需要加 .value，reactive 不需要加
- ref、reactive 赋值过程中可能会丢失响应式

```
let ref_obj = ref({a: 1})
let reactive_obj = reactive({a: 1})

ref_obj.value = {a: 2} // ref 直接赋值不会丢失响应式
reactive_obj = {a: 2} // reactive 直接赋值会丢失响应式
```

```
let ref_obj = ref({a1: 1, b1: {val: 2}})
let reactive_obj = reactive({a2: 1, b2: {val: 2}})

let {a1, b1} = ref_obj.value
let {a2, b2} = reactive_obj

// 不论是 ref 还是 reactive 解构赋值，解构基本数据类型时，都会丢失响应式
a1 = 2
a2 = 2

// 不论是 ref 还是 reactive 解构赋值，解构引用数据类型时，都不会丢失响应式
b1.val = 3
b2.val = 3
```

:::warning
本应丢失响应式的数据操作场景中，若同时存在未丢失响应式的数据操作，则本应丢失响应式的数据操作会保持响应式。原因不明，还待深入研究。
:::

## watch & watchEffect

- watch 可以访问侦听状态变化前后的值，而 watchEffect 无法访问
- watch 默认初始时不会执行回调，而 watchEffect 会

## slot 插槽的三种用法

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

## v-model 实现原理

```
<input v-model="value" />
<input v-bind:value="value" v-on:input="value = $event.target.value" />
```

## data 为什么必须是一个函数

`Vue` 组件可以复用，则可能存在多个实例，如果使用对象形式定义 `data` ，则会导致它们共用一个 `data` 对象，那么状态变更将会影响所有组件实例。

## Vue2 响应式缺点及解决方案

- 无法监测到对象属性的新增或删除
  
  ```
  this.$set(obj, property, value)
  this.$delete(obj, property)
  ```

- 无法监测到数组的变化（push、pop、shift、unshift、splice、sort、reverse 除外）
  - 对数组基于下标的修改
  
    ```
    this.$set(arr, index, value)
    this.arr.splice(index, 1, value)
    ```

  - 对数组 length 的修改

    ```
    // 一般要修改 length，都是为了把数组置空
    this.arr = []
    this.arr.splice(0)
    ```

## 为什么要避免 v-if 和 v-for 连用

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

## 在哪个生命周期钩子函数内调用异步请求

可以在钩子函数 `created` 、`beforeMount` 、`mounted` 中进行调用，因为在这三个钩子函数中，`data` 已经创建，可以将服务端返回的数据进行赋值。

推荐在 `created` 钩子函数中调用异步请求，有以下优点：

- 能更快获取到服务端数据，减少页面加载时间，用户体验更好。
- SSR 不支持 beforeMount、mounted 钩子函数，放在 created 中有助于一致性。

## 在哪个生命周期钩子函数内操作 DOM

在钩子函数 `mounted` 被调用前，`Vue` 已经将编译好的模板挂载到页面上，所以在 `mounted` 中可以访问操作 `DOM` 。

## 父组件监听子组件的生命周期钩子函数

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
