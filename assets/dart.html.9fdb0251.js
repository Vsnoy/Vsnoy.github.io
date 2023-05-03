import{_ as e,o as i,c as n,d as a}from"./app.3fccbc48.js";const l={},s=a(`<h1 id="dart" tabindex="-1"><a class="header-anchor" href="#dart" aria-hidden="true">#</a> Dart</h1><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><ul><li>String</li><li>Number\uFF1Aint\u3001double\u3001num</li><li>Boolean\uFF1Abool</li><li>Symbol</li><li>List</li><li>Set</li><li>Map</li><li>\u7B49\u7B49</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dart \u4E2D\u6240\u6709\u4E1C\u897F\u90FD\u662F\u5BF9\u8C61\u3002\u5B83\u4EEC\u90FD\u7EE7\u627F\u81EA Object\uFF0C\u9ED8\u8BA4\u662F\u90FD\u662F null\u3002</p></div><h2 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// int to double
int a = 100
a.toDouble()

// double to int
double a = 100.0
a.toInt()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// num to String
int a = 100
double b = 100.0
a.toString()
b.toString()

// String to num
String str1 = &#39;100&#39;
String str2 = &#39;100.0&#39;
int.parse(str1)
double.parse(str2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// JSON to Map

// Map to Object

\u5F85\u5B8C\u5584
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const-final" tabindex="-1"><a class="header-anchor" href="#const-final" aria-hidden="true">#</a> const &amp; final</h2><p>const \u548C final \u5B9A\u4E49\u7684\u90FD\u662F\u5E38\u91CF\uFF0C\u4E00\u7ECF\u8D4B\u503C\uFF0C\u65E0\u6CD5\u66F4\u6539\uFF0C\u53EA\u80FD\u521D\u59CB\u5316\u4E00\u6B21\u3002\u4E14\u5728\u58F0\u660E\u65F6\u5C31\u5FC5\u987B\u521D\u59CB\u5316\u3002</p><p>final \u5E76\u4E0D\u8981\u6C42\u8D4B\u7684\u503C\u4E00\u5B9A\u662F\u7F16\u8BD1\u65F6\u5E38\u91CF\uFF0C\u53EF\u4EE5\u662F\u4E5F\u53EF\u4EE5\u4E0D\u662F\u3002<br> const \u5219\u8981\u6C42\u8D4B\u503C\u5FC5\u9700\u4E3A\u7F16\u8BD1\u65F6\u5E38\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>final time = new DateTime.now(); // OK
const time = new DateTime.now(); // Error\uFF0Cnew DateTime.now() \u4E0D\u662F const \u5E38\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u7F16\u8BD1\u65F6\u5E38\u91CF\uFF1A\u7F16\u8BD1\u65F6\u5DF2\u7ECF\u786E\u5B9A\u5E38\u91CF\u7684\u503C\u3002</li><li>\u8FD0\u884C\u65F6\u5E38\u91CF\uFF1A\u8FD0\u884C\u65F6\u624D\u80FD\u786E\u5B9A\u5E38\u91CF\u7684\u503C\u3002</li></ul></div>`,13),d=[s];function t(r,c){return i(),n("div",null,d)}var v=e(l,[["render",t],["__file","dart.html.vue"]]);export{v as default};
