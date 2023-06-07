import{_ as t,o as r,c,a as e,b as i,d as s,e as n,r as d}from"./app.bf5f5edd.js";const u={},m=s(`<h1 id="\u8282\u6D41\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41\u9632\u6296" aria-hidden="true">#</a> \u8282\u6D41\u9632\u6296</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u8282\u6D41\uFF1A\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u6267\u884C\u4E00\u6B21\u3002\u9002\u7528\u4E8E\u8F6E\u64AD\u56FE\u3001\u9AD8\u9891\u70B9\u51FB\u7B49\u573A\u666F\u3002</li><li>\u9632\u6296\uFF1A\u53EA\u6267\u884C\u6700\u540E\u4E00\u6B21\u3002\u9002\u7528\u4E8E\u8F93\u5165\u6821\u9A8C\u3001\u641C\u7D22\u8054\u60F3\u7B49\u573A\u666F\u3002</li></ul></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8282\u6D41\u8FD8\u53EF\u6DF1\u5165\uFF0C\u9632\u6296\u6700\u5927\u7B49\u5F85\u65F6\u95F4\u5F85\u7814\u7A76\u3002<br> \u6709\u65F6\u95F4\u7814\u7A76\u4E0B <code>lodash</code> \u7684\u5B9E\u73B0\u3002</p></div><h2 id="\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a> \u8282\u6D41</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function throttle(fn, wait) {
  let timer

  return function(...args) {
    if(timer) return

    fn.apply(this, args)
    timer = setTimeout(() =&gt; timer = null, wait)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h2><h3 id="\u521D\u7248" tabindex="-1"><a class="header-anchor" href="#\u521D\u7248" aria-hidden="true">#</a> \u521D\u7248</h3><ul><li>\u56DE\u8C03\u51FD\u6570\u3001\u5EF6\u65F6\u65F6\u95F4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function debounce(fn, wait) {
  let timer

  return function() {
    timer &amp;&amp; clearTimeout(timer)
    timer = setTimeout(fn, wait)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v={id:"\u4E8C\u7248",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#\u4E8C\u7248","aria-hidden":"true"},"#",-1),b=n(" \u4E8C\u7248 "),h=s(`<ul><li>\u56DE\u8C03\u51FD\u6570\u3001\u5EF6\u65F6\u65F6\u95F4</li><li>this \u7ED1\u5B9A\u3001\u53C2\u6570\u7ED1\u5B9A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function debounce(fn, wait) {
  let timer

  return function(...args) {
    timer &amp;&amp; clearTimeout(timer)
    timer = setTimeout(() =&gt; fn.apply(this, args), wait)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p={id:"\u4E09\u7248",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#\u4E09\u7248","aria-hidden":"true"},"#",-1),f=n(" \u4E09\u7248 "),_=s(`<ul><li>\u56DE\u8C03\u51FD\u6570\u3001\u5EF6\u65F6\u65F6\u95F4</li><li>this \u7ED1\u5B9A\u3001\u53C2\u6570\u7ED1\u5B9A</li><li>immediate \u7ACB\u5373\u6267\u884C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function debounce(fn, wait, immediate) {
  let timer

  return function(...args) {
    timer &amp;&amp; clearTimeout(timer)

    if(immediate) {
      !timer &amp;&amp; fn.apply(this, args)
      timer = setTimeout(() =&gt; timer = null, wait)
    } else {
      timer = setTimeout(() =&gt; fn.apply(this, args), wait)
    }
  }
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56DB\u7248" tabindex="-1"><a class="header-anchor" href="#\u56DB\u7248" aria-hidden="true">#</a> \u56DB\u7248</h3><ul><li>\u56DE\u8C03\u51FD\u6570\u3001\u5EF6\u65F6\u65F6\u95F4</li><li>this \u7ED1\u5B9A\u3001\u53C2\u6570\u7ED1\u5B9A</li><li>immediate \u7ACB\u5373\u6267\u884C</li><li>\u8FD4\u56DE\u503C\u3001\u53D6\u6D88\u9632\u6296</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function debounce(fn, wait, immediate) {
  let timer 
  let result
  
  const debounced = function(...args) {
    timer &amp;&amp; clearTimeout(timer)
    
    if(immediate) {
      if(!timer) result = fn.apply(this, args) 
      timer = setTimeout(() =&gt; timer = null, wait)
    } else {
      timer = setTimeout(() =&gt; fn.apply(this, args), wait)
    }
    
    return result
  }
  
  debounced.cancel = function() {
    timer &amp;&amp; clearTimeout(timer)
    timer = null
  }
  
  return debounced
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,6),x={href:"https://github.com/mqyqingfeng/Blog/issues/26",target:"_blank",rel:"noopener noreferrer"},T=n("JavaScript \u4E13\u9898\u4E4B\u8DDF\u7740 underscore \u5B66\u8282\u6D41"),w={href:"https://github.com/mqyqingfeng/Blog/issues/22",target:"_blank",rel:"noopener noreferrer"},y=n("JavaScript \u4E13\u9898\u4E4B\u8DDF\u7740 underscore \u5B66\u9632\u6296");function B(k,N){const l=d("Badge"),a=d("ExternalLinkIcon");return r(),c("div",null,[m,e("h3",v,[o,b,i(l,{text:"\u91CD\u70B9"})]),h,e("h3",p,[g,f,i(l,{text:"\u91CD\u70B9"})]),_,e("ul",null,[e("li",null,[e("a",x,[T,i(a)])]),e("li",null,[e("a",w,[y,i(a)])])])])}var I=t(u,[["render",B],["__file","\u8282\u6D41\u9632\u6296.html.vue"]]);export{I as default};
