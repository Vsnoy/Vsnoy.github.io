import{_ as i,o as a,c as d,a as e,b as s,d as r,e as l,r as o}from"./app.3a5b5902.js";const c={},v=r(`<h1 id="\u8BCD\u6CD5\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8BCD\u6CD5\u4F5C\u7528\u57DF</h1><p>\u4F5C\u7528\u57DF\u662F\u6307\u7A0B\u5E8F\u6E90\u4EE3\u7801\u4E2D <strong>\u5B9A\u4E49\u53D8\u91CF\u7684\u533A\u57DF</strong> \u3002\u5176\u89C4\u5B9A\u4E86 <strong>\u5982\u4F55\u67E5\u627E\u53D8\u91CF</strong> \uFF0C\u4E5F\u5C31\u662F\u786E\u5B9A\u5F53\u524D\u6267\u884C\u4EE3\u7801\u5BF9\u53D8\u91CF\u7684\u8BBF\u95EE\u6743\u9650\u3002</p><p>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u6307\u4F5C\u7528\u57DF\u662F\u7531\u4EE3\u7801\u4E2D <strong>\u51FD\u6570\u58F0\u660E\u7684\u4F4D\u7F6E</strong> \u6765\u51B3\u5B9A\u7684\uFF0C\u6240\u4EE5\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u9759\u6001\u7684\u4F5C\u7528\u57DF\uFF0C\u901A\u8FC7\u5B83\u5C31\u80FD\u591F\u9884\u6D4B\u4EE3\u7801\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u5982\u4F55\u67E5\u627E\u6807\u8BC6\u7B26\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u4EE3\u7801\u9636\u6BB5\u5C31\u51B3\u5B9A\u597D\u7684\uFF0C\u548C\u51FD\u6570\u662F\u600E\u4E48\u8C03\u7528\u7684\u6CA1\u6709\u5173\u7CFB</strong>\u3002</p><h2 id="\u9759\u6001\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u9759\u6001\u4F5C\u7528\u57DF</h2><p>\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u51B3\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var value = 1

function foo() {
  console.log(value)
}

function bar() {
  var value = 2
  foo()
}

bar() // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9759\u6001\u4F5C\u7528\u57DF\u6267\u884C\u8FC7\u7A0B\uFF1A \u6267\u884C <code>foo</code> \u51FD\u6570\uFF0C\u5148\u4ECE <code>foo</code> \u51FD\u6570\u5185\u90E8\u67E5\u627E\u662F\u5426\u6709\u5C40\u90E8\u53D8\u91CF <code>value</code> \uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u6839\u636E\u4E66\u5199\u7684\u4F4D\u7F6E\uFF0C\u67E5\u627E\u4E0A\u9762\u4E00\u5C42\u7684\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F <code>value</code> \u7B49\u4E8E 1\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u6253\u5370 1\u3002</p><h2 id="\u52A8\u6001\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u52A8\u6001\u4F5C\u7528\u57DF</h2><p>\u52A8\u6001\u4F5C\u7528\u57DF\uFF0C\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u51B3\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var value = 1

function foo() {
  console.log(value)
}

function bar() {
  var value = 2
  foo()
}

bar() // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A8\u6001\u4F5C\u7528\u57DF\u6267\u884C\u8FC7\u7A0B\uFF1A \u6267\u884C <code>foo</code> \u51FD\u6570\uFF0C\u4F9D\u7136\u662F\u4ECE <code>foo</code> \u51FD\u6570\u5185\u90E8\u67E5\u627E\u662F\u5426\u6709\u5C40\u90E8\u53D8\u91CF <code>value</code> \u3002\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u4ECE\u8C03\u7528\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u4E5F\u5C31\u662F bar \u51FD\u6570\u5185\u90E8\u67E5\u627E <code>value</code> \u53D8\u91CF\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u6253\u5370 2\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),t={href:"https://github.com/mqyqingfeng/Blog/issues/3",target:"_blank",rel:"noopener noreferrer"},u=l("JavaScript \u6DF1\u5165\u4E4B\u8BCD\u6CD5\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF");function b(m,h){const n=o("ExternalLinkIcon");return a(),d("div",null,[v,e("ul",null,[e("li",null,[e("a",t,[u,s(n)])])])])}var f=i(c,[["render",b],["__file","\u8BCD\u6CD5\u4F5C\u7528\u57DF.html.vue"]]);export{f as default};
