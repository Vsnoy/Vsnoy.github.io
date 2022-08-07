import{_ as n,o as d,c as s,a as e,b as a,d as r,e as l,r as t}from"./app.10badeee.js";const c={},o=r(`<h1 id="gitignore-\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gitignore-\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> gitignore \u6587\u4EF6\u914D\u7F6E</h1><h2 id="\u521B\u5EFA-gitignore-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-gitignore-\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA .gitignore \u6587\u4EF6</h2><p>\u5728\u6587\u4EF6\u5939\u6839\u76EE\u5F55\u4E0B\u624B\u52A8\u521B\u5EFA .gitignore \u6587\u4EF6\u5373\u53EF\u3002</p><h2 id="\u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u5FFD\u7565\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5FFD\u7565 test.txt \u6587\u4EF6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u67E5-check-ignore" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5-check-ignore" aria-hidden="true">#</a> \u68C0\u67E5 check-ignore</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># https://git-scm.com/docs/git-check-ignore
git check-ignore test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u5168\u5C40-git-ignore" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5168\u5C40-git-ignore" aria-hidden="true">#</a> \u914D\u7F6E\u5168\u5C40 git ignore</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># install touch-cli
# https://www.npmjs.com/package/touch-cli
npm install touch-cli -g

# \u6839\u76EE\u5F55\uFF0C\u5982 C:\\Users\\xxx
# \u521B\u5EFA .gitignore-global \u6587\u4EF6
touch .gitignore-global
# output: Touching .gitignore-global
# directory: C:\\Users\\xxx\\.gitignore-global

# \u5C06\u5176\u6DFB\u52A0\u81F3 Git \u914D\u7F6E
git config --global core.excludesfile .gitignore-global

# \u68C0\u67E5\u5F53\u524D\u5168\u5C40 excludesfile
git config --get core.excludesfile
# output: .gitignore-global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,12),v={href:"https://321paranoiawhy.github.io/post/gitignore/",target:"_blank",rel:"noopener noreferrer"},u=l("gitignore");function g(m,b){const i=t("ExternalLinkIcon");return d(),s("div",null,[o,e("ul",null,[e("li",null,[e("a",v,[u,a(i)])])])])}var x=n(c,[["render",g],["__file","gitignore \u6587\u4EF6\u914D\u7F6E.html.vue"]]);export{x as default};
