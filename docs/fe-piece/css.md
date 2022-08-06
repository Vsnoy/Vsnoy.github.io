# CSS

## nth-child & nth-of-type

### nth-child

`:nth-child(n)` 选择器匹配父元素的第 `N` 个子元素，不论元素的类型。  

```
<div>
  <p class="green">p1</p>
  <p class="green">p2</p>
  <div class="green">div1</div>
  <div class="green">div2</div>
</div>

div p:nth-child(1) {
  background-color: green;
}
```

```
<div>
  <p class="green">p1</p>
  <p class="green">p2</p>
  <div class="green">div1</div>
  <div class="green">div2</div>
</div>

div div:nth-child(1) {
  background-color: green;
}
```

![nth_child_01](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_child_01.png)

![nth_child_02](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_child_02.png)

### nth-of-type

`:nth-of-type(n)` 选择器匹配父元素特定类型的第 `N` 个子元素，且和标签类型有关，可能会匹配到多组。

```
<div>
  <p class="green">p1</p>
  <p class="green">p2</p>
  <div class="green">div1</div>
  <div class="green">div2</div>
</div>

div .green:nth-of-type(1) {
  background-color: green;
}

```

```
<div>
  <p>p0</p>
  <p class="green">p1</p>
  <p class="green">p2</p>
  <div class="green">div1</div>
  <div class="green">div2</div>
</div>

div .green:nth-of-type(1) {
  background-color: green;
}

```

![nth_of_type_01](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_of_type_01.png)

![nth_of_type_02](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_of_type_02.png)

[nth-of-type 详解](https://juejin.cn/post/6844904174937866247)  
[:first-of-type 的误用](https://liyucang-git.github.io/2019/07/16/first-of-type%E7%9A%84%E8%AF%AF%E7%94%A8/)

## 文本溢出隐藏

### 单行文本

```
.textflow {
  overflow: hidden; 
  white-space: nowrap; // 文本不换行
  text-overflow: ellipsis; // 文本超出呈现省略号
}
```

### 多行文本

```
.textflow {
  overflow: hidden;
  display: -webkit-box; // 盒模型
  -webkit-line-clamp: 4; // 控制文本行数
  -webkit-box-orient: vertical; // 垂直布置子元素
}

PS: 该方法不兼容 IE
```
