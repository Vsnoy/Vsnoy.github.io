import{_ as e,o as n,c as i,d as s}from"./app.3fccbc48.js";const d={},l=s(`<h1 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h1><h2 id="ui-\u5E93" tabindex="-1"><a class="header-anchor" href="#ui-\u5E93" aria-hidden="true">#</a> UI \u5E93</h2><h3 id="antd-pro" tabindex="-1"><a class="header-anchor" href="#antd-pro" aria-hidden="true">#</a> Antd Pro</h3><h4 id="protable-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#protable-\u7EC4\u4EF6" aria-hidden="true">#</a> ProTable \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- rowKey
- headerTitle
- cardBordered
- columnsState\uFF08\u8868\u683C\u6570\u636E\u7F13\u5B58\uFF09
  - persistenceKey
  - persistenceType
- columns
  - key
  - title
  - tooltip
  - dataIndex
  - valueType
  - valueEnum
  - hideInTable
  - hideInSearch
  - search
    - transform\uFF08\u5E38\u7528\u4E8E\u65F6\u95F4\u533A\u95F4\u7684\u8F6C\u5316\uFF09
  - order
  - width
  - sorter
    - \u4F7F\u7528\u683C\u5F0F\uFF1A(a, b) =&gt; a.xxx - b.xxx
  - ellipsis\uFF08\u81EA\u52A8\u7F29\u7565\uFF09
  - render\uFF08\u6E32\u67D3\u8868\u683C\u6570\u636E\u5217\u5355\u5143\u683C\u5185\u5BB9\uFF09
  - renderFormItem\uFF08\u6E32\u67D3\u8868\u683C\u6570\u636E\u5217\u5BF9\u5E94\u67E5\u8BE2\u9879\u5185\u5BB9\uFF09
  - formItemProps\uFF08\u53EF\u7528\u4E8E\u914D\u7F6E\u5FC5\u586B\u9879\u63D0\u793A\uFF09
  - fieldProps
  - filters
  - onFilter
  - initialValue\uFF08\u67E5\u8BE2\u8868\u5355\u9879\u521D\u59CB\u503C\uFF09
- request\uFF08\u8BF7\u6C42\u8868\u683C\u6570\u636E\uFF0C\u5BF9\u8FD4\u56DE\u683C\u5F0F\u6709\u4E25\u683C\u8981\u6C42\uFF09
  - \u4E0D\u5206\u9875\u8FD4\u56DE\u683C\u5F0F\uFF1A{data: [], total: 20, success: true}
  - \u5206\u9875\u8FD4\u56DE\u683C\u5F0F\uFF1A {data: [], pageSize: 10, current: 1, total: 20, success: true}
- actionRef
- options
  - density
  - fullScreen
  - reload
  - setting
- search
  - optionRender
  - collapsed
  - defaultCollapsed
- pagination
- editable
  - type\uFF08\u8BBE\u7F6E\u4E3A multiple\uFF0C\u53EF\u540C\u65F6\u7F16\u8F91\u591A\u884C\uFF09
- toolbar
- toolBarRender
- dateFormatter
- expandable\uFF08\u5D4C\u5957\u8868\u683C\uFF09
- copyable
- rowSelection\uFF08\u6279\u91CF\u64CD\u4F5C\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="proform-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#proform-\u7EC4\u4EF6" aria-hidden="true">#</a> ProForm \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- submitter
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[l];function a(t,v){return n(),i("div",null,r)}var c=e(d,[["render",a],["__file","package.html.vue"]]);export{c as default};
