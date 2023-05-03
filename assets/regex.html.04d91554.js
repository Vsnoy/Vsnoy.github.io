import{_ as a,o as d,c as n,a as e,b as s,d as l,e as r,r as t}from"./app.27ae5949.js";const c={},u=l(`<h1 id="regex" tabindex="-1"><a class="header-anchor" href="#regex" aria-hidden="true">#</a> Regex</h1><h2 id="\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a> \u89C4\u5219</h2><h3 id="\u5B57\u7B26\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u7EC4" aria-hidden="true">#</a> \u5B57\u7B26\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[abc]  \u5B57\u7B26\u96C6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5F15\u7528" aria-hidden="true">#</a> \u53D8\u91CF\u5F15\u7528</h3><p>\u5B57\u9762\u91CF\u5F62\u5F0F\u7684\u6B63\u5219\u65E0\u6CD5\u5BF9\u53D8\u91CF\u8FDB\u884C\u5F15\u7528\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u7528\u5230\u6784\u9020\u51FD\u6570\u7684\u5F62\u5F0F\u6765\u521B\u5EFA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const key = &#39;\u767D\u8272\u76F8\u7C3F&#39;
const str = &#39;\u53C8\u5230\u4E86\u767D\u8272\u76F8\u7C3F\u7684\u5B63\u8282\u4E86&#39;
const reg = new RegExp(\`(\${key})\`, &quot;g&quot;);

str.split(reg) // [&#39;\u53C8\u5230\u4E86&#39;, &#39;\u767D\u8272\u76F8\u7C3F&#39;, &#39;\u7684\u5B63\u8282\u4E86&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h3><p>\u5DE6\u4FA7\u7A7A\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/^\\s*/g
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h3><h4 id="\u8F93\u5165\u6846\u6570\u5B57\u5C0F\u6570" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u6846\u6570\u5B57\u5C0F\u6570" aria-hidden="true">#</a> \u8F93\u5165\u6846\u6570\u5B57\u5C0F\u6570</h4><ul><li>\u53BB\u9664\u4E24\u8FB9\u7A7A\u767D</li><li>\u53EA\u80FD\u5305\u542B\u6570\u5B57\u3001\u5C0F\u6570\u70B9</li><li>\u53EA\u4FDD\u7559\u7B2C\u4E00\u4E2A\u5C0F\u6570\u70B9\uFF0C\u7B2C\u4E8C\u4E2A\u5C0F\u6570\u70B9\u53CA\u4E4B\u540E\u7684\u6570\u5168\u90E8\u53BB\u6389</li><li>\u5C0F\u6570\u70B9\u540E\u6CA1\u6709\u6570\u5B57\uFF0C\u53BB\u6389\u5C0F\u6570\u70B9</li><li>\u5C0F\u6570\u70B9\u524D\u6CA1\u6709\u6570\u5B57\uFF0C\u81EA\u52A8\u8865 0</li><li>\u53BB\u9664\u5C0F\u6570\u70B9\u540E\u672B\u5C3E\u7684 0</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6B63\u5219\u987A\u5E8F\u5F88\u91CD\u8981\uFF0C\u4E0D\u80FD\u968F\u610F\u8C03\u6362
input_value
  .replace(/\\s*/g, &quot;&quot;)
  .replace(/[^\\d.]/g, &quot;&quot;)
  .replace(&quot;.&quot;, &quot;$#$&quot;)
  .replace(/\\..*$/g, &quot;&quot;)
  .replace(&quot;$#$&quot;, &quot;.&quot;)
  .replace(/\\.$/g, &quot;&quot;)
  .replace(/^\\./g, &quot;0.&quot;)
  .replace(/(?:\\.0*|(\\.\\d+?)0+)$/, &quot;$1&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),v={href:"https://juejin.cn/post/6943558083897458718",target:"_blank",rel:"noopener noreferrer"},h=r("JS \u53BB\u9664\u5C0F\u6570\u70B9\u540E\u591A\u4F59\u7684 0"),m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"\u4E2A\u4EBA\u7406\u89E3\uFF0C\u6B63\u5219 g \u540E\u7F00\u4FEE\u9970\u7B26\uFF0Creplace \u66FF\u6362\u7684\u65F6\u5019\u8981\u52A0\uFF0Ctest \u6D4B\u8BD5\u7684\u65F6\u5019\u4E0D\u9700\u8981\u52A0\u3002")],-1);function o(b,x){const i=t("ExternalLinkIcon");return d(),n("div",null,[u,e("p",null,[e("a",v,[h,s(i)])]),m])}var p=a(c,[["render",o],["__file","regex.html.vue"]]);export{p as default};
