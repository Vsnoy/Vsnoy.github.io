import{_ as e,o as n,c as i,d as s}from"./app.8fe020dd.js";const d={},a=s(`<h1 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h1><h2 id="ui-\u5E93" tabindex="-1"><a class="header-anchor" href="#ui-\u5E93" aria-hidden="true">#</a> UI \u5E93</h2><h3 id="antd-pro" tabindex="-1"><a class="header-anchor" href="#antd-pro" aria-hidden="true">#</a> Antd Pro</h3><h4 id="protable-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#protable-\u7EC4\u4EF6" aria-hidden="true">#</a> ProTable \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- rowKey

- headerTitle

- columns
  - title
  - tooltip
  - dataIndex
  - valueType
  - hideInTable
  - hideInSearch
  - fieldProps
  - width
  - ellipsis
  - render
  
- request
  - \u8FD4\u56DE\u683C\u5F0F\u6709\u4E25\u683C\u8981\u6C42
  - \u4E0D\u5206\u9875\u8FD4\u56DE\u683C\u5F0F\uFF1A{data: [], total: 20, success: true}
  - \u5206\u9875\u8FD4\u56DE\u683C\u5F0F\uFF1A {data: [], pageSize: 10, current: 1, total: 20, success: true}

- actionRef

- options

- search

- pagination

- toolBarRender
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="proform-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#proform-\u7EC4\u4EF6" aria-hidden="true">#</a> ProForm \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- submitter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5DE5\u5177\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u5E93" aria-hidden="true">#</a> \u5DE5\u5177\u5E93</h2><h3 id="moment" tabindex="-1"><a class="header-anchor" href="#moment" aria-hidden="true">#</a> moment</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>years | quarters | months | weeks | days | hours | minutes | seconds | milliseconds</li><li>y | Q | M | w | d | h | m | s | ms</li></ul></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u683C\u5F0F\u5316\u65E5\u671F\u5B57\u7B26\u4E32
moment(string).format(&#39;YYYY-MM-DD HH:mm:ss&#39;)

// \u65E5\u671F\u52A0\u51CF
moment(string).add(number, string)
moment(string).subtract(number, string)

// \u83B7\u53D6\u65E5\u671F\u65F6\u95F4\u5355\u4F4D\u5934\u5C3E
moment(string).startOf(string)
moment(string).endOf(string)

// \u83B7\u53D6\u65E5\u671F\u3001\u5E74\u3001\u5B63\u5EA6\u3001\u6708\u3001\u5468\u3001\u5468\u51E0\uFF080-6\uFF09\u3001\u65F6\u3001\u5206\u3001\u79D2\u3001\u6BEB\u79D2
moment(string).date()
moment(string).year()
moment(string).quarter()
moment(string).month()
moment(string).week()
moment(string).day()
moment(string).hour()
moment(string).minute()
moment(string).second()
moment(string).millisecond()

// \u83B7\u53D6\u65F6\u95F4\u5DEE
moment(string).diff(moment(string), string)

// \u5224\u65AD\u65E5\u671F\u662F\u5426\u5728\u53E6\u4E00\u4E2A\u65E5\u671F\u4E4B\u524D\u3001\u4E4B\u540E\u8FD8\u662F\u4E4B\u95F4
moment(string).isBefore(string)
moment(string).isAfter(string)
moment(string).isBetween(string, string)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[a];function l(t,m){return n(),i("div",null,r)}var c=e(d,[["render",l],["__file","package.html.vue"]]);export{c as default};
