import{_ as n,o as a,c as l,a as i,b as d,d as s,e as t,r}from"./app.3ca44464.js";const c={},v=s(`<h1 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> git \u5E38\u7528\u547D\u4EE4</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u540E\u9762\u7528\u5230\u5C31\u8BB0\u5F55\u4E0B\uFF0C\u6301\u7EED\u66F4\u65B0\u3002</p></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u914D\u7F6E
git config --global --list

// \u6DFB\u52A0\u914D\u7F6E
git config --global xxx xxx

// \u5220\u9664\u914D\u7F6E
git config --global --unset xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F
git branch

// \u67E5\u770B\u672C\u5730\u548C\u8FDC\u7A0B\u6240\u6709\u5206\u652F
git branch -a

// \u5207\u6362\u5206\u652F
git checkout &lt;branch&gt;

// \u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F
git checkout -b &lt;branch&gt;

// \u5408\u5E76\u5206\u652F
git merge &lt;branch&gt;

// \u5220\u9664\u672C\u5730\u5206\u652F
git branch -d &lt;branch&gt;

// \u5220\u9664\u8FDC\u7A0B\u5206\u652F
git push origin --delete &lt;branch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u6807\u7B7E
git tag

// \u7ED9\u67D0\u4E2A\u63D0\u4EA4\u6253\u6807\u7B7E
git tag &lt;tag name&gt; &lt;commit&gt;

// \u7ED9\u67D0\u4E2A\u63D0\u4EA4\u6253\u6807\u7B7E\u5E76\u9644\u4E0A\u8BF4\u660E
git tag -a &lt;tag name&gt; -m &lt;tag description&gt; &lt;commit&gt;

// \u63A8\u9001\u672C\u5730\u6307\u5B9A\u6807\u7B7E\u5230\u8FDC\u7A0B
git push origin &lt;tag name&gt;

// \u63A8\u9001\u672C\u5730\u6240\u6709\u6807\u7B7E\u5230\u8FDC\u7A0B
git push origin --tags

// \u5220\u9664\u672C\u5730\u6807\u7B7E
git tag -d &lt;tag name&gt;

// \u5220\u9664\u8FDC\u7A0B\u6807\u7B7E
git push origin --delete tag &lt;tag name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true">#</a> \u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// HTTP \u4EE3\u7406
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

// Socks5 \u4EE3\u7406
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5408\u5E76\u67D0\u4E2A\u63D0\u4EA4
git cherry-pick &lt;commit&gt;

// \u5408\u5E76\u67D0\u51E0\u4E2A\u63D0\u4EA4
git cherry-pick &lt;commit-1&gt; &lt;commit-2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),u={href:"https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"},m=t("git cherry-pick \u6559\u7A0B");function g(b,o){const e=r("ExternalLinkIcon");return a(),l("div",null,[v,i("ul",null,[i("li",null,[i("a",u,[m,d(e)])])])])}var x=n(c,[["render",g],["__file","git \u5E38\u7528\u547D\u4EE4.html.vue"]]);export{x as default};
