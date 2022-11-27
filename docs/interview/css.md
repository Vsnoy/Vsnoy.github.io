# CSS

## Flex

`Flex` 布局会使项目的 `float` 、`vertical-align` 、`clear` 属性失效，不包括项目内的子元素。

- 容器属性
  - flex-direction
  - flex-wrap
  - flex-flow
  - justify-content
  - align-items
  - align-content
- 项目属性
  - order
  - flex-grow
  - flex-shrink
  - flex-basis
  - flex
  - align-self

:::tip

flex 属性值

```
- flex 默认值  
  0 1 auto

- flex: 1  
  1 1 0%

- flex: 20%  
  1 1 20%

- flex: auto  
  1 1 auto
  
- flex: none  
  0 0 auto
```

:::

## Grid

`Grid` 布局会使项目的 `float` 、`vertical-align` 、`display: inline-block` 等属性失效。不包括项目内的子元素。

- 容器属性
  - grid-template-rows、grid-template-columns、grid-template-areas
  - grid-template
  - grid-auto-rows、grid-auto-columns
  - grid-auto-flow
  - grid-row-gap、grid-column-gap
  - grid-gap
  - grid
  - justify-content、align-content
  - place-content
  - justify-items、align-items
  - place-items
- 项目属性
  - grid-row-start、grid-row-end、grid-column-start、grid-column-end
  - grid-row、grid-column
  - grid-area
  - justify-self、align-self
  - place-self

:::tip
最常用

```
grid-template-rows / grid-template-columns / grid-template-areas
grid-gap
grid-row / grid-column
grid-area
```

:::

## 属性

### display

```
none、inline、block、inline-block、table、flex、grid、inherit 等
```

### position

```
static、relative、absolute、fixed、sticky
```

### border-radius

```
/*值的省略。若使用百分比，相对的则是包含块的宽高。*/
border-radius: 10px 20px 30px 40px;  // 四个值： 左上、右上、右下、左下
border-radius: 10px 20px 30px;  // 三个值：左上、右上/左下、右下
border-radius: 10px 20px;  // 两个值：左上/右下、右上/左下
border-radius: 10px;  // 一个值：左上/右上/右下/左下

-------------------------------------------

/*值的拆分 1.0*/
border-radius: 10px 20px 30px 40px;

border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;

-------------------------------------------

/*值的拆分 2.0，圆角水平半径和垂直半径*/
border-radius: 10px 20px 30px 40px / 50px 60px 70px 80px;

border-top-left-radius: 10px 50px;
border-top-right-radius: 20px 60px;
border-bottom-right-radius: 30px 70px;
border-bottom-left-radius: 40px 80px;
```

### transform

```
transform: translate | scale | rotate | skew | matrix

transform: translate(10px, 10px)  // 位移
transform: scale(2, 3)  // 缩放
transform: rotate(10deg)  // 旋转
transform: skew(10deg, 10deg)  // 倾斜
transform: matrix()  // 待研究
```

### transition

```
transition: transition-property, transition-duration,      // 常用
            transition-timing-function, transition-delay   // 不常用
            
transition-timing-function 过渡函数
ease: 先加速，后减速（加速时间短）
linear: 恒速
ease-in: 加速
ease-out: 减速
ease-in-out: 先加速后减速

---------------------------

举个栗子
.violet{
  width: 200px;
  height: 100px;
  background-color: pink;
  transition: width 1s;
}

.violet:hover{
  width: 100px;
}
```

### animation

```
animation: animation-name, animation-duration,              // 常用
           animation-timing-function, animation-delay,      // 不常用
           animation-iteration-count, animation-direction   // 常用
           
-----------------------------

举个栗子
@keyframes rainbow {
  0% { background: green; }
  50% { background: orange; }
  100% { background: red; }
}

.violet {
  animation: rainbow 2s infinite reverse;
}
```

:::tip
`transition` 和 `animation` 属性区别

- `transition` 是过渡属性。需要触发，并且只有开始和结束的关键两祯
- `animation` 是动画属性。不需要触发，可以设置好时间自动开始，并可以定义多帧动画
:::

## 继承

- 无继承性的属性
  - display
  - 文本属性  
    text-shadow、text-decoration 等
  - 背景属性  
    background、background-color、background-image、background-position、background-repeat、background-attachment
  - 定位属性  
    float、position、top、right、bottom、left、overflow、z-index 等
  - 盒子模型属性  
    width、height、margin、padding、border
  - 等等
