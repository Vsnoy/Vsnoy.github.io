import{_ as e,o as i,c as n,d}from"./app.40908950.js";const l={},s=d(`<h1 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h1><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Set</td><td>\u5BF9\u8C61\u4E0D\u53BB\u91CD\uFF0CNaN \u53BB\u91CD</td></tr><tr><td>\u53CC\u5C42 for \u5FAA\u73AF</td><td>\u5BF9\u8C61\u548C NaN \u90FD\u4E0D\u53BB\u91CD</td></tr><tr><td>filter + indexOf</td><td>\u5BF9\u8C61\u4E0D\u53BB\u91CD\uFF0CNaN \u4F1A\u88AB\u5FFD\u7565</td></tr><tr><td>filter + Object \u952E\u503C\u5BF9</td><td>\u5168\u90E8\u53BB\u91CD</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [
  1, 
  1,
  &#39;1&#39;, 
  &#39;1&#39;,
  null, 
  null,
  undefined, 
  undefined,
  new String(&#39;1&#39;), 
  new String(&#39;1&#39;),
  /a/, 
  /a/,
  NaN, 
  NaN,
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6CD5\u4E00\uFF1Aset
[...new Set(arr)]
Array.from(new Set(arr))

// \u6CD5\u4E8C\uFF1A\u53CC\u5C42 for \u5FAA\u73AF
for (const i = 0; i &lt; arr.length; i++) {
  for (const j = i + 1; j &lt; arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1)

      // \u53BB\u91CD\u540E\u4F1A\u6539\u53D8\u6570\u7EC4\u957F\u5EA6\uFF0C\u6240\u4EE5\u8981\u5C06\u6570\u7EC4\u957F\u5EA6 arr.length \u548C\u4E0B\u6807 j \u51CF\u4E00
      arr.length--
      j--
    }
  }
}

// \u6CD5\u4E09\uFF1Afilter + indexOf
// \u5229\u7528 indexOf \u8FD4\u56DE\u6307\u5B9A\u503C\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u7D22\u5F15\u7684\u7D22\u5F15\uFF0C\u82E5\u540E\u9762\u53D1\u73B0 indexOf \u8FD4\u56DE\u503C\u548C\u5143\u7D20\u81EA\u8EAB\u7D22\u5F15\u5BF9\u4E0D\u4E0A\uFF0C\u5C31\u53BB\u91CD
arr.filter((item, index, array) =&gt; array.indexOf(item) === index)

// \u6CD5\u56DB\uFF1Afilter + Object \u952E\u503C\u5BF9
// \u5229\u7528\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u5C06\u6570\u7EC4\u503C\u4F9D\u6B21\u5B58\u5165\u5BF9\u8C61\uFF0C\u82E5\u5B58\u7684\u65F6\u5019\u53D1\u73B0\u5BF9\u8C61\u4E2D\u5DF2\u7ECF\u6709\u8BE5\u503C\u4E86\uFF0C\u5C31\u53BB\u91CD
// \u5BF9\u8C61\u5C5E\u6027\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u901A\u8FC7 typeof item + item\uFF0C\u6765\u5C06\u6570\u5B57\u62FC\u6210\u5B57\u7B26\u4E32\uFF0C\u9632\u6B62\u8BEF\u5DEE
// \u8D4B\u503C\u8BED\u53E5\u8FD4\u56DE\u503C\u662F\u7B49\u53F7\u53F3\u8FB9\u7684\u503C
const obj = {}
array.filter((item) =&gt; obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)

// \u5176\u4ED6\u65B9\u6CD5\u6682\u4E0D\u6574\u7406\uFF0C\u53EF\u53C2\u8003
// http://www.inode.club/interview/unique.html
// https://github.com/mqyqingfeng/Blog/issues/27
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[s];function t(a,v){return i(),n("div",null,r)}var u=e(l,[["render",t],["__file","\u6570\u7EC4\u53BB\u91CD.html.vue"]]);export{u as default};
