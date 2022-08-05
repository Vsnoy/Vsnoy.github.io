import{_ as i,o as n,c as l,a as e,b as s,d as t,e as c,r}from"./app.19e0d641.js";const d={},o=t(`<h1 id="git-log-\u7B80\u6D01\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#git-log-\u7B80\u6D01\u6A21\u5F0F" aria-hidden="true">#</a> git log \u7B80\u6D01\u6A21\u5F0F</h1><p>\u4F7F\u7528\u522B\u540D\u81EA\u5B9A\u4E49 <code>git logp</code> \u6307\u4EE4\uFF0C\u7B80\u5316 <code>log</code> \u8F93\u51FA\u65E5\u5FD7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global alias.logp &#39;log --pretty=format:%cd:%cn:%h:%s&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --list|grep alias
alias.st=status
alias.ck=checkout
alias.br=branch
alias.cf=config
alias.fc=fetch
alias.brv=branch --v
alias.geturl=config --get remote.origin.url
alias.logp=log --pretty=format:%cd:%cn:%h:%s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git logp
Thu Sep 24 20:14:23 2020 +0800:author111:fa25b2abe:aaaaa
Thu Sep 24 18:01:15 2020 +0800:author2222:57340e88a:bbbbbb
Thu Sep 24 17:58:13 2020 +0800:author111:362e52925:ccccccccccc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,6),u={href:"https://blog.csdn.net/hl_java/article/details/108782904",target:"_blank",rel:"noopener noreferrer"},v=c("Git \u57FA\u7840\u64CD\u4F5C\uFF1Agit log \u7B80\u6D01\u6A21\u5F0F");function g(b,h){const a=r("ExternalLinkIcon");return n(),l("div",null,[o,e("ul",null,[e("li",null,[e("a",u,[v,s(a)])])])])}var _=i(d,[["render",g],["__file","git log \u7B80\u6D01\u6A21\u5F0F.html.vue"]]);export{_ as default};