- 有继承性的属性
  - visibility
  - 文本属性  
    text-align、text-indent、text-transform、line-height、color 等
  - 字体属性  
    font-size、font-weight、font-style、font-family
  - 等等

:::tip
`text-` 、`font-` 、`line-` 以及 `color` 属性大多可以被继承  
文本、字体、行高、文字颜色大多可以被继承
:::

## 优先级

!important > 行内 > 内部 > 外部 > id > 类 | 伪类 | 属性 > 标签 | 伪元素 > 通配符 > 继承 > 浏览器默认

## 居中

### 水平居中

- 块级元素
  - margin: 0 auto
  - 绝对定位
    - 绝对定位 + calc
    - 绝对定位 + 负 margin
    - 绝对定位 + transform
  - flex
  - grid
- 行内元素
  - text-align: center

### 垂直居中

- 块级元素
  - 绝对定位
    - 绝对定位 + calc
    - 绝对定位 + 负 margin
    - 绝对定位 + transform
  - flex
  - grid
- 行内元素
  - line-height  
    子元素行高等于父元素宽度。仅对单行文本有效。

### 水平垂直居中 <Badge text="重点"/>

- 绝对定位
  - 绝对定位 + calc
  - 绝对定位 + 负 margin
  - 绝对定位 + transform
  - 绝对定位 + 上下左右 0 + margin: auto
- flex
- grid

## 布局

### 两栏布局

- 浮动
  - float + calc
  - **float + margin**
  - **float + BFC**
- 定位
  - 绝对定位 + margin
- inline-block + calc
- **flex**
- **grid**

### 三栏布局

- 两列定宽一列自适应  
  待整理~
- 两侧定宽中间自适应
  - 圣杯布局
  - 双飞翼布局
  - 浮动
    - float + calc
    - **float + margin**
    - **float + BFC**
  - 定位
  - **flex**
  - **grid**

## 绘图

### 三角形

#### 常规三角形

需要哪个三角形就给它颜色，其余三边透明。  
以向下的三角形为例。

```
div {
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top: 20px solid red;
}
```

#### 直角三角形

要直角三角形，则只能设置两条边，上下和左右混搭，一条给颜色，一条透明。  
以靠左向下的直角三角形为例。

```
div {
  width: 0;
  height: 0;
  border-right: 20px solid transparent;
  border-top: 20px solid red;
}
```

### 扇形

在画常规三角形的基础上加上 `border-radius` 。

```
div {
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top: 20px solid red;
  border-radius: 50%;
}
```

### 0.5px 线

- scale  

  ```
  transform: scale(0.5);
  ```

- meta  
  此方法只针对于移动端，只在移动端上才能看到效果。
  
  ```
  <meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
  ```
  
## 清除浮动

- 额外标签法
  - 浮动元素末尾添加一个空标签  
  
    ```
    <div style="clear:both"></div>
    ```

  - 浮动元素末尾添加一个 br 标签  
  
    ```
    <br clear="all"></br>
    ```

- 父元素 BFC 法
  - 父元素设置 overflow  
  
    ```
    可以给浮动元素的父级添加属性 overflow: auto | hidden;
    ```

- 父元素伪元素法
  - after 单伪元素法  

    ```
    .clearfix::after{
      content: ".";
      display: block;
      height: 0;
      visibility: hidden;
      clear: both;
    }
    ```

  - before、after 双伪元素法

    ```
    .clearfix::before,.clearfix::after { 
        content: "";
        display: table; 
    }

    .clearfix::after {
        clear: both;
    }
    ```

## 隐藏元素

- display: none  
  不占位置
- visibility: hidden  
  占位置
- opacity: 0  
  占位置
- transform: scale(0)  
  占位置
- clip/clip-path  
  占位置
- H5 hidden 属性  
  不占位置
- position: absolute  
  绝对定位移出可视区域
- z-index 负值  
  其他元素覆盖住该元素

## 层叠上下文

层叠上下文是用来描述页面中元素在垂直于屏幕方向排列规则而创建出的模型。  
层叠上下文中重叠的元素按照一定的规则在垂直方向排列。

### 产生条件

- 根元素 （html 元素）
- 定位元素
  - relative、absolute（z-index 不为 auto）
  - fixed、sticky
- CSS3 属性
  - opacity 属性值小于 1
  - flex 容器的子元素（z-index 不为 auto）
  - grid 容器的子元素（z-index 不为 auto）
  - transform、filter、perspective、clip-path、
    mask、mask-image、mask-border
    属性值不为 none
  - 等等

