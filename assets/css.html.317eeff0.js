import{_ as s,o as t,c as a,a as e,b as l,d,e as i,r}from"./app.f4c5f3d9.js";const c={},v=d(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="nth-child-nth-of-type" tabindex="-1"><a class="header-anchor" href="#nth-child-nth-of-type" aria-hidden="true">#</a> nth-child &amp; nth-of-type</h2><h3 id="nth-child" tabindex="-1"><a class="header-anchor" href="#nth-child" aria-hidden="true">#</a> nth-child</h3><p><code>:nth-child(n)</code> \u9009\u62E9\u5668\u5339\u914D\u7236\u5143\u7D20\u7684\u7B2C <code>N</code> \u4E2A\u5B50\u5143\u7D20\uFF0C\u4E0D\u8BBA\u5143\u7D20\u7684\u7C7B\u578B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_of_type_01.png" alt="nth_of_type_01"></p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/nth_of_type_02.png" alt="nth_of_type_02"></p>`,14),u={href:"https://juejin.cn/post/6844904174937866247",target:"_blank",rel:"noopener noreferrer"},o=i("nth-of-type \u8BE6\u89E3"),b=e("br",null,null,-1),h={href:"https://liyucang-git.github.io/2019/07/16/first-of-type%E7%9A%84%E8%AF%AF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},m=i(":first-of-type \u7684\u8BEF\u7528"),g=e("h2",{id:"flex-basis-\u548C-width-\u4F18\u5148\u7EA7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flex-basis-\u548C-width-\u4F18\u5148\u7EA7","aria-hidden":"true"},"#"),i(" flex-basis \u548C width \u4F18\u5148\u7EA7")],-1),p=e("p",null,"max-width/min-width > flex-basis > width",-1),x={href:"https://juejin.cn/post/6844903914148462599",target:"_blank",rel:"noopener noreferrer"},_=i("width \u4E0E flex-basis \u533A\u522B"),f=d(`<h2 id="margin-\u8D1F\u503C" tabindex="-1"><a class="header-anchor" href="#margin-\u8D1F\u503C" aria-hidden="true">#</a> margin \u8D1F\u503C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;a&quot;&gt;&lt;/div&gt;
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
}

PS: \u8BE5\u65B9\u6CD5\u4E0D\u517C\u5BB9 IE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9690\u85CF\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u5143\u7D20" aria-hidden="true">#</a> \u9690\u85CF\u5143\u7D20</h2><ul><li>display: none<br> \u4E0D\u5360\u4F4D\u7F6E</li><li>visibility: hidden<br> \u5360\u4F4D\u7F6E</li><li>opacity: 0<br> \u5360\u4F4D\u7F6E</li><li>transform: scale(0)<br> \u5360\u4F4D\u7F6E</li><li>clip/clip-path<br> \u5360\u4F4D\u7F6E</li><li>H5 hidden \u5C5E\u6027<br> \u4E0D\u5360\u4F4D\u7F6E</li><li>position: absolute<br> \u7EDD\u5BF9\u5B9A\u4F4D\u79FB\u51FA\u53EF\u89C6\u533A\u57DF</li><li>z-index \u8D1F\u503C<br> \u5176\u4ED6\u5143\u7D20\u8986\u76D6\u4F4F\u8BE5\u5143\u7D20</li></ul>`,12);function q(y,w){const n=r("ExternalLinkIcon");return t(),a("div",null,[v,e("p",null,[e("a",u,[o,l(n)]),b,e("a",h,[m,l(n)])]),g,p,e("p",null,[e("a",x,[_,l(n)])]),f])}var V=s(c,[["render",q],["__file","css.html.vue"]]);export{V as default};