import{_ as s,o as a,c as t,a as e,b as n,e as l,d,r}from"./app.505a6d2c.js";const v={},u=l(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="\u6307\u4EE4\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u5217\u8868" aria-hidden="true">#</a> \u6307\u4EE4\u5217\u8868</h2><ul><li>v-if</li><li>v-else</li><li>v-show</li><li>v-on</li><li>v-bind</li><li>v-for</li><li>v-model</li><li>v-cloak</li><li>\u7B49\u7B49</li></ul><h2 id="\u4FEE\u9970\u7B26\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7B26\u5217\u8868" aria-hidden="true">#</a> \u4FEE\u9970\u7B26\u5217\u8868</h2><ul><li><p>\u4E8B\u4EF6\u4FEE\u9970\u7B26</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.stop \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u884C\u4E3A
.prevent \u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A
.self \u4E8B\u4EF6\u53EA\u5728\u81EA\u8EAB\u89E6\u53D1
.once \u4E8B\u4EF6\u53EA\u89E6\u53D1\u4E00\u6B21
.native \u5F53\u4F5C\u539F\u751F\u6807\u7B7E\u770B\u5F85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6309\u952E\u4FEE\u9970\u7B26</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.keyup \u952E\u76D8\u62AC\u8D77
.keydown \u952E\u76D8\u6309\u4E0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8868\u5355\u4FEE\u9970\u7B26</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.lazy \u5EF6\u8FDF\u53CC\u5411\u6570\u636E\u5B9E\u65F6\u7ED1\u5B9A
.trim \u53BB\u9664\u4E24\u8FB9\u7A7A\u683C
.number \u9650\u5236\u8F93\u5165\u4E3A\u6570\u5B57
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7B49\u7B49</p></li></ul>`,5),c={href:"https://blog.csdn.net/m0_67381422/article/details/125358264",target:"_blank",rel:"noopener noreferrer"},o=d("Vue \u5E38\u7528\u4FEE\u9970\u7B26"),m={href:"https://blog.csdn.net/lgno2/article/details/122572348",target:"_blank",rel:"noopener noreferrer"},b=d("Vue 32 \u4E2A\u4FEE\u9970\u7B26"),h=l(`<h2 id="v-if-v-show" tabindex="-1"><a class="header-anchor" href="#v-if-v-show" aria-hidden="true">#</a> v-if &amp; v-show</h2><ul><li><code>v-if</code> \u662F\u52A8\u6001\u5730\u5411 <code>DOM</code> \u6811\u5185\u6DFB\u52A0\u6216\u8005\u5220\u9664 <code>DOM</code> \u5143\u7D20\uFF0C\u6027\u80FD\u6D88\u8017\u5927\uFF0C\u9002\u5408\u5355\u6B21\u5207\u6362\u3002</li><li><code>v-show</code> \u662F\u901A\u8FC7\u8BBE\u7F6E <code>DOM</code> \u5143\u7D20\u7684 <code>display</code> \u6837\u5F0F\u5C5E\u6027\u63A7\u5236\u663E\u9690\uFF0C\u6027\u80FD\u6D88\u8017\u4F4E\uFF0C\u9002\u5408\u9891\u7E41\u5207\u6362\u3002</li></ul><h2 id="created-mounted" tabindex="-1"><a class="header-anchor" href="#created-mounted" aria-hidden="true">#</a> created &amp; mounted</h2><ul><li>created\uFF1A\u5728\u6A21\u677F\u6E32\u67D3\u6210 <code>HTML</code> \u524D\u8C03\u7528\uFF0C\u5373\u901A\u5E38\u521D\u59CB\u5316\u67D0\u4E9B\u5C5E\u6027\u503C\uFF0C\u7136\u540E\u518D\u6E32\u67D3\u6210\u89C6\u56FE\u3002</li><li>mounted\uFF1A\u5728\u6A21\u677F\u6E32\u67D3\u6210 <code>HTML</code> \u540E\u8C03\u7528\uFF0C\u901A\u5E38\u662F\u521D\u59CB\u5316\u9875\u9762\u5B8C\u6210\u540E\uFF0C\u518D\u5BF9 <code>HTML</code> \u7684 <code>DOM</code> \u8282\u70B9\u8FDB\u884C\u4E00\u4E9B\u9700\u8981\u7684\u64CD\u4F5C\u3002</li></ul><h2 id="methods-computed-watch" tabindex="-1"><a class="header-anchor" href="#methods-computed-watch" aria-hidden="true">#</a> methods &amp; computed &amp; watch</h2><ul><li>methods<br> \u6CA1\u6709\u7F13\u5B58\uFF0C\u53EA\u8981\u8C03\u7528\uFF0C\u5C31\u4F1A\u6267\u884C\u3002</li><li>computed<br> \u5177\u6709\u7F13\u5B58\u6027\uFF0C\u4F9D\u8D56\u4E8E\u5176\u4ED6\u5C5E\u6027\u503C\uFF0C\u53EA\u6709\u5F53\u5C5E\u6027\u503C\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u624D\u4F1A\u91CD\u65B0\u8BA1\u7B97\u3002</li><li>watch<br> \u6CA1\u6709\u7F13\u5B58\uFF0C\u76D1\u542C data \u4E2D\u7684\u5C5E\u6027\uFF0C\u5C5E\u6027\u503C\u53EA\u8981\u53D1\u751F\u53D8\u5316\u5C31\u4F1A\u6267\u884C\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default {
  data() {
    return {
      firstName: &#39;Violet&#39;,
      lastName: &#39;Evergarden&#39;,
      
      msg: &#39;&#39;
    }
  },
  methods:{
    getFullName() {
      console.log(this.fullNameA, this.fullNameB)
    }
  },
  computed:{
    fullNameA() { // \u4EC5\u8BFB\u53D6
      return this.firstName + &#39; &#39; + this.lastName
    },
    fullNameB: { // \u8BFB\u53D6\u548C\u8BBE\u7F6E
      get() {
        return this.firstName + &#39; &#39; + this.lastName
      }
      set(val) {
        this.msg = val
      }
    }
  },
  watch:{
    firstName(newVal, oldVal) {
      this.fullName = newVal + &#39; &#39; + this.lastName
    },
    lastName: {
      handler(newVal, oldVal) {
        this.fullName = this.firstName + &#39; &#39; + newVal
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-reactive" tabindex="-1"><a class="header-anchor" href="#ref-reactive" aria-hidden="true">#</a> ref &amp; reactive</h2><ul><li>ref \u901A\u5E38\u7528\u6765\u5B9A\u4E49\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08\u4E5F\u652F\u6301\u5BF9\u8C61\u548C\u6570\u7EC4\uFF09\uFF0Creactive \u901A\u5E38\u7528\u6765\u5B9A\u4E49\u5BF9\u8C61\u548C\u6570\u7EC4</li><li>ref \u5728 script \u4E2D\u8BBF\u95EE\u6570\u636E\u65F6\u9700\u8981\u52A0 .value\uFF0Creactive \u4E0D\u9700\u8981\u52A0</li><li>ref\u3001reactive \u8D4B\u503C\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let ref_obj = ref({a: 1})
let reactive_obj = reactive({a: 1})

ref_obj.value = {a: 2} // ref \u76F4\u63A5\u8D4B\u503C\u4E0D\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F
reactive_obj = {a: 2} // reactive \u76F4\u63A5\u8D4B\u503C\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let ref_obj = ref({a1: 1, b1: {val: 2}})
let reactive_obj = reactive({a2: 1, b2: {val: 2}})

let {a1, b1} = ref_obj.value
let {a2, b2} = reactive_obj

// \u4E0D\u8BBA\u662F ref \u8FD8\u662F reactive \u89E3\u6784\u8D4B\u503C\uFF0C\u89E3\u6784\u57FA\u672C\u6570\u636E\u7C7B\u578B\u65F6\uFF0C\u90FD\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F
a1 = 2
a2 = 2

// \u4E0D\u8BBA\u662F ref \u8FD8\u662F reactive \u89E3\u6784\u8D4B\u503C\uFF0C\u89E3\u6784\u5F15\u7528\u6570\u636E\u7C7B\u578B\u65F6\uFF0C\u90FD\u4E0D\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F
b1.val = 3
b2.val = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u672C\u5E94\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u64CD\u4F5C\u573A\u666F\u4E2D\uFF0C\u82E5\u540C\u65F6\u5B58\u5728\u672A\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u64CD\u4F5C\uFF0C\u5219\u672C\u5E94\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u64CD\u4F5C\u4F1A\u4FDD\u6301\u54CD\u5E94\u5F0F\u3002\u539F\u56E0\u4E0D\u660E\uFF0C\u8FD8\u5F85\u6DF1\u5165\u7814\u7A76\u3002</p></div><h2 id="watch-watcheffect" tabindex="-1"><a class="header-anchor" href="#watch-watcheffect" aria-hidden="true">#</a> watch &amp; watchEffect</h2><ul><li>watch \u53EF\u4EE5\u8BBF\u95EE\u4FA6\u542C\u72B6\u6001\u53D8\u5316\u524D\u540E\u7684\u503C\uFF0C\u800C watchEffect \u65E0\u6CD5\u8BBF\u95EE</li><li>watch \u9ED8\u8BA4\u521D\u59CB\u65F6\u4E0D\u4F1A\u6267\u884C\u56DE\u8C03\uFF0C\u800C watchEffect \u4F1A</li></ul><h2 id="slot-\u63D2\u69FD\u7684\u4E09\u79CD\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#slot-\u63D2\u69FD\u7684\u4E09\u79CD\u7528\u6CD5" aria-hidden="true">#</a> slot \u63D2\u69FD\u7684\u4E09\u79CD\u7528\u6CD5</h2><p>\u63D2\u69FD\u53EF\u5206\u4E3A\u4E09\u79CD\uFF1A\u9ED8\u8BA4\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD\u3002</p><ul><li>\u9ED8\u8BA4\u63D2\u69FD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\uFF1A
&lt;Child&gt;
  &lt;template&gt;\u9ED8\u8BA4\u63D2\u69FD&lt;/template&gt;
&lt;/Child&gt;

\u5B50\u7EC4\u4EF6\uFF1A
&lt;div&gt;
  &lt;slot&gt;\u9ED8\u8BA4\u63D2\u69FD - \u540E\u5907\u5185\u5BB9&lt;/slot&gt;
&lt;/div&gt;

\u6E32\u67D3\u6210\uFF1A
&lt;div&gt;
  &lt;div&gt;\u9ED8\u8BA4\u63D2\u69FD&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5177\u540D\u63D2\u69FD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\uFF1A
&lt;Child&gt;
  &lt;template v-slot:violet&gt;\u5177\u540D\u63D2\u69FD&lt;/template&gt;
&lt;/Child&gt;

\u5B50\u7EC4\u4EF6\uFF1A
&lt;div&gt;
  &lt;slot name=&quot;violet&quot;&gt;\u5177\u540D\u63D2\u69FD - \u540E\u5907\u5185\u5BB9&lt;/slot&gt;
&lt;/div&gt;

\u6E32\u67D3\u6210\uFF1A
&lt;div&gt;
  \u5177\u540D\u63D2\u69FD
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F5C\u7528\u57DF\u63D2\u69FD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\uFF1A
&lt;Child&gt;
  &lt;template v-slot:violet=&quot;slotProps&quot;&gt;
    \u4F5C\u7528\u57DF\u63D2\u69FD - {{slotProps.user.name}}
  &lt;/template&gt;
&lt;/Child&gt;

\u5B50\u7EC4\u4EF6\uFF1A
&lt;div&gt;
    &lt;slot name=&quot;violet&quot; :user=&quot;user&quot;&gt;\u4F5C\u7528\u57DF\u63D2\u69FD - \u540E\u5907\u5185\u5BB9&lt;/slot&gt;
&lt;/div&gt;

data(){
  return {
    user: {
      name: &#39;violet&#39;
    }
  }
}

\u6E32\u67D3\u4E3A\uFF1A
&lt;div&gt;
  \u4F5C\u7528\u57DF\u63D2\u69FD - violet
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-model-\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#v-model-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> v-model \u5B9E\u73B0\u539F\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;input v-model=&quot;value&quot; /&gt;
&lt;input v-bind:value=&quot;value&quot; v-on:input=&quot;value = $event.target.value&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-\u4E3A\u4EC0\u4E48\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#data-\u4E3A\u4EC0\u4E48\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570" aria-hidden="true">#</a> data \u4E3A\u4EC0\u4E48\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570</h2><p><code>Vue</code> \u7EC4\u4EF6\u53EF\u4EE5\u590D\u7528\uFF0C\u5219\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u5982\u679C\u4F7F\u7528\u5BF9\u8C61\u5F62\u5F0F\u5B9A\u4E49 <code>data</code> \uFF0C\u5219\u4F1A\u5BFC\u81F4\u5B83\u4EEC\u5171\u7528\u4E00\u4E2A <code>data</code> \u5BF9\u8C61\uFF0C\u90A3\u4E48\u72B6\u6001\u53D8\u66F4\u5C06\u4F1A\u5F71\u54CD\u6240\u6709\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><h2 id="vue2-\u54CD\u5E94\u5F0F\u7F3A\u70B9\u53CA\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#vue2-\u54CD\u5E94\u5F0F\u7F3A\u70B9\u53CA\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> Vue2 \u54CD\u5E94\u5F0F\u7F3A\u70B9\u53CA\u89E3\u51B3\u65B9\u6848</h2><ul><li><p>\u65E0\u6CD5\u76D1\u6D4B\u5230\u5BF9\u8C61\u5C5E\u6027\u7684\u65B0\u589E\u6216\u5220\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this.$set(obj, property, value)
this.$delete(obj, property)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u65E0\u6CD5\u76D1\u6D4B\u5230\u6570\u7EC4\u7684\u53D8\u5316\uFF08push\u3001pop\u3001shift\u3001unshift\u3001splice\u3001sort\u3001reverse \u9664\u5916\uFF09</p><ul><li><p>\u5BF9\u6570\u7EC4\u57FA\u4E8E\u4E0B\u6807\u7684\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this.$set(arr, index, value)
this.arr.splice(index, 1, value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5BF9\u6570\u7EC4 length \u7684\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E00\u822C\u8981\u4FEE\u6539 length\uFF0C\u90FD\u662F\u4E3A\u4E86\u628A\u6570\u7EC4\u7F6E\u7A7A
this.arr = []
this.arr.splice(0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u4E3A\u4EC0\u4E48\u8981\u907F\u514D-v-if-\u548C-v-for-\u8FDE\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u907F\u514D-v-if-\u548C-v-for-\u8FDE\u7528" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u907F\u514D v-if \u548C v-for \u8FDE\u7528</h2><p><code>Vue2</code> \u4E2D <code>v-for</code> \u4F18\u5148\u7EA7\u9AD8\u4E8E <code>v-if</code> \uFF0C<code>Vue3</code> \u4E2D\u5219\u76F8\u53CD\u3002</p><p>\u5728 <code>Vue2</code> \u4E2D\u540C\u65F6\u4F7F\u7528\u65F6\uFF0C<code>v-for</code> \u4F1A\u4F18\u5148\u4F5C\u7528\uFF0C\u9020\u6210\u6027\u80FD\u6D6A\u8D39\uFF1B<br> \u5728 <code>Vue3</code> \u4E2D\u540C\u65F6\u4F7F\u7528\u65F6\uFF0C<code>v-if</code> \u4F1A\u4F18\u5148\u4F5C\u7528\uFF0C\u5BFC\u81F4\u5176\u8BBF\u95EE\u4E0D\u4E86 <code>v-for</code> \u4E2D\u7684\u53D8\u91CF\u3002</p><p>\u4E00\u822C\u6211\u4EEC\u5728\u4E24\u79CD\u5E38\u89C1\u7684\u60C5\u51B5\u4E0B\u4F1A\u503E\u5411\u4E8E\u8FD9\u6837\u505A\uFF1A</p><ul><li>\u4E3A\u4E86\u8FC7\u6EE4\u4E00\u4E2A\u5217\u8868\u4E2D\u7684\u9879\u76EE\uFF08\u6BD4\u5982 v-for=&quot;user in users&quot; v-if=&quot;user.isActive&quot;)\u3002\u5728\u8FD9\u79CD\u60C5\u5F62\u4E0B\uFF0C\u8BF7\u5C06 users \u66FF\u6362\u4E3A\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF08\u6BD4\u5982 activeUsers)\uFF0C\u8BA9\u5176\u8FD4\u56DE\u8FC7\u6EE4\u540E\u7684\u5217\u8868\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li v-for=&quot;user in activeUsers&quot; :key=&quot;user.id&quot;&gt;
    {{ user.name }}
  &lt;/li&gt;
&lt;/ul&gt;

computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E3A\u4E86\u907F\u514D\u6E32\u67D3\u672C\u5E94\u8BE5\u88AB\u9690\u85CF\u7684\u5217\u8868\uFF08\u6BD4\u5982 v-for=&quot;user in users&quot; v-if=&quot;shouldShowUsers&quot;)\u3002\u8FD9\u79CD\u60C5\u5F62\u4E0B\uFF0C\u8BF7\u5C06 v-if \u79FB\u52A8\u81F3\u5BB9\u5668\u5143\u7D20\u4E0A \uFF08\u6BD4\u5982 ul\u3001ol)\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul v-if=&quot;shouldShowUsers&quot;&gt;
  &lt;li v-for=&quot;user in users&quot; :key=&quot;user.id&quot;&gt;
    {{ user.name }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5185\u8C03\u7528\u5F02\u6B65\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5185\u8C03\u7528\u5F02\u6B65\u8BF7\u6C42" aria-hidden="true">#</a> \u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5185\u8C03\u7528\u5F02\u6B65\u8BF7\u6C42</h2><p>\u53EF\u4EE5\u5728\u94A9\u5B50\u51FD\u6570 <code>created</code> \u3001<code>beforeMount</code> \u3001<code>mounted</code> \u4E2D\u8FDB\u884C\u8C03\u7528\uFF0C\u56E0\u4E3A\u5728\u8FD9\u4E09\u4E2A\u94A9\u5B50\u51FD\u6570\u4E2D\uFF0C<code>data</code> \u5DF2\u7ECF\u521B\u5EFA\uFF0C\u53EF\u4EE5\u5C06\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u8FDB\u884C\u8D4B\u503C\u3002</p><p>\u63A8\u8350\u5728 <code>created</code> \u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528\u5F02\u6B65\u8BF7\u6C42\uFF0C\u6709\u4EE5\u4E0B\u4F18\u70B9\uFF1A</p><ul><li>\u80FD\u66F4\u5FEB\u83B7\u53D6\u5230\u670D\u52A1\u7AEF\u6570\u636E\uFF0C\u51CF\u5C11\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\uFF0C\u7528\u6237\u4F53\u9A8C\u66F4\u597D\u3002</li><li>SSR \u4E0D\u652F\u6301 beforeMount\u3001mounted \u94A9\u5B50\u51FD\u6570\uFF0C\u653E\u5728 created \u4E2D\u6709\u52A9\u4E8E\u4E00\u81F4\u6027\u3002</li></ul><h2 id="\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5185\u64CD\u4F5C-dom" tabindex="-1"><a class="header-anchor" href="#\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5185\u64CD\u4F5C-dom" aria-hidden="true">#</a> \u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5185\u64CD\u4F5C DOM</h2><p>\u5728\u94A9\u5B50\u51FD\u6570 <code>mounted</code> \u88AB\u8C03\u7528\u524D\uFF0C<code>Vue</code> \u5DF2\u7ECF\u5C06\u7F16\u8BD1\u597D\u7684\u6A21\u677F\u6302\u8F7D\u5230\u9875\u9762\u4E0A\uFF0C\u6240\u4EE5\u5728 <code>mounted</code> \u4E2D\u53EF\u4EE5\u8BBF\u95EE\u64CD\u4F5C <code>DOM</code> \u3002</p><h2 id="\u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</h2><p>\u4EE5\u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6 <code>mounted</code> \u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u4E3A\u4F8B\uFF0C\u6709\u4EE5\u4E0B\u4E24\u79CD\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Parent.vue
&lt;Child @mounted=&quot;doSomething&quot;/&gt;
    
// Child.vue
mounted() {
  this.$emit(&quot;mounted&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//  Parent.vue
&lt;Child @hook:mounted=&quot;doSomething&quot; &gt;&lt;/Child&gt;
    
//  Child.vue
mounted(){
  console.log(&quot;mounted&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function g(p,f){const i=r("ExternalLinkIcon");return a(),t("div",null,[u,e("p",null,[e("a",c,[o,n(i)]),e("a",m,[b,n(i)])]),h])}var q=s(v,[["render",g],["__file","vue.html.vue"]]);export{q as default};
