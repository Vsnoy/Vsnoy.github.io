import{_ as a,o as s,c as i,a as e,b as r,d as t,e as o,r as d}from"./app.19e0d641.js";const c={},l=t(`<h1 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h1><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_chain_01.png" alt="prototype_chain_01"></p><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><p>\u4F7F\u7528\u6784\u9020\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person() {}
var person = new Person()
person.name = &#39;Trauma&#39;
console.log(person.name) // Trauma
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>Person</code> \u5C31\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>new</code> \u521B\u5EFA\u4E86\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61 <code>person</code>\u3002</p><h2 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> prototype</h2><p>\u6BCF\u4E2A <strong>\u6784\u9020\u51FD\u6570</strong> \u90FD\u6709\u4E00\u4E2A <code>prototype</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person() {}
Person.prototype.name = &#39;Trauma&#39;

var person1 = new Person()
var person2 = new Person()

console.log(person1.name) // Trauma
console.log(person2.name) // Trauma
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4EC0\u4E48\u662F\u539F\u578B\u5BF9\u8C61\u5462\uFF1F\u4F60\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\uFF1A\u6BCF\u4E00\u4E2A <code>JS</code> \u5BF9\u8C61 ( <code>null</code> \u9664\u5916\uFF09\u5728\u521B\u5EFA\u7684\u65F6\u5019\u5C31\u4F1A\u4E0E\u4E4B\u5173\u8054\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C \u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u4F1A\u4ECE\u539F\u578B\u5BF9\u8C61 <strong>&quot;\u7EE7\u627F&quot;</strong> \u5C5E\u6027\u3002</p><p>\u6784\u9020\u51FD\u6570\u548C\u5B9E\u4F8B\u539F\u578B\u5BF9\u8C61\u4E4B\u95F4\u7684\u5173\u7CFB\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_01.png" alt="prototype_01"></p><h2 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> __proto__</h2><p>\u6BCF\u4E2A <strong>\u5B9E\u4F8B\u5BF9\u8C61</strong> \u90FD\u6709\u4E00\u4E2A <code>__proto__</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person() {}
var person = new Person()
console.log(person.__proto__ === Person.prototype) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0\u4E0B\u5173\u7CFB\u56FE\uFF1A</p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_02.png" alt="prototype_02"></p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h2><p>\u6BCF\u4E2A <strong>\u539F\u578B\u5BF9\u8C61</strong> \u90FD\u6709\u4E00\u4E2A <code>constructor</code> \u5C5E\u6027\u6307\u5411\u5173\u8054\u7684\u6784\u9020\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person() {}
console.log(Person === Person.prototype.constructor) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0\u4E0B\u5173\u7CFB\u56FE\uFF1A</p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_03.png" alt="prototype_03"></p><h2 id="\u5B9E\u4F8B\u4E0E\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u4E0E\u539F\u578B" aria-hidden="true">#</a> \u5B9E\u4F8B\u4E0E\u539F\u578B</h2><p>\u5F53\u8BFB\u53D6\u5B9E\u4F8B\u7684\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u4F1A\u67E5\u627E\u4E0E\u5BF9\u8C61\u5173\u8054\u7684\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u5982\u679C\u8FD8\u67E5\u4E0D\u5230\uFF0C\u5C31\u53BB\u627E\u539F\u578B\u7684\u539F\u578B\uFF0C\u4E00\u76F4\u627E\u5230\u6700\u9876\u5C42\u4E3A\u6B62\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person() {}

Person.prototype.name = &#39;Violet&#39;;

var person = new Person();

person.name = &#39;Trauma&#39;;
console.log(person.name) // Trauma

delete person.name;
console.log(person.name) // Violet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u539F\u578B\u7684\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u7684\u539F\u578B" aria-hidden="true">#</a> \u539F\u578B\u7684\u539F\u578B</h2><p>\u539F\u578B\u5BF9\u8C61\u4E5F\u662F\u5BF9\u8C61\uFF0C\u65E2\u7136\u662F\u5BF9\u8C61\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u6700\u539F\u59CB\u7684\u65B9\u5F0F\u521B\u5EFA\u5B83\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj = new Object();
obj.name = &#39;Trauma&#39;
console.log(obj.name) // Trauma
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0\u4E0B\u5173\u7CFB\u56FE\uFF1A</p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_04.png" alt="prototype_04"></p><h2 id="\u539F\u578B\u94FE-1" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE-1" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><p>\u539F\u578B\u94FE\u672C\u8D28\u4E0A\u5C31\u662F\u67E5\u627E\u5C5E\u6027\u6216\u65B9\u6CD5\u7684\u94FE\u6761\u3002\u5F53\u8BBF\u95EE\u4E00\u4E2A\u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\uFF0C\u89E3\u91CA\u5668\u9996\u5148\u4F1A\u5728\u5F53\u524D\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF0C \u82E5\u6CA1\u627E\u5230\u5219\u4F1A\u5728\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u4E2D\u7EE7\u7EED\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u8BE5\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u6216\u62B5\u8FBE\u6700\u9876\u5C42\u7684\u539F\u578B\u5BF9\u8C61\u4E3A\u6B62\uFF0C\u8FD9\u5C31\u662F\u539F\u578B\u94FE\u3002</p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_05.png" alt="prototype_05"></p><p><img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/prototype_chain_02.jpg" alt="prototype_chain_02"></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,35),p={href:"https://tsejx.github.io/javascript-guidebook/object-oriented-programming/inheritance/prototype-chain/",target:"_blank",rel:"noopener noreferrer"},u=o("\u539F\u578B\u94FE"),m={href:"https://github.com/mqyqingfeng/Blog/blob/master/articles/%E6%B7%B1%E5%85%A5%E7%B3%BB%E5%88%97%E6%96%87%E7%AB%A0/JavaScript%E6%B7%B1%E5%85%A5%E4%B9%8B%E4%BB%8E%E5%8E%9F%E5%9E%8B%E5%88%B0%E5%8E%9F%E5%9E%8B%E9%93%BE.md",target:"_blank",rel:"noopener noreferrer"},v=o("JavaScript \u6DF1\u5165\u4E4B\u4ECE\u539F\u578B\u5230\u539F\u578B\u94FE");function h(b,g){const n=d("ExternalLinkIcon");return s(),i("div",null,[l,e("ul",null,[e("li",null,[e("a",p,[u,r(n)])]),e("li",null,[e("a",m,[v,r(n)])])])])}var x=a(c,[["render",h],["__file","\u539F\u578B\u94FE.html.vue"]]);export{x as default};
