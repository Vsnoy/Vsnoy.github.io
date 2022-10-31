import{_ as n,o as e,c as i,d as s}from"./app.72b74af7.js";const d={},l=s(`<h1 id="this-\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#this-\u6307\u5411" aria-hidden="true">#</a> this \u6307\u5411</h1><h2 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var name = &#39;violet&#39;
var object = {
  name : &#39;trauma&#39;,
  getName: function() {
    return this.name
  }
}

console.log(object.getName()) 
console.log((object.getName = object.getName)())

// \u8F93\u51FA
trauma
violet

// \u96BE\u70B9
\u8D4B\u503C\u8BED\u53E5\u8FD4\u56DE\u503C\u662F\u7B49\u53F7\u53F3\u8FB9\u7684\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var tag = &#39;window&#39;

function getTag() {
  console.log(tag)
  console.log(this.tag)
}

const obj1 = (function(){
  const tag = &#39;1-1&#39;
  return {
    tag: &#39;1-2&#39;,
    getTag(){
      console.log(tag)
      console.log(this.tag)
    }
  }
})()

const obj2 = (function(){
  const tag = &#39;2-1&#39;
  return {
    tag: &#39;2-2&#39;,
    getTag(){
      console.log(tag)
      console.log(this.tag)
    }
  }
})()

getTag()
obj1.getTag()
obj2.getTag()
obj1.getTag = getTag
obj1.getTag()
obj1.getTag = obj2.getTag
obj1.getTag()

// \u8F93\u51FA\u7ED3\u679C
window
1-1
1-2
2-1
2-2
window
1-2
2-1
1-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4" aria-hidden="true">#</a> \u4E60\u9898\u7EC4</h2><h3 id="\u4E60\u9898\u4E00-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00-1" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj1 = {
  a: 2,
  getA: function() {
    console.log(this) // obj1
    setTimeout(() =&gt; {
      console.log(this) // obj1
    }, 1000)
  }
};

obj1.getA();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E8C-1" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E8C-1" aria-hidden="true">#</a> \u4E60\u9898\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj2 = {
  a: 2,
  getA: function() {
    console.log(this) // obj2
    setTimeout(function() {
      console.log(this) // window
    }, 1000)
  }
}

obj2.getA()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u4E09" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E09" aria-hidden="true">#</a> \u4E60\u9898\u4E09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj3 = {
  a: 2,
  getA: () =&gt; {
    console.log(this) // window
    setTimeout(function() {
      console.log(this) // window
    }, 1000)
  }
}

obj3.getA()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E60\u9898\u56DB" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u56DB" aria-hidden="true">#</a> \u4E60\u9898\u56DB</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj4 = {
  a: 2,
  getA: () =&gt; {
    console.log(this) // window
    setTimeout(() =&gt; {
      console.log(this) // window
    }, 1000)
  }
}

obj4.getA()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),a=[l];function v(r,c){return e(),i("div",null,a)}var u=n(d,[["render",v],["__file","this \u6307\u5411.html.vue"]]);export{u as default};
