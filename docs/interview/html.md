# HTML

## 语义化

语义化是用合适的标签表达清晰的结构和内容。

- 让开发者更容易读懂，便于团队开发和维护
- 让浏览器更容易解析
- 让爬虫更容易识别，便于 SEO

常见语义化标签有：header、nav、aside、main、footer、section、article

## doctype 作用

告知浏览器解析器应该以什么样的文档类型来解析文档。  
不同的渲染模式会影响到浏览器对于 `CSS` 、`JS` 的解析。

文档解析类型

- 标准模式  
  渲染方式和 `JS` 引擎的解析方式都是以该浏览器支持的最高标准运行
- 怪异模式  
  向后兼容，模拟老式浏览器的行为以防止站点无法工作

## src 和 href 区别

- src 用于**替换**当前元素，指向的内容会嵌入到文档中。浏览器解析到其指向的资源时，会**暂停**其他资源的下载和处理。
- href 用于在当前文档和引用资源之间**建立联系**。浏览器解析到其指向的资源时，会**并行**下载资源，不会停止对其他资源的下载和处理。

## script 标签中 defer 和 async 的区别

如果没有 `defer` 或 `async` 属性，浏览器会立即加载并执行相应的脚本，从而阻塞后续文档的加载。

- defer：脚本在文档解析完毕后执行
- async：脚本加载完毕后立即执⾏

![async_script](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/async_script.png)

## 块级、行内、可替换、空元素

- 块级元素  
  div、p、h1...h6、ul、ol、li、table、form
- 行内元素  
  a、span、label、img、input、select、textarea、em、strong
- 可替换元素  
  img、input、select、textarea、video、iframe  
  还有些元素仅在特定情况下被作为替换元素处理，诸如 audio、canvas
- 空元素  
  br、hr、img、input、link、meta

## 块级元素和行内元素区别

- 块级元素独占一行。行内元素与其他行内元素同处一行。
- 块级元素可设置行高、宽高、内外边距。行内元素可设置行高、水平方向的内外边距。  
- 块级元素默认宽度是父级宽度的 100%。行内元素默认宽度与元素内容宽度保存一致。

:::tip
行内替换元素可以设置行高、宽高、内外边距  
行内元素虽无法设置垂直方向上的内外边距，但可看到效果
:::
