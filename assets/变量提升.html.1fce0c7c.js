import{_ as n,o as e,c as i,d}from"./app.19e0d641.js";const s={},l=d(`<h1 id="\u53D8\u91CF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a> \u53D8\u91CF\u63D0\u5347</h1><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5173\u4E8E <code>if</code> \u5757\u5185\u51FD\u6570\u63D0\u5347\uFF0C\u5404\u6D4F\u89C8\u5668\u5185\u90E8\u5B9E\u73B0\u89C4\u5219\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7ED3\u679C\u4E0D\u540C\u3002</p><p>\u4EE5\u4E0B\u4EE3\u7801\u5757\u4E2D\u7684\u8F93\u51FA\u7ED3\u679C\u5747\u662F\u57FA\u4E8E Chrome \u4E0B\u7684\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u7ED3\u679C\u53EF\u80FD\u4E0D\u4E00\u6837\u3002</p><p>\u4F8B\u5982\u4E60\u9898\u7EC4\u4E09\u7684\u7B2C\u4E00\u9898\uFF0C\u5728 Chrome \u4E0B\u662F\u8F93\u51FA\u8FD9\u4E2A\u7ED3\u679C\uFF0C\u5728 FireFox \u4E0B\u76F4\u63A5\u5C31\u62A5\u9519\u4E86\u3002</p></div><h2 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(a)
console.log(a())

var a = 3
function a() {
  console.log(10) 
}

console.log(a)   

a = 6

console.log(a())

// \u8F93\u51FA
function a() { console.log(10) }
10
3
Uncaught TypeError: a is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u7EC4\u4E00</h2><h3 id="\u4E60\u9898\u4E00-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00-1" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(a)

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(a)

if (false) {
  a = 1
  function a() {}
  a = 5
  console.log(a)
}

console.log(a)

// \u8F93\u51FA
undefined 
undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4\u4E8C" aria-hidden="true">#</a> \u4E60\u9898\u7EC4\u4E8C</h2><h2 id="\u4E60\u9898\u4E00-2" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00-2" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (true) {
  a = 3
  function a() {}

  console.log(a)
}

console.log(a)

// \u8F93\u51FA
3 
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u4E8C-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C-1" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (true) {
  function a() {}
  a = 3

  console.log(a)
}

console.log(a)

// \u8F93\u51FA
3
function a() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4\u4E09" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4\u4E09" aria-hidden="true">#</a> \u4E60\u9898\u7EC4\u4E09</h2><h3 id="\u4E60\u9898\u4E00-3" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00-3" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a

if(true) {
  function f() {
    f = a
  }
}

f()

console.log(f)

// \u8F93\u51FA
function f() { f = a }

// \u96BE\u70B9
\u51FD\u6570\u5185\u90E8\u7684 f\uFF0C\u6307\u4EE3\u7684\u662F if \u5757\u5185\u90E8\u7684\u51FD\u6570\u53D8\u91CF\uFF0C\u4E0D\u662F\u63D0\u5347\u5230\u5916\u754C\u7684\u51FD\u6570\u53D8\u91CF
\u56E0\u6B64\u5916\u754C f \u5728\u4F5C\u4E3A\u51FD\u6570 function f () { f = a } \u6267\u884C\u7684\u65F6\u5019\uFF0Cf \u4FEE\u6539\u7684\u53EA\u662F if \u5757\u5185\u90E8\u7684\u51FD\u6570\u53D8\u91CF f\uFF0C\u5F71\u54CD\u4E0D\u5230\u5916\u754C\u3002
\u5F71\u54CD\u5916\u754C\u7684\u51FD\u6570\u53D8\u91CF\u8D4B\u503C\u4EC5\u5230\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u524D\u4E3A\u6B62\uFF0C\u518D\u4E4B\u540E\u7684\u51FD\u6570\u53D8\u91CF\u8D4B\u503C\u5BF9\u5916\u754C\u6CA1\u6709\u5F71\u54CD\u3002

// \u8B66\u544A
\u4E0D\u540C\u51FD\u6570\u5185\u90E8\u57FA\u4E8E\u5757\u5185\u51FD\u6570\u58F0\u660E\u63D0\u5347\u7684\u5185\u90E8\u5B9E\u73B0\u4E0D\u4E00\u81F4\uFF0C\u8BE5\u8F93\u51FA\u7ED3\u679C\u662F\u57FA\u4E8E Chrome \u80CC\u666F\u4E0B\u5F97\u51FA\u7684\uFF0C\u5728 FireFox \u4E0B\u76F4\u63A5\u62A5\u9519\u3002
\u4E0D\u7528\u592A\u5728\u610F\uFF0C\u7814\u7A76\u5A31\u4E50\u800C\u5DF2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E8C-2" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C-2" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a

if(true) {
  f()
  
  function f() {
    f = a
  }
}

console.log(f)

// \u8F93\u51FA
undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),a=[l];function v(r,c){return e(),i("div",null,a)}var m=n(s,[["render",v],["__file","\u53D8\u91CF\u63D0\u5347.html.vue"]]);export{m as default};
