import{_ as r,o as t,c,a as n,b as e,d as a,e as i,r as d}from"./app.b5953029.js";const v={},o=a(`<h1 id="\u5F15\u7528\u7C7B\u578B\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B\u5730\u5740" aria-hidden="true">#</a> \u5F15\u7528\u7C7B\u578B\u5730\u5740</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5F15\u7528\u7C7B\u578B\u53D8\u91CF\uFF0C\u5B58\u50A8\u7684\u90FD\u662F\u8BE5\u5F15\u7528\u7C7B\u578B\u6240\u5728\u7684\u5730\u5740\u3002</p></div><h2 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
let arr = [1, 2, 3] // arr --&gt; 0x001 --&gt; [1, 2, 3]

for (let x of arr) { // arr --&gt; 0x001
  arr = [4, 5, 6] // arr --&gt; 0x002 --&gt; [4, 5, 6]
  console.log(x)
}

// \u8F93\u51FA
1
2
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={id:"\u4E60\u9898\u4E8C",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#\u4E60\u9898\u4E8C","aria-hidden":"true"},"#",-1),m=i(" \u4E60\u9898\u4E8C "),_=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

console.log(a.x)
console.log(b.x)

// \u8F93\u51FA
undefined
{ n: 2 }

// \u89E3\u6790
\u6D89\u53CA\u77E5\u8BC6\u70B9\uFF1A\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7\u3001\u5F15\u7528\u7C7B\u578B\u5730\u5740\u3001\u8D4B\u503C\u987A\u5E8F\u3002

\u9010\u884C\u89E3\u6790\uFF1A
a = { n: 1 }
a --&gt; 0x001 --&gt; { n: 1 }

b = a
b --&gt; 0x001 --&gt; { n: 1 }

a.x = a = { n: 2 }
\u70B9\u53F7\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7\u5927\u4E8E\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF0C\u5219\u5148\u6267\u884C\u70B9\u53F7\u8FD0\u7B97
a.x
[0x001].x --&gt; { n: 1, x: undefined }
0x001 --&gt; { n: 1, x: undefined }
\u540E\u81EA\u53F3\u5411\u5DE6\u6267\u884C\u8D4B\u503C\u8FD0\u7B97
a = { n: 2 }
a --&gt; 0x002 --&gt; { n: 2 }
a.x = a
[0x001].x = { n: 2 } --&gt; { n:1, x: {n: 2 } }
0x001 --&gt; { n:1, x: { n: 2 } }

\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u524D
a --&gt; 0x002 --&gt; { n: 2 }
b --&gt; 0x001 --&gt; { n:1, x: { n: 2 } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={href:"https://github.com/zhuzhh/blog/issues/7",target:"_blank",rel:"noopener noreferrer"},x=i("\u89E3\u6790 js \u8FDE\u7EED\u8D4B\u503C\u7684\u5751"),g=n("br",null,null,-1),p={href:"https://cloud.tencent.com/developer/article/1093667",target:"_blank",rel:"noopener noreferrer"},f=i("\u641E\u61C2 JavaScript \u4E2D\u7684\u8FDE\u7EED\u8D4B\u503C"),k=n("br",null,null,-1),B={href:"https://juejin.cn/post/7069358111881953317",target:"_blank",rel:"noopener noreferrer"},N=i("\u5173\u4E8E a.x = a = { n: 2 } \u9762\u8BD5\u9898\u89E3\u6790");function V(j,E){const l=d("Badge"),s=d("ExternalLinkIcon");return t(),c("div",null,[o,n("h2",u,[b,m,e(l,{text:"hard"})]),_,n("p",null,[n("a",h,[x,e(s)]),g,n("a",p,[f,e(s)]),k,n("a",B,[N,e(s)])])])}var z=r(v,[["render",V],["__file","\u5F15\u7528\u7C7B\u578B\u5730\u5740.html.vue"]]);export{z as default};
