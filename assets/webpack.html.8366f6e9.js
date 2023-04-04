import{_ as e,o as a,c as l,e as i}from"./app.58058087.js";const r={},n=i('<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><h2 id="webpack-\u4E94\u5927\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E94\u5927\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> webpack \u4E94\u5927\u6838\u5FC3\u6982\u5FF5</h2><ul><li>entry \u5165\u53E3</li><li>output \u8F93\u51FA</li><li>loader \u89E3\u6790\u5668</li><li>plugin \u63D2\u4EF6</li><li>mode \u6A21\u5F0F</li></ul><h2 id="webpack-\u6784\u5EFA\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#webpack-\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a> webpack \u6784\u5EFA\u6D41\u7A0B</h2><ul><li>\u521D\u59CB\u5316\u53C2\u6570\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\u3002</li><li>\u5F00\u59CB\u7F16\u8BD1\uFF1A\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884C\u5BF9\u8C61\u7684 run \u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\u3002</li><li>\u786E\u5B9A\u5165\u53E3\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6\u3002</li><li>\u7F16\u8BD1\u6A21\u5757\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406\u3002</li><li>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\uFF1A\u5728\u7ECF\u8FC7\u7B2C 4 \u6B65\u4F7F\u7528 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</li><li>\u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\u3002</li><li>\u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ul><h2 id="webpack-\u4E0E-grunt\u3001gulp-\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E0E-grunt\u3001gulp-\u7684\u4E0D\u540C" aria-hidden="true">#</a> webpack \u4E0E grunt\u3001gulp \u7684\u4E0D\u540C</h2><h2 id="loader-\u662F\u4EC0\u4E48-\u6709\u54EA\u4E9B\u5E38\u89C1\u7684-loader" tabindex="-1"><a class="header-anchor" href="#loader-\u662F\u4EC0\u4E48-\u6709\u54EA\u4E9B\u5E38\u89C1\u7684-loader" aria-hidden="true">#</a> loader \u662F\u4EC0\u4E48\uFF1F\u6709\u54EA\u4E9B\u5E38\u89C1\u7684 loader\uFF1F</h2><p>webpack \u81EA\u8EAB\u53EA\u80FD\u8BC6\u522B js \u6587\u4EF6\uFF0C\u5BF9\u4E8E\u975E js \u6587\u4EF6\uFF0C\u9700\u8981\u501F\u52A9\u7279\u5B9A\u7684 loader \u89E3\u6790\u5668\u5904\u7406\uFF0C\u5E76\u5C06\u5B83\u4EEC\u8F6C\u6362\u4E3A\u6709\u6548\u6A21\u5757\u3002</p><ul><li>babel-loader\uFF1A\u5C06 es6 \u8F6C\u6362\u6210 es5</li><li>ts-loader\uFF1A\u5C06 ts \u8F6C\u6362\u6210 js</li><li>style-loader\uFF1A\u5C06 css \u6CE8\u5165\u5230 js \u4E2D</li><li>css-loader\uFF1A\u52A0\u8F7D\u5E76\u89E3\u6790 css</li><li>less-loader\uFF1A\u5C06 less \u8F6C\u6362\u6210 css</li><li>\u7B49\u7B49</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>loader \u89E3\u6790\u987A\u5E8F\u662F\u4ECE\u4E0B\u5230\u4E0A\uFF0C\u4ECE\u53F3\u5230\u5DE6\u3002</p></div><h2 id="plugin-\u662F\u4EC0\u4E48-\u6709\u54EA\u4E9B\u5E38\u89C1\u7684-plugin" tabindex="-1"><a class="header-anchor" href="#plugin-\u662F\u4EC0\u4E48-\u6709\u54EA\u4E9B\u5E38\u89C1\u7684-plugin" aria-hidden="true">#</a> plugin \u662F\u4EC0\u4E48\uFF1F\u6709\u54EA\u4E9B\u5E38\u89C1\u7684 plugin\uFF1F</h2><p>plugin \u63D2\u4EF6\u8D4B\u4E88\u4E86 webpack \u5404\u79CD\u7075\u6D3B\u7684\u529F\u80FD\uFF0C\u76EE\u7684\u5728\u4E8E\u89E3\u51B3 loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B\u3002\u8BF8\u5982\u6253\u5305\u4F18\u5316\uFF0C\u6587\u4EF6\u538B\u7F29\uFF0C\u6587\u4EF6\u5206\u79BB\u7B49\u3002</p><ul><li>webpack-merge\uFF1A\u63D0\u53D6\u516C\u5171\u914D\u7F6E\uFF0C\u51CF\u5C11\u91CD\u590D\u914D\u7F6E\u4EE3\u7801</li><li>webpack-bundle-analyzer: \u53EF\u89C6\u5316 Webpack \u8F93\u51FA\u6587\u4EF6\u7684\u4F53\u79EF</li><li>mini-css-extract-plugin: \u5206\u79BB\u6837\u5F0F\u6587\u4EF6\uFF0C\u5C06 CSS \u63D0\u53D6\u4E3A\u72EC\u7ACB\u6587\u4EF6</li><li>\u7B49\u7B49</li></ul><h2 id="loader-\u548C-plugin-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#loader-\u548C-plugin-\u533A\u522B" aria-hidden="true">#</a> loader \u548C plugin \u533A\u522B</h2><h2 id="bundle\u3001chunk-\u548C-module-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#bundle\u3001chunk-\u548C-module-\u533A\u522B" aria-hidden="true">#</a> bundle\u3001chunk \u548C module \u533A\u522B</h2><p>module\uFF0Cchunk \u548C bundle \u5176\u5B9E\u5C31\u662F\u540C\u4E00\u4EFD\u903B\u8F91\u4EE3\u7801\u5728\u4E0D\u540C\u8F6C\u6362\u573A\u666F\u4E0B\u7684\u53D6\u4E86\u4E09\u4E2A\u540D\u5B57\uFF1A</p><ul><li>\u6211\u4EEC\u76F4\u63A5\u5199\u51FA\u6765\u7684\u662F module</li><li>webpack \u5904\u7406\u65F6\u662F chunk</li><li>\u6700\u540E\u751F\u6210\u6D4F\u89C8\u5668\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u7684\u662F bundle</li></ul><h2 id="webpack-\u70ED\u66F4\u65B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#webpack-\u70ED\u66F4\u65B0\u539F\u7406" aria-hidden="true">#</a> webpack \u70ED\u66F4\u65B0\u539F\u7406</h2><h2 id="webpack-\u6587\u4EF6\u6307\u7EB9" tabindex="-1"><a class="header-anchor" href="#webpack-\u6587\u4EF6\u6307\u7EB9" aria-hidden="true">#</a> webpack \u6587\u4EF6\u6307\u7EB9</h2><p>\u6587\u4EF6\u6307\u7EB9\u662F\u6253\u5305\u540E\u8F93\u51FA\u7684\u6587\u4EF6\u540D\u7684\u540E\u7F00\u3002</p><ul><li>Hash\uFF1A\u548C\u6574\u4E2A\u9879\u76EE\u7684\u6784\u5EFA\u76F8\u5173\uFF0C\u53EA\u8981\u9879\u76EE\u6587\u4EF6\u6709\u4FEE\u6539\uFF0C\u6574\u4E2A\u9879\u76EE\u6784\u5EFA\u7684 hash \u503C\u5C31\u4F1A\u66F4\u6539</li><li>Chunkhash\uFF1A\u548C Webpack \u6253\u5305\u7684 chunk \u6709\u5173\uFF0C\u4E0D\u540C\u7684 entry \u4F1A\u751F\u51FA\u4E0D\u540C\u7684 chunkhash</li><li>Contenthash\uFF1A\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u6765\u5B9A\u4E49 hash\uFF0C\u6587\u4EF6\u5185\u5BB9\u4E0D\u53D8\uFF0C\u5219 contenthash \u4E0D\u53D8</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u5165\u53E3\u6587\u4EF6\u548C\u5B83\u7684\u4F9D\u8D56\u7684\u6A21\u5757\u6784\u6210\u7684\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u88AB\u79F0\u4E3A\u4E00\u4E2A chunk</li><li>\u4E00\u4E2A\u5165\u53E3\u5BF9\u5E94\u4E00\u4E2A chunk\uFF0C\u591A\u4E2A\u5165\u53E3\uFF0C\u5C31\u4F1A\u4EA7\u751F\u591A\u4E2A chunk</li></ul></div>',22),d=[n];function c(h,u){return a(),l("div",null,d)}var t=e(r,[["render",c],["__file","webpack.html.vue"]]);export{t as default};
