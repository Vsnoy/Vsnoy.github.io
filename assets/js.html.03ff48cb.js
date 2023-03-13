import{_ as a,o as d,c as r,a as e,b as n,e as l,d as s,r as t}from"./app.78233b17.js";const c={},u=l(`<h1 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h1><h2 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h2><ul><li>Set</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[...new Set(arr)]
Array.from(new Set(arr))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53CC\u5C42 for \u5FAA\u73AF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for (let i = 0; i &lt; arr.length; i++) {
  for (let j = i + 1; j &lt; arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1)

      // \u53BB\u91CD\u540E\u4F1A\u6539\u53D8\u6570\u7EC4\u957F\u5EA6\uFF0C\u6240\u4EE5\u8981\u5C06\u6570\u7EC4\u957F\u5EA6 arr.length \u548C\u4E0B\u6807 j \u51CF\u4E00
      arr.length--
      j--
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>filter + indexOf</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5229\u7528 indexOf \u8FD4\u56DE\u6307\u5B9A\u503C\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u7D22\u5F15\u7684\u7D22\u5F15\uFF0C\u82E5\u540E\u9762\u53D1\u73B0 indexOf \u8FD4\u56DE\u503C\u548C\u5143\u7D20\u81EA\u8EAB\u7D22\u5F15\u5BF9\u4E0D\u4E0A\uFF0C\u5C31\u53BB\u91CD
arr.filter((item, index, array) =&gt; array.indexOf(item) === index)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>filter + Object \u952E\u503C\u5BF9</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5229\u7528\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u5C06\u6570\u7EC4\u503C\u4F9D\u6B21\u5B58\u5165\u5BF9\u8C61\uFF0C\u82E5\u5B58\u7684\u65F6\u5019\u53D1\u73B0\u5BF9\u8C61\u4E2D\u5DF2\u7ECF\u6709\u8BE5\u503C\u4E86\uFF0C\u5C31\u53BB\u91CD
// \u5BF9\u8C61\u5C5E\u6027\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u901A\u8FC7 typeof item + item\uFF0C\u6765\u5C06\u6570\u5B57\u62FC\u6210\u5B57\u7B26\u4E32\uFF0C\u9632\u6B62\u8BEF\u5DEE
// \u8D4B\u503C\u8BED\u53E5\u8FD4\u56DE\u503C\u662F\u7B49\u53F7\u53F3\u8FB9\u7684\u503C
const obj = {}
array.filter((item) =&gt; obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5224\u65AD\u6570\u7EC4\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6570\u7EC4\u65B9\u5F0F" aria-hidden="true">#</a> \u5224\u65AD\u6570\u7EC4\u65B9\u5F0F</h2><ul><li>Array.isArray(arr)</li><li>arr instanceof Array</li><li>arr.constructor === Array</li><li>Object.prototype.toString.call(arr) === &#39;[object Array]&#39;</li><li>\u7B49\u7B49</li></ul><h2 id="object-is-\u548C-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#object-is-\u548C-\u533A\u522B" aria-hidden="true">#</a> Object.is \u548C === \u533A\u522B</h2><p>\u4E3B\u8981\u5728\u4E8E\u5BF9 <code>NaN</code> \u548C <code>\xB10</code> \u7684\u5904\u7406\u4E0D\u540C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>NaN === NaN  // false
+0 === -0  // true

Object.is(NaN, NaN)  // true
Object.is(+0, -0)  // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number-isnan-\u548C-isnan-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#number-isnan-\u548C-isnan-\u533A\u522B" aria-hidden="true">#</a> Number.isNaN \u548C isNaN \u533A\u522B</h2><ul><li><code>Number.isNaN</code> \u53EA\u5728\u53C2\u6570\u503C\u4E3A <code>NaN</code> \u65F6\uFF0C\u8FD4\u56DE <code>true</code></li><li><code>isNaN</code> \u4F1A\u5C1D\u8BD5\u5C06\u53C2\u6570\u8F6C\u6362\u4E3A\u6570\u503C\uFF0C\u4EFB\u4F55\u4E0D\u80FD\u88AB\u8F6C\u6362\u4E3A\u6570\u503C\u7684\u7684\u503C\u90FD\u4F1A\u8FD4\u56DE <code>true</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Number.isNaN(&#39;aa&#39;) // false
isNaN(&#39;aa&#39;) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,18),v={id:"this-\u6307\u5411",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#this-\u6307\u5411","aria-hidden":"true"},"#",-1),b=s(" this \u6307\u5411 "),m=e("ul",null,[e("li",null,"\u8BCD\u6CD5\u7ED1\u5B9A\uFF08\u7BAD\u5934\u51FD\u6570\uFF09\uFF1A\u7ED1\u5B9A\u5230\u7236\u7EA7\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 this"),e("li",null,"new \u7ED1\u5B9A\uFF08\u6784\u9020\u51FD\u6570\uFF09\uFF1A\u7ED1\u5B9A\u5230\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61"),e("li",null,"\u663E\u5F0F\u7ED1\u5B9A\uFF08call/apply/bind\uFF09\uFF1A\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u5BF9\u8C61"),e("li",null,"\u9690\u5F0F\u7ED1\u5B9A\uFF08\u5BF9\u8C61\u65B9\u6CD5\uFF09\uFF1A\u7ED1\u5B9A\u5230\u8BE5\u5BF9\u8C61"),e("li",null,"\u9ED8\u8BA4\u7ED1\u5B9A\uFF08\u76F4\u63A5\u51FD\u6570\uFF09\uFF1A\u7ED1\u5B9A\u5230\u5168\u5C40\u5BF9\u8C61 window")],-1),h={id:"new-\u539F\u7406",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#new-\u539F\u7406","aria-hidden":"true"},"#",-1),x=s(" new \u539F\u7406 "),g=l(`<ul><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61</li><li>\u5C06\u65B0\u5BF9\u8C61\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code></li><li>\u5C06\u65B0\u5BF9\u8C61\u7ED1\u5B9A\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684 <code>this</code></li><li>\u82E5\u6784\u9020\u51FD\u6570\u6CA1\u6709\u663E\u5F0F\u8FD4\u56DE\u5176\u4ED6\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u8BE5\u65B0\u5BF9\u8C61</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// con \u6307 constructor\uFF0C\u6784\u9020\u5668
// ret \u6307 return\uFF0C\u8FD4\u56DE\u503C
function new(con, ...args) {
  const obj = {}
  obj.__proto__ = con.prototype
  const ret = con.apply(obj, args)
  return typeof ret === &#39;Object&#39; &amp;&amp; ret !== null ? ret : obj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7B80\u5199
function new(con, ...args) {
  const obj = Object.create(con.prototype)
  const ret = con.apply(obj, args)
  return ret instanceof Object ? ret : obj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={id:"\u8282\u6D41\u9632\u6296",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#\u8282\u6D41\u9632\u6296","aria-hidden":"true"},"#",-1),_=s(" \u8282\u6D41\u9632\u6296 "),y=l(`<ul><li>\u8282\u6D41\uFF1A\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u6267\u884C\u4E00\u6B21\u3002\u9002\u7528\u4E8E\u8F6E\u64AD\u56FE\u3001\u9AD8\u9891\u70B9\u51FB\u7B49\u573A\u666F\u3002</li><li>\u9632\u6296\uFF1A\u53EA\u6267\u884C\u6700\u540E\u4E00\u6B21\u3002\u9002\u7528\u4E8E\u8F93\u5165\u6821\u9A8C\u3001\u641C\u7D22\u8054\u60F3\u7B49\u573A\u666F\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8282\u6D41
function throttle(fn, wait) {
  let timer

  return function(...args) {
    if(timer) return

    timer = fn.apply(this, args)
    setTimeout(() =&gt; timer = null, wait)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9632\u6296
function debounce(fn, wait) {
  let timer

  return function(...args) {
    timer &amp;&amp; clearTimeout(timer)
    timer = setTimeout(() =&gt; fn.apply(this, args), wait)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N={id:"\u6DF1\u6D45\u62F7\u8D1D",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#\u6DF1\u6D45\u62F7\u8D1D","aria-hidden":"true"},"#",-1),O=s(" \u6DF1\u6D45\u62F7\u8D1D "),k=l(`<ul><li>\u6D45\u62F7\u8D1D <ul><li>\u6269\u5C55\u8FD0\u7B97\u7B26</li><li>Object.assign</li><li>Array.prototype.slice</li><li>Array.prototype.concat</li></ul></li><li>\u6DF1\u62F7\u8D1D <ul><li>JSON.parse(JSON.stringify(obj))</li><li>lodash.cloneDeep()</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D45\u62F7\u8D1D\u624B\u5199\u5B9E\u73B0
function shallowCopy(obj) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if(typeof obj !== &#39;object&#39;) return

  // \u6839\u636E obj \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  let newObj = Array.isArray(obj) ? [] : {}

  // \u904D\u5386 obj\uFF0C\u5E76\u4E14\u5224\u65AD\u662F obj \u7684\u5C5E\u6027\u624D\u62F7\u8D1D
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6DF1\u62F7\u8D1D\u624B\u5199\u5B9E\u73B0
function deepCopy(obj) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if(typeof obj !== &#39;object&#39;) return

  // \u6839\u636E obj \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  let newObj = Array.isArray(obj) ? [] : {}

  // \u904D\u5386 obj\uFF0C\u5E76\u4E14\u5224\u65AD\u662F obj \u7684\u5C5E\u6027\u624D\u62F7\u8D1D\u3002\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u65F6\uFF0C\u91C7\u7528\u9012\u5F52\u3002
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === &#39;object&#39; ? deepCopy(obj[key]) : obj[key]
    }
  }

  return newObj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h2><p>JS \u4E2D\u4EFB\u52A1\u961F\u5217\u5206\u4E3A\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u961F\u5217\u3002\u9996\u5148\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u7136\u540E\u6267\u884C\u8BE5\u5B8F\u4EFB\u52A1\u4EA7\u751F\u7684\u5FAE\u4EFB\u52A1\uFF0C\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u518D\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5982\u6B64\u5FAA\u73AF\u5F80\u66FF\uFF0C\u4FBF\u79F0\u4E3A\u4E8B\u4EF6\u5FAA\u73AF\u3002</p><ul><li>\u5B8F\u4EFB\u52A1 <ul><li>script \u6574\u4F53</li><li>setTimeout</li><li>setInterval</li><li>setImmediate (nodeJS)</li><li>requestAnimationFrame (html5)</li></ul></li><li>\u5FAE\u4EFB\u52A1 <ul><li>await</li><li>Promise.then</li><li>process.nextTick (nodeJS)</li><li>MutationObserver (html5)</li></ul></li></ul><h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><p>\u95ED\u5305\u662F\u6307\u51FD\u6570\u5728\u6267\u884C\u65F6\u5BF9\u5176\u5B9A\u4E49\u5904\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u5F15\u7528\u3002</p><p>\u4F5C\u7528</p><ul><li>\u5EF6\u4F38\u53D8\u91CF\u7684\u4F5C\u7528\u8303\u56F4</li><li>\u5728\u51FD\u6570\u5916\u90E8\u80FD\u591F\u8BBF\u95EE\u5230\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF</li></ul><p>\u8868\u73B0\u5F62\u5F0F</p><ul><li>\u8FD4\u56DE\u51FD\u6570</li><li>\u51FD\u6570\u53C2\u6570</li><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F</li></ul><h2 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><p>\u5F53\u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u8FD9\u4E2A\u5BF9\u8C61\u5185\u90E8\u4E0D\u5B58\u5728\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u90A3\u4E48\u5B83\u5C31\u4F1A\u53BB\u5B83\u7684\u539F\u578B\u5BF9\u8C61\u91CC\u627E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u539F\u578B\u5BF9\u8C61\u53C8\u4F1A\u6709\u81EA\u5DF1\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u4E8E\u662F\u5C31\u8FD9\u6837\u4E00\u76F4\u627E\u4E0B\u53BB\uFF0C\u4E5F\u5C31\u662F\u539F\u578B\u94FE\u7684\u6982\u5FF5\u3002</p><h2 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h2><p>\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u5982\u679C\u8FD9\u4E2A\u4F5C\u7528\u57DF\u5185\u90E8\u65E0\u6CD5\u67E5\u5230\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5B83\u5C31\u4F1A\u53BB\u5B83\u7684\u7236\u7EA7\u4F5C\u7528\u57DF\u67E5\u627E\uFF0C\u82E5\u8FD8\u6CA1\u6709\uFF0C\u5219\u4F9D\u6B21\u5411\u4E0A\u7EA7\u4F5C\u7528\u57DF\u67E5\u627E\uFF0C\u76F4\u5230\u8BBF\u95EE\u5230 window \u5BF9\u8C61\u4E3A\u6B62\u3002\u8FD9\u4E00\u5C42\u5C42\u7684\u5173\u7CFB\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002</p><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587</h2><p>\u6267\u884C\u4E0A\u4E0B\u6587\u7C7B\u5206\u7C7B</p><ul><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</li><li>eval \u6267\u884C\u4E0A\u4E0B\u6587</li></ul><p>\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4E09\u4E2A\u91CD\u8981\u5C5E\u6027</p><ul><li>\u53D8\u91CF\u5BF9\u8C61</li><li>\u4F5C\u7528\u57DF\u94FE</li><li>this</li></ul>`,21);function A(S,J){const i=t("Badge");return d(),r("div",null,[u,e("h2",v,[o,b,n(i,{text:"\u91CD\u70B9"})]),m,e("h2",h,[p,x,n(i,{text:"\u91CD\u70B9"})]),g,e("h2",f,[j,_,n(i,{text:"\u91CD\u70B9"})]),y,e("h2",N,[w,O,n(i,{text:"\u91CD\u70B9"})]),k])}var B=a(c,[["render",A],["__file","js.html.vue"]]);export{B as default};
