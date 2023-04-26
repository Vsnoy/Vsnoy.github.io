import{_ as s,o as l,c as t,a as e,b as d,d as a,e as i,r}from"./app.8fe020dd.js";const c={},o=a(`<h1 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h1><h2 id="api-\u5907\u5FD8" tabindex="-1"><a class="header-anchor" href="#api-\u5907\u5FD8" aria-hidden="true">#</a> API \u5907\u5FD8</h2><h3 id="parseint" tabindex="-1"><a class="header-anchor" href="#parseint" aria-hidden="true">#</a> parseInt</h3><p><code>parseInt</code> \u89E3\u6790\u4E00\u4E2A\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u6307\u5B9A\u57FA\u6570\u7684\u5341\u8FDB\u5236\u6574\u6570\u6216 <code>NaN</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>parseInt(string[, radix])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>string</code>\uFF1A \u8981\u88AB\u89E3\u6790\u7684\u503C\u3002\u82E5\u53C2\u6570\u4E0D\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5219\u9ED8\u8BA4\u4F1A\u5C06\u5176\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u7A7A\u767D\u7B26\u5C06\u4F1A\u88AB\u5FFD\u7565\u3002</li><li><code>radix</code>\uFF1A \u57FA\u6570\u3002\u4ECB\u4E8E <code>2-36</code> \u4E4B\u95F4\u7684\u6574\u6570\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>\u6CE8\u610F</strong>\uFF1A \u5728 <code>radix</code> \u4E3A <code>0</code> \u6216 <code>undefined</code>\uFF0C\u6216\u6CA1\u6709\u6307\u5B9A\u7684\u60C5\u51B5\u4E0B\uFF0C<code>JS</code> \u4F5C\u5982\u4E0B\u5904\u7406\uFF1A</p><ul><li>\u5982\u679C\u5B57\u7B26\u4E32 <code>string</code> \u4EE5 <code>0x</code> \u6216\u8005 <code>0X</code> \u5F00\u5934\uFF0C\u5219\u57FA\u6570\u662F <code>16</code>\u3002</li><li>\u5982\u679C\u5B57\u7B26\u4E32 <code>string</code> \u4EE5 <code>0</code> \u5F00\u5934\uFF0C\u57FA\u6570\u662F <code>8</code> \u6216\u8005 <code>10</code>\uFF0C\u4E00\u822C\u4E3A <code>10</code>\uFF0C\u5177\u4F53\u89C6\u73AF\u5883\u800C\u5B9A\u3002</li><li>\u5982\u679C\u5B57\u7B26\u4E32 <code>string</code> \u4EE5\u5176\u5B83\u4EFB\u4F55\u503C\u5F00\u5934\uFF0C\u5219\u57FA\u6570\u662F <code>10</code>\u3002</li></ul></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD4\u56DE <code>NaN</code> \u7684\u60C5\u51B5</p><ul><li><code>radix</code> \u4E0D\u5728 2-36 \u8303\u56F4\u4E4B\u5185</li><li><code>string</code> \u5DE6\u8D77\u7B2C\u4E00\u4E2A\u6570\u5927\u4E8E\u8FDB\u5236\u6570 <code>radix</code></li><li>\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B57\u7B26\u4E0D\u4E3A\u6570\u5B57</li></ul></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p><code>map</code> \u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5176\u503C\u7531\u539F\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u7ED3\u679C\u7EC4\u6210\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arr.map(function callback(currentValue[,index[, array]]) {
  // Return element for new_array
}[, thisArg])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>callback</code>\uFF1A\u751F\u6210\u65B0\u6570\u7EC4\u5143\u7D20\u7684\u56DE\u8C03\u51FD\u6570\u3002 <ul><li><code>currentValue</code>\uFF1A\u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u3002</li><li><code>index</code>\uFF1A\u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u3002</li><li><code>array</code>: \u88AB\u8C03\u7528\u7684\u6570\u7EC4\u3002</li></ul></li><li><code>thisArg</code>: \u6267\u884C <code>callback</code> \u51FD\u6570\u65F6\u4F7F\u7528\u7684 <code>this</code> \u503C\u3002</li></ul><h2 id="\u6D4F\u89C8\u5668\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5B58\u50A8" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u5B58\u50A8</h2><h3 id="localstorage-sessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage-sessionstorage" aria-hidden="true">#</a> localStorage &amp; sessionStorage</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>localStorage.setItem()
sessionStorage.setItem()

localStorage.getItem()
sessionStorage.getItem()

localStorage.removeItem()
sessionStorage.removeItem()

localStorage.clear()
sessionStorage.clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>localStorage/sessionStorage</code> \u53EA\u80FD\u5B58\u50A8\u5B57\u7B26\u4E32\uFF0C\u65E0\u6CD5\u5B58\u50A8\u5BF9\u8C61\u6570\u7EC4\u3002 \u5B9E\u5728\u8981\u5B58\u9700\u8981\u5148\u8F6C\u4E3A <code>JSON</code>\uFF0C\u4EE5 <code>localStorage</code> \u4E3A\u4F8B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, 3]

localStorage.setItem(&#39;arr&#39;, JSON.stringify(arr))
JSON.parse(localStorage.getItem(&#39;arr&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getCookie = (name) =&gt; {
  let matches = document.cookie.match(new RegExp(
    &quot;(?:^|; )&quot; + name.replace(/([.$?*|{}()[\\]\\\\/+^])/g, &#39;\\\\$1&#39;) + &quot;=([^;]*)&quot;
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const setCookie = (name, value, options = {}) =&gt; {
  options = {
    path: &#39;/&#39;,
    // add other defaults here if necessary
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + &quot;=&quot; + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += &quot;; &quot; + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += &quot;=&quot; + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// \u4F7F\u7528\u793A\u4F8B
setCookie(&#39;user&#39;, &#39;John&#39;, {secure: true, &#39;max-age&#39;: 3600});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const deleteCookie = (name) =&gt; {
  setCookie(name, &quot;&quot;, {
    &#39;max-age&#39;: -1
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),v={href:"https://zh.javascript.info/cookie",target:"_blank",rel:"noopener noreferrer"},u=i("Cookie"),m=a(`<h2 id="dom-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#dom-\u64CD\u4F5C" aria-hidden="true">#</a> DOM \u64CD\u4F5C</h2><h3 id="\u83B7\u53D6\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8282\u70B9" aria-hidden="true">#</a> \u83B7\u53D6\u8282\u70B9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()

xxx.children
xxx.firstElementChild
xxx.lastElementChild

xxx.childNodes // \u5305\u542B\u6587\u672C\u3001\u6362\u884C\u3001\u7A7A\u683C
xxx.firstChild // \u5305\u542B\u6587\u672C\u3001\u6362\u884C\u3001\u7A7A\u683C
xxx.lastChild // \u5305\u542B\u6587\u672C\u3001\u6362\u884C\u3001\u7A7A\u683C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a> \u521B\u5EFA\u8282\u70B9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>document.createElement()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8282\u70B9" aria-hidden="true">#</a> \u6DFB\u52A0\u8282\u70B9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xxx.appendChild()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5220\u9664\u8282\u70B9
xxx.remove()

// \u5220\u9664\u8282\u70B9\u4E0B\u7684\u67D0\u4E2A\u5B50\u8282\u70B9
xxx.removeChild()

// \u5220\u9664\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9
xxx.innerHTML = &#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u6DFB\u52A0\u5220\u9664\u7C7B\u540D" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6DFB\u52A0\u5220\u9664\u7C7B\u540D" aria-hidden="true">#</a> \u52A8\u6001\u6DFB\u52A0\u5220\u9664\u7C7B\u540D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xxx.classList.add()
xxx.classList.remove()
xxx.classList.toggle()
xxx.classList.contains()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u83B7\u53D6\u76D2\u5B50\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u83B7\u53D6\u76D2\u5B50\u5BBD\u9AD8" aria-hidden="true">#</a> \u52A8\u6001\u83B7\u53D6\u76D2\u5B50\u5BBD\u9AD8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53EA\u80FD\u83B7\u53D6\u884C\u5185\u6837\u5F0F\u8BBE\u7F6E\u7684\u5BBD\u9AD8\uFF0C\u5185\u90E8\u548C\u5916\u90E8\u6837\u5F0F\u8868\u7684\u6837\u5F0F\u53D6\u4E0D\u5230\u3002
// \u4E14\u8BE5\u5BBD\u9AD8\u53EA\u662F\u8BBE\u7F6E\u7684\u5BBD\u9AD8\uFF0C\u4E0D\u7B49\u4E8E\u6700\u7EC8\u6E32\u67D3\u540E\u7684\u5BBD\u9AD8
// \u6BD4\u5982 box-sizing \u4E3A content-box \u65F6\uFF0C\u76D2\u5B50\u5BBD\u9AD8\u8FD8\u53D7 padding\u3001border \u5F71\u54CD
xxx.style.width
xxx.style.height

// \u83B7\u53D6\u6700\u7EC8\u6E32\u67D3\u540E\u7684\u5BBD\u9AD8\uFF08\u4EC5 IE \u517C\u5BB9\uFF09
xxx.currentStyle.width
xxx.currentStyle.height

// \u83B7\u53D6\u6700\u7EC8\u6E32\u67D3\u540E\u7684\u5BBD\u9AD8\uFF08\u591A\u6D4F\u89C8\u5668\u517C\u5BB9\uFF0CIE9 \u4EE5\u4E0A\u652F\u6301\uFF09
xxx.getComputedStyle(xxx).width
xxx.getComputedStyle(xxx).height

// \u83B7\u53D6\u6700\u7EC8\u6E32\u67D3\u540E\u7684\u5BBD\u9AD8\uFF08\u591A\u6D4F\u89C8\u5668\u517C\u5BB9\uFF0CIE9 \u4EE5\u4E0A\u652F\u6301\u3002\u6B64\u5916\u8FD8\u53EF\u53D6\u5230\u76F8\u5BF9\u4E8E\u89C6\u7A97\u4E0A\u4E0B\u5DE6\u53F3\u7684\u8DDD\u79BB\u3002\uFF09
xxx.getBoundingClientRect().width
xxx.getBoundingClientRect().height

// \u83B7\u53D6\u6700\u7EC8\u6E32\u67D3\u540E\u7684\u5BBD\u9AD8\uFF08\u6700\u5E38\u7528\uFF0C\u517C\u5BB9\u6027\u6700\u597D\uFF0C\u5305\u62EC\u5BBD\u9AD8\u3001\u5185\u8FB9\u8DDD\u548C\u8FB9\u6846\uFF09
xxx.offsetWidth
xxx.offsetHeight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6837\u5F0F" aria-hidden="true">#</a> \u8BBE\u7F6E\u6837\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xxx.style.xxx
xxx.setAttribute(&#39;style&#39;, xxx)

xxx.className
xxx.classList

xxx.style.getPropertyValue(xxx)
xxx.style.setProperty(xxx, xxx, xxx)
xxx.style.removeProperty(xxx)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),b={href:"https://blog.csdn.net/weixin_45707610/article/details/126407142",target:"_blank",rel:"noopener noreferrer"},h=i("JS \u8BBE\u7F6E CSS \u6837\u5F0F"),x=a(`<h3 id="\u6839\u5143\u7D20-html" tabindex="-1"><a class="header-anchor" href="#\u6839\u5143\u7D20-html" aria-hidden="true">#</a> \u6839\u5143\u7D20 html</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// JS
document.documentElement

// CSS
:root {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-image-document-createelement-img" tabindex="-1"><a class="header-anchor" href="#new-image-document-createelement-img" aria-hidden="true">#</a> new Image() &amp; document.createElement(&#39;img&#39;)</h3><p>\u4E24\u8005\u90FD\u80FD\u521B\u5EFA\u56FE\u7247\u8282\u70B9\uFF0C\u53EF\u89C6\u4E3A\u7B49\u4EF7\u3002</p><h2 id="dom-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#dom-\u4E8B\u4EF6" aria-hidden="true">#</a> DOM \u4E8B\u4EF6</h2><h3 id="\u89E6\u6478\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E6\u6478\u4E8B\u4EF6" aria-hidden="true">#</a> \u89E6\u6478\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>touchstart \u624B\u6307\u89E6\u6478\u5C4F\u5E55
touchmove \u624B\u6307\u6ED1\u52A8\u5C4F\u5E55
touchend \u624B\u6307\u79BB\u5F00\u5C4F\u5E55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9F20\u6807\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u4E8B\u4EF6" aria-hidden="true">#</a> \u9F20\u6807\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>click \u70B9\u51FB
dblclick \u53CC\u51FB

mousemove \u9F20\u6807\u79FB\u52A8
mousedown \u9F20\u6807\u6309\u952E\u6309\u4E0B
mouseup \u9F20\u6807\u6309\u952E\u62AC\u8D77

mouseenter \u9F20\u6807\u60AC\u505C\u5728\u5143\u7D20\u4E0A
mouseleave \u9F20\u6807\u79BB\u5F00\u5143\u7D20

mouseover \u9F20\u6807\u60AC\u505C\u5728\u5143\u7D20\u4E0A\uFF08\u5192\u6CE1\uFF09
mouseout \u9F20\u6807\u79BB\u5F00\u5143\u7D20\uFF08\u5192\u6CE1\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u952E\u76D8\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u952E\u76D8\u4E8B\u4EF6" aria-hidden="true">#</a> \u952E\u76D8\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>keydown \u952E\u76D8\u6309\u952E\u6309\u4E0B
keyup \u952E\u76D8\u6309\u952E\u62AC\u8D77
keypress \u952E\u76D8\u6309\u952E\u6309\u4E0B\uFF08\u4EC5\u9650\u4E8E\u5B57\u7B26\u6309\u952E\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FC7\u6E21\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6E21\u4E8B\u4EF6" aria-hidden="true">#</a> \u8FC7\u6E21\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>transitionstart \u8FC7\u6E21\u5F00\u59CB
transitionend \u8FC7\u6E21\u7ED3\u675F
transitionrun \u8FC7\u6E21\u4E2D
transitioncancel \u8FC7\u6E21\u53D6\u6D88
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u753B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u4E8B\u4EF6" aria-hidden="true">#</a> \u52A8\u753B\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>animationstart \u52A8\u753B\u5F00\u59CB
animationend \u52A8\u753B\u7ED3\u675F
animationiteration \u52A8\u753B\u91CD\u590D\u64AD\u653E
animationcancel \u52A8\u753B\u53D6\u6D88
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u5355\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u4E8B\u4EF6" aria-hidden="true">#</a> \u8868\u5355\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>blur \u5931\u7126
focus \u805A\u7126
input \u8F93\u5165
change \u8F93\u5165\u540E\u5931\u7126
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5176\u4ED6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u4E8B\u4EF6" aria-hidden="true">#</a> \u5176\u4ED6\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>contextmenu \u53F3\u952E\u4E8B\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),g={href:"https://blog.csdn.net/weixin_46534854/article/details/115635532",target:"_blank",rel:"noopener noreferrer"},p=i("JS \u5E38\u7528 DOM \u4E8B\u4EF6\u603B\u7ED3"),f=e("h2",{id:"var\u3001let-\u53CA-const",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#var\u3001let-\u53CA-const","aria-hidden":"true"},"#"),i(" var\u3001let \u53CA const")],-1),_=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/var_let_const.jpg",alt:"var_let_const"})],-1),y={href:"https://github.com/gengarneko/blog-vuepress/tree/master/docs/frontEnd/es6",target:"_blank",rel:"noopener noreferrer"},k=i("\u6DF1\u5165\u7406\u89E3 let"),w=a(`<h2 id="call\u3001apply-\u548C-bind" tabindex="-1"><a class="header-anchor" href="#call\u3001apply-\u548C-bind" aria-hidden="true">#</a> call\u3001apply \u548C bind</h2><ul><li><code>call</code> \u3001<code>apply</code> \u8C03\u7528\u51FD\u6570\uFF0C<code>bind</code> \u4E0D\u4F1A\u8C03\u7528\u51FD\u6570</li><li><code>call</code> \u3001<code>bind</code> \u4F20\u53C2\u4F7F\u7528\u9017\u53F7\u9694\u5F00\uFF0C<code>apply</code> \u4F20\u53C2\u76F4\u63A5\u4F20\u6570\u7EC4</li></ul><h2 id="onclick-addeventlistener" tabindex="-1"><a class="header-anchor" href="#onclick-addeventlistener" aria-hidden="true">#</a> onclick &amp; addEventListener</h2><ul><li>onclick \u4E0D\u80FD\u540C\u65F6\u6267\u884C\u4E24\u4E2A\u51FD\u6570\uFF0C\u800C addEventListener \u53EF\u4EE5</li><li>onclick \u53EA\u80FD\u5192\u6CE1\u9636\u6BB5\u89E6\u53D1\uFF0C\u800C addEventListener \u6355\u83B7\u548C\u5192\u6CE1\u9636\u6BB5\u7686\u53EF</li><li>onclick \u79FB\u9664\u4E8B\u4EF6\u4FA6\u542C\u76F4\u63A5\u8986\u76D6\u5373\u53EF\uFF0C\u800C addEventListener \u9700\u8981\u4F7F\u7528 removeEventListener \u79FB\u9664</li><li>onclick \u652F\u6301 IE \u4F4E\u7248\u672C\uFF0CaddEventListener \u4E0D\u652F\u6301 IE8 \u4EE5\u4E0B\uFF0C\u4F4E\u7248\u672C IE \u4F7F\u7528 attachEvent \u8FDB\u884C\u4E8B\u4EF6\u4FA6\u542C</li></ul><h2 id="event-target-event-currenttarget" tabindex="-1"><a class="header-anchor" href="#event-target-event-currenttarget" aria-hidden="true">#</a> event.target &amp; event.currentTarget</h2><ul><li>event.target\uFF1A\u4E8B\u4EF6\u89E6\u53D1\u8005</li><li>event.currentTarget\uFF1A\u4E8B\u4EF6\u76D1\u542C\u8005</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;outer&quot;&gt;
  &lt;div id=&quot;inner&quot;&gt;123&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  document.getElementById(&#39;outer&#39;).onclick = function(e){
    console.info(&#39;e.target&#39;, e.target) // &lt;div id=&quot;inner&quot;&gt;...&lt;/div&gt;
    console.info(&#39;e.currentTarget&#39;, e.currentTarget) // &lt;div id=&quot;outer&quot;&gt;...&lt;/div&gt;
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),N={href:"https://segmentfault.com/a/1190000003021586",target:"_blank",rel:"noopener noreferrer"},S=i("event.target \u548C event.currentTarget"),q=a(`<h2 id="event-preventdefault-event-stoppropagation" tabindex="-1"><a class="header-anchor" href="#event-preventdefault-event-stoppropagation" aria-hidden="true">#</a> event.preventDefault &amp; event.stopPropagation</h2><ul><li>event.preventDefault\uFF1A\u963B\u6B62\u6D4F\u89C8\u5668\u9ED8\u8BA4\u884C\u4E3A</li><li>event.stopPropagation\uFF1A\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u6216\u6355\u83B7</li><li>event.stopImmediatePropagation: \u9664\u53EF\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u6216\u6355\u83B7\u5916\uFF0C\u8FD8\u53EF\u963B\u6B62\u4E8B\u4EF6\u7684\u5176\u4ED6\u76D1\u542C\u5668</li><li>return false\uFF1A\u65E2\u963B\u6B62\u6D4F\u89C8\u5668\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53C8\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u6216\u6355\u83B7</li></ul><h2 id="setattribute-setproperty" tabindex="-1"><a class="header-anchor" href="#setattribute-setproperty" aria-hidden="true">#</a> setAttribute &amp; setProperty</h2><ul><li>setAttribute: \u8BBE\u7F6E html \u5143\u7D20\u5C5E\u6027\u503C</li><li>setProperty: \u8BBE\u7F6E css style \u6837\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xxx.setAttribute()
xxx.style.setProperty()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u6355\u83B7-\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6355\u83B7-\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a> \u4E8B\u4EF6\u6355\u83B7 &amp; \u4E8B\u4EF6\u5192\u6CE1</h2><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/event_capture&amp;event_bubble.jpg" alt="event_capture&amp;event_bubble"></p><h2 id="\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u65B9\u5F0F\u4E00
&lt;button onclick=&quot;handleClick&quot;&gt;&lt;/button&gt;

// \u65B9\u5F0F\u4E8C
let btn = document.querySelector(&#39;button&#39;)
btn.onclick = handleClick
btn.onclick = null

// \u65B9\u5F0F\u4E09
let btn = document.querySelector(&#39;button&#39;)
btn.addEventListener(&#39;click&#39;, handleClick)
btn.removeEventListener(&#39;click&#39;, handleClick)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),I={href:"https://juejin.cn/post/6968278000554999844",target:"_blank",rel:"noopener noreferrer"},C=i("\u539F\u751F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u4E09\u79CD\u65B9\u5F0F"),E=a(`<h2 id="typeof-instanceof" tabindex="-1"><a class="header-anchor" href="#typeof-instanceof" aria-hidden="true">#</a> typeof &amp; instanceof</h2><ul><li>typeof<br><code>null</code> \u3001<code>array</code> \u4F1A\u88AB\u5224\u522B\u4E3A <code>object</code> \uFF0C\u5176\u4ED6\u5224\u65AD\u65E0\u8BEF</li><li>instanceof<br> \u53EA\u80FD\u7528\u4E8E\u5224\u65AD\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u4E0D\u53EF\u7528\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B</li></ul><h2 id="object-is-\u548C" tabindex="-1"><a class="header-anchor" href="#object-is-\u548C" aria-hidden="true">#</a> Object.is \u548C ===</h2><p>\u4E3B\u8981\u5728\u4E8E\u5BF9 <code>NaN</code> \u548C <code>\xB10</code> \u7684\u5904\u7406\u4E0D\u540C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>NaN === NaN  // false
+0 === -0  // true

Object.is(NaN, NaN)  // true
Object.is(+0, -0)  // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number-isnan-isnan" tabindex="-1"><a class="header-anchor" href="#number-isnan-isnan" aria-hidden="true">#</a> Number.isNaN &amp; isNaN</h2><ul><li><code>Number.isNaN</code> \u53EA\u5728\u53C2\u6570\u503C\u4E3A <code>NaN</code> \u65F6\uFF0C\u8FD4\u56DE <code>true</code></li><li><code>isNaN</code> \u4F1A\u5C1D\u8BD5\u5C06\u53C2\u6570\u8F6C\u6362\u4E3A\u6570\u503C\uFF0C\u4EFB\u4F55\u4E0D\u80FD\u88AB\u8F6C\u6362\u4E3A\u6570\u503C\u7684\u7684\u503C\u90FD\u4F1A\u8FD4\u56DE <code>true</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Number.isNaN(&#39;aa&#39;) // false
isNaN(&#39;aa&#39;) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-await-\u4E0E-promise" tabindex="-1"><a class="header-anchor" href="#async-await-\u4E0E-promise" aria-hidden="true">#</a> async/await \u4E0E Promise</h2><p>\u56E0\u4E3A <code>async/await</code> \u672C\u8EAB\u5C31\u662F <code>promise</code> + <code>generator</code> \u7684\u8BED\u6CD5\u7CD6\u3002\u6240\u4EE5 <code>await</code> \u540E\u9762\u7684\u4EE3\u7801\u662F <code>microtask</code> \u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function async1() {
 console.log(&#39;async1 start&#39;)
 await async2()
 console.log(&#39;async1 end&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C6\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function async1() {
 console.log(&#39;async1 start&#39;)
 Promise.resolve(async2()).then(() =&gt; {
  console.log(&#39;async1 end&#39;)
 })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u8FD1\u4F3C\u89C6\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function async1() {
  new Promise((resolve, reject) =&gt; {
    console.log(&#39;async1 start&#39;)
    resolve(async2())
  }).then(() =&gt; {
    console.log(&#39;async1 end&#39;)
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Promise.resolve(v) \u4E0E new Promise(r =&gt; r(v)) \u4E0D\u5B8C\u5168\u7B49\u4EF7\u3002<br> \u5F85\u540E\u7EED\u7814\u7A76\u3002</p></div>`,16),j={href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7",target:"_blank",rel:"noopener noreferrer"},L=i("\u4ECE\u4E00\u9053\u9898\u6D45\u8BF4 JavaScript \u7684\u4E8B\u4EF6\u5FAA\u73AF"),P=a('<h2 id="\u5224\u65AD\u6570\u7EC4\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6570\u7EC4\u65B9\u5F0F" aria-hidden="true">#</a> \u5224\u65AD\u6570\u7EC4\u65B9\u5F0F</h2><ul><li>Array.isArray(arr)</li><li>arr instanceof Array</li><li>arr.constructor === Array</li><li>Object.prototype.toString.call(arr) === &#39;[object Array]&#39;</li><li>\u7B49\u7B49</li></ul><h2 id="\u6570\u7EC4-\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-\u94FE\u8868" aria-hidden="true">#</a> \u6570\u7EC4 &amp; \u94FE\u8868</h2><ul><li>\u6570\u7EC4\u9759\u6001\u5206\u914D\u5185\u5B58\uFF0C\u94FE\u8868\u52A8\u6001\u5206\u914D\u5185\u5B58</li><li>\u6570\u7EC4\u5728\u5185\u5B58\u4E2D\u8FDE\u7EED\uFF0C\u94FE\u8868\u4E0D\u8FDE\u7EED</li><li>\u6570\u7EC4\u5143\u7D20\u5728\u6808\u533A\uFF0C\u94FE\u8868\u5143\u7D20\u5728\u5806\u533A</li></ul><h2 id="object-map" tabindex="-1"><a class="header-anchor" href="#object-map" aria-hidden="true">#</a> Object &amp; Map</h2><ul><li>\u5BF9\u8C61\u7684 key \u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0CMap \u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B</li><li>\u5BF9\u8C61\u83B7\u53D6 value \u662F\u901A\u8FC7\u70B9\u53F7\u6216\u4E2D\u62EC\u53F7\uFF0CMap \u5219\u662F\u901A\u8FC7 get \u65B9\u6CD5</li><li>\u5BF9\u8C61\u68C0\u67E5 key \u662F\u5426\u5B58\u5728\u662F\u901A\u8FC7 hasOwnProperty \u65B9\u6CD5\uFF0CMap \u5219\u662F\u901A\u8FC7 has \u65B9\u6CD5</li><li>\u5BF9\u8C61\u5220\u9664\u67D0\u4E2A\u5C5E\u6027\u662F\u901A\u8FC7 delete \u64CD\u4F5C\u7B26\uFF0CMap \u5219\u662F\u901A\u8FC7 delete \u65B9\u6CD5</li></ul>',6),R={href:"https://telegra.ph/7-Differences-between-Objects-and-Maps-in-JavaScript-08-21",target:"_blank",rel:"noopener noreferrer"},T=i("\u5BF9\u8C61\u548C Map \u533A\u522B"),A=a(`<h2 id="click-dblclick-\u5355\u53CC\u51FB\u70B9\u51FB\u4E8B\u4EF6\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#click-dblclick-\u5355\u53CC\u51FB\u70B9\u51FB\u4E8B\u4EF6\u51B2\u7A81" aria-hidden="true">#</a> click/dblclick \u5355\u53CC\u51FB\u70B9\u51FB\u4E8B\u4EF6\u51B2\u7A81</h2><p><code>click</code> \u4E8B\u4EF6\u5EF6\u8FDF\u6267\u884C\uFF0C<code>dblclick</code> \u65F6\u53D6\u6D88 <code>click</code> \u5EF6\u65F6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let timer

document.querySelector(&#39;div&#39;).addEventListener(&#39;click&#39;, () =&gt; {
  clearTimeout(timer) 
  timer = setTimeout(() =&gt; console.log(&#39;\u5355\u51FB&#39;), 400)
})

document.querySelector(&#39;div&#39;).addEventListener(&#39;dblclick&#39;, () =&gt; {
  clearTimeout(timer) 
  console.log(&#39;\u53CC\u51FB&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url-\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#url-\u89E3\u6790" aria-hidden="true">#</a> URL \u89E3\u6790</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th></tr></thead><tbody><tr><td>window.location.href</td><td>https://violet.com:8080/rem/index.html?a=1&amp;b=2#shadow</td></tr><tr><td>window.location.protocol</td><td>https:</td></tr><tr><td>window.location.hostname</td><td>violet.com</td></tr><tr><td>window.location.port</td><td>8080</td></tr><tr><td>window.location.pathname</td><td>/rem/index.html</td></tr><tr><td>window.location.search</td><td>?a=1&amp;b=2</td></tr><tr><td>window.location.hash</td><td>#shadow</td></tr><tr><td>window.location.host</td><td>violet.com:8080</td></tr><tr><td>window.location.origin</td><td>https://violet.com:8080</td></tr></tbody></table>`,5),J={href:"https://houbb.github.io/2021/11/19/js-tool-url-param",target:"_blank",rel:"noopener noreferrer"},O=i("JS \u5982\u4F55\u83B7\u53D6 URL ? \u540E\u7684\u53C2\u6570\u4FE1\u606F"),V=e("br",null,null,-1),M={href:"https://segmentfault.com/a/1190000018108589",target:"_blank",rel:"noopener noreferrer"},B=i("\u5982\u4F55\u4F7F\u7528 JS \u89E3\u6790 URL"),D=a(`<h2 id="\u56FE\u7247\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u5F15\u5165" aria-hidden="true">#</a> \u56FE\u7247\u5F15\u5165</h2><p>\u56FE\u7247\u5F15\u5165\u5206\u5916\u94FE\u5F15\u5165\u548C\u672C\u5730\u5F15\u5165\uFF0C\u5916\u94FE\u5F15\u5165\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\uFF0C\u5E38\u89C4\u5F15\u5165\u5C31\u884C\u3002\u4F46\u672C\u5730\u5F15\u5165\u5C31\u6709\u8BF4\u6CD5\u4E86\u3002 \u5F53\u5F15\u5165\u672C\u5730\u8D44\u6E90\u56FE\u7247\u65F6\uFF0C\u6253\u5305\u524D\u80FD\u6B63\u5E38\u663E\u793A\uFF0C\u4F46\u6253\u5305\u540E\u56FE\u7247\u8D44\u6E90\u8DEF\u5F84\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u8FD9\u65F6\u5019\u5C31\u663E\u793A\u4E0D\u51FA\u6765\u4E86\u3002</p><p>\u89E3\u51B3\u8BE5\u95EE\u9898\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// import \u5F15\u5165
import violet_url from &#39;../images/violet.png&#39;

// require \u5F15\u5165
const violet_url = require(&#39;../images/violet.png&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>require</code> \u5185\u5BB9\u4E0D\u80FD\u662F\u4E00\u4E2A\u7EAF\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9519\u8BEF\u6848\u4F8B
const url = &#39;../images/violet.png&#39;
const violet_url = require(url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>require</code> \u62FC\u63A5\uFF0C\u53EF\u5305\u542B\u90E8\u5206\u53D8\u91CF\u3002\uFF08<code>RN</code> \u4E2D\u8C8C\u4F3C\u4E0D\u652F\u6301\u52A8\u6001\u62FC\u63A5\uFF0C\u53EA\u80FD\u662F\u5B8C\u6574\u5B57\u7B26\u4E32\u3002\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const image_name = &#39;violet&#39;
const image_complete_name = &#39;violet.png&#39;

// \u7EAF\u5B57\u7B26\u4E32
const violet_url = require(&#39;../images/violet.png&#39;)  

// \u76EE\u5F55 + \u6587\u4EF6\u5168\u540D
const violet_url = require(&#39;../images/&#39; + image_complete_name)  

// \u76EE\u5F55 + \u6587\u4EF6\u540D + \u540E\u7F00
const violet_url = require(&#39;../images/&#39; + image_name + &#39;.png&#39;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,5),U={href:"https://news.sangniao.com/p/3078063580",target:"_blank",rel:"noopener noreferrer"},F=i("\u5728 React \u4E2D\u4F7F\u7528 require \u548C import \u8BED\u53E5\u6765\u5BFC\u5165\u56FE\u7247"),G=a(`<h2 id="\u751F\u6210\u9650\u5B9A\u8303\u56F4\u5185\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u9650\u5B9A\u8303\u56F4\u5185\u968F\u673A\u6570" aria-hidden="true">#</a> \u751F\u6210\u9650\u5B9A\u8303\u56F4\u5185\u968F\u673A\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.floor(Math.random() * (max \u2013 min + 1)) + min
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),K={href:"https://blog.csdn.net/allway2/article/details/122558537",target:"_blank",rel:"noopener noreferrer"},z=i("JS \u751F\u6210\u9650\u5B9A\u8303\u56F4\u5185\u968F\u673A\u6570"),H=a(`<h2 id="\u56FE\u7247\u8F6C-base64" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u8F6C-base64" aria-hidden="true">#</a> \u56FE\u7247\u8F6C base64</h2><ul><li><p>Canvas</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 1. \u6784\u9020\u4E00\u4E2A img \u5143\u7D20\uFF0C\u5C06 url \u8D4B\u7ED9 img
// 2. \u7B49\u5F85\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210
// 3. \u6784\u9020\u4E00\u4E2A canvas \u5143\u7D20
// 4. \u5C06 img \u5143\u7D20\u753B\u5230 canvas \u4E0A
// 5. \u901A\u8FC7 canvas \u5F97\u5230 base64

// \u53EF\u53C2\u8003\uFF1Ahttps://juejin.cn/post/6844903997841604621

const convertImgToBase64 = (url) =&gt; {
  const img = new Image()

  img.crossOrigin = &#39;Anonymous&#39;

  img.addEventListener(&#39;load&#39;, () =&gt; {
    const canvas = document.createElement(&#39;canvas&#39;)
    canvas.width = img.width
    canvas.height = img.height

    const ctx = canvas.getContext(&#39;2d&#39;)
    ctx.drawImage(img, 0, 0)
    
    const base64 = canvas.toDataURL(&#39;image/png&#39;)
    console.log(base64)
  })

  img.src = url
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>FileReader</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 1. \u521B\u5EFA\u4E00\u4E2A FileReader \u5BF9\u8C61
// 2. \u7B49\u5F85\u56FE\u7247\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6BD5
// 3. \u901A\u8FC7 FileReader \u5F97\u5230 base64

const convertImgToBase64 = (file) =&gt; {
  const reader = new FileReader()

  reader.addEventListener(&#39;load&#39;, () =&gt; {
    const base64 = reader.result
    console.log(base64)
  })

  reader.readAsDataURL(file)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function W($,Q){const n=r("ExternalLinkIcon");return l(),t("div",null,[o,e("p",null,[e("a",v,[u,d(n)])]),m,e("p",null,[e("a",b,[h,d(n)])]),x,e("p",null,[e("a",g,[p,d(n)])]),f,_,e("p",null,[e("a",y,[k,d(n)])]),w,e("p",null,[e("a",N,[S,d(n)])]),q,e("p",null,[e("a",I,[C,d(n)])]),E,e("p",null,[e("a",j,[L,d(n)])]),P,e("p",null,[e("a",R,[T,d(n)])]),A,e("p",null,[e("a",J,[O,d(n)]),V,e("a",M,[B,d(n)])]),D,e("p",null,[e("a",U,[F,d(n)])]),G,e("p",null,[e("a",K,[z,d(n)])]),H])}var Y=s(c,[["render",W],["__file","js.html.vue"]]);export{Y as default};
