import{_ as d,o as v,c,a as n,b as s,d as e,e as l,r}from"./app.e08ff943.js";const a={},o=e(`<h1 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h1><div class="custom-container tip"><p class="custom-container-title">\u8981\u70B9</p><ul><li><p>\u5F02\u6B65\u4EFB\u52A1\u5148\u6CE8\u518C\u518D\u6267\u884C\u3002\u5C24\u987B\u6CE8\u610F <code>Promise</code> \u591A\u4E2A <code>then</code> \u65F6\u5FAE\u4EFB\u52A1\u7684\u6CE8\u518C\u987A\u5E8F</p></li><li><p><code>then</code> \u5FAE\u4EFB\u52A1\u6CE8\u518C\u65F6\u673A\u3002\u78B0\u5230 <code>then</code> \u65F6\u518D\u6CE8\u518C\uFF0C\u800C\u975E\u4E00\u770B\u5230 <code>resolve</code> \u5C31\u7ACB\u5373\u6CE8\u518C\uFF0C<code>resolve</code> \u4EC5\u662F\u786E\u4FDD\u8BE5 <code>then</code> \u5FAE\u4EFB\u52A1\u80FD\u591F\u88AB\u6CE8\u518C</p></li><li><p>\u9047\u5230 <code>await</code>\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C\u53F3\u8FB9\u7684\u8BED\u53E5\uFF0C\u7136\u540E\u63D0\u524D\u8DF3\u51FA <code>async</code> \u51FD\u6570\uFF0C\u5F85\u5916\u90E8\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u518D\u8FD4\u56DE <code>async</code> \u51FD\u6570\u5185\u90E8\u7EE7\u7EED\u6267\u884C\u672A\u6267\u884C\u5B8C\u7684</p></li></ul></div><h2 id="\u4E60\u9898-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898-1" aria-hidden="true">#</a> \u4E60\u9898 1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(&#39;start&#39;)

setTimeout(() =&gt; {
  console.log(&#39;children2&#39;)
  Promise.resolve().then(() =&gt; {
    console.log(&#39;children3&#39;)
  })
}, 0)

new Promise(function(resolve, reject) {
  console.log(&#39;children4&#39;)
  setTimeout(function() {
    console.log(&#39;children5&#39;)
    resolve(&#39;children6&#39;)
  }, 0)
}).then(res =&gt;{         
  console.log(&#39;children7&#39;)
  setTimeout(() =&gt; {
    console.log(res)
  }, 0)
})

// \u8F93\u51FA
start
children4
children2
children3 
children5
children7 
children6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={id:"\u4E60\u9898-2",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#\u4E60\u9898-2","aria-hidden":"true"},"#",-1),t=l(" \u4E60\u9898 2 "),b=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setTimeout(() =&gt; { // \u5B8F 1
  console.log(0)
})

new Promise(resolve =&gt; {
  resolve()
  Promise.resolve().then(() =&gt; { // \u5FAE 1
    console.log(2)
    Promise.resolve().then(() =&gt; { // \u5FAE 3
      console.log(4)
    })
 })
 console.log(3)
}).then(() =&gt; { // \u5FAE 2
  console.log(1)
})

console.log(5)

// \u8F93\u51FA
3\u30015\u30012\u30011\u30014\u30010

// \u89E3\u6790
script \u6574\u4F53\u4F5C\u4E3A\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5F00\u59CB\u6267\u884C
\u78B0\u5230 setTimeout\uFF0C\u6CE8\u518C\u5B8F 1
\u78B0\u5230\u7B2C\u4E00\u4E2A then\uFF0C\u6CE8\u518C\u5FAE 1
\u7EE7\u7EED\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8F93\u51FA 3
\u78B0\u5230\u7B2C\u4E8C\u4E2A then\uFF0C\u6CE8\u518C\u5FAE 2
\u7EE7\u7EED\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8F93\u51FA 5
script \u6574\u4F53\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u51C6\u5907\u9010\u4E00\u6267\u884C
\u53D6\u51FA\u5FAE 1\uFF0C\u8F93\u51FA 2
\u78B0\u5230\u7B2C\u4E09\u4E2A then\uFF0C\u6CE8\u518C\u5FAE 3
\u53D6\u51FA\u5FAE 2\uFF0C\u8F93\u51FA 1
\u53D6\u51FA\u5FAE 3\uFF0C\u8F93\u51FA 4
\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u6240\u6709\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u51C6\u5907\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1
\u53D6\u51FA\u5B8F 1\uFF0C\u8F93\u51FA 0
\u5B8F 1 \u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A\uFF0C\u5219\u51C6\u5907\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u68C0\u67E5\u5B8F\u4EFB\u52A1\u961F\u5217\u4E5F\u4E3A\u7A7A\uFF0C\u5219\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898-3" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898-3" aria-hidden="true">#</a> \u4E60\u9898 3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(1) 

setTimeout(() =&gt; { // \u5B8F 1
  console.log(2)     
  Promise.resolve().then(() =&gt; { \u5FAE 4
    console.log(3)  
  })
})

new Promise((resolve, reject) =&gt; {
  console.log(4) 
  resolve(5)
}).then((data) =&gt; { // \u5FAE 1
  console.log(data)  
  Promise.resolve().then(() =&gt; { // \u5FAE 2
    console.log(6)  
  }).then(() =&gt; { // \u5FAE 3
    console.log(7)  
    setTimeout(() =&gt; { // \u5B8F 3
      console.log(8)  
    }, 0)
  })
})

setTimeout(() =&gt; { // \u5B8F 2
  console.log(9)     
})

console.log(10)

// \u8F93\u51FA
1\u30014\u300110\u30015\u30016\u30017\u30012\u30013\u30019\u30018

// \u89E3\u6790
script \u6574\u4F53\u4F5C\u4E3A\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5F00\u59CB\u6267\u884C
\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8F93\u51FA 1
\u78B0\u5230\u7B2C\u4E00\u4E2A setTimeout\uFF0C\u6CE8\u518C\u5B8F 1
\u7EE7\u7EED\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8F93\u51FA 4
\u78B0\u5230\u7B2C\u4E00\u4E2A then\uFF0C\u6CE8\u518C\u5FAE 1
\u78B0\u5230\u7B2C\u4E8C\u4E2A setTimeout\uFF0C\u6CE8\u518C\u5B8F 2
\u7EE7\u7EED\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8F93\u51FA 10
script \u6574\u4F53\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u51C6\u5907\u9010\u4E00\u6267\u884C
\u53D6\u51FA\u5FAE 1\uFF0C\u8F93\u51FA 5
\u78B0\u5230\u7B2C\u4E8C\u4E2A then\uFF0C\u6CE8\u518C\u5FAE 2
\u53D6\u51FA\u5FAE 2\uFF0C\u8F93\u51FA 6
\u78B0\u5230\u7B2C\u4E09\u4E2A then\uFF0C\u6CE8\u518C\u5FAE 3
\u53D6\u51FA\u5FAE 3\uFF0C\u8F93\u51FA 7
\u78B0\u5230\u7B2C\u4E09\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u6CE8\u518C\u5B8F 3
\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u6240\u6709\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u51C6\u5907\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1
\u53D6\u51FA\u5B8F 1\uFF0C\u8F93\u51FA 2
\u78B0\u5230\u7B2C\u56DB\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u6CE8\u518C\u5FAE 4
\u5B8F 1 \u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u51C6\u5907\u9010\u4E00\u6267\u884C
\u53D6\u51FA\u5FAE 4\uFF0C\u8F93\u51FA 3
\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u6240\u6709\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u51C6\u5907\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1
\u53D6\u51FA\u5B8F 2\uFF0C\u8F93\u51FA 9
\u5B8F 2 \u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A\uFF0C\u5219\u51C6\u5907\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u68C0\u67E5\u5B8F\u4EFB\u52A1\u961F\u5217\u4E0D\u4E3A\u7A7A
\u53D6\u51FA\u5B8F 3\uFF0C\u8F93\u51FA 8
\u5B8F 3 \u6267\u884C\u5B8C\u6BD5\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A\uFF0C\u5219\u51C6\u5907\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u68C0\u67E5\u5B8F\u4EFB\u52A1\u961F\u5217\u4E5F\u4E3A\u7A7A\uFF0C\u5219\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h={id:"\u4E60\u9898-4",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#\u4E60\u9898-4","aria-hidden":"true"},"#",-1),p=l(" \u4E60\u9898 4 "),x=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var myPromise = Promise.resolve(Promise.resolve(&#39;Promise&#39;))

function funcOne() {
  console.log(&#39;funcOne Start&#39;)
  myPromise.then(res =&gt; res).then(res =&gt; console.log(&#39;funcOne &#39; + res))
  setTimeout(() =&gt; console.log(&#39;funcOne Timeout&#39;), 0)
  console.log(&#39;funcOne End&#39;)
}

async function funcTwo() {
  console.log(&#39;funcTwo Start&#39;)
  const res = await myPromise
  console.log(await &#39;funcTwo &#39; + res)
  setTimeout(() =&gt; console.log(&#39;funcTwo Timeout&#39;), 0)
  console.log(&#39;funcTwo End&#39;)
}

funcOne()
funcTwo()

// \u8F93\u51FA
funcOne Start
funcOne End
funcTwo Start
funcOne Promise
funcTwo Promise
funcTwo End
funcOne Timeout
funcTwo Timeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4-1" aria-hidden="true">#</a> \u4E60\u9898\u7EC4 1</h2><h3 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  console.log(&#39;\u5916\u90E8 promise&#39;)
  resolve()
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  return new Promise((resolve, reject) =&gt; {
    console.log(&#39;\u5185\u90E8 promise&#39;)
    resolve()
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
  })
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
})

// \u8F93\u51FA
\u5916\u90E8 promise
\u5916\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8 promise
\u5185\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8\u7B2C\u4E8C\u4E2A then
\u5916\u90E8\u7B2C\u4E8C\u4E2A then
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  console.log(&#39;\u5916\u90E8 promise&#39;)
  resolve()
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  new Promise((resolve, reject) =&gt; {
    console.log(&#39;\u5185\u90E8 promise&#39;)
    resolve()
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
  })
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
})

// \u8F93\u51FA
\u5916\u90E8 promise
\u5916\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8 promise
\u5185\u90E8\u7B2C\u4E00\u4E2A then
\u5916\u90E8\u7B2C\u4E8C\u4E2A then
\u5185\u90E8\u7B2C\u4E8C\u4E2A then
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E09" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E09" aria-hidden="true">#</a> \u4E60\u9898\u4E09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  console.log(&#39;\u5916\u90E8 promise&#39;)
  resolve()
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  let p = new Promise((resolve, reject) =&gt; {
    console.log(&#39;\u5185\u90E8 promise&#39;)
    resolve()
  })
  p.then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  })
  p.then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
  })
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
})

// \u8F93\u51FA
\u5916\u90E8 promise
\u5916\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8 promise
\u5185\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8\u7B2C\u4E8C\u4E2A then
\u5916\u90E8\u7B2C\u4E8C\u4E2A then
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),f={id:"\u4E60\u9898\u56DB",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#\u4E60\u9898\u56DB","aria-hidden":"true"},"#",-1),T=l(" \u4E60\u9898\u56DB "),y=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let p = new Promise((resolve, reject) =&gt; {
  console.log(&#39;\u5916\u90E8 promise&#39;)
  resolve()
})
p.then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  new Promise((resolve, reject) =&gt; {
    console.log(&#39;\u5185\u90E8 promise&#39;)
    resolve()
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
  })
})
p.then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
})

// \u8F93\u51FA
\u5916\u90E8 promise
\u5916\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8 promise
\u5916\u90E8\u7B2C\u4E8C\u4E2A then
\u5185\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8\u7B2C\u4E8C\u4E2A then
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w={id:"\u4E60\u9898\u4E94",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#\u4E60\u9898\u4E94","aria-hidden":"true"},"#",-1),j=l(" \u4E60\u9898\u4E94 "),O=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  console.log(&#39;\u5916\u90E8 promise&#39;)
  resolve()
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  new Promise((resolve, reject) =&gt; {
    console.log(&#39;\u5185\u90E8 promise&#39;)
    resolve()
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E00\u4E2A then&#39;)
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
  })
  return new Promise((resolve, reject) =&gt; {
    console.log(&#39;\u5185\u90E8 promise2&#39;)
    resolve()
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E00\u4E2A then2&#39;)
  }).then(() =&gt; {
    console.log(&#39;\u5185\u90E8\u7B2C\u4E8C\u4E2A then2&#39;)
  })
}).then(() =&gt; {
  console.log(&#39;\u5916\u90E8\u7B2C\u4E8C\u4E2A then&#39;)
})

// \u8F93\u51FA
\u5916\u90E8 promise
\u5916\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8 promise
\u5185\u90E8 promise2
\u5185\u90E8\u7B2C\u4E00\u4E2A then
\u5185\u90E8\u7B2C\u4E00\u4E2A then2
\u5185\u90E8\u7B2C\u4E8C\u4E2A then
\u5185\u90E8\u7B2C\u4E8C\u4E2A then2
\u5916\u90E8\u7B2C\u4E8C\u4E2A then
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4-2" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4-2" aria-hidden="true">#</a> \u4E60\u9898\u7EC4 2</h2><h3 id="\u4E60\u9898\u4E00-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00-1" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function async1() {
  console.log(&#39;async1 start&#39;)
  await async2()
  console.log(&#39;async1 end&#39;)
}

async function async2() {
  console.log(&#39;async2&#39;)
}

console.log(&#39;script start&#39;)

setTimeout(function () {
  console.log(&#39;setTimeout&#39;)
}, 0)

async1()

new Promise((resolve) =&gt; {
  console.log(&#39;promise1&#39;)
  resolve()
}).then(function () {
  console.log(&#39;promise2&#39;)
})

console.log(&#39;script end&#39;)

// \u8F93\u51FA
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E8C-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C-1" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function async1() {
  console.log(&#39;async1 start&#39;)
  await async2()
  console.log(&#39;async1 end&#39;)
}

async function async2() {
  new Promise(function (resolve) {
    console.log(&#39;promise1&#39;)
    resolve()
  }).then(function () {
    console.log(&#39;promise2&#39;)
  })
}

console.log(&#39;script start&#39;)

setTimeout(function () {
  console.log(&#39;setTimeout&#39;)
}, 0)

async1()

new Promise(function (resolve) {
  console.log(&#39;promise3&#39;)
  resolve()
}).then(function () {
  console.log(&#39;promise4&#39;)
})

console.log(&#39;script end&#39;)

// \u8F93\u51FA
script start
async1 start 
promise1
promise3 
script end 
promise2
async1 end
promise4
setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),B={id:"\u4E60\u9898\u4E09-1",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#\u4E60\u9898\u4E09-1","aria-hidden":"true"},"#",-1),S=l(" \u4E60\u9898\u4E09 "),N=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function async1() {
  console.log(&#39;async1 start&#39;)
  await async2()
  setTimeout(function() {
    console.log(&#39;setTimeout1&#39;)  
  }, 0)
}

async function async2() {
  setTimeout(function() {
    console.log(&#39;setTimeout2&#39;)
  }, 0)
}

console.log(&#39;script start&#39;)

setTimeout(function() {
  console.log(&#39;setTimeout3&#39;)
}, 0)

async1()

new Promise(function(resolve) {
  console.log(&#39;promise1&#39;)
  resolve()
}).then(function() {
  console.log(&#39;promise2&#39;)
})

console.log(&#39;script end&#39;)

// \u8F93\u51FA
script start
async1 start
promise1
script end
promise2
setTimeout3
setTimeout2
setTimeout1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function V(k,C){const i=r("Badge");return v(),c("div",null,[o,n("h2",u,[m,t,s(i,{text:"hard"})]),b,n("h2",h,[g,p,s(i,{text:"hard"})]),x,n("h3",f,[_,T,s(i,{text:"hard"})]),y,n("h3",w,[P,j,s(i,{text:"hard"})]),O,n("h3",B,[E,S,s(i,{text:"hard"})]),N])}var z=d(a,[["render",V],["__file","\u4E8B\u4EF6\u5FAA\u73AF.html.vue"]]);export{z as default};
