import{_ as e,o as i,c as n,d as a}from"./app.3fccbc48.js";const d={},r=a(`<h1 id="git-\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#git-\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> git \u5206\u652F\u5408\u5E76</h1><h2 id="\u5408\u5E76\u6240\u6709\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u6240\u6709\u63D0\u4EA4" aria-hidden="true">#</a> \u5408\u5E76\u6240\u6709\u63D0\u4EA4</h2><p>\u76F4\u63A5\u5408\u5E76\u53E6\u4E00\u4E2A\u5206\u652F\u6240\u6709\u63D0\u4EA4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5408\u5E76\u5206\u652F\uFF0C\u4FDD\u7559\u539F\u6765\u6240\u6709\u63D0\u4EA4
git merge &lt;branch&gt;

// \u5408\u5E76\u5206\u652F\uFF0C\u5C06\u539F\u6765\u6240\u6709\u63D0\u4EA4\u5408\u5E76\u4E3A\u4E00\u4E2A
git merge --squash &lt;branch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5408\u5E76\u90E8\u5206\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u90E8\u5206\u63D0\u4EA4" aria-hidden="true">#</a> \u5408\u5E76\u90E8\u5206\u63D0\u4EA4</h2><p>\u5408\u5E76\u5176\u4ED6\u5206\u652F\u90E8\u5206\u63D0\u4EA4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5408\u5E76\u67D0\u4E2A\u63D0\u4EA4
git cherry-pick &lt;commit&gt;

// \u5408\u5E76\u67D0\u51E0\u4E2A\u63D0\u4EA4
git cherry-pick &lt;commit-1&gt; &lt;commit-2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C <code>cherry-pick</code> \u4E86\u91CD\u590D\u7684\u63D0\u4EA4\u5BFC\u81F4\u62A5\u9519\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8DF3\u8FC7\u8BE5\u6B21\u63D0\u4EA4\uFF0C\u4FDD\u7559\u5176\u4ED6 cherry-pick \u7684\u5185\u5BB9
git cherry-pick \u2013-skip

// \u653E\u5F03 cherry-pick
git cherry-pick --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[r];function t(c,l){return i(),n("div",null,s)}var u=e(d,[["render",t],["__file","git \u5206\u652F\u5408\u5E76.html.vue"]]);export{u as default};
