import{_ as e,o as i,c as n,e as s}from"./app.a2f823b7.js";const a={},d=s(`<h1 id="\u6570\u636E\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u4EA4\u4E92" aria-hidden="true">#</a> \u6570\u636E\u4EA4\u4E92</h1><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h2><h3 id="ajax-\u521B\u5EFA\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#ajax-\u521B\u5EFA\u6B65\u9AA4" aria-hidden="true">#</a> Ajax \u521B\u5EFA\u6B65\u9AA4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u521B\u5EFA XMLHttpRequest \u5BF9\u8C61
var ajax = new XMLHttpRequest();

// \u4F7F\u7528 open \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A Http \u8BF7\u6C42\u3002
ajax.open(&#39;GET&#39;, url, true);

// \u5982\u679C\u662F post \u8BF7\u6C42\uFF0C\u9700\u8981\u8BBE\u7F6E\u8BF7\u6C42\u5934
ajax.setRequestHeader(&quot;Content-type&quot;, &quot;application/x-www-form-urlencoded&quot;); 

// \u53D1\u9001 Http \u8BF7\u6C42\uFF08\u5982\u679C\u4E0D\u9700\u8981\u53C2\u6570\uFF0C\u5C31\u5199 null\uFF09
ajax.send(null);  

// \u63A5\u6536\u670D\u52A1\u5668\u54CD\u5E94\u6570\u636E
ajax.onreadystatechange = function() {
  if (this.readyState !== 4) return;

  // \u5F53\u8BF7\u6C42\u6210\u529F\u65F6
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.error(this.statusText);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var ajax = new XMLHttpRequest();
ajax.open(&quot;get||post&quot;, url, true||false);
ajax.setRequestHeader(&quot;Content-type&quot;,&quot;application/x-www-form-urlencoded&quot;);
ajax.send(null);
ajax.onreadystatechange = callBack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><h3 id="\u4E86\u89E3-promise-\u5417" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3-promise-\u5417" aria-hidden="true">#</a> \u4E86\u89E3 Promise \u5417</h3><p>Promise \u662F\u4E00\u79CD\u5F02\u6B65\u7F16\u7A0B\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6709\u4E09\u79CD\u72B6\u6001\uFF1A</p><ul><li>pending\uFF08\u8FDB\u884C\u4E2D\uFF09</li><li>resolved\uFF08\u5DF2\u5B8C\u6210\uFF09</li><li>rejected\uFF08\u5DF2\u5931\u8D25\uFF09</li></ul><p>Promise \u7279\u70B9\uFF1A\u53EA\u6709\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u5F53\u524D\u662F\u54EA\u4E00\u79CD\u72B6\u6001\uFF0C\u5176\u4ED6\u4EFB\u4F55\u64CD\u4F5C\u90FD\u65E0\u6CD5\u6539\u53D8\u8FD9\u4E2A\u72B6\u6001\u3002</p><h3 id="promise-\u89E3\u51B3\u7684\u75DB\u70B9" tabindex="-1"><a class="header-anchor" href="#promise-\u89E3\u51B3\u7684\u75DB\u70B9" aria-hidden="true">#</a> Promise \u89E3\u51B3\u7684\u75DB\u70B9</h3><ul><li>\u56DE\u8C03\u5730\u57DF\u95EE\u9898</li><li>\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u95EE\u9898</li></ul><h3 id="promise-\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#promise-\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> Promise \u5982\u4F55\u4F7F\u7528</h3><ul><li>\u521B\u9020\u4E00\u4E2A Promise \u5B9E\u4F8B</li><li>\u5B9E\u4F8B\u751F\u6210\u540E\uFF0C\u53EF\u4EE5\u7528 then \u65B9\u6CD5\u5206\u522B\u6307\u5B9A resolved \u72B6\u6001\u548C rejected \u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570</li><li>\u53EF\u4EE5\u7528 try \u548C catch \u65B9\u6CD5\u9884\u9632\u5F02\u5E38</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  let num = Math.random()*2
  
  if(num &lt; 1){
    resolve(&#39;success&#39;)
  }else{
    reject(&#39;error&#39;)
  }
}).then(res =&gt; {
  console.log(res)
}).catch(err =&gt; {
  console.log(err)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h2><h3 id="axios-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#axios-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Axios \u662F\u4EC0\u4E48</h3><p>Axios \u662F\u4E00\u4E2A\u57FA\u4E8E Promise \u7684 HTTP \u5E93\uFF0C\u53EF\u4EE5\u7528\u5728\u6D4F\u89C8\u5668\u548C node.js \u4E2D\u3002</p><h3 id="axios-\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#axios-\u7684\u7279\u70B9" aria-hidden="true">#</a> Axios \u7684\u7279\u70B9</h3><ul><li>\u652F\u6301 Promise API</li><li>\u53EF\u4EE5\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94</li><li>\u53EF\u4EE5\u8F6C\u6362\u8BF7\u6C42\u6570\u636E\u548C\u54CD\u5E94\u6570\u636E</li><li>\u5B89\u5168\u6027\u66F4\u9AD8\uFF0C\u5BA2\u6237\u7AEF\u652F\u6301\u9632\u5FA1 CSRF</li></ul><h3 id="axios-\u4E3A\u4EC0\u4E48\u65E2\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u8FD0\u884C\u53C8\u80FD\u5728\u670D\u52A1\u5668-node-\u73AF\u5883\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#axios-\u4E3A\u4EC0\u4E48\u65E2\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u8FD0\u884C\u53C8\u80FD\u5728\u670D\u52A1\u5668-node-\u73AF\u5883\u8FD0\u884C" aria-hidden="true">#</a> Axios \u4E3A\u4EC0\u4E48\u65E2\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u8FD0\u884C\u53C8\u80FD\u5728\u670D\u52A1\u5668 (node) \u73AF\u5883\u8FD0\u884C</h3><ul><li>\u5728\u6D4F\u89C8\u5668\u7AEF\u4F7F\u7528<code>XMLHttpRequest</code>\u5BF9\u8C61\u53D1\u9001 ajax \u8BF7\u6C42</li><li>\u5728 node \u73AF\u5883\u4F7F\u7528<code>http</code>\u5BF9\u8C61\u53D1\u9001 ajax \u8BF7\u6C42</li></ul><h3 id="axios-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#axios-\u793A\u4F8B" aria-hidden="true">#</a> Axios \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>axios.get(&#39;/user&#39;, {
  params: {
    ID: 12
  }
}).then((res) =&gt; {
  console.log(res);
}).catch((err) =&gt; {
  console.log(err);
});

-----------------------------------

axios.post(&#39;/user&#39;, {
  firstName: &#39;Violet&#39;,
  lastName: &#39;Evergarden&#39;
}).then((res) =&gt; {
  console.log(res);
}).catch((err) =&gt; {
  console.log(err);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BF7\u6C42\u62E6\u622A\u5668
// \u5728\u8BF7\u6C42\u53D1\u9001\u524D\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\u3002\u4F8B\u5982\u5728\u6BCF\u4E2A\u8BF7\u6C42\u4F53\u91CC\u52A0\u4E0A token\u3002
axios.interceptors.request.use((config) =&gt; {
  return config;
}, (err) =&gt; {
  return Promise.reject(error);
})

-----------------------------------------------------

// \u54CD\u5E94\u62E6\u622A\u5668
// \u5728\u54CD\u5E94\u63A5\u6536\u540E\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\u3002\u4F8B\u5982\u5728\u670D\u52A1\u5668\u8FD4\u56DE\u767B\u5F55\u72B6\u6001\u5931\u6548\uFF0C\u9700\u8981\u91CD\u65B0\u767B\u5F55\u7684\u65F6\u5019\uFF0C\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u3002
axios.interceptors.response.use((res) =&gt; {
  return response;
}, (err) ={
  return Promise.reject(error);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[d];function r(t,v){return i(),n("div",null,l)}var u=e(a,[["render",r],["__file","\u6570\u636E\u4EA4\u4E92.html.vue"]]);export{u as default};
