import{_ as n,o as i,c as t,a as e,b as d,d as l,e as s,r}from"./app.ec1a58e3.js";const o={},c=l(`<h1 id="git-log-\u7B80\u6D01\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#git-log-\u7B80\u6D01\u6A21\u5F0F" aria-hidden="true">#</a> git log \u7B80\u6D01\u6A21\u5F0F</h1><p>\u4F7F\u7528\u522B\u540D\u81EA\u5B9A\u4E49 <code>git logp</code> \u6307\u4EE4\uFF0C\u7B80\u5316 <code>log</code> \u8F93\u51FA\u65E5\u5FD7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global alias.logp &quot;log --pretty=format:&#39;%h %ad | %s%d [%an]&#39; --graph --date=short&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --list|grep alias

// alias.logp=log --pretty=format:&#39;%h %ad | %s%d [%an]&#39; --graph --date=short
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git logp

// * 7dcf359 2023-05-16 | update [Vsnoy]
// * 7ac2b61 2023-05-14 | update [Vsnoy]
// * 3302973 2023-05-10 | update [Vsnoy]

git logp --max-count=1
// * 7dcf359 2023-05-16 | update [Vsnoy]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,6),g={href:"https://blog.csdn.net/hl_java/article/details/108782904",target:"_blank",rel:"noopener noreferrer"},u=s("Git \u57FA\u7840\u64CD\u4F5C\uFF1Agit log \u7B80\u6D01\u6A21\u5F0F");function v(m,h){const a=r("ExternalLinkIcon");return i(),t("div",null,[c,e("ul",null,[e("li",null,[e("a",g,[u,d(a)])])])])}var _=n(o,[["render",v],["__file","git log \u7B80\u6D01\u6A21\u5F0F.html.vue"]]);export{_ as default};
