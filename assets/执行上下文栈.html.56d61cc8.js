import{_ as s,o as r,c as t,a as e,b as i,d as a,e as l,r as c}from"./app.ecc393dd.js";const d={},o=l('<h1 id="\u6267\u884C\u4E0A\u4E0B\u6587\u6808" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u6808" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\u6808</h1><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587</h2><p>\u6267\u884C\u4E0A\u4E0B\u6587\u5206\u4E3A\u4E09\u79CD\uFF1A</p><ul><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587 ( <code>globalContext</code> )</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587 ( <code>functionContext</code> )</li><li>eval \u6267\u884C\u4E0A\u4E0B\u6587</li></ul><p>\u5BF9\u4E8E\u6BCF\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u90FD\u6709\u4E09\u4E2A\u91CD\u8981\u5C5E\u6027\uFF1A</p><ul><li><a href="./%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE">\u4F5C\u7528\u57DF\u94FE</a></li><li><a href="./%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1">\u53D8\u91CF\u5BF9\u8C61</a></li><li><a href="./this%20%E6%8C%87%E5%90%91">this</a></li></ul><h3 id="\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u8FC7\u7A0B</h3><p>\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u751F\u547D\u5468\u671F\u53EF\u4EE5\u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\u3002</p><ul><li>\u521B\u5EFA\u9636\u6BB5\uFF1A\u6784\u5EFA\u4F5C\u7528\u57DF\u94FE\uFF0C\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61\uFF0C\u786E\u5B9A <code>this</code> \u6307\u5411\u3002</li><li>\u6267\u884C\u9636\u6BB5\uFF1A\u5B8C\u6210\u53D8\u91CF\u8D4B\u503C\u548C\u51FD\u6570\u5F15\u7528\uFF0C\u89E3\u91CA\u6267\u884C\u4EE3\u7801\u3002</li></ul><h4 id="\u521B\u5EFA\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9636\u6BB5" aria-hidden="true">#</a> \u521B\u5EFA\u9636\u6BB5</h4><p>\u5728\u6267\u884C\u4EE3\u7801\u4E4B\u524D\uFF0C\u4F1A\u5148\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\u5E76\u5BF9\u5176\u5305\u542B\u7684\u5C5E\u6027\u8FDB\u884C\u521D\u59CB\u5316\u3002</p><ul><li>\u4F5C\u7528\u57DF\u94FE <ul><li>\u590D\u5236\u51FD\u6570\u5185\u90E8\u5C5E\u6027 <code>[[scope]]</code> \u6765\u6784\u5EFA\u4F5C\u7528\u57DF\u94FE</li><li>\u5C06\u53D8\u91CF\uFF08\u6D3B\u52A8\uFF09\u5BF9\u8C61\u538B\u5165\u5176\u4F5C\u7528\u57DF\u94FE\u7684\u9876\u7AEF</li></ul></li><li>\u53D8\u91CF\u5BF9\u8C61 <ul><li>\u51FD\u6570\u5F62\u53C2\uFF08\u4EC5\u9650\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF09\uFF1A\u5982\u679C\u6CA1\u6709\u5B9E\u53C2\uFF0C\u5C5E\u6027\u503C\u8BBE\u4E3A <code>undefined</code> \u3002</li><li>\u51FD\u6570\u58F0\u660E\uFF1A\u5982\u679C\u53D8\u91CF\u5BF9\u8C61\u5DF2\u7ECF\u5B58\u5728\u76F8\u540C\u540D\u79F0\u7684\u5C5E\u6027\uFF0C\u5219\u5B8C\u5168 <strong>\u66FF\u6362</strong> \u8FD9\u4E2A\u5C5E\u6027\u3002</li><li>\u53D8\u91CF\u58F0\u660E\uFF1A\u5982\u679C\u53D8\u91CF\u540D\u79F0\u8DDF\u5DF2\u7ECF\u58F0\u660E\u7684\u5F62\u53C2\u6216\u51FD\u6570\u76F8\u540C\uFF0C\u5219\u53D8\u91CF\u58F0\u660E <strong>\u4E0D\u4F1A\u5E72\u6270</strong> \u5DF2\u5B58\u5728\u7684\u8FD9\u7C7B\u5C5E\u6027\u3002</li></ul></li><li>this <ul><li>\u8BCD\u6CD5\u7ED1\u5B9A</li><li>new \u7ED1\u5B9A</li><li>\u663E\u5F0F\u7ED1\u5B9A</li><li>\u9690\u5F0F\u7ED1\u5B9A</li><li>\u9ED8\u8BA4\u7ED1\u5B9A</li></ul></li></ul><h4 id="\u6267\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u9636\u6BB5" aria-hidden="true">#</a> \u6267\u884C\u9636\u6BB5</h4><p>\u89E3\u91CA\u6267\u884C\u4EE3\u7801\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u4FEE\u6539\u53D8\u91CF\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u503C\u3002</p><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587\u6808-1" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u6808-1" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\u6808</h2><p><code>JS</code> \u5F15\u64CE\u521B\u5EFA\u4E86\u5F88\u591A\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u4E3A\u65B9\u4FBF\u7BA1\u7406\uFF0C\u521B\u5EFA\u4E86\u6267\u884C\u4E0A\u4E0B\u6587\u6808 ( <code>Execution Context Stack</code> ) \u3002</p><p>\u521D\u59CB\u5316\u65F6\uFF0C\u6700\u5148\u78B0\u5230\u7684\u5C31\u662F\u5168\u5C40\u4EE3\u7801\uFF0C\u56E0\u800C\u4F1A\u5411\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u538B\u5165\u4E00\u4E2A\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u3002\u7A0B\u5E8F\u6267\u884C\u5B8C\u6BD5\uFF0C\u6267\u884C\u6808\u6E05\u7A7A\uFF0C\u5C31\u4F1A\u5C06\u6700\u5E95\u90E8\u7684\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u4ECE\u6808\u4E2D\u5F39\u51FA\u3002</p><p>\u9047\u5230\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u4F1A\u5411\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u538B\u5165\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u3002\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u5C31\u4F1A\u5C06\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4ECE\u6808\u4E2D\u5F39\u51FA\u3002</p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/excution_context_stack.jpg" alt="excution_context_stack"></p>',19),h={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"TIP",-1),p={href:"https://github.com/mqyqingfeng/Blog/blob/master/articles/%E6%B7%B1%E5%85%A5%E7%B3%BB%E5%88%97%E6%96%87%E7%AB%A0/JavaScript%E6%B7%B1%E5%85%A5%E4%B9%8B%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.md#%E5%85%B7%E4%BD%93%E6%89%A7%E8%A1%8C%E5%88%86%E6%9E%90",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="\u6982\u5FF5\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5\u533A\u522B" aria-hidden="true">#</a> \u6982\u5FF5\u533A\u522B</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4E2A\u4EBA\u7406\u89E3\uFF0C\u53EF\u80FD\u4E0D\u591F\u51C6\u786E\uFF0C\u6709\u5F85\u63A8\u6572\u3002</p></div><h3 id="\u4F5C\u7528\u57DF\u548C\u53D8\u91CF\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u548C\u53D8\u91CF\u5BF9\u8C61" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u548C\u53D8\u91CF\u5BF9\u8C61</h3><p>\u4F5C\u7528\u57DF \u2248 \u53D8\u91CF\u5BF9\u8C61<br> \u4E24\u8005\u57FA\u672C\u662F\u4E00\u4E2A\u6982\u5FF5</p><h3 id="\u4F5C\u7528\u57DF\u548C\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u548C\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u548C\u6267\u884C\u4E0A\u4E0B\u6587</h3><ul><li>\u6267\u884C\u4E0A\u4E0B\u6587 &gt; \u4F5C\u7528\u57DF</li><li>\u6267\u884C\u4E0A\u4E0B\u6587 = \u53D8\u91CF\u5BF9\u8C61 + \u4F5C\u7528\u57DF\u94FE + this</li><li>\u4F5C\u7528\u57DF\u94FE = \u53D8\u91CF\u5BF9\u8C61 + \u7236\u73AF\u5883\u4F5C\u7528\u57DF\u94FE</li><li>\u4F5C\u7528\u57DF \u2248 \u53D8\u91CF\u5BF9\u8C61</li></ul><h3 id="\u4F5C\u7528\u57DF\u94FE\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u533A\u522B" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u533A\u522B</h3><ul><li>\u4F5C\u7528\u57DF\u94FE\u7528\u4E8E\u67E5\u627E\u53D8\u91CF</li><li>\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u7528\u4E8E\u7BA1\u7406\u6267\u884C\u4E0A\u4E0B\u6587</li></ul><h3 id="\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u548C\u8C03\u7528\u6808" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u548C\u8C03\u7528\u6808" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\u6808\u548C\u8C03\u7528\u6808</h3><p>\u540C\u4E00\u4E2A\u4E1C\u897F</p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> \u601D\u8003\u9898</h2><p>\u6839\u636E\u95ED\u5305\u548C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u77E5\u9053\u4EE5\u4E0B\u4E24\u4E2A\u6848\u4F8B\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684\u3002\u90A3\u4E48\u8FD9\u4E24\u6BB5\u4EE3\u7801\u7A76\u7ADF\u6709\u4F55\u4E0D\u540C\u5462\uFF1F\u7B54\u6848\u5C31\u662F\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u7684\u53D8\u5316\u4E0D\u4E00\u6837\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var scope = &#39;global scope&#39;
function checkscope() {
  var scope = &#39;local scope&#39;
  function f() {
    return scope
 }
  return f()
}
checkscope()

// \u6267\u884C\u4E0A\u4E0B\u6587\u6808\u53D8\u5316
ECStack.push(&lt;checkscope&gt; functionContext)
ECStack.push(&lt;f&gt; functionContext)
ECStack.pop() 
ECStack.pop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var scope = &#39;global scope&#39;
function checkscope ( ) {
  var scope = &#39;local scope&#39;
  function f() {
    return scope
 }
  return f
}
checkscope()()

// \u6267\u884C\u4E0A\u4E0B\u6587\u6808\u53D8\u5316
ECStack.push(&lt;checkscope&gt; functionContext)
ECStack.pop()
ECStack.push(&lt;f&gt; functionContext)
ECStack.pop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,15),b={href:"https://github.com/mqyqingfeng/Blog/issues/8",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/mqyqingfeng/Blog/issues/4",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/CoolRabbit520/blog/issues/5",target:"_blank",rel:"noopener noreferrer"};function E(_,g){const n=c("ExternalLinkIcon");return r(),t("div",null,[o,e("div",h,[u,e("p",null,[i("\u5177\u4F53\u6267\u884C\u5206\u6790\u53EF\u53C2\u8003\u51B4\u7FBD\u5927\u5927\u7684 "),e("a",p,[i("JavaScript \u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587"),a(n)])])]),v,e("ul",null,[e("li",null,[e("a",b,[i("JavaScript \u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587"),a(n)])]),e("li",null,[e("a",m,[i("JavaScript \u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587\u6808"),a(n)])]),e("li",null,[e("a",f,[i("\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u4F5C\u7528\u57DF"),a(n)])])])])}var k=s(d,[["render",E],["__file","\u6267\u884C\u4E0A\u4E0B\u6587\u6808.html.vue"]]);export{k as default};
