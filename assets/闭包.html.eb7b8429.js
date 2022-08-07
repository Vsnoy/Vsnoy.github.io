import{_ as d,o as s,c as l,a as n,b as a,d as e,e as v,r}from"./app.10badeee.js";const c={},u=e(`<h1 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h1><h2 id="\u4E60\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898" aria-hidden="true">#</a> \u4E60\u9898</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createIncrement() {
  let count = 0
  function increment() { 
    count++
    console.log(count)
  }

  let message = \`Count is \${count}\`
  function log() {
    console.log(message)
  }
  
  return [increment, log]
}

const [increment, log] = createIncrement()
increment() 
log()

// \u8F93\u51FA
1
2
3
Count is 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E60\u9898\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u7EC4" aria-hidden="true">#</a> \u4E60\u9898\u7EC4</h2><h3 id="\u4E60\u9898\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E60\u9898\u4E00" aria-hidden="true">#</a> \u4E60\u9898\u4E00</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var t = function() {
  var n = 99
  var t2 = function() {
    n++
    console.log(n)
  }
  return t2
}

var a1 = t()
var a2 = t()

a1()
a2()

// \u8F93\u51FA
100 
100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t={id:"\u4E60\u9898\u4E8C",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#\u4E60\u9898\u4E8C","aria-hidden":"true"},"#",-1),b=v(" \u4E60\u9898\u4E8C "),o=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var nAdd
var t = function() {
  var n = 99
  nAdd = function() {
    n++
  }
  var t2 = function() {
    console.log(n)
  }
  return t2
}

var a1 = t()
var a2 = t()

nAdd()

a1()
a2()

// \u8F93\u51FA
99
100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(_,g){const i=r("Badge");return s(),l("div",null,[u,n("h3",t,[m,b,a(i,{text:"hard"})]),o])}var f=d(c,[["render",h],["__file","\u95ED\u5305.html.vue"]]);export{f as default};
