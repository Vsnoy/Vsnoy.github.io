import{_ as e,o as n,c as s,e as i}from"./app.1fe87e6f.js";const t={},o=i(`<h1 id="tsconfig-json-\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> tsconfig.json \u6587\u4EF6\u914D\u7F6E</h1><p><code>tsconfig.json</code> \u6587\u4EF6\u662F <code>ts</code> \u5BF9\u5E94\u7684\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;compilerOptions&quot;: {
    // \u57FA\u672C\u914D\u7F6E\u9009\u9879
    &quot;target&quot;: &quot;es5&quot;, // \u6307\u5B9A\u7F16\u8BD1\u6210\u54EA\u4E2A\u7248\u672C\u7684 es
    &quot;module&quot;: &quot;esnext&quot;, // \u6307\u5B9A\u751F\u6210\u54EA\u4E2A\u6A21\u5757\u7CFB\u7EDF\u4EE3\u7801
    &quot;lib&quot;: [&quot;dom&quot;, &quot;dom.iterable&quot;, &quot;esnext&quot;], // \u6307\u5B9A\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u9700\u8981\u5F15\u5165\u7684\u5E93\u6587\u4EF6\u5217\u8868
    &quot;jsx&quot;: &quot;react-jsx&quot;, // \u5728 tsx \u6587\u4EF6\u4E2D\u652F\u6301 jsx\uFF0Creact 17 \u4EE5\u4E0B\u7248\u672C\u4F7F\u7528 &#39;react&#39;\uFF0Creact 17 \u53CA\u4EE5\u4E0A\u7248\u672C\u4F7F\u7528 &#39;react-jsx&#39;
    &quot;strict&quot;: true, // \u662F\u5426\u542F\u7528\u6240\u6709\u4E25\u683C\u7C7B\u578B\u68C0\u67E5\u9009\u9879
    &quot;allowJs&quot;: false, // \u662F\u5426\u5141\u8BB8\u7F16\u8BD1 js \u6587\u4EF6
    &quot;isolatedModules&quot;: true, // \u662F\u5426\u5C06\u6BCF\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u5355\u72EC\u7684\u6A21\u5757

    // \u6A21\u5757\u89E3\u6790\u9009\u9879
    &quot;moduleResolution&quot;: &quot;node&quot;, // \u6307\u5B9A\u6A21\u5757\u89E3\u6790\u7B56\u7565
    &quot;esModuleInterop&quot;: false, // \u662F\u5426\u652F\u6301 es \u548C cjs \u6A21\u5757\u4E4B\u95F4\u7684\u4E92\u64CD\u4F5C\u6027
    &quot;resolveJsonModule&quot;: true, // \u662F\u5426\u652F\u6301\u5BFC\u5165 json \u6A21\u5757
    &quot;baseUrl&quot;: &quot;.&quot;, // \u57FA\u7840\u8DEF\u5F84
    &quot;paths&quot;: {
      // \u522B\u540D\u914D\u7F6E
      &quot;@/*&quot;: [&quot;src/*&quot;]
    },

    // \u5B9E\u9A8C\u6027\u9009\u9879
    &quot;experimentalDecorators&quot;: true, // \u542F\u7528\u5B9E\u9A8C\u6027\u7684 es \u88C5\u9970\u5668

    // \u5176\u4ED6\u9009\u9879
    &quot;forceConsistentCasingInFileNames&quot;: true, // \u662F\u5426\u7981\u6B62\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u4E0D\u4E00\u81F4\u7684\u5F15\u7528
    &quot;skipLibCheck&quot;: false, // \u662F\u5426\u8DF3\u8FC7\u5BF9\u58F0\u660E\u6587\u4EF6\uFF08*.d.ts\uFF09\u7C7B\u578B\u68C0\u67E5
    &quot;allowSyntheticDefaultImports&quot;: true, // \u662F\u5426\u5141\u8BB8\u4ECE\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4E2D\u9ED8\u8BA4\u5BFC\u5165
    &quot;noEmit&quot;: true // \u662F\u5426\u4E0D\u751F\u6210\u8F93\u51FA\u6587\u4EF6
  },
  &quot;exclude&quot;: [&quot;node_modules&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u=[o];function l(d,a){return n(),s("div",null,u)}var c=e(t,[["render",l],["__file","tsconfig.json \u6587\u4EF6\u914D\u7F6E.html.vue"]]);export{c as default};
