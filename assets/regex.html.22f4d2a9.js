import{_ as e,o as a,c as i,d}from"./app.40908950.js";const n={},s=d(`<h1 id="regex" tabindex="-1"><a class="header-anchor" href="#regex" aria-hidden="true">#</a> Regex</h1><h2 id="\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a> \u89C4\u5219</h2><h3 id="\u5B57\u7B26\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u7EC4" aria-hidden="true">#</a> \u5B57\u7B26\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[abc]  \u5B57\u7B26\u96C6
[^abc] \u5426\u5B9A\u5B57\u7B26\u96C6
[a-z]  \u8303\u56F4

.      \u70B9\u3002\u901A\u914D\u7B26\uFF0C\u8868\u793A\u51E0\u4E4E\u4EFB\u610F\u5B57\u7B26\u3002
\\d     \u6570\u5B57\u3002[0-9] \u7B80\u5199\u3002
\\D     \u975E\u6570\u5B57
\\w     \u5355\u8BCD\u3002[0-9a-zA-Z_] \u7B80\u5199\u3002
\\W     \u975E\u5355\u8BCD
\\s     \u7A7A\u767D\u7B26\u3002[ \\t\\v\\n\\r\\f] \u7B80\u5199\u3002
\\S     \u975E\u7A7A\u767D\u7B26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CF\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u91CF\u8BCD" aria-hidden="true">#</a> \u91CF\u8BCD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{m}    \u51FA\u73B0 m \u6B21
{m,}   \u51FA\u73B0 m \u6B21\u53CA\u4EE5\u4E0A
{m,n}  \u51FA\u73B0 m \u5230 n \u6B21

?      \u51FA\u73B0 0 \u5230 1 \u6B21
*      \u51FA\u73B0 0 \u6B21\u53CA\u4EE5\u4E0A
+      \u51FA\u73B0 1 \u6B21\u53CA\u4EE5\u4E0A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>^      \u5F00\u5934
$      \u7ED3\u5C3E
\\b     \u5355\u8BCD\u8FB9\u754C
\\B     \u975E\u5355\u8BCD\u8FB9\u754C

(?=)   \u6B63\u5411\u5148\u884C\u65AD\u8A00\u3002\u524D\u77BB\u3002
(?!)   \u8D1F\u5411\u5148\u884C\u65AD\u8A00
(?&lt;=)  \u6B63\u5411\u540E\u884C\u65AD\u8A00\u3002\u540E\u987E\u3002
(?&lt;!)  \u8D1F\u5411\u540E\u884C\u65AD\u8A00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5206\u7EC4" aria-hidden="true">#</a> \u5206\u652F\u5206\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|   \u5206\u652F
()  \u5206\u7EC4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4FEE\u9970\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>i  \u5FFD\u7565\u5927\u5C0F\u5199
m  \u591A\u884C
g  \u5168\u5C40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h3><p>\u5DE6\u4FA7\u7A7A\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^\\s*/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53F3\u4FA7\u7A7A\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/\\s*$/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5DE6\u53F3\u7A7A\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/(^\\s*|\\s*$)/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6240\u6709\u7A7A\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/\\s*/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u7801" aria-hidden="true">#</a> \u5BC6\u7801</h3><p>\u5BC6\u7801 8-12 \u4F4D\uFF0C\u7531\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\u7EC4\u6210\uFF0C\u5176\u4E2D\u81F3\u5C11\u5305\u62EC\u4E00\u4E2A\u5927\u5199\u5B57\u6BCD\uFF0C\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C\u4E00\u4E2A\u6570\u5B57</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4-24-\u65F6\u5236" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4-24-\u65F6\u5236" aria-hidden="true">#</a> \u65F6\u95F4\uFF0824 \u65F6\u5236\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^([01][0-9]|2[0-3]):[0-5][0-9]$/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u65E5\u671F-yyyy-mm-dd" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F-yyyy-mm-dd" aria-hidden="true">#</a> \u65E5\u671F\uFF08yyyy-mm-dd\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u624B\u673A\u53F7" tabindex="-1"><a class="header-anchor" href="#\u624B\u673A\u53F7" aria-hidden="true">#</a> \u624B\u673A\u53F7</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^1[3-9][0-9]{9}$/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8EAB\u4EFD\u8BC1\u53F7" tabindex="-1"><a class="header-anchor" href="#\u8EAB\u4EFD\u8BC1\u53F7" aria-hidden="true">#</a> \u8EAB\u4EFD\u8BC1\u53F7</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5341\u516D\u8FDB\u5236\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u5341\u516D\u8FDB\u5236\u989C\u8272" aria-hidden="true">#</a> \u5341\u516D\u8FDB\u5236\u989C\u8272</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^#([0-9a-f]{3}|[0-9a-f]{6})$/ig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u91D1\u989D\u5343\u5206\u4F4D\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#\u91D1\u989D\u5343\u5206\u4F4D\u5206\u5272" aria-hidden="true">#</a> \u91D1\u989D\u5343\u5206\u4F4D\u5206\u5272</h3><p>\u7EAF\u6570\u5B57\u5343\u5206\u4F4D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/(?!^)(?=(\\d{3})+$)/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E26\u5C0F\u6570\u5343\u5206\u4F4D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/(?!^)(?=(\\d{3})+\\.)/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E2A\u4EBA\u7406\u89E3\uFF0C\u6B63\u5219 g \u540E\u7F00\u4FEE\u9970\u7B26\uFF0Creplace \u66FF\u6362\u7684\u65F6\u5019\u8981\u52A0\uFF0Ctest \u6D4B\u8BD5\u7684\u65F6\u5019\u4E0D\u9700\u8981\u52A0\u3002</p></div>`,41),r=[s];function l(t,c){return a(),i("div",null,r)}var u=e(n,[["render",l],["__file","regex.html.vue"]]);export{u as default};
