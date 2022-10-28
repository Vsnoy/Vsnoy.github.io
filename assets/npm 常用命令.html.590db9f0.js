import{_ as e,o as n,c as i,e as s}from"./app.a2f823b7.js";const d={},a=s(`<h1 id="npm-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#npm-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> npm \u5E38\u7528\u547D\u4EE4</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u540E\u9762\u7528\u5230\u5C31\u8BB0\u5F55\u4E0B\uFF0C\u6301\u7EED\u66F4\u65B0\u3002</p></div><h2 id="\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6362\u6E90" aria-hidden="true">#</a> \u6362\u6E90</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u5F53\u524D\u6E90
npm config get registry

// \u8BBE\u7F6E\u5F53\u524D\u6E90
npm config set registry &lt;url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true">#</a> \u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BBE\u7F6E\u4EE3\u7406
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

// \u5220\u9664\u4EE3\u7406
npm config delete proxy
npm config delete https-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u8BBE\u7F6E\u5217\u8868
npm config list

// \u67E5\u770B\u5168\u5C40\u5B89\u88C5\u5305
npm list -g --depth 0

// \u6E05\u7406\u7F13\u5B58
npm cache clean -f

// \u7248\u672C\u53F7\u66F4\u65B0
npm version xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[a];function r(t,c){return n(),i("div",null,l)}var m=e(d,[["render",r],["__file","npm \u5E38\u7528\u547D\u4EE4.html.vue"]]);export{m as default};
