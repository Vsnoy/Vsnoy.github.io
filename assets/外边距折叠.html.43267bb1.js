import{_ as n,o as d,c as a,a as e,e as l,d as s,b as r,r as c}from"./app.d58e7706.js";const t={},o=s(`<h1 id="\u5916\u8FB9\u8DDD\u6298\u53E0" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FB9\u8DDD\u6298\u53E0" aria-hidden="true">#</a> \u5916\u8FB9\u8DDD\u6298\u53E0</h1><p><code>margin</code> \u6298\u53E0\u53EA\u4F1A\u51FA\u73B0\u5728\u5782\u76F4\u65B9\u5411\u4E0A\uFF0C\u6C34\u5E73\u65B9\u5411\u4E0A\u4E0D\u4F1A\u51FA\u73B0\u3002\u6298\u53E0\u6709\u4E24\u79CD\u8868\u73B0\u5F62\u5F0F\uFF1A\u5408\u5E76\u4E0E\u584C\u9677\u3002</p><h2 id="margin-\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#margin-\u5408\u5E76" aria-hidden="true">#</a> margin \u5408\u5E76</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
  &lt;div class=&quot;a&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;b&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

.a {
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  background-color: pink;
}

.b {
  width: 100px;
  height: 100px;
  margin-top: 50px;
  background-color: green;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u76D2\u5B50\u4E4B\u95F4\u7684\u5782\u76F4\u95F4\u8DDD\uFF0C\u5B9E\u9645\u7ED3\u679C\u53EA\u6709 <code>50px</code> \uFF0C\u800C\u975E\u60F3\u8C61\u4E2D\u7684 <code>100px</code>\u3002<br> \u5144\u5F1F\u5143\u7D20\u5782\u76F4\u6392\u5217\uFF0C\u4E24\u8005\u4E4B\u95F4\u7684\u95F4\u8DDD\u53D6\u7684\u662F\u4E24\u8005\u6240\u8BBE\u7F6E <code>margin</code> \u7684\u6700\u5927\u503C\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5176\u4E2D\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20\u5305\u88F9\u5728 <code>BFC</code> \u4E2D\u3002</p><h2 id="margin-\u584C\u9677" tabindex="-1"><a class="header-anchor" href="#margin-\u584C\u9677" aria-hidden="true">#</a> margin \u584C\u9677</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;a&quot;&gt;
  &lt;div class=&quot;b&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

.a {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  background-color: pink;
}

.b {
  width: 50px;
  height: 50px;
  margin-top: 50px;
  background-color: green;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u76D2\u5B50\u7684\u5916\u8FB9\u8DDD\u5B9E\u9645\u7ED3\u679C\u662F <code>50px</code> \uFF0C \u800C\u975E\u60F3\u8C61\u4E2D\u7684 <code>20px</code>\u3002<br> \u7236\u5B50\u5143\u7D20\u5D4C\u5957\uFF0C\u5916\u5C42\u8FB9\u8DDD\u53D6\u7684\u662F\u4E24\u8005\u6240\u8BBE\u7F6E <code>margin</code> \u7684\u6700\u5927\u503C\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u7236\u5143\u7D20\u8BBE\u7F6E\u8FB9\u6846\uFF1B\u7236\u5143\u7D20\u5305\u88F9\u5728 <code>BFC</code> \u4E2D\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5782\u76F4\u65B9\u5411\u5916\u8FB9\u8DDD\u5408\u5E76\u8BA1\u7B97</p><ul><li>\u4E24\u4E2A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\u90FD\u662F <strong>\u6B63\u6570</strong> \u65F6\uFF0C\u6298\u53E0\u5916\u8FB9\u8DDD\u662F\u4E24\u8005\u4E2D\u8F83\u5927\u7684\u503C\u3002</li><li>\u4E24\u4E2A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\u90FD\u662F <strong>\u8D1F\u6570</strong> \u65F6\uFF0C\u6298\u53E0\u5916\u8FB9\u8DDD\u662F\u4E24\u8005\u4E2D\u7EDD\u5BF9\u503C\u8F83\u5927\u7684\u503C\u3002</li><li>\u4E24\u4E2A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\u662F <strong>\u4E00\u6B63\u4E00\u8D1F</strong> \u65F6\uFF0C\u6298\u53E0\u5916\u8FB9\u8DDD\u662F\u4E24\u8005\u76F8\u52A0\u7684\u548C\u3002</li></ul></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,12),v={href:"https://www.cnblogs.com/jzhFlash/p/16318095.html",target:"_blank",rel:"noopener noreferrer"},u=r("margin \u6298\u53E0\uFF1A\u5408\u5E76\u548C\u584C\u9677");function m(b,g){const i=c("ExternalLinkIcon");return d(),a("div",null,[o,e("ul",null,[e("li",null,[e("a",v,[u,l(i)])])])])}var p=n(t,[["render",m],["__file","\u5916\u8FB9\u8DDD\u6298\u53E0.html.vue"]]);export{p as default};
