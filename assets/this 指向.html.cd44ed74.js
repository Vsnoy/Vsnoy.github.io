import{_ as s,o as l,c as a,a as i,b as n,d as c,e as d,r as o}from"./app.57b562fb.js";const v={},r=c(`<h1 id="this-\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#this-\u6307\u5411" aria-hidden="true">#</a> this \u6307\u5411</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>this</code> \u6307\u5411\u53D6\u51B3\u4E8E\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\uFF08\u7BAD\u5934\u51FD\u6570\u9664\u5916\uFF0C\u5176\u4F7F\u7528\u7684\u662F\u8BCD\u6CD5\u7ED1\u5B9A\uFF09\u3002</p></div><h2 id="\u7ED1\u5B9A\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u89C4\u5219" aria-hidden="true">#</a> \u7ED1\u5B9A\u89C4\u5219</h2><h3 id="\u9ED8\u8BA4\u7ED1\u5B9A-\u76F4\u63A5\u51FD\u6570\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7ED1\u5B9A-\u76F4\u63A5\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a> \u9ED8\u8BA4\u7ED1\u5B9A\uFF08\u76F4\u63A5\u51FD\u6570\u8C03\u7528\uFF09</h3><p>\u8FD9\u9002\u7528\u4E8E\u6700\u6700\u666E\u901A\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u6CA1\u6709\u5176\u4F59\u89C4\u5219\u63BA\u6742\uFF0C\u4EC5\u4EC5\u9488\u5BF9\u4E8E\u72EC\u7ACB\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
  console.log(this) 
}

foo() //window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6B64\u65F6\u51FD\u6570 <code>foo</code> \u4E2D\u7684 <code>this</code> \u6307\u5411\u7684\u662F <code>window</code> \u3002\u8FD9\u662F\u56E0\u4E3A\u9ED8\u8BA4\u7ED1\u5B9A\u89C4\u5219\u4E0B\uFF0C <code>this</code> \u6307\u5411\u5168\u5C40\u3002\u4F46\u8FD9\u53EA\u662F\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u662F\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C <code>this</code> \u4F1A\u7ED1\u5B9A\u5230 <code>undefined</code> \u3002</p><div class="custom-container tip"><p class="custom-container-title">\u62D3\u5C55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 2

var obj = {
  a: 1,
  foo: function() {
    setTimeout(function() {
      console.log(this.a)  // this \u6307\u5411 window
    }, 1000)
  }
}

obj.foo() // 2 \u4E0D\u662F 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 2

var obj = {
  a: 1,
  foo: function() {
    function setTimeout(fn, delay) { // \u76F8\u5F53\u4E8E fn = callback\uFF0Cfn \u76F8\u5F53\u4E8E callback \u522B\u540D
      // \u76F8\u5F53\u4E8E\u76F4\u63A5\u8C03\u7528 callback()\uFF0C\u975E\u5BF9\u8C61\u8C03\u7528\uFF0C\u5C5E\u7B2C\u4E00\u79CD\u9ED8\u8BA4\u7ED1\u5B9A\uFF0C\u6B64\u65F6 this \u7ED1\u5B9A\u5168\u5C40
      fn()
    }
    
    function callback() {
      console.log(this.a)
    }  
    
    setTimeout(callback, 1000)
  }
}

obj.foo() // 2 \u4E0D\u662F 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u9690\u5F0F\u7ED1\u5B9A-\u5BF9\u8C61\u65B9\u6CD5\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u7ED1\u5B9A-\u5BF9\u8C61\u65B9\u6CD5\u8C03\u7528" aria-hidden="true">#</a> \u9690\u5F0F\u7ED1\u5B9A\uFF08\u5BF9\u8C61\u65B9\u6CD5\u8C03\u7528\uFF09</h3><p>\u5F53\u51FD\u6570\u7684\u8C03\u7528\u4F4D\u7F6E\u6709\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF08\u5373\u901A\u8FC7\u5BF9\u8C61\u65B9\u6CD5\u8C03\u7528\uFF09\u65F6\uFF0Cthis \u6307\u5411\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}

obj.foo() // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5F53\u51FA\u73B0\u591A\u7EA7\u8C03\u7528\u65F6\uFF0Cthis \u7ED1\u5B9A\u7684\u662F\u79BB\u5B83\u6700\u8FD1\u7684\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
  console.log(this.a)
}

var obj1 = {
  a: 1,
  foo: foo
}

var obj2 = {
  a: 2,
  obj1: obj1
}

obj2.obj1.foo() // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u62D3\u5C55</p><h4 id="this-\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#this-\u4E22\u5931" aria-hidden="true">#</a> this \u4E22\u5931</h4><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u9690\u5F0F\u7ED1\u5B9A\u4E0B\uFF0C <code>this</code> \u5BB9\u6613\u4E22\u5931\u7ED1\u5B9A\u7684\u5BF9\u8C61\uFF0C\u5E38\u89C1\u7684\u4E24\u79CD\u60C5\u51B5\u662F <strong>\u5F15\u7528\u8D4B\u503C</strong> \u548C <strong>\u56DE\u8C03\u51FD\u6570</strong>\u3002</p><h5 id="\u5F15\u7528\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u8D4B\u503C" aria-hidden="true">#</a> \u5F15\u7528\u8D4B\u503C</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1

function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}

// obj.foo \u6307\u5411 foo\uFF0C\u56E0\u6B64 bar \u4E5F\u6307\u5411 foo\uFF0C\u5B9E\u9645\u76F8\u5F53\u4E8E bar = foo\uFF0Cbar \u76F8\u5F53\u4E8E foo \u7684\u51FD\u6570\u522B\u540D
// \u76F8\u5F53\u4E8E bar = function foo() { console.log(this.a) }
var bar = obj.foo 

// \u76F8\u5F53\u4E8E\u76F4\u63A5\u8C03\u7528 foo()\uFF0C\u975E\u5BF9\u8C61\u8C03\u7528\uFF0C\u5C5E\u4E8E\u7B2C\u4E00\u79CD\u9ED8\u8BA4\u7ED1\u5B9A\uFF0C\u6B64\u65F6 this \u7ED1\u5B9A\u5168\u5C40
bar() // 1

obj.foo() // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u770B\u8D77\u6765 <code>bar()</code> \u548C <code>obj.foo()</code> \u662F\u4E00\u6837\u7684\uFF0C\u4F46\u5176\u5B9E <code>bar</code> \u5F15\u7528\u7684\u662F <code>foo</code> \u51FD\u6570\u672C\u8EAB\uFF0C\u56E0\u6B64\u6B64\u65F6\u7684 <code>bar()</code> \u5176\u5B9E\u662F\u4E00\u4E2A\u4E0D\u5E26\u4EFB\u4F55\u4FEE\u9970\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u56E0\u6B64\u5E94\u7528\u4E86\u9ED8\u8BA4\u7ED1\u5B9A\u3002</p><h5 id="\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> \u56DE\u8C03\u51FD\u6570</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1 

function foo() {
  console.log(this.a)
}

function doFoo(fn) { // \u76F8\u5F53\u4E8E fn = foo\uFF0Cfn \u76F8\u5F53\u4E8E foo \u522B\u540D
  // \u76F8\u5F53\u4E8E\u76F4\u63A5\u8C03\u7528 foo()\uFF0C\u975E\u5BF9\u8C61\u8C03\u7528\uFF0C\u5C5E\u4E8E\u7B2C\u4E00\u79CD\u9ED8\u8BA4\u7ED1\u5B9A\uFF0C\u6B64\u65F6 this \u7ED1\u5B9A\u5168\u5C40
  fn() // 1
}

var obj = {
  a: 2,
  foo: foo
}

// obj.foo \u6307\u5411 foo\uFF0C\u5219\u76F8\u5F53\u4E8E doFoo(foo)
doFoo( obj.foo ) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E5F\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48 <code>setTimeout</code> \u65B9\u6CD5\u4E2D\u56DE\u8C03\u51FD\u6570\u7684 <code>this</code> \u4F1A\u6307\u5411 <code>window</code> \uFF0C\u56E0\u4E3A\u5176\u8FD0\u884C\u5728\u4E0E\u6240\u5728\u51FD\u6570\u5B8C\u5168\u5206\u79BB\u7684\u6267\u884C\u73AF\u5883\u4E0A\u3002</p></div><h3 id="\u663E\u5F0F\u7ED1\u5B9A-call\u3001apply\u3001bind" tabindex="-1"><a class="header-anchor" href="#\u663E\u5F0F\u7ED1\u5B9A-call\u3001apply\u3001bind" aria-hidden="true">#</a> \u663E\u5F0F\u7ED1\u5B9A\uFF08call\u3001apply\u3001bind\uFF09</h3><p><code>call()</code>\u3001<code>apply()</code> \u548C <code>bind()</code> \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06 <code>this</code> \u5F3A\u5236\u6307\u5411\u5E0C\u671B\u7ED1\u5B9A\u7684\u5BF9\u8C61\u4E0A\u3002</p><p>\u4E09\u8005\u533A\u522B\uFF1A</p><ul><li><code>call</code> \u548C <code>apply</code> \u4F1A\u8C03\u7528\u51FD\u6570\uFF0C<code>bind</code> \u4E0D\u4F1A\u8C03\u7528\u51FD\u6570</li><li><code>call</code> \u3001bind \u4E0E <code>apply</code> \u4F20\u53C2\u65B9\u5F0F\u4E0D\u4E00\u6837\uFF0C<code>call</code> \u6216 <code>bind</code> \u4F20\u53C2\u4F7F\u7528\u9017\u53F7\u9694\u5F00\uFF0C<code>apply</code> \u4F7F\u7528\u6570\u7EC4\u4F20\u9012</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(b) {
  console.log(this.a + b)
}

var obj = {
  a:2
}

foo.call(obj, 1)    // 3
foo.apply(obj, [1])   // 3
foo.bind(obj, 1)()  // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570 <code>foo</code> \u4E2D\u7684 <code>this</code> \u88AB\u5F3A\u5236\u7684\u7ED1\u5B9A\u5230\u4E86 <code>obj</code> \u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u3002</p><h3 id="new-\u7ED1\u5B9A-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#new-\u7ED1\u5B9A-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> new \u7ED1\u5B9A\uFF08\u6784\u9020\u51FD\u6570\uFF09</h3><p>\u5982\u679C\u5728\u4E00\u4E2A\u51FD\u6570\u524D\u9762\u5E26\u4E0A <code>new</code> \u6765\u8C03\u7528\uFF0C\u90A3\u4E48\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u540C\u65F6\u51FD\u6570\u4E2D\u7684 <code>this</code> \u4F1A\u7ED1\u5B9A\u5230\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u4E0A\u3002\u5728 <code>JS</code> \u4E2D\uFF0C\u628A\u8FD9\u4E9B\u4F7F\u7528 <code>new</code> \u64CD\u4F5C\u7B26\u65F6\u88AB\u8C03\u7528\u7684\u51FD\u6570\u79F0\u4E3A\u6784\u9020\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(a) {
  this.a = a
  console.log(this)
}
var bar = new foo(2) // foo {a: 2}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u6B64\uFF0C<code>foo</code> \u4E2D\u7684 <code>this</code> \u5C31\u88AB\u7ED1\u5B9A\u5230\u4E86 <code>bar</code> \u4E0A\u3002</p><h3 id="\u8BCD\u6CD5\u7ED1\u5B9A-\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u7ED1\u5B9A-\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u8BCD\u6CD5\u7ED1\u5B9A\uFF08\u7BAD\u5934\u51FD\u6570\uFF09</h3><p>\u4E0D\u540C\u4E8E\u524D\u9762\u4ECB\u7ECD\u7684\u56DB\u79CD\u7ED1\u5B9A\u89C4\u5219\uFF0C\u7BAD\u5934\u51FD\u6570\u5185\u90E8\u7684 <code>this</code> \u662F\u8BCD\u6CD5\u7ED1\u5B9A\uFF0C\u7531\u6267\u884C\u4E0A\u4E0B\u6587\u786E\u5B9A\uFF0C\u5176 <code>this</code> \u6307\u5411\u5728\u5B9A\u4E49\u65F6\u5C31\u786E\u5B9A\u597D\u4E86\uFF0C\u4E0E\u51FD\u6570\u8C03\u7528\u65E0\u5173\u3002</p><p>\u53EF\u7B80\u5355\u7406\u89E3\u4E3A\uFF1A\u7BAD\u5934\u51FD\u6570\u4E2D\u7684 <code>this</code> \u6307\u5411\u7684\u662F\u5F53\u524D\u6240\u5728\u7236\u7EA7\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 <code>this</code> \u5BF9\u8C61\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6267\u884C\u4E0A\u4E0B\u6587\u53EF\u5206\u4E3A\u4E24\u7C7B\uFF08eval \u51FD\u6570\u5FFD\u7565\uFF09</p><ul><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587<br> \u9047\u5230\u5168\u5C40\u4EE3\u7801\u6267\u884C\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u3002</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587<br> \u9047\u5230\u4E00\u4E2A\u51FD\u6570\u6267\u884C\uFF0C\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u3002</li></ul></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 2

var obj = {
  a: 1,
  foo: function() {
    console.log(this) // this \u6307\u5411 obj
    setTimeout(() =&gt; {
      console.log(this.a) // this \u6307\u5411 obj
    }, 1000)
  }
}

obj.foo() // 1 \u4E0D\u662F 2

-------------------------
\u4EE5\u4E0A\u7B49\u540C\u4E8E\u4E0B\u65B9\u8FD9\u79CD\u5199\u6CD5
-------------------------

var a = 2

var obj = {}
obj.a = 1

obj.foo = function() {
 console.log(this) // this \u6307\u5411 obj
 
 setTimeout(() =&gt; {
  // \u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C\u6545\u6307\u5411\u7236\u7EA7\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 this\uFF0C\u6B64\u5904\u5373 foo \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587
  console.log(this.a) // this \u6307\u5411 obj
 }, 1000)
}

obj.foo() // 1 \u4E0D\u662F 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 2

var obj = {
  a:1,
  foo: () =&gt; {
    console.log(this.a)  // this \u6307\u5411 window
  }
}

obj.foo() // 2 \u4E0D\u662F 1

-------------------------
\u4EE5\u4E0A\u7B49\u540C\u4E8E\u4E0B\u65B9\u8FD9\u79CD\u5199\u6CD5
-------------------------

var a = 2;

obj.a = 1;
obj.foo = () =&gt; {
  // \u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C\u6545\u6307\u5411\u7236\u7EA7\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 this\uFF0C\u6B64\u5904\u5373 window \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587
  console.log(this.a)  // this \u6307\u5411 window
}

obj.foo() // 2 \u4E0D\u662F 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F18\u5148\u7EA7\u4E0E\u5224\u65AD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u4E0E\u5224\u65AD\u65B9\u6CD5" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u4E0E\u5224\u65AD\u65B9\u6CD5</h2><p>\u4ECB\u7ECD\u4E86\u5404\u79CD this \u7ED1\u5B9A\u89C4\u5219\uFF0C\u90A3\u4E48\u5F53\u4E0D\u540C\u7684\u8C03\u7528\u89C4\u5219\u6DF7\u5408\u4F7F\u7528\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5224\u65AD\u4F18\u5148\u7EA7\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F18\u5148\u7EA7\u987A\u5E8F\uFF1A\u8BCD\u6CD5\u7ED1\u5B9A &gt; new \u7ED1\u5B9A &gt; \u663E\u5F0F\u7ED1\u5B9A &gt; \u9690\u5F0F\u7ED1\u5B9A &gt; \u9ED8\u8BA4\u7ED1\u5B9A\u3002</p></div><p>\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u4EE5\u4E0B\u7684\u5224\u65AD\u65B9\u6CD5\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u8BCD\u6CD5\u7ED1\u5B9A\uFF1F\u7ED1\u5B9A\u5230\u7236\u7EA7\u6307\u5411\u4E0A\u4E0B\u6587\u4E2D\u7684 <code>this</code>\u3002</li><li>new \u7ED1\u5B9A\uFF1F\u7ED1\u5B9A\u5230\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u3002</li><li>\u663E\u5F0F\u7ED1\u5B9A\uFF1F\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u5BF9\u8C61\u3002</li><li>\u9690\u5F0F\u7ED1\u5B9A\uFF1F\u7ED1\u5B9A\u5230\u8BE5\u5BF9\u8C61\u3002</li><li>\u9ED8\u8BA4\u7ED1\u5B9A\uFF1F\u7ED1\u5B9A\u5230\u5168\u5C40\u5BF9\u8C61\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\u7ED1\u5B9A\u5230 <code>undefined</code> \u3002</li></ol></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,36),t={href:"https://shuliqi.github.io/2018/07/02/%E5%85%B3%E4%BA%8Ethis%E7%9A%84%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98/",target:"_blank",rel:"noopener noreferrer"},u=d("\u5173\u4E8E this \u7684\u6307\u5411\u95EE\u9898"),b={href:"https://www.clloz.com/programming/front-end/js/2020/06/30/js-this/",target:"_blank",rel:"noopener noreferrer"},m=d("JavaScript \u4E2D\u7684 this \u6307\u5411"),h={href:"https://blackstarxing.github.io/2018-11-01-javascript-this-disabuse.html",target:"_blank",rel:"noopener noreferrer"},p=d("\u89E3\u60D1 JavaScript \u4E2D\u7684 this \u6307\u5411\u95EE\u9898");function f(g,x){const e=o("ExternalLinkIcon");return l(),a("div",null,[r,i("ul",null,[i("li",null,[i("a",t,[u,n(e)])]),i("li",null,[i("a",b,[m,n(e)])]),i("li",null,[i("a",h,[p,n(e)])])])])}var _=s(v,[["render",f],["__file","this \u6307\u5411.html.vue"]]);export{_ as default};