### 层叠水平  

决定了在同一个层叠上下文中，元素在 z 轴上的显示顺序，就像桌子上纸张的顺序、信封里信纸的顺序。
  
### 层叠顺序  

层叠水平只是一个概念，那么我们根据什么来判定元素的层叠水平呢？那就是层叠顺序。

在同一层叠上下文中，层叠顺序自下而上依次是：层叠上下文的根、`z-index` 为负、`block` 、`float` 、`inline/inline-block` 、`z-index` 为 `0` 或 `auto` 、`z-index` 为正。
![stacking_context](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/stacking_context.png)
  
### 层叠准则

- 同一层叠上下文中的元素，按照层叠顺序排列
- 不同层叠上下文中的元素，按层叠水平进行整体排列
- 层叠水平与层叠顺序都相同，在 `DOM` 流中处于后面的元素会覆盖前面的元素

## 块级格式化上下文

块级格式化上下文（ `BFC` ），是一块独立的渲染区域。
规定了内部元素如何布局，并且内部元素与外部元素之间相互隔离，互不影响。

### 产生条件

- 根元素（html 元素）
- 浮动元素（float 不为 none）
- 定位元素（position 为 absolute 或 fixed）
- display（inline-block、table）
- overflow 不为 visible
- flex 容器的子元素
- grid 容器的子元素
- 等等

### 渲染规则

- BFC 元素内部的浮动元素会参与高度计算（可用于清除浮动）
- BFC 元素内部的父子或兄弟元素垂直方向上会产生 margin 折叠（可用于防止 margin 折叠）
- BFC 元素不会和浮动元素重叠（可用于两栏布局）
- BFC 元素内部元素与外部元素相互隔离，互不影响

### 使用场景

- 清除浮动
- 防止 margin 塌陷和合并
- 防止元素被浮动元素覆盖（两栏布局）

## 雪碧图

将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 `CSS` 的 `background-image` 、`background-repeat` 、`background-position` 组合进行背景定位。

优点：

- 减少 HTTP 请求数，极大地提高页面加载速度
- 增加图片信息重复度，提高压缩比，减少图片大小
- 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：

- 图片合并麻烦
- 维护麻烦，修改一个图片可能需要重新布局整个图片，样式

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

## margin 折叠

垂直方向上会出现 `margin` 折叠，水平方向上不会出现。

### margin 合并  

兄弟元素垂直排列，两者之间的间距取的是两者所设置 `margin` 的最大值。

解决方案

- 其中一个兄弟元素包裹在 `BFC` 中

### margin 塌陷  

父子元素嵌套，外层边距取的是两者所设置 `margin-top` 的最大值。

解决方案

- 父元素设置边框
- 父元素包裹在 `BFC` 中

:::tip
垂直方向外边距合并计算

- 两个相邻的外边距都是 **正数** 时，折叠外边距是两者中较大的值。
- 两个相邻的外边距都是 **负数** 时，折叠外边距是两者中绝对值较大的值。
- 两个相邻的外边距是 **一正一负** 时，折叠外边距是两者相加的和。
:::

## rem 和 em 区别

`rem` 相对于根元素的字号。  
`em` 相对于当前元素的字号。`1em` 等于当前元素字号。

```
<style>
 div{
  font-size: 16px;
 }
 
 p{
  font-size: 1.2em;  // 1.2 * 16 = 19.2px
  padding: 1.2em;  // 1.2 * 19.2 = 23.04px
 }
</style>

<div>
 <p>Violet 天下第一</p>
</div>
```

## 物理和逻辑像素

以 iPhone XS 为例，当写 CSS 代码时，针对于单位 px，其宽度为 414px&896px，也就是说当赋予一个 DIV 元素宽度为 414px，这个 DIV 就会填满手机的宽度。  

而如果有一把尺子来实际测量这部手机的物理像素，实际为 1242*2688 物理像素；经过计算可知，1242/414=3，也就是说，在单边上，一个逻辑像素=3 个物理像素，就说这个屏幕的像素密度为 3，也就是常说的 3 倍屏。  

对于图片来说，为了保证其不失真，1 个图片像素至少要对应一个物理像素，假如原始图片是 500 * 300 像素，那么在 3 倍屏上就要放一个 1500 * 900 像素的图片才能保证 1 个物理像素至少对应一个图片像素，才能不失真。

## 响应式布局方案

- 媒体查询
- 百分比布局
- rem 布局
- flex 布局
- grid 布局
- 视口单位 vw/vh
