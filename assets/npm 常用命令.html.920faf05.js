import{_ as e,o as n,c as i,e as d}from"./app.78233b17.js";const s={},l=d(`<h1 id="npm-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#npm-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> npm \u5E38\u7528\u547D\u4EE4</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u540E\u9762\u7528\u5230\u5C31\u8BB0\u5F55\u4E0B\uFF0C\u6301\u7EED\u66F4\u65B0\u3002</p></div><h2 id="\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a> \u67E5\u770B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u6307\u5B9A\u5305\u7684\u4ED3\u5E93
npm repo &lt;package&gt;

// \u67E5\u770B\u5168\u5C40\u5B89\u88C5\u5305
npm list -g --depth 0

// \u67E5\u770B\u67D0\u4E2A\u4F9D\u8D56\u7684\u6700\u65B0\u7248\u672C
npm view &lt;package&gt; version

// \u67E5\u770B\u4F9D\u8D56\u662F\u5426\u8FC7\u65F6
npm outdated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u914D\u7F6E\u5217\u8868
npm config list

// \u67E5\u770B\u67D0\u9879\u914D\u7F6E
npm config get &lt;config&gt;

// \u6DFB\u52A0\u6216\u4FEE\u6539\u67D0\u9879\u914D\u7F6E
npm config set &lt;config&gt; xxx

// \u5220\u9664\u67D0\u9879\u914D\u7F6E
npm config delete &lt;config&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true">#</a> \u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BBE\u7F6E\u4EE3\u7406
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

// \u5220\u9664\u4EE3\u7406
npm config delete proxy
npm config delete https-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u521D\u59CB\u5316 package.json
npm init -y

// \u5B89\u88C5\u4F9D\u8D56\uFF0C\u5E76\u786E\u4FDD\u4E00\u81F4
npm ci

// \u66F4\u65B0\u7248\u672C\u53F7
npm version xxx

// \u6E05\u7406\u7F13\u5B58
npm cache clean -f

// \u5220\u9664 node_modules
rm -rf node_modules

// \u5220\u9664 node_modules\uFF0C\u6E05\u7406\u7F13\u5B58\uFF0C\u91CD\u65B0\u5B89\u88C5
rm -rf node_modules &amp;&amp; npm cache clean -f &amp;&amp; npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[l];function r(c,v){return n(),i("div",null,a)}var m=e(s,[["render",r],["__file","npm \u5E38\u7528\u547D\u4EE4.html.vue"]]);export{m as default};
