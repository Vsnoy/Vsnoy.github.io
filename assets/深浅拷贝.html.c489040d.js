import{_ as i,o as l,c as a,a as e,d,e as s,b as r,r as v}from"./app.82c184db.js";const c={},o=s(`<h1 id="\u6DF1\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u6D45\u62F7\u8D1D</h1><h2 id="\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D</h2><h3 id="\u624B\u5199" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199" aria-hidden="true">#</a> \u624B\u5199</h3><p>\u904D\u5386\u5BF9\u8C61\uFF0C\u628A\u5C5E\u6027\u53CA\u5C5E\u6027\u503C\u90FD\u653E\u5728\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function shallowCopy(obj) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if (typeof obj !== &#39;object&#39;) return

  // \u6839\u636E obj \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  let newObj = Array.isArray(obj) ? [] : {}

  // \u904D\u5386 obj\uFF0C\u5E76\u4E14\u5224\u65AD\u662F obj \u7684\u5C5E\u6027\u624D\u62F7\u8D1D
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj1 = { 
  a: 1, 
  b: { 
    val: 2 
  } 
}

let obj2 = {...obj1}

obj1.a = 3
obj1.b.val = 4

console.log(obj1) // { a: 3, { b: { val: 4 } } }
console.log(obj2) // { a: 1, { b: { val: 4 } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj1 = { 
  a: 1, 
  b: { 
    val: 2 
  } 
}

let obj2 = Object.assign({}, obj1)

obj1.a = 3
obj1.b.val = 4

console.log(obj1) // { a: 3, { b: { val: 4 } } }
console.log(obj2) // { a: 1, { b: { val: 4 } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-slice" tabindex="-1"><a class="header-anchor" href="#array-prototype-slice" aria-hidden="true">#</a> Array.prototype.slice</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr1 = [1, { val: 2 }]
let arr2 = arr1.slice()

arr1[0] = 3
arr1[1].val = 4

console.log(arr1) // [3, { val: 4 }]
console.log(arr2) // [1, { val: 4 }]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-concat" tabindex="-1"><a class="header-anchor" href="#array-prototype-concat" aria-hidden="true">#</a> Array.prototype.concat</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr1 = [1, { val: 2 }]
let arr2 = arr1.concat()

arr1[0] = 3
arr1[1].val = 4

console.log(arr1) // [3, { val: 4 }]
console.log(arr2) // [1, { val: 4 }]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h2><h3 id="\u624B\u5199-1" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199-1" aria-hidden="true">#</a> \u624B\u5199</h3><p>\u904D\u5386\u5BF9\u8C61\uFF0C\u628A\u5C5E\u6027\u53CA\u5C5E\u6027\u503C\u653E\u5728\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u5F53\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u65F6\uFF0C\u9012\u5F52\u8C03\u7528\u6DF1\u62F7\u8D1D\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var deepCopy = function(obj) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if (typeof obj !== &#39;object&#39;) return

  // \u6839\u636E obj \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  var newObj = Array.isArray(obj) ? [] : {}

  // \u904D\u5386 obj\uFF0C\u5E76\u4E14\u5224\u65AD\u662F obj \u7684\u5C5E\u6027\u624D\u62F7\u8D1D\u3002\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u65F6\uFF0C\u91C7\u7528\u9012\u5F52\u3002
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === &#39;object&#39; ? deepCopy(obj[key]) : obj[key]
    }
  }
  
  return newObj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8BE5\u65B9\u6CD5\u867D\u5B9E\u73B0\u4E86\u6DF1\u62F7\u8D1D\uFF0C\u4F46\u4E5F\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\u3002</p><ul><li>\u65E0\u6CD5\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528</li><li>\u65E0\u6CD5\u62F7\u8D1D <code>symbol</code> \u548C\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027</li><li>\u65E0\u6CD5\u62F7\u8D1D\u7279\u6B8A\u7C7B\u578B\u7684\u503C\uFF0C\u5982 <code>Date</code> \u3001<code>RegExp</code> \u7B49</li></ul><p>\u66F4\u5B8C\u5584\u7684\u624B\u5199\u65B9\u6CD5\uFF0C\u5F85\u540E\u7EED\u6709\u7A7A\u65F6\u518D\u7814\u7A76\u8865\u4E0A\u3002</p></div><h3 id="json-parse-json-stringify-obj" tabindex="-1"><a class="header-anchor" href="#json-parse-json-stringify-obj" aria-hidden="true">#</a> JSON.parse(JSON.stringify(obj))</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj1 = { 
  a: 1, 
  b: { 
    val: 2 
  } 
}

let obj2 = JSON.parse(JSON.stringify(obj1))

obj1.a = 3
obj1.b.val = 4

console.log(obj1) // { a: 3, { b: { val: 4 } } }
console.log(obj2) // { a: 1, { b: { val: 2 } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8BE5\u65B9\u6CD5\u867D\u7B80\u5355\u7C97\u66B4\uFF0C\u4F46\u4E5F\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\u3002</p><ul><li>\u65E0\u6CD5\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528</li><li>\u65E0\u6CD5\u62F7\u8D1D\u5BF9\u8C61\u7684\u539F\u578B\u94FE</li><li>\u65E0\u6CD5\u62F7\u8D1D\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027</li><li>\u62F7\u8D1D <code>Date</code> \u5F15\u7528\u7C7B\u578B\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32</li><li>\u62F7\u8D1D <code>RegExp</code> \u5F15\u7528\u7C7B\u578B\u4F1A\u53D8\u6210\u7A7A\u5BF9\u8C61</li><li>\u62F7\u8D1D <code>NaN</code> \u3001<code>\xB1Infinity</code> \u4F1A\u53D8\u6210 <code>null</code></li><li>\u62F7\u8D1D <code>undefined</code> \u3001 <code>symbol</code> \u3001 <code>function</code>\u4F1A\u6D88\u5931</li></ul></div><h3 id="lodash-clonedeep" tabindex="-1"><a class="header-anchor" href="#lodash-clonedeep" aria-hidden="true">#</a> lodash.cloneDeep</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj1 = { 
  a: 1, 
  b: { 
    val: 2 
  } 
}

let obj2 = _.cloneDeep(obj1)

obj1.a = 3
obj1.b.val = 4

console.log(obj1) // { a: 3, { b: { val: 4 } } }
console.log(obj2) // { a: 1, { b: { val: 2 } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,24),b={href:"https://github.com/mqyqingfeng/Blog/issues/32",target:"_blank",rel:"noopener noreferrer"},t=r("JavaScript \u4E13\u9898\u4E4B\u6DF1\u6D45\u62F7\u8D1D");function u(m,h){const n=v("ExternalLinkIcon");return l(),a("div",null,[o,e("ul",null,[e("li",null,[e("a",b,[t,d(n)])])])])}var j=i(c,[["render",u],["__file","\u6DF1\u6D45\u62F7\u8D1D.html.vue"]]);export{j as default};
