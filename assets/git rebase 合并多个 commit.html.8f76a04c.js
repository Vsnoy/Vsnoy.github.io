import{_ as n,o as t,c as s,a as e,b as i,d as r,e as d,r as c}from"./app.19e0d641.js";const l={},o=r(`<h1 id="git-rebase-\u5408\u5E76\u591A\u4E2A-commit" tabindex="-1"><a class="header-anchor" href="#git-rebase-\u5408\u5E76\u591A\u4E2A-commit" aria-hidden="true">#</a> git rebase \u5408\u5E76\u591A\u4E2A commit</h1><h2 id="\u67E5\u770B\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55" aria-hidden="true">#</a> \u67E5\u770B\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>commit 3ca6ec
commit 1b4056
commit 53f244
commit 3a4226
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u8981\u5408\u5E76\u7684-commit" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u8981\u5408\u5E76\u7684-commit" aria-hidden="true">#</a> \u9009\u62E9\u8981\u5408\u5E76\u7684 commit</h2><p>\u8FD9\u91CC\u4EE5\u5408\u5E76\u524D\u4E09\u6761 <code>commit</code> \u8BB0\u5F55\u4E3A\u4F8B\uFF0C\u6709\u4E09\u79CD\u65B9\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rebase -i HEAD~3

git rebase -i HEAD^^^

git rebase -i 3a4226b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5408\u5E76\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u63D0\u4EA4" aria-hidden="true">#</a> \u5408\u5E76\u63D0\u4EA4</h2><p>\u4FDD\u7559\u7B2C\u4E00\u884C\u7684 <code>pick</code>\uFF0C\u5C06\u7B2C\u4E8C\u884C\u53CA\u4EE5\u540E\u7684 <code>pick</code> \u4FEE\u6539\u4E3A <code>f</code> \u6216 <code>s</code> \u4FDD\u5B58\uFF0C\u9000\u51FA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pick 3ca6ec3
f 1b40566
f 53f244a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5408\u5E76\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u51B2\u7A81" aria-hidden="true">#</a> \u5408\u5E76\u51B2\u7A81</h2><p>\u5F53\u5408\u5E76\u5B58\u5728\u6709\u51B2\u7A81\u65F6\uFF0C\u9700\u8981\u6267\u884C\u624B\u52A8\u5408\u5E76\u51B2\u7A81\u3002\u5408\u5E76\u5B8C\u6210\u540E\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u7EE7\u7EED\u8FDB\u884C\u53D8\u57FA\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u653E\u5F03\u8FD9\u6B21\u5408\u5E76\u7684\u8BDD\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rebase --abort  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7F16\u8F91\u63D0\u4EA4\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u63D0\u4EA4\u4FE1\u606F" aria-hidden="true">#</a> \u7F16\u8F91\u63D0\u4EA4\u4FE1\u606F</h2><p>\u591A\u6761 <code>commit</code> \u5408\u5E76\u540E\u7684 <code>commit</code>\uFF0C\u9644\u4E0A\u63D0\u4EA4\u4FE1\u606F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git commit --amend -m &lt;message&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5F3A\u5236-push" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236-push" aria-hidden="true">#</a> \u5F3A\u5236 Push</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,20),m={href:"https://anonymity94.github.io/articles/git-rebase.html",target:"_blank",rel:"noopener noreferrer"},u=d("Git Rebase"),h={href:"https://segmentfault.com/a/1190000007748862",target:"_blank",rel:"noopener noreferrer"},v=d("Git \u5408\u5E76\u591A\u4E2A commit");function b(g,x){const a=c("ExternalLinkIcon");return t(),s("div",null,[o,e("ul",null,[e("li",null,[e("a",m,[u,i(a)])]),e("li",null,[e("a",h,[v,i(a)])])])])}var _=n(l,[["render",b],["__file","git rebase \u5408\u5E76\u591A\u4E2A commit.html.vue"]]);export{_ as default};
