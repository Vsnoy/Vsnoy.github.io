import{_ as i,o as e,c as n,d}from"./app.45b38b3b.js";const s={},l=d(`<h1 id="\u5FAA\u73AF\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u7ED1\u5B9A" aria-hidden="true">#</a> \u5FAA\u73AF\u7ED1\u5B9A</h1><h2 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i = 1; i &lt;= 5; i ++) {
  setTimeout(function timer() {
    console.log(i)
  }, 0)
}

// \u8F93\u51FA
6 6 6 6 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u56E0\u4E3A setTimeout \u4E3A\u5B8F\u4EFB\u52A1\uFF0C\u7531\u4E8E JS \u4E2D\u5355\u7EBF\u7A0B eventLoop \u673A\u5236\uFF0C\u5728\u4E3B\u7EBF\u7A0B\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\u624D\u53BB\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C
// \u56E0\u6B64\u5FAA\u73AF\u7ED3\u675F\u540E setTimeout \u4E2D\u7684\u56DE\u8C03\u624D\u4F9D\u6B21\u6267\u884C\uFF0C\u4F46\u8F93\u51FA i \u7684\u65F6\u5019\u5F53\u524D\u4F5C\u7528\u57DF\u6CA1\u6709\uFF0C\u5F80\u4E0A\u4E00\u7EA7\u518D\u627E\uFF0C
// \u53D1\u73B0\u4E86 i\uFF0C\u6B64\u65F6\u5FAA\u73AF\u5DF2\u7ECF\u7ED3\u675F\uFF0Ci \u53D8\u6210\u4E86 6\u3002
// \u56E0\u6B64\u4F1A\u5168\u90E8\u8F93\u51FA 6\u3002

// \u6CD5\u4E00\uFF1Alet\u3002
for(let i = 1; i &lt;= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 0)
}

// \u6CD5\u4E8C\uFF1AIIFE\u3002
for(var i = 1;i &lt;= 5;i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, 0)
  })(i)
}

// \u6CD5\u4E09\uFF1AsetTimeout \u7B2C\u4E09\u4E2A\u53C2\u6570\u3002
for(var i=1;i&lt;=5;i++) {
  setTimeout(function timer(j) {
    console.log(j)
  }, 0, i)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var data = []

for (var i = 0; i &lt; 3; i++) {
  data[i] = function () {
    console.log(i)
  }
}

data[0]()
data[1]()
data[2]()

// \u8F93\u51FA
3 3 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function v(r,c){return e(),n("div",null,a)}var u=i(s,[["render",v],["__file","\u5FAA\u73AF\u7ED1\u5B9A.html.vue"]]);export{u as default};
