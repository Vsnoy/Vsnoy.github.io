import{_ as d,o as s,c as a,a as e,b as l,d as t,e as i,r}from"./app.3a5b5902.js";const c={},v=t('<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="\u5E38\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u51FD\u6570" aria-hidden="true">#</a> \u5E38\u7528\u51FD\u6570</h2><ul><li>var | attr | url</li><li>rgb | rgba | hsl | hsla</li><li>calc | min | max | clamp</li><li>translate | rotate | scale | skew</li><li>linear-gradient | radial-gradient | conic-gradient</li><li>blur | brightness | drop-shadow | grayscale | invert | opacity</li><li>cubic-bezier</li></ul><h2 id="\u6837\u5F0F\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u6837\u5F0F\u4F18\u5148\u7EA7</h2><p>!important &gt; \u884C\u5185 &gt; \u5185\u90E8 &gt; \u5916\u90E8 &gt; id &gt; \u7C7B | \u4F2A\u7C7B | \u5C5E\u6027 &gt; \u6807\u7B7E | \u4F2A\u5143\u7D20 &gt; \u901A\u914D\u7B26 &gt; \u7EE7\u627F &gt; \u6D4F\u89C8\u5668\u9ED8\u8BA4</p><h2 id="\u91CD\u6392-\u91CD\u7ED8" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6392-\u91CD\u7ED8" aria-hidden="true">#</a> \u91CD\u6392 &amp; \u91CD\u7ED8</h2><ul><li>\u91CD\u6392\uFF1A\u5143\u7D20\u7684\u4F4D\u7F6E\u53D1\u751F\u53D8\u52A8\u65F6\u53D1\u751F\u91CD\u6392\uFF0C\u4E5F\u53EB\u56DE\u6D41\u3002</li><li>\u91CD\u7ED8\uFF1A\u5143\u7D20\u7684\u6837\u5F0F\u53D1\u751F\u53D8\u52A8\uFF0C\u4F46\u662F\u4F4D\u7F6E\u6CA1\u6709\u6539\u53D8\u3002</li></ul>',7),o={href:"https://juejin.cn/post/7075515261121626119",target:"_blank",rel:"noopener noreferrer"},u=i("\u91CD\u6392\u91CD\u7ED8"),h=t('<h2 id="zoom-scale" tabindex="-1"><a class="header-anchor" href="#zoom-scale" aria-hidden="true">#</a> zoom &amp; scale</h2><ul><li><code>zoom</code><ul><li>\u7F29\u653E\u65F6\u6539\u53D8\u5143\u7D20\u5360\u636E\u7684\u7A7A\u95F4\u5927\u5C0F</li><li>\u7F29\u653E\u4F4D\u7F6E\u76F8\u5BF9\u4E8E\u5DE6\u4E0A\u89D2\u7F29\u653E</li><li>\u5BF9\u6587\u5B57\u7B49\u6BD4\u7F29\u653E\uFF0C\u6700\u5C0F\u7F29\u653E\u5230 12px</li><li>\u4F1A\u5F15\u8D77\u6574\u4E2A\u9875\u9762\u91CD\u65B0\u6E32\u67D3</li></ul></li><li><code>scale</code><ul><li>\u7F29\u653E\u65F6\u4E0D\u6539\u53D8\u5143\u7D20\u5360\u636E\u7684\u7A7A\u95F4\u5927\u5C0F</li><li>\u7F29\u653E\u4F4D\u7F6E\u9ED8\u8BA4\u76F8\u5BF9\u4E8E\u4E2D\u5FC3\u7F29\u653E</li><li>\u5BF9\u6587\u5B57\u7B49\u6BD4\u7F29\u653E\uFF0C\u65E0\u9650\u5236</li><li>\u4F1A\u5728\u5F53\u524D\u5143\u7D20\u4E0A\u91CD\u7ED8</li></ul></li></ul>',2),b={href:"https://owen027.github.io/2019/06/17/zoomAndScale/",target:"_blank",rel:"noopener noreferrer"},g=i("zoom \u548C scale \u533A\u522B"),m=t(`<h2 id="nth-child-nth-of-type" tabindex="-1"><a class="header-anchor" href="#nth-child-nth-of-type" aria-hidden="true">#</a> nth-child &amp; nth-of-type</h2><h3 id="nth-child" tabindex="-1"><a class="header-anchor" href="#nth-child" aria-hidden="true">#</a> nth-child</h3><p><code>:nth-child(n)</code> \u9009\u62E9\u5668\u5339\u914D\u7236\u5143\u7D20\u7684\u7B2C <code>N</code> \u4E2A\u5B50\u5143\u7D20\uFF0C\u4E0D\u8BBA\u5143\u7D20\u7684\u7C7B\u578B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
  &lt;p class=&quot;green&quot;&gt;p1&lt;/p&gt;
  &lt;p class=&quot;green&quot;&gt;p2&lt;/p&gt;
  &lt;div class=&quot;green&quot;&gt;div1&lt;/div&gt;
  &lt;div class=&quot;green&quot;&gt;div2&lt;/div&gt;
&lt;/div&gt;

div p:nth-child(1) {
  background-color: green;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
  &lt;p class=&quot;green&quot;&gt;p1&lt;/p&gt;
  &lt;p class=&quot;green&quot;&gt;p2&lt;/p&gt;
  &lt;div class=&quot;green&quot;&gt;div1&lt;/div&gt;
  &lt;div class=&quot;green&quot;&gt;div2&lt;/div&gt;
&lt;/div&gt;

div div:nth-child(1) {
  background-color: green;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_child_01.png" alt="nth_child_01"></p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_child_02.png" alt="nth_child_02"></p><h3 id="nth-of-type" tabindex="-1"><a class="header-anchor" href="#nth-of-type" aria-hidden="true">#</a> nth-of-type</h3><p><code>:nth-of-type(n)</code> \u9009\u62E9\u5668\u5339\u914D\u7236\u5143\u7D20\u7279\u5B9A\u7C7B\u578B\u7684\u7B2C <code>N</code> \u4E2A\u5B50\u5143\u7D20\uFF0C\u4E14\u548C\u6807\u7B7E\u7C7B\u578B\u6709\u5173\uFF0C\u53EF\u80FD\u4F1A\u5339\u914D\u5230\u591A\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
  &lt;p class=&quot;green&quot;&gt;p1&lt;/p&gt;
  &lt;p class=&quot;green&quot;&gt;p2&lt;/p&gt;
  &lt;div class=&quot;green&quot;&gt;div1&lt;/div&gt;
  &lt;div class=&quot;green&quot;&gt;div2&lt;/div&gt;
&lt;/div&gt;

div .green:nth-of-type(1) {
  background-color: green;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
  &lt;p&gt;p0&lt;/p&gt;
  &lt;p class=&quot;green&quot;&gt;p1&lt;/p&gt;
  &lt;p class=&quot;green&quot;&gt;p2&lt;/p&gt;
  &lt;div class=&quot;green&quot;&gt;div1&lt;/div&gt;
  &lt;div class=&quot;green&quot;&gt;div2&lt;/div&gt;
&lt;/div&gt;

div .green:nth-of-type(1) {
  background-color: green;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_of_type_01.png" alt="nth_of_type_01"></p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_of_type_02.png" alt="nth_of_type_02"></p>`,13),p={href:"https://juejin.cn/post/6844904174937866247",target:"_blank",rel:"noopener noreferrer"},_=i("nth-of-type \u8BE6\u89E3"),x=e("br",null,null,-1),f={href:"https://liyucang-git.github.io/2019/07/16/first-of-type%E7%9A%84%E8%AF%AF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},q=i(":first-of-type \u7684\u8BEF\u7528"),w={href:"https://juejin.cn/post/7055272013018955806#heading-7",target:"_blank",rel:"noopener noreferrer"},y=i("nth-of-type \u4E0E nth-child \u7684\u533A\u522B"),k=e("h2",{id:"flex-basis-\u548C-width-\u4F18\u5148\u7EA7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flex-basis-\u548C-width-\u4F18\u5148\u7EA7","aria-hidden":"true"},"#"),i(" flex-basis \u548C width \u4F18\u5148\u7EA7")],-1),V=e("p",null,"max-width/min-width > flex-basis > width",-1),P={href:"https://juejin.cn/post/6844903914148462599",target:"_blank",rel:"noopener noreferrer"},j=i("width \u4E0E flex-basis \u533A\u522B"),z=t(`<h2 id="margin-\u8D1F\u503C" tabindex="-1"><a class="header-anchor" href="#margin-\u8D1F\u503C" aria-hidden="true">#</a> margin \u8D1F\u503C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;a&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;b&quot;&gt;&lt;/div&gt;

.a {
  width: 100px;
  height: 100px;
  background-color: pink;
  margin-bottom: -50px;
}

.b {
  width: 100px;
  height: 100px;
  background-color: green;
  opacity: 0.5;

  // margin-top: -50px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/margin_nagative_value_01.png" alt="margin_nagative_value_01"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;a&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;b&quot;&gt;&lt;/div&gt;

.a {
  width: 100px;
  height: 100px;
  background-color: pink;
  float: left;
  
  margin-right: -50px;
}

.b {
  width: 100px;
  height: 100px;
  background-color: green;
  opacity: 0.5;
  float: left;
  
  // margin-left: -50px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/margin_nagative_value_02.png" alt="margin_nagative_value_02"></p><h2 id="\u6587\u672C\u6EA2\u51FA\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6EA2\u51FA\u9690\u85CF" aria-hidden="true">#</a> \u6587\u672C\u6EA2\u51FA\u9690\u85CF</h2><h3 id="\u5355\u884C\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u6587\u672C" aria-hidden="true">#</a> \u5355\u884C\u6587\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.textflow {
  overflow: hidden; 
  white-space: nowrap; // \u6587\u672C\u4E0D\u6362\u884C
  text-overflow: ellipsis; // \u6587\u672C\u8D85\u51FA\u5448\u73B0\u7701\u7565\u53F7
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u884C\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.textflow {
  overflow: hidden;
  display: -webkit-box; // \u76D2\u6A21\u578B
  -webkit-line-clamp: 4; // \u63A7\u5236\u6587\u672C\u884C\u6570
  -webkit-box-orient: vertical; // \u5782\u76F4\u5E03\u7F6E\u5B50\u5143\u7D20

  text-overflow: ellipsis; // \u4E0D\u786E\u5B9A\u662F\u5426\u9700\u8981\u52A0\u4E0A\uFF0C\u4E0D\u52A0\u597D\u50CF\u4E5F\u80FD\u663E\u793A\u7701\u7565\u53F7
  word-break: break-all; // \u907F\u514D\u884C\u672B\u662F\u82F1\u6587\u6216\u6570\u5B57\u5E26\u6765\u7684\u95EE\u9898
}

PS: \u8BE5\u65B9\u6CD5\u4E0D\u517C\u5BB9 IE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9690\u85CF\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u5143\u7D20" aria-hidden="true">#</a> \u9690\u85CF\u5143\u7D20</h2><ul><li>display: none<br> \u4E0D\u5360\u4F4D\u7F6E</li><li>visibility: hidden<br> \u5360\u4F4D\u7F6E</li><li>opacity: 0<br> \u5360\u4F4D\u7F6E</li><li>transform: scale(0)<br> \u5360\u4F4D\u7F6E</li><li>clip/clip-path<br> \u5360\u4F4D\u7F6E</li><li>H5 hidden \u5C5E\u6027<br> \u4E0D\u5360\u4F4D\u7F6E</li><li>position: absolute<br> \u7EDD\u5BF9\u5B9A\u4F4D\u79FB\u51FA\u53EF\u89C6\u533A\u57DF</li><li>z-index \u8D1F\u503C<br> \u5176\u4ED6\u5143\u7D20\u8986\u76D6\u4F4F\u8BE5\u5143\u7D20</li></ul>`,12);function E(G,N){const n=r("ExternalLinkIcon");return s(),a("div",null,[v,e("p",null,[e("a",o,[u,l(n)])]),h,e("p",null,[e("a",b,[g,l(n)])]),m,e("p",null,[e("a",p,[_,l(n)]),x,e("a",f,[q,l(n)]),e("a",w,[y,l(n)])]),k,V,e("p",null,[e("a",P,[j,l(n)])]),z])}var S=d(c,[["render",E],["__file","css.html.vue"]]);export{S as default};
