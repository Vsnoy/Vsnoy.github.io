import{_ as e,o as i,c as n,e as d}from"./app.6c0bedb0.js";const t={},l=d(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="vue-\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#vue-\u57FA\u7840" aria-hidden="true">#</a> Vue \u57FA\u7840</h2><h3 id="\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</h3><p><code>Vue</code> \u7684\u751F\u547D\u5468\u671F\u5C31\u662F <code>Vue</code> \u5B9E\u4F8B\u4ECE\u521B\u5EFA\u5230\u9500\u6BC1\u7684\u8FC7\u7A0B\u3002</p><p><code>activated</code> \u548C <code>deactivated</code> \u662F <code>keep-alive</code> \u72EC\u6709\u7684\u751F\u547D\u5468\u671F\u3002\u7528 <code>keep-alive</code> \u5305\u88F9\u7684\u7EC4\u4EF6\u5728\u5207\u6362\u65F6\u4E0D\u4F1A\u8FDB\u884C\u9500\u6BC1\uFF0C\u800C\u662F\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\u5E76\u6267\u884C <code>deactivated</code> \u94A9\u5B50\u51FD\u6570\uFF0C\u547D\u4E2D\u7F13\u5B58\u6E32\u67D3\u540E\u4F1A\u6267\u884C <code>activated</code> \u94A9\u5B50\u51FD\u6570\u3002</p><table><thead><tr><th>Vue 2 \u751F\u547D\u5468\u671F</th><th>Vue 3 \u751F\u547D\u5468\u671F</th><th>\u6267\u884C\u65F6\u95F4\u8BF4\u660E</th></tr></thead><tbody><tr><td>beforeCreate</td><td>setup</td><td>\u7EC4\u4EF6\u521B\u5EFA\u524D\u6267\u884C</td></tr><tr><td>created</td><td>setup</td><td>\u7EC4\u4EF6\u521B\u5EFA\u540E\u6267\u884C</td></tr><tr><td>beforeMount</td><td>onBeforeMount</td><td>\u7EC4\u4EF6\u6302\u8F7D\u5230\u8282\u70B9\u4E0A\u4E4B\u524D\u6267\u884C</td></tr><tr><td>mounted</td><td>onMounted</td><td>\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u6267\u884C</td></tr><tr><td>beforeUpdate</td><td>onBeforeUpdate</td><td>\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u524D\u6267\u884C</td></tr><tr><td>updated</td><td>onUpdated</td><td>\u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6210\u4E4B\u540E\u6267\u884C</td></tr><tr><td>beforeDestroy</td><td>onBeforeUnmount</td><td>\u7EC4\u4EF6\u5378\u8F7D\u4E4B\u524D\u6267\u884C</td></tr><tr><td>destroyed</td><td>onUnmounted</td><td>\u7EC4\u4EF6\u5378\u8F7D\u5B8C\u6210\u540E\u6267\u884C</td></tr><tr><td>activated</td><td>onActivated</td><td>\u88AB\u6FC0\u6D3B\u65F6\u6267\u884C</td></tr><tr><td>deactivated</td><td>onDeactivated</td><td>\u5207\u6362\u7EC4\u4EF6\u540E\uFF0C\u539F\u7EC4\u4EF6\u6D88\u5931\u524D\u6267\u884C</td></tr></tbody></table><p>\u5728 <code>created</code> \u3001<code>beforeMount</code> \u3001<code>mounted</code> \u9636\u6BB5\u53EF\u8FDB\u884C\u5F02\u6B65\u8BF7\u6C42\u3002<br> \u5728 <code>mounted</code> \u9636\u6BB5\u53EF\u64CD\u4F5C <code>DOM</code>\u3002</p><h3 id="\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F</h3><ul><li><p>\u6302\u8F7D\u8FC7\u7A0B</p><ol><li>\u7236\u7EC4\u4EF6 beforeCreate</li><li>\u7236\u7EC4\u4EF6 created</li><li>\u7236\u7EC4\u4EF6 beforeMount</li><li>\u5B50\u7EC4\u4EF6 beforeCreate</li><li>\u5B50\u7EC4\u4EF6 created</li><li>\u5B50\u7EC4\u4EF6 beforeMount</li><li>\u5B50\u7EC4\u4EF6 mounted</li><li>\u7236\u7EC4\u4EF6 mounted</li></ol></li><li><p>\u66F4\u65B0\u8FC7\u7A0B</p><ol><li>\u7236\u7EC4\u4EF6 beforeUpdate</li><li>\u5B50\u7EC4\u4EF6 beforeUpdate</li><li>\u5B50\u7EC4\u4EF6 updated</li><li>\u7236\u7EC4\u4EF6 updated</li></ol></li><li><p>\u5378\u8F7D\u8FC7\u7A0B</p><ol><li>\u7236\u7EC4\u4EF6 beforeDestroy</li><li>\u5B50\u7EC4\u4EF6 beforeDestroy</li><li>\u5B50\u7EC4\u4EF6 destroyed</li><li>\u7236\u7EC4\u4EF6 destoryed</li></ol></li></ul><h3 id="nexttick-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#nexttick-\u539F\u7406" aria-hidden="true">#</a> nextTick \u539F\u7406</h3><p><code>Vue</code> \u66F4\u65B0 <code>DOM</code> \u662F\u5F02\u6B65\u66F4\u65B0\u7684\uFF0C\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u89C6\u56FE\u4E0D\u4F1A\u7ACB\u523B\u66F4\u65B0\uFF0C\u800C\u662F\u7B49\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u6240\u6709\u6570\u636E\u53D8\u5316\u5B8C\u6210\u4E4B\u540E\uFF0C\u518D\u7EDF\u4E00\u8FDB\u884C\u89C6\u56FE\u66F4\u65B0\u3002</p><p><code>nextTick</code> \u56DE\u8C03\u662F\u5728\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u7684\u5EF6\u8FDF\u56DE\u8C03\u3002</p><p><code>nextTick</code> \u4E3B\u8981\u4F7F\u7528\u4E86\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u3002\u6839\u636E\u6267\u884C\u73AF\u5883\u5206\u522B\u5C1D\u8BD5\u91C7\u7528\uFF1A</p><ul><li>Promise\uFF1A\u53EF\u4EE5\u5C06\u51FD\u6570\u5EF6\u8FDF\u5230\u5F53\u524D\u51FD\u6570\u8C03\u7528\u6808\u6700\u672B\u7AEF\u3002</li><li>MutationObserver \uFF1A\u7528\u4E8E\u76D1\u542C DOM \u8282\u70B9\u7684\u53D8\u52A8\uFF0C\u5728\u6240\u6709 DOM \u53D8\u52A8\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</li><li>setImmediate\uFF1A\u7528\u4E8E\u4E2D\u65AD\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u64CD\u4F5C\uFF0C\u5E76\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u5176\u4ED6\u64CD\u4F5C\u540E\u7ACB\u5373\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</li><li>\u82E5\u4EE5\u4E0A\u90FD\u4E0D\u884C\u5219\u91C7\u7528 setTimeout \u628A\u51FD\u6570\u5EF6\u8FDF\u5230 DOM \u66F4\u65B0\u4E4B\u540E\u518D\u4F7F\u7528\u3002\u539F\u56E0\u662F\u5B8F\u4EFB\u52A1\u6D88\u8017\u5927\u4E8E\u5FAE\u4EFB\u52A1\uFF0C\u4F18\u5148\u4F7F\u7528\u5FAE\u4EFB\u52A1\uFF0C\u6700\u540E\u4F7F\u7528\u6D88\u8017\u6700\u5927\u7684\u5B8F\u4EFB\u52A1\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
  &lt;div id=&quot;div&quot; v-if=&quot;showDiv&quot;&gt;hello\uFF0C\u6211\u662F\u5C0F\u56DB&lt;/div&gt;
  &lt;button @click=&quot;getText&quot;&gt;\u83B7\u53D6 div \u5185\u5BB9&lt;/button&gt;
&lt;/div&gt;

&lt;script&gt;
var app = new Vue({
  el: &quot;#app&quot;,
  data: {
    showDiv : false
  },
  methods: {
    getText: function() {
      this.showDiv = true;

      // var text = document.getElementById(&#39;div&#39;).innnerHTML;
      // console.log(text);

      this.$nextTick(function() {
        var text = document.getElementById(&#39;div&#39;).innnerHTML;
        console.log(text);  
      });
    }
  }
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u539F\u7406</h3><p>\u54CD\u5E94\u5F0F\uFF0C\u5373\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u81EA\u52A8\u5316\u66F4\u65B0\u3002\u6211\u4EEC\u4FEE\u6539\u6570\u636E\uFF0C\u89C6\u56FE\u4E5F\u4F1A\u968F\u4E4B\u54CD\u5E94\u66F4\u65B0\u3002</p><ul><li><p><code>Vue2</code> \u91C7\u7528\u6570\u636E\u52AB\u6301\u7ED3\u5408\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u901A\u8FC7 <code>Object.defineProperty</code> \u6765\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684 <code>setter/getter</code> \u3002\u5F53\u6211\u4EEC\u8BBF\u95EE\u6570\u636E\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>getter</code> \u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF1B\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>setter</code> \u6D3E\u53D1\u901A\u77E5\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u76D1\u542C\u56DE\u8C03\u3002\uFF08\u8FD8\u53EF\u7EC6\u5206\u5BF9\u8C61\u54CD\u5E94\u5F0F\u548C\u6570\u7EC4\u54CD\u5E94\u5F0F\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Object.defineProperty(obj, key, {
  // \u62E6\u622A get\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE data.key \u65F6\u4F1A\u88AB\u8FD9\u4E2A\u65B9\u6CD5\u62E6\u622A\u5230
  get: function getter () {
      // \u6211\u4EEC\u5728\u8FD9\u91CC\u6536\u96C6\u4F9D\u8D56
      return obj[key];
  },

  // \u62E6\u622A set\uFF0C\u5F53\u6211\u4EEC\u4E3A data.key \u8D4B\u503C\u65F6\u4F1A\u88AB\u8FD9\u4E2A\u65B9\u6CD5\u62E6\u622A\u5230
  set: function setter (newVal) {
      // \u5F53\u6570\u636E\u53D8\u66F4\u65F6\uFF0C\u901A\u77E5\u4F9D\u8D56\u9879\u53D8\u66F4 UI
  } 
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Vue3</code> \u4E0E <code>Vue2</code> \u54CD\u5E94\u5F0F\u539F\u7406\u6838\u5FC3\u601D\u60F3\u4E00\u81F4\uFF0C\u533A\u522B\u5728\u4E8E <code>Vue3</code> \u6570\u636E\u52AB\u6301\u662F\u57FA\u4E8E <code>Proxy</code> \u4EE3\u7406\uFF0C\u5176\u62E6\u622A\u7684\u662F\u6574\u4E2A\u5BF9\u8C61\uFF0C\u800C\u4E0D\u518D\u662F\u67D0\u4E2A\u5C5E\u6027\u3002<code>Proxy</code> \u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406\u5BF9\u8C61\uFF0C\u5B9E\u73B0\u5BF9\u539F\u5BF9\u8C61\u7684\u4EE3\u7406\u3002\u5916\u754C\u5BF9\u539F\u5BF9\u8C61\u8FDB\u884C\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u901A\u8FC7\u8FD9\u5C42\u4EE3\u7406\u5BF9\u8C61\u7684\u62E6\u622A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let nObj = new Proxy(obj, {
  // \u62E6\u622A get\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE nObj.key \u65F6\u4F1A\u88AB\u8FD9\u4E2A\u65B9\u6CD5\u62E6\u622A\u5230
  get: function (target, propKey, receiver) {
    return Reflect.get(target, propKey, receiver);
  },

  // \u62E6\u622A set\uFF0C\u5F53\u6211\u4EEC\u4E3A nObj.key \u8D4B\u503C\u65F6\u4F1A\u88AB\u8FD9\u4E2A\u65B9\u6CD5\u62E6\u622A\u5230
  set: function (target, propKey, value, receiver) {
    return Reflect.set(target, propKey, value, receiver);
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Vue2 \u54CD\u5E94\u5F0F\u7F3A\u70B9</p><ul><li>\u65E0\u6CD5\u76D1\u6D4B\u5230\u5BF9\u8C61\u5C5E\u6027\u7684\u65B0\u589E\u6216\u5220\u9664</li><li>\u65E0\u6CD5\u76D1\u6D4B\u5230\u6570\u7EC4\u7684\u53D8\u5316\uFF08push\u3001pop\u3001shift\u3001unshift\u3001splice\u3001sort\u3001reverse \u9664\u5916\uFF09 <ul><li>\u5BF9\u6570\u7EC4\u57FA\u4E8E\u4E0B\u6807\u7684\u4FEE\u6539</li><li>\u5BF9\u6570\u7EC4 length \u7684\u4FEE\u6539</li></ul></li></ul></div><h3 id="vue2-\u662F\u5982\u4F55\u68C0\u6D4B\u6570\u7EC4\u7684\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#vue2-\u662F\u5982\u4F55\u68C0\u6D4B\u6570\u7EC4\u7684\u53D8\u5316" aria-hidden="true">#</a> Vue2 \u662F\u5982\u4F55\u68C0\u6D4B\u6570\u7EC4\u7684\u53D8\u5316</h3><p>Vue2 \u5C06 data \u4E2D\u7684\u6570\u7EC4\u8FDB\u884C\u4E86\u539F\u578B\u94FE\u91CD\u5199\uFF0C\u6307\u5411\u4E86\u81EA\u5DF1\u5B9A\u4E49\u7684\u6570\u7EC4\u539F\u578B\u65B9\u6CD5\u3002\u8FD9\u6837\u5F53\u8C03\u7528\u6570\u7EC4\u65B9\u6CD5\u65F6\uFF0C\u5C31\u53EF\u4EE5\u901A\u77E5\u4F9D\u8D56\u66F4\u65B0\u3002</p><h3 id="\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u539F\u7406" aria-hidden="true">#</a> \u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u539F\u7406</h3><p>\u53CC\u5411\u7ED1\u5B9A\uFF0C\u5373\u6570\u636E\u548C\u89C6\u56FE\u76F8\u4E92\u9A71\u52A8\u66F4\u65B0\u3002\u5728 <code>Vue</code> \u4E2D\uFF0C\u4E00\u822C\u4F7F\u7528 <code>v-model</code> \u6765\u4F53\u73B0\u53CC\u5411\u7ED1\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;input v-model=&quot;value&quot; /&gt;
&lt;input v-bind:value=&quot;value&quot; v-on:input=&quot;value = $event.target.value&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u804A\u5230\u8FD9\u4E2A\u65F6\u5019\uFF0C\u4E5F\u8981\u8C08\u8C08\u54CD\u5E94\u5F0F\u539F\u7406\uFF0C\u5373\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u3002</p></div><h3 id="proxy-\u53EA\u4F1A\u4EE3\u7406\u5BF9\u8C61\u7684\u7B2C\u4E00\u5C42-vue3-\u662F\u5982\u4F55\u5904\u7406\u7684\u5462" tabindex="-1"><a class="header-anchor" href="#proxy-\u53EA\u4F1A\u4EE3\u7406\u5BF9\u8C61\u7684\u7B2C\u4E00\u5C42-vue3-\u662F\u5982\u4F55\u5904\u7406\u7684\u5462" aria-hidden="true">#</a> Proxy \u53EA\u4F1A\u4EE3\u7406\u5BF9\u8C61\u7684\u7B2C\u4E00\u5C42\uFF0CVue3 \u662F\u5982\u4F55\u5904\u7406\u7684\u5462</h3><p>\u5224\u65AD\u5F53\u524D Reflect.get \u7684\u8FD4\u56DE\u503C\u662F\u5426\u4E3A Object \u5BF9\u8C61\uFF0C\u5982\u679C\u662F\u5219\u518D\u901A\u8FC7 \u200B\u200Breactive \u200B\u200B\u65B9\u6CD5\u505A\u4EE3\u7406\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u6DF1\u5EA6\u89C2\u6D4B\u3002</p><h3 id="\u76D1\u6D4B\u6570\u7EC4\u7684\u65F6\u5019\u53EF\u80FD\u89E6\u53D1\u591A\u6B21-set-vue3-\u662F\u5982\u4F55\u9632\u6B62\u89E6\u53D1\u591A\u6B21\u7684\u5462" tabindex="-1"><a class="header-anchor" href="#\u76D1\u6D4B\u6570\u7EC4\u7684\u65F6\u5019\u53EF\u80FD\u89E6\u53D1\u591A\u6B21-set-vue3-\u662F\u5982\u4F55\u9632\u6B62\u89E6\u53D1\u591A\u6B21\u7684\u5462" aria-hidden="true">#</a> \u76D1\u6D4B\u6570\u7EC4\u7684\u65F6\u5019\u53EF\u80FD\u89E6\u53D1\u591A\u6B21 set\uFF0CVue3 \u662F\u5982\u4F55\u9632\u6B62\u89E6\u53D1\u591A\u6B21\u7684\u5462</h3><p>\u9996\u5148\u5224\u65AD key \u662F\u5426\u4E3A\u5F53\u524D\u88AB\u4EE3\u7406\u5BF9\u8C61\u81EA\u8EAB\u5C5E\u6027\uFF0C\u5982\u679C\u4E0D\u662F\u76F4\u63A5 set\uFF0C\u5982\u679C\u662F\u5219\u518D\u5224\u65AD\u65B0\u65E7 value \u662F\u5426\u76F8\u7B49\uFF0C\u5982\u679C\u4E0D\u76F8\u7B49\u76F4\u63A5 set\uFF0C\u76F8\u7B49\u5219\u4E0D\u4F5C set \u64CD\u4F5C\u3002</p><h3 id="vue-diff-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue-diff-\u7B97\u6CD5" aria-hidden="true">#</a> Vue Diff \u7B97\u6CD5</h3><h4 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h4><p>Vue2 Diff \u7B97\u6CD5\u91C7\u7528\u7684\u662F\u53CC\u7AEF\u6BD4\u8F83\u7B97\u6CD5\u3002</p><p>\u9996\u5148\u521D\u59CB\u5316\u56DB\u4E2A\u6307\u9488\uFF0C\u5206\u522B\u6307\u5411\u65B0\u65E7\u8282\u70B9\u6570\u7EC4\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u4F4D\u7F6E\uFF0C\u8FDB\u884C\u4E24\u4E24\u5BF9\u6BD4\u3002</p><p>\u82E5\u65B0\u65E7\u5F00\u59CB\u8282\u70B9\u76F8\u5339\u914D\uFF0C\u5219\u5C06\u5F00\u59CB\u6307\u9488\u540E\u79FB\uFF1B<br> \u82E5\u65B0\u65E7\u7ED3\u5C3E\u8282\u70B9\u76F8\u5339\u914D\uFF0C\u5219\u5C06\u7ED3\u5C3E\u6307\u9488\u524D\u79FB\uFF1B<br> \u82E5\u65E7\u5F00\u59CB\u8282\u70B9\u548C\u65B0\u7ED3\u5C3E\u8282\u70B9\u76F8\u5339\u914D\uFF0C\u5219\u4F1A\u5C06\u65E7\u5F00\u59CB\u8282\u70B9\u79FB\u52A8\u5230\u65E7\u7ED3\u5C3E\u8282\u70B9\u540E\uFF0C\u800C\u540E\u5C06\u65B0\u7ED3\u5C3E\u6307\u9488\u524D\u79FB\uFF1B<br> \u82E5\u65E7\u7ED3\u5C3E\u8282\u70B9\u548C\u65B0\u5F00\u59CB\u8282\u70B9\u76F8\u5339\u914D\uFF0C\u5219\u4F1A\u5C06\u65E7\u7ED3\u5C3E\u8282\u70B9\u79FB\u52A8\u5230\u65E7\u5F00\u59CB\u8282\u70B9\u524D\uFF0C\u800C\u540E\u5C06\u65B0\u5F00\u59CB\u6307\u9488\u540E\u79FB\uFF1B<br> \u82E5\u4E0A\u8FF0\u64CD\u4F5C\u90FD\u6CA1\u5339\u914D\uFF0C\u5219\u4F1A\u5224\u65AD\u65B0\u5F00\u59CB\u8282\u70B9\u662F\u5426\u5B58\u5728\u4E8E\u65E7\u8282\u70B9\u4E2D\uFF0C\u82E5\u5B58\u5728\u5219\u76F4\u63A5\u590D\u7528\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002</p><p>\u5FAA\u73AF\u5F80\u590D\u4E0A\u8FF0\u8FC7\u7A0B\uFF0C\u5F85\u5FAA\u73AF\u7ED3\u675F\u540E\uFF0C\u8FDB\u884C\u65B0\u589E\u6216\u5220\u9664\u3002<br> \u82E5\u662F\u65E7\u7684\u5F00\u59CB\u8282\u70B9\u5C0F\u4E8E\u65E7\u7684\u7ED3\u675F\u8282\u70B9\uFF0C\u5219\u4F1A\u5220\u9664\u4E4B\u95F4\u7684\u8282\u70B9\uFF1B<br> \u82E5\u662F\u65B0\u7684\u5F00\u59CB\u8282\u70B9\u5C0F\u4E8E\u65B0\u7684\u7ED3\u675F\u8282\u70B9\uFF0C\u5219\u4F1A\u65B0\u589E\u4E4B\u95F4\u7684\u8282\u70B9\uFF1B</p><h4 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h4><p>\u8FD8\u5F85\u7814\u7A76</p><h3 id="\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7EC4\u4EF6\u901A\u4FE1</h3><ul><li>props/$emit</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\uFF1A
&lt;Child name=&quot;violet&quot; @emit=&quot;emitA&quot;&gt;&lt;/Child&gt;

methods: {
  emitA(msg){
    console.log(msg)
  }
}

\u5B50\u7EC4\u4EF6\uFF1A
&lt;div @click=&quot;emitB&quot;&gt;&lt;/div&gt;

props: [&#39;name&#39;],
methods: {
  emitB(){
    this.$emit(&quot;emit&quot;, &quot;Violet \u5929\u4E0B\u7B2C\u4E00&quot;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>eventBus</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// main.js
Vue.prototype.eventBus = new Vue()

\u7EC4\u4EF6 A \uFF08\u53D1\u9001\u4E8B\u4EF6\uFF09
this.eventBus.$emit(&#39;sayHello&#39;, &quot;Hello Vue&quot;)

\u7EC4\u4EF6 B \uFF08\u63A5\u6536\u4E8B\u4EF6\uFF09
this.eventBus.$on(&#39;sayHello&#39;, (msg) =&gt; {
  console.log(msg)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>provide/inject</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\uFF1A
provide() {
  return {
    num: this.num
  };
}

\u5B50\u7EC4\u4EF6\uFF1A
inject: [&#39;num&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vuex</li><li>\u7B49\u7B49</li></ul><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue Router</h2><h3 id="\u5982\u4F55\u914D\u7F6E-404-\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u914D\u7F6E-404-\u9875\u9762" aria-hidden="true">#</a> \u5982\u4F55\u914D\u7F6E 404 \u9875\u9762</h3><p>\u5C06 <code>404</code> \u9875\u9762\u5BF9\u5E94\u8DEF\u7531\u914D\u7F6E\u653E\u5230\u6240\u6709\u8DEF\u7531\u7684\u914D\u7F6E\u4FE1\u606F\u7684\u6700\u540E\uFF0C\u907F\u514D\u5BF9\u5176\u4ED6\u8DEF\u7531 <code>path</code> \u5339\u914D\u9020\u6210\u5F71\u54CD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const router = new VueRouter({
  mode:&quot;history&quot;,
  routes: [
    {
      name: &quot;A&quot;,
      path: &quot;/a&quot;,
      component: () =&gt; import(&quot;@/views/A.vue&quot;)
    }, 
    {
      name: &quot;B&quot;,
      path: &quot;/b&quot;,
      component: () =&gt; import(&quot;@/views/B.vue&quot;)
    }, 
    {
      name: &quot;404&quot;,
      path: &quot;*&quot;,
      component: () =&gt; import(&quot;@/views/404.vue&quot;)
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hash-\u548C-history-\u6A21\u5F0F\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#hash-\u548C-history-\u6A21\u5F0F\u533A\u522B" aria-hidden="true">#</a> hash \u548C history \u6A21\u5F0F\u533A\u522B</h3><ul><li>hash \u6A21\u5F0F\uFF1A\u57FA\u4E8E H5 <code>hashchange</code> \u4E8B\u4EF6 <ul><li>url \u8DEF\u5F84\u4E2D\u4F1A\u51FA\u73B0 # \u53F7\uFF0C# \u53F7\u53CA\u5176\u540E\u9762\u7684\u5B57\u7B26\u5373\u4E3A hash \u503C</li><li>hash \u503C\u4E0D\u5305\u62EC\u5728 http \u8BF7\u6C42\u4E2D\uFF0C\u5B83\u662F\u4EA4\u7531\u524D\u7AEF\u8DEF\u7531\u5904\u7406\uFF0C\u6240\u4EE5 hash \u503C\u6539\u53D8\u65F6\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42</li></ul></li><li>history \u6A21\u5F0F\uFF1A\u57FA\u4E8E H5 History API \u4E2D\u65B0\u589E\u7684 <code>pushState</code> \u548C <code>replaceState</code> \u65B9\u6CD5 <ul><li>url \u8DEF\u5F84\u4E2D\u4E0D\u4F1A\u51FA\u73B0 # \u53F7</li><li>\u4F9D\u8D56\u540E\u53F0\u914D\u7F6E\uFF0C\u82E5\u540E\u53F0\u6CA1\u7ED9\u76F8\u5E94\u914D\u7F6E\uFF0C\u9875\u9762\u5237\u65B0\u5C31\u4F1A\u51FA\u73B0 404</li></ul></li></ul><h3 id="route-\u548C-router-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#route-\u548C-router-\u533A\u522B" aria-hidden="true">#</a> $route \u548C $router \u533A\u522B</h3><ul><li>$route \u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6 name \u3001 path \u3001 query \u3001 params \u7B49\u8DEF\u7531\u4FE1\u606F\u53C2\u6570</li><li>$router \u8DEF\u7531\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u53EF\u7528\u4E8E\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u60F3\u8981\u5BFC\u822A\u5230\u4E0D\u540C URL\uFF0C\u5219\u4F7F\u7528 $router.push \u65B9\u6CD5</li></ul><h3 id="\u8DEF\u7531\u4F20\u53C2\u7684\u4E24\u79CD\u65B9\u5F0F\u53CA\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2\u7684\u4E24\u79CD\u65B9\u5F0F\u53CA\u533A\u522B" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2\u7684\u4E24\u79CD\u65B9\u5F0F\u53CA\u533A\u522B</h3><ul><li>params \u4F20\u53C2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F20\u9012\u53C2\u6570
&lt;router-link :to=&quot;{ name: &#39;A&#39;, params: { id: uid } }&quot;&gt;\u8DF3\u8F6C&lt;/router-link&gt;

this.$router.push({ name: &#39;A&#39;, params: { id: uid } })
this.$router.push({ &#39;/a/&#39; + uid })

// \u63A5\u6536\u53C2\u6570
this.$route.params.id
\u8FD8\u53EF\u901A\u8FC7\u914D\u7F6E props \u6765\u63A5\u6536\uFF0C\u5F85\u8BD5\u9A8C

// \u8DEF\u7531\u914D\u7F6E
const router = new VueRouter({
  mode: &quot;history&quot;,
  routes: [
    {
      name: &quot;A&quot;,
      path: &quot;/a/:id&quot;,
      component: () =&gt; import(&quot;@/views/A.vue&quot;)
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>query \u4F20\u53C2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F20\u9012\u53C2\u6570
&lt;router-link :to=&quot;{ name: &#39;B&#39;, query: {id: uid} }&quot;&gt;\u8DF3\u8F6C&lt;/router-link&gt;
&lt;router-link :to=&quot;{ path: &#39;/b&#39;, query: {id: uid} }&quot;&gt;\u8DF3\u8F6C&lt;/router-link&gt;

this.$router.push({ name: &#39;B&#39;, query: {id: uid} })
this.$router.push({ path: &#39;/b&#39;, query: {id: uid} })
this.$router.push({ &#39;/b?id&#39; + uid })

// \u63A5\u6536\u53C2\u6570
this.$route.query.id

// \u8DEF\u7531\u914D\u7F6E
const router = new VueRouter({
  mode: &quot;history&quot;,
  routes: [
    {
      name: &quot;B&quot;,
      path: &quot;/b&quot;,
      component: () =&gt; import(&quot;@/views/B.vue&quot;)
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><p>params \u4F20\u53C2\u5FC5\u987B\u4F7F\u7528 name \u5F15\u5165\u8DEF\u7531\uFF1Bquery \u4F20\u53C2\u5219\u6CA1\u6709\u9650\u5236\uFF0Cpath\u3001name \u7686\u53EF</p></li><li><p>\u4F7F\u7528 params \u65F6\uFF0C\u5982\u82E5\u8DEF\u7531\u914D\u7F6E\u4E2D path \u540E\u9762\u672A\u6DFB\u52A0\u53C2\u6570\u540D\uFF0C\u9875\u9762\u5237\u65B0\u65F6\u6570\u636E\u4F1A\u4E22\u5931\uFF1Bquery \u5219\u6CA1\u6709\u9650\u5236</p></li><li><p>\u4F7F\u7528 params \u65F6\uFF0C\u5982\u82E5\u8DEF\u7531\u914D\u7F6E\u4E2D path \u540E\u9762\u672A\u6DFB\u52A0\u53C2\u6570\u540D\uFF0C\u53C2\u6570\u4E0D\u4F1A\u5728\u5730\u5740\u680F\u4E2D\u663E\u793A\uFF0C\u800C\u82E5\u8DEF\u7531\u914D\u7F6E\u4E2D path \u540E\u9762\u6DFB\u52A0\u4E86\u53C2\u6570\u540D\uFF0C\u53C2\u6570\u4F1A\u5728\u5730\u5740\u680F\u4E2D\u663E\u793A\uFF1Bquery \u6240\u4F20\u53C2\u6570\u5219\u9ED8\u8BA4\u5728\u5730\u5740\u680F\u4E2D\u663E\u793A\u3002\u4E8C\u8005\u94FE\u63A5\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// params
history \u6A21\u5F0F\uFF1Ahttp://localhost:8080/a/111
hash \u6A21\u5F0F\uFF1Ahttp://localhost:8080/#/a/111
                                                                            
// query
history \u6A21\u5F0F\uFF1Ahttp://localhost:8080/b?id=222
hash \u6A21\u5F0F\uFF1Ahttp://localhost:8080/#/b?id=222
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div><h3 id="\u58F0\u660E\u5F0F\u5BFC\u822A\u548C\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A\u548C\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u5BFC\u822A\u548C\u7F16\u7A0B\u5F0F\u5BFC\u822A</h3><ul><li>\u58F0\u660E\u5F0F\u5BFC\u822A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link to=&quot;/home&quot;&gt;&lt;/router-link&gt; 

&lt;router-link :to=&quot;{ name: &#39;Home&#39; }&quot;&gt;&lt;/router-link&gt; 

&lt;router-link :to=&quot;{ name: &#39;Home&#39;, params: { id: 1 } }&quot;&gt;&lt;/router-link&gt; 

&lt;router-link :to=&quot;{ path: &#39;/home&#39;, query: { id: 1 } }&quot;&gt;&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7F16\u7A0B\u5F0F\u5BFC\u822A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this.$router.push(&#39;/home&#39;)

this.$router.push({ name: &#39;Home&#39; })

this.$router.push({ name: &#39;Home&#39;, params: { id: 1 } })

this.$router.push({ path: &#39;/home&#39;, query: { id: 1 } })

// \u4E0D\u4F1A\u8BB0\u5F55\u672C\u6B21\u5386\u53F2
this.$router.replace(&#39;/home&#39;)

// \u8DF3\u8F6C\u5230\u5386\u53F2\u7684\u67D0\u4E00\u6B21\uFF0C\u5982\u679C\u662F\u8D1F\u6570\u5C31\u662F\u540E\u9000
this.$router.go(-1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#vue-router-\u793A\u4F8B" aria-hidden="true">#</a> Vue Router \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import VueRouter from &#39;vue-router&#39;

// \u6CE8\u518C\u8DEF\u7531\u63D2\u4EF6
Vue.use(VueRouter)

const router = new VueRouter({
  mode: &quot;history&quot;,
  routes: [
    {
      name: &quot;A&quot;,
      path: &quot;/a&quot;,
      component: () =&gt; import(&quot;@/views/A.vue&quot;)
    }, 
    {
      name: &quot;B&quot;,
      path: &quot;/b&quot;,
      redirect: &#39;/b/b1&#39;,
      component: () =&gt; import(&quot;@/views/B.vue&quot;),
      children: [
        {
          name: &quot;B1&quot;,
          path: &quot;b1&quot;,
          component: () =&gt; import(&quot;@/views/B1.vue&quot;)
        }, 
        {
          name: &quot;B2&quot;,
          path: &quot;b2/:id&quot;,
          props: true, // \u5C06 url \u4E2D\u7684\u53C2\u6570\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u901A\u8FC7 props \u6765\u63A5\u6536
          component: () =&gt; import(&quot;@/views/B2.vue&quot;)
        }
      ]
    }
  ]
})

export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2><h3 id="vuex-\u6709\u54EA\u4E9B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#vuex-\u6709\u54EA\u4E9B\u5C5E\u6027" aria-hidden="true">#</a> Vuex \u6709\u54EA\u4E9B\u5C5E\u6027</h3><p>State\u3001Getters\u3001Mutations\u3001Actions\u3001Modules</p><ul><li>State</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u57FA\u672C\u6570\u636E\u5B58\u50A8
this.$store.state.xxx \u5C5E\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Getters</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4ECE\u57FA\u672C\u6570\u636E\u6D3E\u751F\u51FA\u7684\u6570\u636E\uFF0C\u7C7B\u4F3C\u4E8E\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4E0D\u8FC7\u4E0D\u5177\u5907\u7F13\u5B58\u6027
this.$store.getters.xxx \u5C5E\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mutations</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u66F4\u6539 vuex \u4E2D state \u6570\u636E\uFF0C\u53EA\u80FD\u8FDB\u884C\u540C\u6B65\u64CD\u4F5C
this.$store.commit(&#39;xxx \u65B9\u6CD5\u540D&#39;, &#39;\u503C&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Actions</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0E Mutations \u5DEE\u4E0D\u591A\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E Actions \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C
this.$store.dispatch(&#39;xxx \u65B9\u6CD5\u540D&#39;, &#39;\u503C&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Modules</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C06 Vuex \u4E2D\u7684 Store \u5206\u5272\u6210\u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u5757\u62E5\u6709\u81EA\u5DF1\u7684 State\u3001Getters\u3001Mutations\u3001Actions 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mutations-\u548C-actions-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#mutations-\u548C-actions-\u7684\u533A\u522B" aria-hidden="true">#</a> Mutations \u548C Actions \u7684\u533A\u522B</h3><p>\u603B\u4F53\u800C\u8A00\uFF0C\u4E24\u8005\u5DEE\u4E0D\u591A\uFF0C\u533A\u522B\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u70B9\uFF1A</p><ul><li>Action \u63D0\u4EA4\u7684\u662F Mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001</li><li>Action \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C</li></ul><h3 id="vuex-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#vuex-\u793A\u4F8B" aria-hidden="true">#</a> Vuex \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;

// \u4F7F\u7528 vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    incrementCount(state, getters) {
      return state.count + 10;
    }
  },
  mutations: {
    incrementSync(state, payload) {
      state.count += payload.num;
    }
  },
  actions: {
    incrementAsync(context, payload) {
      let num = payload.num;
      setTimeout(() =&gt; {
        context.commit(&#39;incrementSync&#39;, {
          num
        })
      }, 1000);
    }
  }
})

export defalut store

-------------------------------------

// \u8C03\u7528 state
this.$store.state.count

// \u8C03\u7528 getters
this.$store.getters.incrementCount

// \u8C03\u7528 mutations
this.$store.commit(&#39;incrementSync&#39;, {
  num: 10
})

// \u8C03\u7528 actions
this.$store.dispatch(&#39;incrementAsync&#39;, {
  num: 10
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-3-x" tabindex="-1"><a class="header-anchor" href="#vue-3-x" aria-hidden="true">#</a> Vue 3.x</h2><h3 id="\u6709\u4EC0\u4E48\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u6709\u4EC0\u4E48\u53D8\u5316" aria-hidden="true">#</a> \u6709\u4EC0\u4E48\u53D8\u5316</h3><ul><li>\u54CD\u5E94\u5F0F\u539F\u7406\u7684\u6539\u53D8</li><li>\u7EC4\u5408\u5F0F API \u7684\u5F15\u5165</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;button @click=&quot;increment&quot;&gt;
    Count: {{ count }}
  &lt;/button&gt;
&lt;/template&gt;
 
&lt;script&gt;
// Composition API \u5C06\u7EC4\u4EF6\u5C5E\u6027\u66B4\u9732\u4E3A\u51FD\u6570\uFF0C\u56E0\u6B64\u7B2C\u4E00\u6B65\u662F\u5BFC\u5165\u6240\u9700\u7684\u51FD\u6570
import { ref, computed, onMounted } from &#39;vue&#39;
 
export default {
  setup(props, context) {
    // \u5BF9\u5E94\u4E8E Vue2 \u4E2D\u7684 data \u51FD\u6570
    const count = ref(0)
 
    // \u5BF9\u5E94\u4E8E Vue2 \u4E2D\u7684\u65B9\u6CD5
    function increment() {
      count.value++
    }
    
    // \u5BF9\u5E94\u4E8E Vue2 \u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027
    const twiceCount = computed(() =&gt; { count.value * 2 })
    
    watch(count, (newVal, oldVal) =&gt; {
      console.log(newVal)
    })
    
    // \u5BF9\u5E94\u4E8E Vue2 \u4E2D\u7684 mounted \u58F0\u660E\u5468\u671F
    onMounted(() =&gt; {
      console.log(&#39;component mounted!&#39;)
    })

    return {
      count,
      increment,
      twiceCount
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5BF9\u6BD4" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5BF9\u6BD4</h3><table><thead><tr><th>Vue2</th><th>Vue3</th></tr></thead><tbody><tr><td>beforeCreate</td><td>\u274Csetup\uFF08\u66FF\u4EE3\uFF09</td></tr><tr><td>created</td><td>\u274Csetup\uFF08\u66FF\u4EE3\uFF09</td></tr><tr><td>beforeMount</td><td>onBeforeMount</td></tr><tr><td>mounted</td><td>onMounted</td></tr><tr><td>beforeUpdate</td><td>onBeforeUpdate</td></tr><tr><td>updated</td><td>onUpdated</td></tr><tr><td>beforeDestory</td><td>onBeforeUnmount</td></tr><tr><td>destoryed</td><td>onUnMounted</td></tr><tr><td>activated</td><td>onActivated</td></tr><tr><td>deactivated</td><td>onDeactivated</td></tr></tbody></table>`,90),s=[l];function a(r,u){return i(),n("div",null,s)}var c=e(t,[["render",a],["__file","vue.html.vue"]]);export{c as default};
