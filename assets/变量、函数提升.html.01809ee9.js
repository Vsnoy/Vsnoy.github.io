import{_ as l,o as s,c as a,a as e,b as i,e as c,d,r}from"./app.6c0bedb0.js";const v={},u=c(`<h1 id="\u53D8\u91CF\u3001\u51FD\u6570\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u3001\u51FD\u6570\u63D0\u5347" aria-hidden="true">#</a> \u53D8\u91CF\u3001\u51FD\u6570\u63D0\u5347</h1><p>\u5728 <code>ES6</code> \u4E4B\u524D\uFF0C<code>JS</code> \u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u8BF4\u6CD5\uFF0C\u53EA\u6709\u5168\u5C40\u548C\u51FD\u6570\u4F5C\u7528\u57DF\u3002 \u6309\u7167\u6B63\u5E38\u7684\u7F16\u7A0B\u903B\u8F91\u6765\u8BF4\uFF0C\u53D8\u91CF\u6216\u8005\u51FD\u6570\uFF0C\u90FD\u5E94\u8BE5\u5148\u58F0\u660E\uFF0C\u518D\u8C03\u7528\u3002 \u53D8\u91CF\u63D0\u5347\u5373\u5C06\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u5230\u5B83\u6240\u5728\u4F5C\u7528\u57DF\u7684\u6700\u5F00\u59CB\u7684\u90E8\u5206\u3002</p><h2 id="\u53D8\u91CF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a> \u53D8\u91CF\u63D0\u5347</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1
b = 2
console.log(a + b)
var b

// \u8F93\u51FA
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1
console.log(a + b)
var b = 2

// \u8F93\u51FA
NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u63D0\u5347" aria-hidden="true">#</a> \u51FD\u6570\u63D0\u5347</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fun()
function fun() {
  console.log(&#39;fun&#39;)
}

// \u8F93\u51FA
fun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fun()
var fun = function() {
  console.log(1)
}

// \u8F93\u51FA
Uncaught TypeError: fun is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>JS</code> \u4E2D\u521B\u5EFA\u51FD\u6570\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u5B57\u9762\u91CF\u3002\u53EA\u6709\u51FD\u6570\u58F0\u660E\u624D\u5B58\u5728\u51FD\u6570\u63D0\u5347\u3002</p></div><h2 id="\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4F18\u5148\u7EA7</h2><p>\u51FD\u6570\u63D0\u5347\u4F18\u5148\u4E8E\u53D8\u91CF\u63D0\u5347\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(a)

var a = 3
function a() {
  console.log(10)
}

// \u8F93\u51FA
function a() { console.log(10) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function a() {
  console.log(10)
}

console.log(a)

a = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u5757\u5185\u7684\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5757\u5185\u7684\u63D0\u5347" aria-hidden="true">#</a> \u4EE3\u7801\u5757\u5185\u7684\u63D0\u5347</h2><p>\u4EE5 <code>if</code> \u4EE3\u7801\u5757\u4E3A\u4F8B\uFF0C<code>var</code> \u53D8\u91CF\u63D0\u5347\u7167\u5E38\uFF0C\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\u3002\u6BD4\u8F83\u8BE1\u5F02\u7684\u662F <code>if</code> \u5757\u4E2D\u7684\u51FD\u6570\u63D0\u5347\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2D\u5173\u4E8E\u6B64\u7684\u5B9E\u73B0\u53EF\u80FD\u4E0D\u540C\uFF0C\u4EE5\u4E0B\u7814\u7A76\u57FA\u4E8E <strong>Chrome V103</strong> \u7248\u672C\uFF0C\u5C31\u56FE\u4E00\u4E50\uFF0C\u4E0D\u7528\u592A\u5728\u610F\u3002<br><code>if</code> \u5757\u5185\u8BF7\u8C28\u614E\u4F7F\u7528\u51FD\u6570\u58F0\u660E\uFF0C\u5B9E\u5728\u8981\u7528\u7684\u8BDD\uFF0C\u8BF7\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u4EE3\u66FF\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u89C4\u5219 \uFF08\u57FA\u4E8E Chrome V103 \u7248\u672C\u80CC\u666F\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u5185\u90E8\u5B9E\u73B0\u89C4\u5219\u53EF\u80FD\u4E0D\u4E00\u81F4\uFF0C\u5BFC\u81F4\u7ED3\u679C\u4E0D\u4E00\u6837\uFF09</p><ul><li>\u51FD\u6570\u4F1A\u6709\u4E24\u4E2A\u63D0\u5347\uFF0C\u4E00\u4E2A\u63D0\u5347\u5230\u5F53\u524D\u5757\u7EA7\u4F5C\u7528\u57DF\u9876\u90E8\uFF0C\u4E00\u4E2A\u63D0\u5347\u5230\u6700\u9760\u8FD1\u7684\u4F5C\u7528\u57DF\u9876\u90E8 <ul><li>\u5230\u5F53\u524D\u5757\u7EA7\u4F5C\u7528\u57DF\u9876\u90E8\u7684\u63D0\u5347\uFF0C\u5C5E\u4E8E\u5E38\u89C4\u7684\u51FD\u6570\u63D0\u5347\uFF0C\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684</li><li>\u5230\u6700\u9760\u8FD1\u7684\u4F5C\u7528\u57DF\u9876\u90E8\u7684\u63D0\u5347\uFF0C\u5C31\u6BD4\u8F83\u8BE1\u5F02\u4E86 <ul><li>\u9996\u5148\u4F1A\u7C7B\u4F3C\u4E8E <code>var</code> \u53D8\u91CF\u63D0\u5347\u4E00\u6837\uFF0C\u5C06\u51FD\u6570\u53D8\u91CF\u63D0\u4E0A\u53BB\uFF0C\u5E76\u521D\u59CB\u5316\u4E3A <code>undefined</code></li><li>\u7B49\u5230\u5185\u90E8\u771F\u6B63\u6267\u884C\u5230\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u5904\u7684\u65F6\u5019\uFF0C\u4F1A\u5C06\u5F53\u524D\u51FD\u6570\u53D8\u91CF\u5185\u6700\u65B0\u7684\u503C\u9876\u4E0A\u53BB\uFF0C\u66F4\u65B0\u5148\u524D\u6700\u9760\u8FD1\u7684\u4F5C\u7528\u57DF\u5185\u63D0\u4E0A\u53BB\u7684\u51FD\u6570\u53D8\u91CF\u7684\u503C <ul><li>\u5982\u679C <code>if</code> \u6761\u4EF6\u4E3A <code>false</code>\uFF0C\u5219\u6C38\u8FDC\u4E0D\u4F1A\u6267\u884C\u5230\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u5904\u4E86\uFF0C\u63D0\u5230\u6700\u9760\u8FD1\u4F5C\u7528\u57DF\u7684\u51FD\u6570\u53D8\u91CF\u503C\u6CA1\u6709\u5916\u754C\u66F4\u6539\u7684\u8BDD\uFF0C\u5C31\u4E00\u76F4\u662F <code>undefined</code> \u4E86</li><li>\u5982\u679C <code>if</code> \u5757\u5185\u7684\u5E38\u89C4\u51FD\u6570\u63D0\u5347\uFF0C\u51FD\u6570\u53D8\u91CF\u5728 <code>if</code> \u5757\u5185\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u4E4B\u524D\uFF0C\u6CA1\u6709\u53E6\u5916\u88AB\u8D4B\u503C\u7684\u8BDD\uFF0C\u6267\u884C\u5230\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u5904\u65F6\uFF0C\u5C31\u4F1A\u5C06\u8BE5\u51FD\u6570\u58F0\u660E\u7684\u5185\u5BB9\u4F5C\u4E3A\u6700\u65B0\u7684\u503C\u9876\u4E0A\u53BB\u66F4\u65B0 <ul><li>\u53EA\u6709\u5728\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u4E4B\u524D\uFF0C\u51FD\u6570\u53D8\u91CF\u53E6\u5916\u88AB\u8D4B\u503C\u624D\u80FD\u88AB\u66F4\u65B0\u5230\u5916\u754C</li><li>\u5728\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u4E4B\u540E\uFF0C\u53E6\u5916\u88AB\u8D4B\u503C\uFF0C\u53EA\u5728\u5185\u90E8\u6709\u6548\uFF0C\u5BF9\u5916\u754C\u6CA1\u6709\u5F71\u54CD</li></ul></li></ul></li></ul></li></ul></li></ul></div><p>\u6587\u5B57\u592A\u957F\uFF0C\u4E3E\u4E2A\u6817\u5B50\u5206\u6790\u4E00\u6CE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(a)

if (true) {
  a = 1
  function a() {}
  a = 5
  console.log(a)
}

console.log(a)

// \u8F93\u51FA
undefined
5
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7B2C\u4E00\u4E2A\u51FD\u6570\u63D0\u5347\uFF0C\u7C7B\u4F3C\u4E8E var\uFF0C\u5C06\u51FD\u6570\u53D8\u91CF a \u63D0\u5347\u5230\u9876\u90E8\uFF0C\u521D\u59CB\u5316\u4E3A undefined
var a
a = undefined

// \u8F93\u51FA if \u5757\u5916\u90E8\u5F53\u524D\u51FD\u6570\u53D8\u91CF a \u503C undefined
console.log(a)

if (true) {
  // \u7B2C\u4E8C\u4E2A\u51FD\u6570\u63D0\u5347\uFF0C\u5E38\u89C4\u51FD\u6570\u63D0\u5347\uFF0C\u63D0\u5347\u5230\u9876\u90E8
  function a() {}

  // \u51FD\u6570\u53D8\u91CF\u503C\u88AB\u53E6\u5916\u8D4B\u503C\u4E3A 1
  a = 1

  // \u6267\u884C\u5230\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u5904\u65F6\uFF0C\u5C06\u51FD\u6570\u53D8\u91CF a \u7684\u6700\u65B0\u503C\u66F4\u65B0\u5230\u5916\u754C\uFF0C\u8FD9\u91CC\u6700\u65B0\u503C\u662F 1
  // function a() {}

  // \u51FD\u6570\u53D8\u91CF\u503C\u88AB\u53E6\u5916\u8D4B\u503C\u4E3A 5\u3002\u7136\u800C\u6B64\u6B21\u8D4B\u503C\u4E0D\u4F1A\u5BF9\u5916\u754C\u9020\u6210\u5F71\u54CD\uFF0C\u5F71\u54CD\u5916\u754C\u7684\u8D4B\u503C\u4EC5\u5230\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u524D\u4E3A\u6B62
  a = 5

  // \u8F93\u51FA if \u5757\u5185\u90E8\u5F53\u524D\u51FD\u6570\u53D8\u91CF a \u6700\u65B0\u503C 5
  console.log(a)
}

// \u8F93\u51FA if \u5757\u5916\u90E8\u5F53\u524D\u51FD\u6570\u53D8\u91CF a \u6700\u65B0\u503C 1
console.log(a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,23),o={href:"https://juejin.cn/post/6997980474530676772",target:"_blank",rel:"noopener noreferrer"},t=d("if \u5757\u5185\u7684\u51FD\u6570\u63D0\u5347"),m={href:"https://es6.ruanyifeng.com/#docs/let#%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},b=d("\u5757\u7EA7\u4F5C\u7528\u57DF\u4E0E\u51FD\u6570\u58F0\u660E"),h={href:"https://www.jianshu.com/p/00ab37f35fc5",target:"_blank",rel:"noopener noreferrer"},f=d("JavaScript \u4E2D\u7684\u53D8\u91CF\u63D0\u5347/\u51FD\u6570\u63D0\u5347");function p(g,x){const n=r("ExternalLinkIcon");return s(),a("div",null,[u,e("ul",null,[e("li",null,[e("a",o,[t,i(n)])]),e("li",null,[e("a",m,[b,i(n)])]),e("li",null,[e("a",h,[f,i(n)])])])])}var E=l(v,[["render",p],["__file","\u53D8\u91CF\u3001\u51FD\u6570\u63D0\u5347.html.vue"]]);export{E as default};
