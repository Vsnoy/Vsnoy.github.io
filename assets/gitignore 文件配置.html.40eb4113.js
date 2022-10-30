import{_ as n,o as d,c as a,a as e,b as r,d as s,e as t,r as l}from"./app.3ca44464.js";const c={},o=s(`<h1 id="gitignore-\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gitignore-\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> gitignore \u6587\u4EF6\u914D\u7F6E</h1><h2 id="\u521B\u5EFA-gitignore-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-gitignore-\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA .gitignore \u6587\u4EF6</h2><p>\u5728\u6587\u4EF6\u5939\u6839\u76EE\u5F55\u4E0B\u624B\u52A8\u521B\u5EFA <code>.gitignore</code> \u6587\u4EF6\u5373\u53EF\u3002</p><h2 id="\u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5FFD\u7565 test.txt \u6587\u4EF6
test.txt

# \u5FFD\u7565\u6240\u6709 txt \u6587\u4EF6
*.txt

# \u5FFD\u7565 .gitignore \u6587\u4EF6
.gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6\u5939</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5FFD\u7565 node_modules \u6587\u4EF6\u5939
node_modules

# \u5FFD\u7565 dist \u6587\u4EF6\u5939 (build directory)
dist

# \u5FFD\u7565\u5F00\u5934\u542B\u6709 ignore \u7684\u6587\u4EF6\u5939
ignore*

# \u5FFD\u7565\u4E2D\u95F4\u542B\u6709 ignore \u7684\u6587\u4EF6\u5939
*ignore*/

# \u5FFD\u7565\u672B\u5C3E\u542B\u6709 ignore \u7684\u6587\u4EF6\u5939
*ignore/

# \u4E0D\u5FFD\u7565 ignore \u6587\u4EF6\u5939
!ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>.gitignore</code> \u53EA\u80FD\u5FFD\u7565\u90A3\u4E9B\u539F\u6765\u6CA1\u6709\u88AB <code>track</code> \u7684\u6587\u4EF6\uFF0C\u5982\u679C\u67D0\u4E9B\u6587\u4EF6\u5DF2\u7ECF\u88AB\u7EB3\u5165\u4E86\u7248\u672C\u7BA1\u7406\u4E2D\uFF0C\u5219\u4FEE\u6539 <code>.gitignore</code> \u662F\u65E0\u6548\u7684\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rm -r --cached .
git add .
git commit -m &#39;update .gitignore&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,9),v={href:"https://321paranoiawhy.github.io/post/gitignore/",target:"_blank",rel:"noopener noreferrer"},u=t("gitignore");function g(m,h){const i=l("ExternalLinkIcon");return d(),a("div",null,[o,e("ul",null,[e("li",null,[e("a",v,[u,r(i)])])])])}var _=n(c,[["render",g],["__file","gitignore \u6587\u4EF6\u914D\u7F6E.html.vue"]]);export{_ as default};
