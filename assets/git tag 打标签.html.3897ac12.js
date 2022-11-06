import{_ as n,o as a,c as t,a as e,b as d,d as s,e as l,r}from"./app.599acce7.js";const c={},v=s(`<h1 id="git-tag-\u6253\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#git-tag-\u6253\u6807\u7B7E" aria-hidden="true">#</a> git tag \u6253\u6807\u7B7E</h1><h2 id="\u67E5\u770B\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6807\u7B7E" aria-hidden="true">#</a> \u67E5\u770B\u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u6240\u6709\u6807\u7B7E
git tag

// \u67E5\u770B\u6240\u6709\u6807\u7B7E\u53CA\u8BF4\u660E
git tag -n

// \u67E5\u770B\u6307\u5B9A\u6807\u7B7E
git show &lt;tag name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6807\u7B7E" aria-hidden="true">#</a> \u521B\u5EFA\u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7ED9\u4E0A\u4E2A\u63D0\u4EA4\u6253\u6807\u7B7E
git tag &lt;tag name&gt;

// \u7ED9\u67D0\u4E2A\u63D0\u4EA4\u6253\u6807\u7B7E
git tag &lt;tag name&gt; &lt;commit&gt;

// \u7ED9\u67D0\u4E2A\u63D0\u4EA4\u6253\u6807\u7B7E\u5E76\u9644\u4E0A\u8BF4\u660E
git tag -a &lt;tag name&gt; -m &lt;tag description&gt; &lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A8\u9001\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u6807\u7B7E" aria-hidden="true">#</a> \u63A8\u9001\u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u63A8\u9001\u672C\u5730\u6307\u5B9A\u6807\u7B7E\u5230\u8FDC\u7A0B
git push origin &lt;tag name&gt;

// \u63A8\u9001\u672C\u5730\u6240\u6709\u6807\u7B7E\u5230\u8FDC\u7A0B
git push origin --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6807\u7B7E" aria-hidden="true">#</a> \u5220\u9664\u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5220\u9664\u672C\u5730\u6807\u7B7E
git tag -d &lt;tag name&gt;

// \u5220\u9664\u8FDC\u7A0B\u6807\u7B7E
git push origin --delete tag &lt;tag name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,10),g={href:"https://juejin.cn/post/7074777378714550303",target:"_blank",rel:"noopener noreferrer"},u=l("git tag \u7684\u4F7F\u7528");function m(o,h){const i=r("ExternalLinkIcon");return a(),t("div",null,[v,e("ul",null,[e("li",null,[e("a",g,[u,d(i)])])])])}var x=n(c,[["render",m],["__file","git tag \u6253\u6807\u7B7E.html.vue"]]);export{x as default};
