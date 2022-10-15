import{_ as e,o as n,c as i,d as a}from"./app.15f62f91.js";const s={},d=a(`<h1 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h1><h2 id="\u4E60\u9898\u7EC4\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u7EC4\u4E00</h2><h3 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt)

// \u8F93\u51FA
1\u3001NaN\u3001NaN 

// \u89E3\u6790
arr.map((value, index, array) {})
parseInt(string, radix)

value \u5BF9\u5E94 string\uFF0Cindex \u5BF9\u5E94 radix\uFF0C\u5219\u6709
arr.map((string, radix) {})

parseInt(&#39;1&#39;, 0) // 1\u3002\u57FA\u6570\u4E3A 0\uFF0C\u89C6\u4F5C\u5341\u8FDB\u5236\u89E3\u6790\u3002
parseInt(&#39;2&#39;, 1) // NaN\u3002\u57FA\u6570\u4E3A 1\uFF0C\u4E0D\u4ECB\u4E8E 2-36 \u4E4B\u95F4\u3002
parseInt(&#39;3&#39;, 2) // NaN\u3002\u57FA\u6570\u4E3A 2\uFF0C\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B57\u7B26\u5927\u4E8E 2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let unary = fn =&gt; val =&gt; fn(val)
let parse = unary(parseInt)
[&#39;1.1&#39;, &#39;2&#39;, &#39;0.3&#39;].map(parse)

// \u8F93\u51FA
1\u30012\u30010

// \u89E3\u6790
let parse = unary(parseInt) 
let parse = val =&gt; parseInt(val)

parseInt(&#39;1.1&#39;) // 1\u3002\u57FA\u6570\u672A\u6307\u5B9A\uFF0C\u89C6\u4F5C\u5341\u8FDB\u5236\u89E3\u6790\u3002
parseInt(&#39;2&#39;) // 2\u3002\u57FA\u6570\u672A\u6307\u5B9A\uFF0C\u89C6\u4F5C\u5341\u8FDB\u5236\u89E3\u6790\u3002
parseInt(&#39;0.3&#39;) // 0\u3002\u57FA\u6570\u672A\u6307\u5B9A\uFF0C\u89C6\u4F5C\u5341\u8FDB\u5236\u89E3\u6790\u3002

\u4E0E\u4E0A\u9898\u4E0D\u540C\u7684\u662F\uFF0CparseInt \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u88AB\u7ED5\u8FC7\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[d];function l(v,c){return n(),i("div",null,r)}var u=e(s,[["render",l],["__file","\u5176\u4ED6.html.vue"]]);export{u as default};
