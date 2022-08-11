import{_ as l,o as c,c as a,a as e,b as i,d as s,e as d,r as o}from"./app.acd96794.js";const r={},t=s(`<h1 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h1><h2 id="\u4F5C\u7528\u57DF\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u5B9A\u4E49" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u5B9A\u4E49</h2><ul><li>\u4F5C\u7528\u57DF\u662F\u6307\u5728\u7A0B\u5E8F\u6E90\u4EE3\u7801\u4E2D <strong>\u5B9A\u4E49\u53D8\u91CF\u7684\u533A\u57DF</strong> \u3002</li><li>\u4F5C\u7528\u57DF\u89C4\u5B9A\u4E86 <strong>\u5982\u4F55\u67E5\u627E\u53D8\u91CF</strong> \uFF0C\u4E5F\u5C31\u662F\u786E\u5B9A\u5F53\u524D\u6267\u884C\u4EE3\u7801\u5BF9\u53D8\u91CF\u7684\u8BBF\u95EE\u6743\u9650\u3002</li><li><code>JS</code> \u91C7\u7528\u7684\u662F <strong>\u8BCD\u6CD5\u4F5C\u7528\u57DF</strong> \uFF0C\u4E5F\u5C31\u662F\u9759\u6001\u4F5C\u7528\u57DF\u3002\u51FD\u6570\u4F5C\u7528\u57DF\u5728\u51FD\u6570 <strong>\u5B9A\u4E49\u65F6</strong> \u5C31\u51B3\u5B9A\u4E86\u3002</li></ul><p>\u901A\u4FD7\u5730\u7406\u89E3\uFF0C\u4F5C\u7528\u57DF\u5C31\u662F\u53D8\u91CF\u4E0E\u51FD\u6570\u7684\u53EF\u8BBF\u95EE\u8303\u56F4\uFF0C\u63A7\u5236\u7740\u53D8\u91CF\u548C\u51FD\u6570\u7684\u53EF\u89C1\u6027\u548C\u751F\u547D\u5468\u671F\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E3A\u4EC0\u4E48\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u5C31\u51B3\u5B9A\u4E86\uFF1F</p><p>\u8FD9\u662F\u56E0\u4E3A\u51FD\u6570\u6709\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027 <code>[[scope]]</code>\uFF0C\u5F53\u51FD\u6570\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4FDD\u5B58\u6240\u6709\u7236\u53D8\u91CF\u5BF9\u8C61\u5230\u5176\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3 <code>[[scope]]</code> \u5C31\u662F\u6240\u6709\u7236\u53D8\u91CF\u5BF9\u8C61\u7684\u5C42\u7EA7\u94FE\uFF0C\u4F46\u662F\u6CE8\u610F\uFF1A<code>[[scope]]</code> \u5E76\u4E0D\u4EE3\u8868\u5B8C\u6574\u7684\u4F5C\u7528\u57DF\u94FE\uFF01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
  function bar() {
    ...
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>foo.[[scope]] = [
  globalContext.VO
]

bar.[[scope]] = [
  fooContext.AO,
  globalContext.VO
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u4F5C\u7528\u57DF\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u5206\u7C7B" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u5206\u7C7B</h2><h3 id="\u5168\u5C40\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5168\u5C40\u4F5C\u7528\u57DF</h3><p>\u6240\u6709\u5728\u51FD\u6570\u5916\u90E8\u58F0\u660E\u7684\u53D8\u91CF\u90FD\u5904\u4E8E\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u3002\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u548C\u51FD\u6570\u4F1A\u4F5C\u4E3A\u5168\u5C40\u5BF9\u8C61 <code>window</code> \u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u4FDD\u5B58\uFF0C\u53EF\u88AB\u4EFB\u610F\u8BBF\u95EE\uFF0C\u5176\u751F\u547D\u5468\u671F\u4F34\u968F\u7740\u9875\u9762\u7684\u751F\u547D\u5468\u671F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a = 10 // \u53EF\u7701\u7565 var
var b = 20

function an(){
  c = 3 // \u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u672A\u58F0\u660E\u800C\u76F4\u63A5\u8D4B\u503C\u7684\u53D8\u91CF\uFF0C\u5C5E\u4E8E\u5168\u5C40\u53D8\u91CF
  console.log(&#39;an&#39;)
}

var bn = function(){
  console.log(&#39;bn&#39;)
}

console.log(window)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\uFF0C<code>a</code>\u3001<code>b</code>\u3001<code>c</code> \u4EE5\u53CA <code>an</code>\u3001<code>bn</code> \u90FD\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\uFF0C\u800C\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u548C\u51FD\u6570\u4F1A\u4F5C\u4E3A <code>window</code> \u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u4FDD\u5B58\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><p>\u5728\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\uFF0C\u4E0D\u4F7F\u7528\u53D8\u91CF\u5173\u952E\u5B57\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5728\u8D4B\u503C\u65F6\u4F1A\u5F80\u4E0A\u4E00\u7EA7\u4F5C\u7528\u57DF\u5BFB\u627E\u5DF2\u7ECF\u58F0\u660E\u7684\u540C\u540D\u53D8\u91CF\uFF0C\u82E5\u76F4\u5230\u5168\u5C40\u4F5C\u7528\u57DF\u65F6\u8FD8\u6CA1\u627E\u5230\uFF0C\u5219\u4F1A\u6210\u4E3A\u5168\u5C40\u5BF9\u8C61 <code>window</code> \u7684\u5C5E\u6027\u3002</p></li><li><p>\u5728\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u60C5\u51B5\u4E0B\uFF0C<code>for</code>\u3001<code>if</code> \u7B49\u4EE3\u7801\u5757\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u4E5F\u5C5E\u4E8E\u5168\u5C40\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i = 0; i &lt; 10; i++) { ... }
console.log(i) // 10

if(true) { var a = 1 }
console.log(a) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div><h3 id="\u51FD\u6570\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u7528\u57DF</h3><p>\u51FD\u6570\u58F0\u660E\u5185\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u3002\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u6216\u51FD\u6570\u53EA\u80FD\u5728\u51FD\u6570\u5185\u90E8\u88AB\u8BBF\u95EE\u3002\u51FD\u6570\u6267\u884C\u7ED3\u675F\u4E4B\u540E\uFF0C\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u5C40\u90E8\u53D8\u91CF\u4F1A\u88AB\u9500\u6BC1\uFF08<strong>\u95ED\u5305</strong>\u9664\u5916\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1

function foo(){ 
  var b = 2 
  console.log(a) // 1
  console.log(b) // 2
} 

foo();

console.log(a) // 1
console.log(b) // Uncaught ReferenceError: b is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\uFF0C<code>a</code> \u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u53EF\u88AB\u4EFB\u610F\u8BBF\u95EE\uFF0C\u800C <code>b</code> \u662F\u53EA\u5C5E\u4E8E\u51FD\u6570 <code>foo</code> \u7684\u5185\u90E8\u53D8\u91CF\uFF0C\u6240\u4EE5\u5728\u5916\u90E8\u8BBF\u95EE\u4F1A\u62A5\u9519\u3002</p><h3 id="\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5757\u7EA7\u4F5C\u7528\u57DF</h3><p>\u5305\u542B <code>let</code> \u548C <code>const</code> \u5173\u952E\u5B57\u58F0\u660E\u7684\u4E00\u5BF9 <code>{}</code> \u5185\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    console.log(a) // Uncaught ReferenceError: a is not defined
    let a = 1
    console.log(a) // 1
}

console.log(a) // Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u901A\u8FC7 <code>let</code> \u58F0\u660E\u7684\u53D8\u91CF\u5C31\u53EA\u5728\u6240\u5728\u4EE3\u7801\u5757\u5185\u6709\u6548\uFF0C\u4E0D\u4F1A\u6CC4\u6F0F\u5230\u5168\u5C40\uFF0C\u4E5F\u4E0D\u4F1A\u5982 <code>var</code> \u58F0\u660E\u7684\u53D8\u91CF\u88AB\u63D0\u5347\u5230\u5757\u7684\u9876\u90E8\u3002</p><h2 id="\u4F5C\u7528\u57DF\u94FE-1" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE-1" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u4F5C\u7528\u57DF \u2248 \u53D8\u91CF\u5BF9\u8C61\uFF08\u4E2A\u4EBA\u7406\u89E3\uFF09</li><li>\u4F5C\u7528\u57DF\u94FE = \u53D8\u91CF\u5BF9\u8C61 + \u7236\u73AF\u5883\u4F5C\u7528\u57DF\u94FE</li><li>\u4F5C\u7528\u57DF\u94FE\u662F\u7531\u591A\u4E2A\u53D8\u91CF\u5BF9\u8C61\u4E32\u8FDE\u8D77\u6765\u7684\u4E00\u6761\u94FE\uFF0C\u6574\u4E2A\u4F5C\u7528\u57DF\u94FE\u6784\u6210\u4E86\u5F53\u524D\u6267\u884C\u73AF\u5883\u4E2D\u53D8\u91CF\u548C\u51FD\u6570\u53EF\u8BBF\u95EE\u7684\u8303\u56F4\uFF0C\u5373\u4F5C\u7528\u57DF\u3002\uFF08\u4E2A\u4EBA\u7406\u89E3\uFF09</li></ul></div><p>\u4F5C\u7528\u57DF\u94FE\u672C\u8D28\u4E0A\u5C31\u662F\u67E5\u627E\u53D8\u91CF\u7684\u94FE\u6761\u3002\u5F53\u8BBF\u95EE\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u89E3\u91CA\u5668\u9996\u5148\u4F1A\u5728\u5F53\u524D\u4F5C\u7528\u57DF <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> \u4E2D\u67E5\u627E\uFF0C \u82E5\u6CA1\u627E\u5230\u5219\u4F1A\u5728\u5916\u5C42\u5D4C\u5957\u7684\u4F5C\u7528\u57DF\u4E2D\u7EE7\u7EED\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u8BE5\u53D8\u91CF\uFF0C\u6216\u62B5\u8FBE\u6700\u5916\u5C42\u7684\u5168\u5C40\u4F5C\u7528\u57DF\u4E3A\u6B62\uFF0C\u8FD9\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002</p><p>\u53EF\u7528\u4EE5\u4E0B\u51E0\u53E5\u8BDD\u6765\u6982\u62EC\uFF1A</p><ul><li>\u67E5\u770B\u5F53\u524D\u4F5C\u7528\u57DF\uFF0C\u82E5\u5F53\u524D\u4F5C\u7528\u57DF\u58F0\u660E\u4E86\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u5C31\u786E\u5B9A\u7ED3\u679C</li><li>\u67E5\u770B\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u4E0A\u7EA7\u4F5C\u7528\u57DF\u4E2D\u6709\u6CA1\u6709\u58F0\u660E</li><li>\u4F9D\u6B21\u5F80\u4E0A\u67E5\u627E\uFF0C\u76F4\u5230\u5168\u5C40\u4F5C\u7528\u57DF\u4E3A\u6B62</li><li>\u82E5\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u4E5F\u6CA1\u6709\uFF0C\u6211\u4EEC\u5C31\u8BA4\u4E3A\u8FD9\u4E2A\u53D8\u91CF\u672A\u58F0\u660E</li></ul><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> \u601D\u8003\u9898</h2><p>\u7ED3\u5408\u7740\u53D8\u91CF\u5BF9\u8C61\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u6765\u603B\u7ED3\u4E00\u4E0B\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u4F5C\u7528\u57DF\u94FE\u548C\u53D8\u91CF\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var scope = &#39;global scope&#39;
function checkscope(){
  var scope2 = &#39;local scope&#39;
  return scope2
}
checkscope()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><code>checkscope</code> \u51FD\u6570\u88AB\u521B\u5EFA\uFF0C\u4FDD\u5B58\u4F5C\u7528\u57DF\u94FE\u5230\u51FD\u6570\u5185\u90E8\u5C5E\u6027 <code>[[scope]]</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscope.[[scope]] = [
  globalContext.VO
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C <code>checkscope</code> \u51FD\u6570\uFF0C\u521B\u5EFA <code>checkscope</code> \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C<code>checkscope</code> \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u538B\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u6808</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ECStack = [
  checkscopeContext,
  globalContext
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>checkscope</code> \u51FD\u6570\u4E0D\u662F\u7ACB\u523B\u5F00\u59CB\u6267\u884C\uFF0C\u5728\u771F\u6B63\u5F00\u59CB\u6267\u884C\u4E4B\u524D\uFF0C\u4F1A\u5148\u505A\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C<br> \u7B2C\u4E00\u6B65\uFF1A\u590D\u5236\u51FD\u6570\u5185\u90E8\u5C5E\u6027 <code>[[scope]]</code> \u6765\u6784\u5EFA\u4F5C\u7528\u57DF\u94FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
  Scope: checkscope.[[scope]],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7528 <code>arguments</code> \u521B\u5EFA\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u968F\u540E\u521D\u59CB\u5316\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u52A0\u5165\u5F62\u53C2\u3001\u51FD\u6570\u58F0\u660E\u3001\u53D8\u91CF\u58F0\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: checkscope.[[scope]]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65\uFF1A\u5C06\u6D3B\u52A8\u5BF9\u8C61\u538B\u5165 <code>checkscope</code> \u4F5C\u7528\u57DF\u94FE\u9876\u7AEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: [AO, [[Scope]]]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51C6\u5907\u5DE5\u4F5C\u505A\u5B8C\uFF0C\u5F00\u59CB\u6267\u884C\u51FD\u6570\uFF0C\u968F\u7740\u51FD\u6570\u7684\u6267\u884C\uFF0C\u4FEE\u6539 <code>AO</code> \u7684\u5C5E\u6027\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: &#39;local scope&#39;
  },
  Scope: [AO, [[Scope]]]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u627E\u5230 <code>scope2</code> \u7684\u503C\uFF0C\u8FD4\u56DE\u540E\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u51FD\u6570\u4E0A\u4E0B\u6587\u4ECE\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u4E2D\u5F39\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ECStack = [
  globalContext
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,43),v={href:"https://github.com/mqyqingfeng/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"},u=d("JavaScript \u6DF1\u5165\u4E4B\u4F5C\u7528\u57DF\u94FE"),m={href:"https://cloud.tencent.com/developer/article/1851118",target:"_blank",rel:"noopener noreferrer"},b=d("\u4E00\u6587\u641E\u61C2 JavaScript \u4F5C\u7528\u57DF"),p={href:"https://blackstarxing.github.io/2018-10-18-javascript-scope.html",target:"_blank",rel:"noopener noreferrer"},h=d("\u63A2\u8BBF JS \u4F5C\u7528\u57DF"),g=s('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u53EF\u89C6\u4E3A\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684\u53D8\u91CF\u5BF9\u8C61 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>',2);function x(f,_){const n=o("ExternalLinkIcon");return c(),a("div",null,[t,e("ul",null,[e("li",null,[e("a",v,[u,i(n)])]),e("li",null,[e("a",m,[b,i(n)])]),e("li",null,[e("a",p,[h,i(n)])])]),g])}var C=l(r,[["render",x],["__file","\u4F5C\u7528\u57DF\u94FE.html.vue"]]);export{C as default};
