import{_ as e,o as i,c as d,d as n}from"./app.8fe020dd.js";const t={},s=n(`<h1 id="gitignore-\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gitignore-\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> .gitignore \u6587\u4EF6\u914D\u7F6E</h1><p><code>.gitignore</code> \u6587\u4EF6\u7528\u4E8E\u7EDF\u4E00\u914D\u7F6E\u4E0D\u63D0\u4EA4\u5230\u4ED3\u5E93\u4E2D\u7684\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.vscode

dist
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><p>\u5176\u4F59\u5982\u4E00\u4E9B\u7CFB\u7EDF\u3001\u7F16\u8F91\u5668\u6587\u4EF6\u4E4B\u7C7B\u7684\u914D\u7F6E\uFF0C\u53EF\u501F\u52A9 <code>vscode</code> \u63D2\u4EF6 <code>gitignore</code> \u751F\u6210\u3002</p></li><li><p><code>.gitignore</code> \u6587\u4EF6\u53EA\u80FD\u5FFD\u7565\u90A3\u4E9B\u539F\u6765\u6CA1\u6709\u88AB <code>track</code> \u7684\u6587\u4EF6\uFF0C\u5982\u679C\u67D0\u4E9B\u6587\u4EF6\u5DF2\u7ECF\u88AB\u7EB3\u5165\u4E86\u7248\u672C\u7BA1\u7406\u4E2D\uFF0C\u5219\u4FEE\u6539 <code>.gitignore</code> \u6587\u4EF6\u662F\u65E0\u6548\u7684\u3002\u89E3\u51B3\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9488\u5BF9\u5355\u4E2A\u6587\u4EF6
git rm --cached &lt;file&gt;
git add &lt;file&gt;
git commit -m &#39;update .gitignore&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9488\u5BF9\u6240\u6709\u6587\u4EF6
git rm -r --cached .
git add .
git commit -m &#39;update .gitignore&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div>`,4),c=[s];function a(l,r){return i(),d("div",null,c)}var v=e(t,[["render",a],["__file","gitignore \u6587\u4EF6\u914D\u7F6E.html.vue"]]);export{v as default};
