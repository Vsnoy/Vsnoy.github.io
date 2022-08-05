import{_ as n,o as a,c as d,a as i,b as r,d as e,e as s,r as t}from"./app.19e0d641.js";const c={},u=e(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> Flex</h2><p>flex \u5E03\u5C40\u4F1A\u4F7F\u9879\u76EE\u7684 float\u3001vertical-align\u3001clear \u5C5E\u6027\u5931\u6548\uFF0C\u4E0D\u5305\u62EC\u9879\u76EE\u5185\u7684\u5B50\u5143\u7D20\u3002</p><ul><li>\u5BB9\u5668\u5C5E\u6027 <ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul></li><li>\u9879\u76EE\u5C5E\u6027 <ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>flex \u5C5E\u6027\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- flex \u9ED8\u8BA4\u503C  
  0 1 auto

- flex: 1  
  1 1 0%

- flex: 20%  
  1 1 20%

- flex: auto  
  1 1 auto
  
- flex: none  
  0 0 auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h2><p>Grid \u5E03\u5C40\u4F1A\u4F7F\u9879\u76EE\u7684 float\u3001vertical-align\u3001display: inline-block \u7B49\u5C5E\u6027\u5931\u6548\u3002\u4E0D\u5305\u62EC\u9879\u76EE\u5185\u7684\u5B50\u5143\u7D20\u3002</p><ul><li>\u5BB9\u5668\u5C5E\u6027 <ul><li>grid-template-rows\u3001grid-template-columns\u3001grid-template-areas</li><li>grid-template</li><li>grid-auto-rows\u3001grid-auto-columns</li><li>grid-auto-flow</li><li>grid-row-gap\u3001grid-column-gap</li><li>grid-gap</li><li>grid</li><li>justify-content\u3001align-content</li><li>place-content</li><li>justify-items\u3001align-items</li><li>place-items</li></ul></li><li>\u9879\u76EE\u5C5E\u6027 <ul><li>grid-row-start\u3001grid-row-end\u3001grid-column-start\u3001grid-column-end</li><li>grid-row\u3001grid-column</li><li>grid-area</li><li>justify-self\u3001align-self</li><li>place-self</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6700\u5E38\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grid-template-rows / grid-template-columns / grid-template-areas
grid-gap
grid-row / grid-column
grid-area
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>none\u3001inline\u3001block\u3001inline-block\u3001table\u3001flex\u3001grid\u3001inherit \u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static\u3001relative\u3001absolute\u3001fixed\u3001sticky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="border-radius" tabindex="-1"><a class="header-anchor" href="#border-radius" aria-hidden="true">#</a> border-radius</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*\u503C\u7684\u7701\u7565\u3002\u82E5\u4F7F\u7528\u767E\u5206\u6BD4\uFF0C\u76F8\u5BF9\u7684\u5219\u662F\u5305\u542B\u5757\u7684\u5BBD\u9AD8\u3002*/
border-radius: 10px 20px 30px 40px;  // \u56DB\u4E2A\u503C\uFF1A \u5DE6\u4E0A\u3001\u53F3\u4E0A\u3001\u53F3\u4E0B\u3001\u5DE6\u4E0B
border-radius: 10px 20px 30px;  // \u4E09\u4E2A\u503C\uFF1A\u5DE6\u4E0A\u3001\u53F3\u4E0A/\u5DE6\u4E0B\u3001\u53F3\u4E0B
border-radius: 10px 20px;  // \u4E24\u4E2A\u503C\uFF1A\u5DE6\u4E0A/\u53F3\u4E0B\u3001\u53F3\u4E0A/\u5DE6\u4E0B
border-radius: 10px;  // \u4E00\u4E2A\u503C\uFF1A\u5DE6\u4E0A/\u53F3\u4E0A/\u53F3\u4E0B/\u5DE6\u4E0B

-------------------------------------------

/*\u503C\u7684\u62C6\u5206 1.0*/
border-radius: 10px 20px 30px 40px;

border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;

-------------------------------------------

/*\u503C\u7684\u62C6\u5206 2.0\uFF0C\u5706\u89D2\u6C34\u5E73\u534A\u5F84\u548C\u5782\u76F4\u534A\u5F84*/
border-radius: 10px 20px 30px 40px / 50px 60px 70px 80px;

border-top-left-radius: 10px 50px;
border-top-right-radius: 20px 60px;
border-bottom-right-radius: 30px 70px;
border-bottom-left-radius: 40px 80px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>transform: translate | scale | rotate | skew | matrix

transform: translate(10px, 10px)  // \u4F4D\u79FB
transform: scale(2, 3)  // \u7F29\u653E
transform: rotate(10deg)  // \u65CB\u8F6C
transform: skew(10deg, 10deg)  // \u503E\u659C
transform: matrix()  // \u5F85\u7814\u7A76
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>transition: transition-property, transition-duration,      // \u5E38\u7528
            transition-timing-function, transition-delay   // \u4E0D\u5E38\u7528
            
transition-timing-function \u8FC7\u6E21\u51FD\u6570
ease: \u5148\u52A0\u901F\uFF0C\u540E\u51CF\u901F\uFF08\u52A0\u901F\u65F6\u95F4\u77ED\uFF09
linear: \u6052\u901F
ease-in: \u52A0\u901F
ease-out: \u51CF\u901F
ease-in-out: \u5148\u52A0\u901F\u540E\u51CF\u901F

---------------------------

\u4E3E\u4E2A\u6817\u5B50
.violet{
  width: 200px;
  height: 100px;
  background-color: pink;
  transition: width 1s;
}

.violet:hover{
  width: 100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> animation</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>animation: animation-name, animation-duration,              // \u5E38\u7528
           animation-timing-function, animation-delay,      // \u4E0D\u5E38\u7528
           animation-iteration-count, animation-direction   // \u5E38\u7528
           
-----------------------------

\u4E3E\u4E2A\u6817\u5B50
@keyframes rainbow {
  0% { background: green; }
  50% { background: orange; }
  100% { background: red; }
}

.violet:hover {
  animation: rainbow 2s infinite reverse;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>transition \u548C animation \u5C5E\u6027\u533A\u522B</p><ul><li>transition \u662F\u8FC7\u6E21\u5C5E\u6027\u3002\u9700\u8981\u89E6\u53D1\uFF0C\u5E76\u4E14\u53EA\u6709\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u5173\u952E\u4E24\u796F</li><li>animation \u662F\u52A8\u753B\u5C5E\u6027\u3002\u4E0D\u9700\u8981\u89E6\u53D1\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u597D\u65F6\u95F4\u81EA\u52A8\u5F00\u59CB\uFF0C\u5E76\u53EF\u4EE5\u5B9A\u4E49\u591A\u5E27\u52A8\u753B</li></ul></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><ul><li>\u65E0\u7EE7\u627F\u6027\u7684\u5C5E\u6027 <ul><li>display</li><li>\u6587\u672C\u5C5E\u6027<br> text-shadow\u3001text-decoration \u7B49</li><li>\u80CC\u666F\u5C5E\u6027<br> background\u3001background-color\u3001background-image\u3001background-position\u3001background-repeat\u3001background-attachment</li><li>\u5B9A\u4F4D\u5C5E\u6027<br> float\u3001position\u3001top\u3001right\u3001bottom\u3001left\u3001overflow\u3001z-index \u7B49</li><li>\u76D2\u5B50\u6A21\u578B\u5C5E\u6027<br> width\u3001height\u3001margin\u3001border\u3001padding</li><li>\u7B49\u7B49</li></ul></li><li>\u6709\u7EE7\u627F\u6027\u7684\u5C5E\u6027 <ul><li>visibility</li><li>\u6587\u672C\u5C5E\u6027<br> text-align\u3001text-indent\u3001text-transform\u3001line-height\u3001color \u7B49</li><li>\u5B57\u4F53\u5C5E\u6027<br> font-size\u3001font-weight\u3001font-style\u3001font-family</li><li>\u7B49\u7B49</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>text-\uFF0Cfont-\uFF0Cline-\u4EE5\u53CA color \u5C5E\u6027\u5927\u591A\u53EF\u4EE5\u88AB\u7EE7\u627F<br> \u6587\u672C\u3001\u5B57\u4F53\u3001\u884C\u9AD8\u3001\u6587\u5B57\u989C\u8272\u5927\u591A\u53EF\u4EE5\u88AB\u7EE7\u627F</p></div><h2 id="\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4F18\u5148\u7EA7</h2><p>!important &gt; \u884C\u5185 &gt; \u5185\u90E8 &gt; \u5916\u90E8 &gt; id &gt; \u7C7B | \u4F2A\u7C7B | \u5C5E\u6027 &gt; \u6807\u7B7E | \u4F2A\u5143\u7D20 &gt; \u901A\u914D\u7B26 &gt; \u7EE7\u627F &gt; \u6D4F\u89C8\u5668\u9ED8\u8BA4</p><h2 id="\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D" aria-hidden="true">#</a> \u5C45\u4E2D</h2><h3 id="\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5C45\u4E2D</h3><ul><li>\u5757\u7EA7\u5143\u7D20 <ul><li>margin: 0 auto</li><li>\u7EDD\u5BF9\u5B9A\u4F4D <ul><li>\u7EDD\u5BF9\u5B9A\u4F4D + calc</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u8D1F margin</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform</li></ul></li><li>flex</li><li>grid</li></ul></li><li>\u884C\u5185\u5143\u7D20 <ul><li>text-align: center</li></ul></li></ul><h3 id="\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u5C45\u4E2D</h3><ul><li>\u5757\u7EA7\u5143\u7D20 <ul><li>\u7EDD\u5BF9\u5B9A\u4F4D <ul><li>\u7EDD\u5BF9\u5B9A\u4F4D + calc</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u8D1F margin</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform</li></ul></li><li>flex</li><li>grid</li></ul></li><li>\u884C\u5185\u5143\u7D20 <ul><li>line-height<br> \u5B50\u5143\u7D20\u884C\u9AD8\u7B49\u4E8E\u7236\u5143\u7D20\u5BBD\u5EA6\u3002\u4EC5\u5BF9\u5355\u884C\u6587\u672C\u6709\u6548\u3002</li></ul></li></ul>`,33),o={id:"\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D",tabindex:"-1"},v=i("a",{class:"header-anchor",href:"#\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D","aria-hidden":"true"},"#",-1),m=s(" \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D "),h=e(`<ul><li>\u7EDD\u5BF9\u5B9A\u4F4D <ul><li>\u7EDD\u5BF9\u5B9A\u4F4D + calc</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u8D1F margin</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u4E0A\u4E0B\u5DE6\u53F3 0 + margin: auto</li></ul></li><li>flex</li><li>grid</li></ul><h2 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h2><h3 id="\u4E24\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E24\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E24\u680F\u5E03\u5C40</h3><ul><li>\u6D6E\u52A8 <ul><li>float + calc</li><li><strong>float + margin</strong></li><li><strong>float + BFC</strong></li></ul></li><li>\u5B9A\u4F4D <ul><li>\u7EDD\u5BF9\u5B9A\u4F4D + margin</li></ul></li><li>inline-block + calc</li><li><strong>flex</strong></li><li><strong>grid</strong></li></ul><h3 id="\u4E09\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E09\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E09\u680F\u5E03\u5C40</h3><ul><li>\u4E24\u5217\u5B9A\u5BBD\u4E00\u5217\u81EA\u9002\u5E94<br> \u5F85\u6574\u7406~</li><li>\u4E24\u4FA7\u5B9A\u5BBD\u4E2D\u95F4\u81EA\u9002\u5E94 <ul><li>\u5723\u676F\u5E03\u5C40</li><li>\u53CC\u98DE\u7FFC\u5E03\u5C40</li><li>\u6D6E\u52A8 <ul><li>float + calc</li><li><strong>float + margin</strong></li><li><strong>float + BFC</strong></li></ul></li><li>\u5B9A\u4F4D</li><li><strong>flex</strong></li><li><strong>grid</strong></li></ul></li></ul><h2 id="\u7ED8\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u56FE" aria-hidden="true">#</a> \u7ED8\u56FE</h2><h3 id="\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u4E09\u89D2\u5F62</h3><h4 id="\u5E38\u89C4\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u5E38\u89C4\u4E09\u89D2\u5F62</h4><p>\u9700\u8981\u54EA\u4E2A\u4E09\u89D2\u5F62\u5C31\u7ED9\u5B83\u989C\u8272\uFF0C\u5176\u4F59\u4E09\u8FB9\u900F\u660E\u3002<br> \u4EE5\u5411\u4E0B\u7684\u4E09\u89D2\u5F62\u4E3A\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div{
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top: 20px solid red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u76F4\u89D2\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u76F4\u89D2\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u76F4\u89D2\u4E09\u89D2\u5F62</h4><p>\u8981\u76F4\u89D2\u4E09\u89D2\u5F62\uFF0C\u5219\u53EA\u80FD\u8BBE\u7F6E\u4E24\u6761\u8FB9\uFF0C\u4E0A\u4E0B\u548C\u5DE6\u53F3\u6DF7\u642D\uFF0C\u4E00\u6761\u7ED9\u989C\u8272\uFF0C\u4E00\u6761\u900F\u660E\u3002<br> \u4EE5\u9760\u5DE6\u5411\u4E0B\u7684\u76F4\u89D2\u4E09\u89D2\u5F62\u4E3A\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div{
    width: 0;
    height: 0;
    border-right: 20px solid transparent;
    border-top: 20px solid red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6247\u5F62" tabindex="-1"><a class="header-anchor" href="#\u6247\u5F62" aria-hidden="true">#</a> \u6247\u5F62</h3><p>\u5728\u753B\u5E38\u89C4\u4E09\u89D2\u5F62\u7684\u57FA\u7840\u4E0A\u52A0\u4E0A border-radius\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div{
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top: 20px solid red;
    border-radius: 50%;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-5px-\u7EBF" tabindex="-1"><a class="header-anchor" href="#_0-5px-\u7EBF" aria-hidden="true">#</a> 0.5px \u7EBF</h3><ul><li><p>scale</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>transform: scale(0.5);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>meta<br> \u6B64\u65B9\u6CD5\u53EA\u9488\u5BF9\u4E8E\u79FB\u52A8\u7AEF\uFF0C\u53EA\u5728\u79FB\u52A8\u7AEF\u4E0A\u624D\u80FD\u770B\u5230\u6548\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8</h2><ul><li><p>\u989D\u5916\u6807\u7B7E\u6CD5</p><ul><li><p>\u6D6E\u52A8\u5143\u7D20\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u6807\u7B7E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div style=&quot;clear:both&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6D6E\u52A8\u5143\u7D20\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A br \u6807\u7B7E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;br clear=&quot;all&quot;&gt;&lt;/br&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u7236\u5143\u7D20 BFC \u6CD5</p><ul><li><p>\u7236\u5143\u7D20\u6DFB\u52A0\u6D6E\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u4EE5\u7ED9\u6D6E\u52A8\u5143\u7D20\u7684\u7236\u7EA7\u6DFB\u52A0\u5C5E\u6027 float: left | right;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7236\u5143\u7D20\u8BBE\u7F6E overflow</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u4EE5\u7ED9\u6D6E\u52A8\u5143\u7D20\u7684\u7236\u7EA7\u6DFB\u52A0\u5C5E\u6027 overflow: auto | hidden;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u7236\u5143\u7D20\u4F2A\u5143\u7D20\u6CD5</p><ul><li><p>after \u5355\u4F2A\u5143\u7D20\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.clearfix::after{
  content: &quot;.&quot;;
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>before\u3001after \u53CC\u4F2A\u5143\u7D20\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.clearfix::before,.clearfix::after { 
    content: &quot;&quot;;
    display: table; 
}

.clearfix::after {
    clear: both;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u9690\u85CF\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u5143\u7D20" aria-hidden="true">#</a> \u9690\u85CF\u5143\u7D20</h2><ul><li>display: none<br> \u4E0D\u5360\u4F4D\u7F6E</li><li>visibility: hidden<br> \u5360\u4F4D\u7F6E</li><li>opacity: 0<br> \u5360\u4F4D\u7F6E</li><li>transform: scale(0)<br> \u5360\u4F4D\u7F6E</li><li>clip/clip-path<br> \u5360\u4F4D\u7F6E</li><li>H5 hidden \u5C5E\u6027<br> \u4E0D\u5360\u4F4D\u7F6E</li><li>position: absolute<br> \u7EDD\u5BF9\u5B9A\u4F4D\u79FB\u51FA\u53EF\u89C6\u533A\u57DF</li><li>z-index \u8D1F\u503C<br> \u5176\u4ED6\u5143\u7D20\u8986\u76D6\u4F4F\u8BE5\u5143\u7D20</li></ul><h2 id="\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u5C42\u53E0\u4E0A\u4E0B\u6587</h2><p>\u5C42\u53E0\u4E0A\u4E0B\u6587\u662F\u7528\u6765\u63CF\u8FF0\u9875\u9762\u4E2D\u5143\u7D20\u5728\u5782\u76F4\u4E8E\u5C4F\u5E55\u65B9\u5411\u6392\u5217\u89C4\u5219\u800C\u521B\u5EFA\u51FA\u7684\u6A21\u578B\u3002<br> \u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u91CD\u53E0\u7684\u5143\u7D20\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u5728\u5782\u76F4\u65B9\u5411\u6392\u5217\u3002</p><h3 id="\u4EA7\u751F\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4EA7\u751F\u6761\u4EF6" aria-hidden="true">#</a> \u4EA7\u751F\u6761\u4EF6</h3><ul><li>\u6839\u5143\u7D20 \uFF08html \u5143\u7D20\uFF09</li><li>\u5B9A\u4F4D\u5143\u7D20 <ul><li>relative\u3001absolute\uFF08z-index \u4E0D\u4E3A auto\uFF09</li><li>fixed\u3001sticky</li></ul></li><li>CSS3 \u5C5E\u6027 <ul><li>opacity \u5C5E\u6027\u503C\u5C0F\u4E8E 1</li><li>flex \u5BB9\u5668\u7684\u5B50\u5143\u7D20\uFF08z-index \u4E0D\u4E3A auto\uFF09</li><li>grid \u5BB9\u5668\u7684\u5B50\u5143\u7D20\uFF08z-index \u4E0D\u4E3A auto\uFF09</li><li>transform\u3001filter\u3001perspective\u3001clip-path\u3001 mask\u3001mask-image\u3001mask-border \u5C5E\u6027\u503C\u4E0D\u4E3A none</li><li>\u7B49\u7B49</li></ul></li></ul><h3 id="\u5C42\u53E0\u6C34\u5E73" tabindex="-1"><a class="header-anchor" href="#\u5C42\u53E0\u6C34\u5E73" aria-hidden="true">#</a> \u5C42\u53E0\u6C34\u5E73</h3><p>\u51B3\u5B9A\u4E86\u5728\u540C\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5143\u7D20\u5728 z \u8F74\u4E0A\u7684\u663E\u793A\u987A\u5E8F</p><h3 id="\u5C42\u53E0\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5C42\u53E0\u987A\u5E8F" aria-hidden="true">#</a> \u5C42\u53E0\u987A\u5E8F</h3><p>\u5728\u540C\u4E00\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5C42\u53E0\u987A\u5E8F\u81EA\u4E0B\u800C\u4E0A\u4F9D\u6B21\u662F\uFF1A\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u6839\u3001z-index \u4E3A\u8D1F\u3001block\u3001float\u3001inline/inline-block\u3001z-index \u4E3A 0 \u6216 auto\u3001z-index \u4E3A\u6B63\u3002 <img src="https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/stacking_context.png" alt="stacking_context"></p><h3 id="\u5C42\u53E0\u51C6\u5219" tabindex="-1"><a class="header-anchor" href="#\u5C42\u53E0\u51C6\u5219" aria-hidden="true">#</a> \u5C42\u53E0\u51C6\u5219</h3><ul><li>\u540C\u4E00\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u7684\u5143\u7D20\uFF0C\u6309\u7167\u5C42\u53E0\u987A\u5E8F\u6392\u5217</li><li>\u4E0D\u540C\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u7684\u5143\u7D20\uFF0C\u6309\u5C42\u53E0\u6C34\u5E73\u8FDB\u884C\u6574\u4F53\u6392\u5217</li><li>\u5C42\u53E0\u6C34\u5E73\u4E0E\u5C42\u53E0\u987A\u5E8F\u90FD\u76F8\u540C\uFF0C\u5728 DOM \u6D41\u4E2D\u5904\u4E8E\u540E\u9762\u7684\u5143\u7D20\u4F1A\u8986\u76D6\u524D\u9762\u7684\u5143\u7D20</li></ul><h2 id="\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587</h2><p>BFC\uFF0C\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u662F CSS \u4E2D\u4E00\u79CD\u72EC\u7279\u7684\u6E32\u67D3\u673A\u5236\u3002</p><p>\u53EF\u5C06\u5176\u7406\u89E3\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BB9\u5668\uFF0C\u89C4\u5B9A\u4E86\u5185\u90E8\u5143\u7D20\u5982\u4F55\u5E03\u5C40\uFF0C\u5E76\u4E14\u5BB9\u5668\u5185\u90E8\u5143\u7D20\u4E0E\u5916\u90E8\u5143\u7D20\u4E4B\u95F4\u4E92\u4E0D\u5F71\u54CD\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u5B83\u662F\u4E00\u5757\u72EC\u7ACB\u7684\u533A\u57DF\uFF0C\u8BA9\u5904\u4E8E BFC \u5185\u90E8\u7684\u5143\u7D20\u4E0E\u5916\u90E8\u7684\u5143\u7D20\u4E92\u76F8\u9694\u79BB\u3002</p><h3 id="\u4EA7\u751F\u6761\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#\u4EA7\u751F\u6761\u4EF6-1" aria-hidden="true">#</a> \u4EA7\u751F\u6761\u4EF6</h3><ul><li>\u6839\u5143\u7D20\uFF08html \u5143\u7D20\uFF09</li><li>\u6D6E\u52A8\u5143\u7D20\uFF08float \u4E0D\u4E3A none\uFF09</li><li>\u5B9A\u4F4D\u5143\u7D20\uFF08position \u4E3A absolute \u6216 fixed\uFF09</li><li>display\uFF08inline-block\u3001table\uFF09</li><li>overflow \u4E0D\u4E3A visible</li><li>flex \u5BB9\u5668\u7684\u5B50\u5143\u7D20</li><li>grid \u5BB9\u5668\u7684\u5B50\u5143\u7D20</li><li>\u7B49\u7B49</li></ul><h3 id="\u6E32\u67D3\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u89C4\u5219" aria-hidden="true">#</a> \u6E32\u67D3\u89C4\u5219</h3><ul><li>BFC \u5143\u7D20\u5185\u90E8\u7684\u6D6E\u52A8\u5143\u7D20\u4F1A\u53C2\u4E0E\u9AD8\u5EA6\u8BA1\u7B97\uFF08\u53EF\u7528\u4E8E\u6E05\u9664\u6D6E\u52A8\uFF09</li><li>BFC \u5143\u7D20\u5185\u90E8\u7684\u7236\u5B50\u6216\u5144\u5F1F\u5143\u7D20\u5782\u76F4\u65B9\u5411\u4E0A\u4F1A\u4EA7\u751F margin \u5408\u5E76\uFF08\u53EF\u7528\u4E8E\u9632\u6B62 margin \u584C\u9677\u4E0E\u5408\u5E76\uFF09</li><li>BFC \u5143\u7D20\u4E0D\u4F1A\u548C\u6D6E\u52A8\u5143\u7D20\u91CD\u53E0\uFF08\u53EF\u7528\u4E8E\u4E24\u680F\u5E03\u5C40\uFF09</li><li>BFC \u5143\u7D20\u5185\u90E8\u5143\u7D20\u4E0E\u5916\u90E8\u5143\u7D20\u76F8\u4E92\u9694\u79BB\uFF0C\u4E92\u4E0D\u5F71\u54CD</li></ul><h3 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h3><ul><li>\u6E05\u9664\u6D6E\u52A8</li><li>\u9632\u6B62 margin \u584C\u9677\u548C\u5408\u5E76</li><li>\u9632\u6B62\u5143\u7D20\u88AB\u6D6E\u52A8\u5143\u7D20\u8986\u76D6\uFF08\u4E24\u680F\u5E03\u5C40\uFF09</li></ul><h2 id="\u96EA\u78A7\u56FE" tabindex="-1"><a class="header-anchor" href="#\u96EA\u78A7\u56FE" aria-hidden="true">#</a> \u96EA\u78A7\u56FE</h2><p>\u5C06\u4E00\u4E2A\u9875\u9762\u6D89\u53CA\u5230\u7684\u6240\u6709\u56FE\u7247\u90FD\u5305\u542B\u5230\u4E00\u5F20\u5927\u56FE\u4E2D\u53BB\uFF0C\u7136\u540E\u5229\u7528 CSS \u7684 background-image\u3001background-repeat\u3001background-position \u7EC4\u5408\u8FDB\u884C\u80CC\u666F\u5B9A\u4F4D\u3002</p><p>\u4F18\u70B9\uFF1A</p><ul><li>\u51CF\u5C11 HTTP \u8BF7\u6C42\u6570\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6</li><li>\u589E\u52A0\u56FE\u7247\u4FE1\u606F\u91CD\u590D\u5EA6\uFF0C\u63D0\u9AD8\u538B\u7F29\u6BD4\uFF0C\u51CF\u5C11\u56FE\u7247\u5927\u5C0F</li><li>\u66F4\u6362\u98CE\u683C\u65B9\u4FBF\uFF0C\u53EA\u9700\u5728\u4E00\u5F20\u6216\u51E0\u5F20\u56FE\u7247\u4E0A\u4FEE\u6539\u989C\u8272\u6216\u6837\u5F0F\u5373\u53EF\u5B9E\u73B0</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u56FE\u7247\u5408\u5E76\u9EBB\u70E6</li><li>\u7EF4\u62A4\u9EBB\u70E6\uFF0C\u4FEE\u6539\u4E00\u4E2A\u56FE\u7247\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u5E03\u5C40\u6574\u4E2A\u56FE\u7247\uFF0C\u6837\u5F0F</li></ul><h2 id="\u6587\u672C\u6EA2\u51FA\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6EA2\u51FA\u9690\u85CF" aria-hidden="true">#</a> \u6587\u672C\u6EA2\u51FA\u9690\u85CF</h2><h3 id="\u5355\u884C\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u6587\u672C" aria-hidden="true">#</a> \u5355\u884C\u6587\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.textflow {
  overflow: hidden; 
  white-space: nowrap; // \u6587\u672C\u4E0D\u6362\u884C
  text-overflow: ellipsis; // \u6587\u672C\u8D85\u51FA\u5448\u73B0\u7701\u7565\u53F7
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u884C\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.textflow {
  overflow: hidden;
  display: -webkit-box; // \u76D2\u6A21\u578B
  -webkit-line-clamp: 4; // \u63A7\u5236\u6587\u672C\u884C\u6570
  -webkit-box-orient: vertical; // \u5782\u76F4\u5E03\u7F6E\u5B50\u5143\u7D20
}

PS: \u8BE5\u65B9\u6CD5\u4E0D\u517C\u5BB9 IE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="margin-\u584C\u9677\u4E0E\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#margin-\u584C\u9677\u4E0E\u5408\u5E76" aria-hidden="true">#</a> margin \u584C\u9677\u4E0E\u5408\u5E76</h2><p>\u53EA\u6709\u5782\u76F4\u65B9\u5411\u4E0A\u624D\u4F1A\u51FA\u73B0 margin \u584C\u9677\u6216\u5408\u5E76\uFF0C\u6C34\u5E73\u65B9\u5411\u4E0A\u4E0D\u4F1A\u51FA\u73B0\u3002</p><h3 id="margin-\u584C\u9677" tabindex="-1"><a class="header-anchor" href="#margin-\u584C\u9677" aria-hidden="true">#</a> margin \u584C\u9677</h3><p>\u7236\u5B50\u5143\u7D20\u5D4C\u5957\u3002\u5916\u5C42\u6574\u4F53\u76D2\u6A21\u578B\u7684 margin-top \u53D6\u4E24\u8005\u4E2D margin-top \u8F83\u5927\u7684\u503C\u3002</p><p>\u89E3\u51B3\u65B9\u6848</p><ul><li>\u7236\u5143\u7D20\u8BBE\u7F6E\u8FB9\u6846</li><li>\u7236\u5143\u7D20\u5305\u88F9\u5728 BFC \u4E2D</li></ul><h3 id="margin-\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#margin-\u5408\u5E76" aria-hidden="true">#</a> margin \u5408\u5E76</h3><p>\u5144\u5F1F\u5143\u7D20\u5782\u76F4\u6392\u5217\u3002\u4E24\u8005\u76F8\u9694\u7684 margin \u53D6\u7684\u662F\u4E24\u8005\u6240\u8BBE\u7F6E margin \u7684\u6700\u5927\u503C\u3002</p><p>\u89E3\u51B3\u65B9\u6848</p><ul><li>\u5176\u4E2D\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20\u5305\u88F9\u5728 BFC \u4E2D</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5782\u76F4\u65B9\u5411\u5916\u8FB9\u8DDD\u5408\u5E76\u8BA1\u7B97</p><ul><li>\u4E24\u4E2A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\u90FD\u662F <strong>\u6B63\u6570</strong> \u65F6\uFF0C\u6298\u53E0\u5916\u8FB9\u8DDD\u662F\u4E24\u8005\u4E2D\u8F83\u5927\u7684\u503C\u3002</li><li>\u4E24\u4E2A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\u90FD\u662F <strong>\u8D1F\u6570</strong> \u65F6\uFF0C\u6298\u53E0\u5916\u8FB9\u8DDD\u662F\u4E24\u8005\u4E2D\u7EDD\u5BF9\u503C\u8F83\u5927\u7684\u503C\u3002</li><li>\u4E24\u4E2A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\u662F <strong>\u4E00\u6B63\u4E00\u8D1F</strong> \u65F6\uFF0C\u6298\u53E0\u5916\u8FB9\u8DDD\u662F\u4E24\u8005\u76F8\u52A0\u7684\u548C\u3002</li></ul></div><h2 id="rem-\u548C-em-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#rem-\u548C-em-\u533A\u522B" aria-hidden="true">#</a> rem \u548C em \u533A\u522B</h2><p>rem \u76F8\u5BF9\u4E8E\u6839\u5143\u7D20\u7684\u5B57\u53F7\u3002<br> em \u76F8\u5BF9\u4E8E\u5F53\u524D\u5143\u7D20\u7684\u5B57\u53F7\u30021em \u7B49\u4E8E\u5F53\u524D\u5143\u7D20\u5B57\u53F7\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;style&gt;
 div{
  font-size: 16px;
 }
 
 p{
  font-size: 1.2em;  // 1.2 * 16 = 19.2px
  padding: 1.2em;  // 1.2 * 19.2 = 23.04px
 }
&lt;/style&gt;

&lt;div&gt;
 &lt;p&gt;Violet \u5929\u4E0B\u7B2C\u4E00&lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7269\u7406\u548C\u903B\u8F91\u50CF\u7D20" tabindex="-1"><a class="header-anchor" href="#\u7269\u7406\u548C\u903B\u8F91\u50CF\u7D20" aria-hidden="true">#</a> \u7269\u7406\u548C\u903B\u8F91\u50CF\u7D20</h2><p>\u4EE5 iPhone XS \u4E3A\u4F8B\uFF0C\u5F53\u5199 CSS \u4EE3\u7801\u65F6\uFF0C\u9488\u5BF9\u4E8E\u5355\u4F4D px\uFF0C\u5176\u5BBD\u5EA6\u4E3A 414px&amp;896px\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u8D4B\u4E88\u4E00\u4E2A DIV \u5143\u7D20\u5BBD\u5EA6\u4E3A 414px\uFF0C\u8FD9\u4E2A DIV \u5C31\u4F1A\u586B\u6EE1\u624B\u673A\u7684\u5BBD\u5EA6\u3002</p><p>\u800C\u5982\u679C\u6709\u4E00\u628A\u5C3A\u5B50\u6765\u5B9E\u9645\u6D4B\u91CF\u8FD9\u90E8\u624B\u673A\u7684\u7269\u7406\u50CF\u7D20\uFF0C\u5B9E\u9645\u4E3A 1242*2688 \u7269\u7406\u50CF\u7D20\uFF1B\u7ECF\u8FC7\u8BA1\u7B97\u53EF\u77E5\uFF0C1242/414=3\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u5355\u8FB9\u4E0A\uFF0C\u4E00\u4E2A\u903B\u8F91\u50CF\u7D20=3 \u4E2A\u7269\u7406\u50CF\u7D20\uFF0C\u5C31\u8BF4\u8FD9\u4E2A\u5C4F\u5E55\u7684\u50CF\u7D20\u5BC6\u5EA6\u4E3A 3\uFF0C\u4E5F\u5C31\u662F\u5E38\u8BF4\u7684 3 \u500D\u5C4F\u3002</p><p>\u5BF9\u4E8E\u56FE\u7247\u6765\u8BF4\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u5176\u4E0D\u5931\u771F\uFF0C1 \u4E2A\u56FE\u7247\u50CF\u7D20\u81F3\u5C11\u8981\u5BF9\u5E94\u4E00\u4E2A\u7269\u7406\u50CF\u7D20\uFF0C\u5047\u5982\u539F\u59CB\u56FE\u7247\u662F 500300 \u50CF\u7D20\uFF0C\u90A3\u4E48\u5728 3 \u500D\u5C4F\u4E0A\u5C31\u8981\u653E\u4E00\u4E2A 1500900 \u50CF\u7D20\u7684\u56FE\u7247\u624D\u80FD\u4FDD\u8BC1 1 \u4E2A\u7269\u7406\u50CF\u7D20\u81F3\u5C11\u5BF9\u5E94\u4E00\u4E2A\u56FE\u7247\u50CF\u7D20\uFF0C\u624D\u80FD\u4E0D\u5931\u771F\u3002</p><h2 id="\u54CD\u5E94\u5F0F\u5E03\u5C40\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u5E03\u5C40\u65B9\u6848" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u5E03\u5C40\u65B9\u6848</h2><ul><li>\u5A92\u4F53\u67E5\u8BE2</li><li>\u767E\u5206\u6BD4\u5E03\u5C40</li><li>rem \u5E03\u5C40</li><li>flex \u5E03\u5C40</li><li>grid \u5E03\u5C40</li><li>\u89C6\u53E3\u5355\u4F4D vw/vh</li></ul>`,73);function b(p,g){const l=t("Badge");return a(),d("div",null,[u,i("h3",o,[v,m,r(l,{text:"\u91CD\u70B9"})]),h])}var f=n(c,[["render",b],["__file","css.html.vue"]]);export{f as default};
