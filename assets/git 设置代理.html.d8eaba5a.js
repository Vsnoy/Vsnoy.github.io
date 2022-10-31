import{_ as e,o as i,c as n,d as t}from"./app.72b74af7.js";const a={},s=t(`<h1 id="git-\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> git \u8BBE\u7F6E\u4EE3\u7406</h1><h2 id="win" tabindex="-1"><a class="header-anchor" href="#win" aria-hidden="true">#</a> Win</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BBE\u7F6E\u4EE3\u7406
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890

// \u53D6\u6D88\u4EE3\u7406
git config --global --unset http.proxy
git config --global --unset https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BBE\u7F6E\u4EE3\u7406
export http_proxy=http://127.0.0.1:7890 
export https_proxy=http://127.0.0.1:7890

// \u53D6\u6D88\u4EE3\u7406
unset http_proxy 
unset https_proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[s];function r(l,c){return i(),n("div",null,d)}var v=e(a,[["render",r],["__file","git \u8BBE\u7F6E\u4EE3\u7406.html.vue"]]);export{v as default};
