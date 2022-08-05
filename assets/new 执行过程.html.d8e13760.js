import{_ as i,o as a,c as s,a as e,b as r,d as l,e as t,r as o}from"./app.19e0d641.js";const c={},d=l(`<h1 id="new-\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#new-\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> new \u6267\u884C\u8FC7\u7A0B</h1><h2 id="\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u8FC7\u7A0B</h2><ul><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61</li><li>\u5C06\u65B0\u5BF9\u8C61\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code></li><li>\u5C06\u65B0\u5BF9\u8C61\u7ED1\u5B9A\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684 <code>this</code></li><li>\u82E5\u6784\u9020\u51FD\u6570\u6CA1\u6709\u663E\u5F0F\u8FD4\u56DE\u5176\u4ED6\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u8BE5\u65B0\u5BF9\u8C61</li></ul><h2 id="\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> \u6A21\u62DF\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// con \u6307 constructor\uFF0C\u6784\u9020\u5668
// ret \u6307 return\uFF0C\u8FD4\u56DE\u503C
function new(con, ...args) {
  const obj = {}
  obj.__proto__ = con.prototype
  const ret = con.apply(obj, args)
  return typeof ret === &#39;Object&#39; &amp;&amp; ret !== null ? ret : obj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7B80\u5199
function new(con, ...args) {
  const obj = Object.create(con.prototype)
  const ret = con.apply(obj, args)
  return ret instanceof Object ? ret : obj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,7),u={href:"https://github.com/mqyqingfeng/Blog/issues/13",target:"_blank",rel:"noopener noreferrer"},h=t("JavaScript \u6DF1\u5165\u4E4B new \u7684\u6A21\u62DF\u5B9E\u73B0"),v={href:"https://muyiy.cn/blog/3/3.5.html",target:"_blank",rel:"noopener noreferrer"},_=t("\u6DF1\u5EA6\u89E3\u6790 new \u539F\u7406\u53CA\u6A21\u62DF\u5B9E\u73B0"),b={href:"http://file.jing999.cn/workspace/Js/extends.html",target:"_blank",rel:"noopener noreferrer"},m=t("new \u8C03\u7528\u6784\u9020\u5668");function p(f,g){const n=o("ExternalLinkIcon");return a(),s("div",null,[d,e("ul",null,[e("li",null,[e("a",u,[h,r(n)])]),e("li",null,[e("a",v,[_,r(n)])]),e("li",null,[e("a",b,[m,r(n)])])])])}var j=i(c,[["render",p],["__file","new \u6267\u884C\u8FC7\u7A0B.html.vue"]]);export{j as default};
