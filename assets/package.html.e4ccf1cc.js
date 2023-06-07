import{_ as e,o as i,c as n,d as s}from"./app.dcbbd10f.js";const a={},d=s(`<h1 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h1><h2 id="ui-\u5E93" tabindex="-1"><a class="header-anchor" href="#ui-\u5E93" aria-hidden="true">#</a> UI \u5E93</h2><h3 id="antd-pro" tabindex="-1"><a class="header-anchor" href="#antd-pro" aria-hidden="true">#</a> Antd Pro</h3><h4 id="protable-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#protable-\u7EC4\u4EF6" aria-hidden="true">#</a> ProTable \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- rowKey
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
  - renderFormItem\uFF08\u6E32\u67D3\u8868\u683C\u6570\u636E\u5217\u5BF9\u5E94\u67E5\u8BE2\u9879\u5185\u5BB9\uFF0C\u53EF\u7528\u4E8E\u4E2A\u6027\u5316\u5B9A\u4E49\u67E5\u8BE2\u9879\uFF09
  - formItemProps
  - fieldProps
  - filters
  - onFilter
  - initialValue\uFF08\u67E5\u8BE2\u8868\u5355\u9879\u521D\u59CB\u503C\uFF09
- request\uFF08\u8BF7\u6C42\u6570\u636E\uFF0C\u5BF9\u8FD4\u56DE\u683C\u5F0F\u6709\u4E25\u683C\u8981\u6C42\uFF09
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
- formRef
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="modalform-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#modalform-\u7EC4\u4EF6" aria-hidden="true">#</a> ModalForm \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- title
- open
- modalProps
  - destroyOnClose
  - onCancel
- onFinish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prodescriptions-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#prodescriptions-\u7EC4\u4EF6" aria-hidden="true">#</a> ProDescriptions \u7EC4\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- title
- columns
- dataSource
- request\uFF08\u8BF7\u6C42\u6570\u636E\uFF0C\u5BF9\u8FD4\u56DE\u683C\u5F0F\u6709\u4E25\u683C\u8981\u6C42\uFF09
  - \u683C\u5F0F\uFF1A{data: {}, success: true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5E93" aria-hidden="true">#</a> \u8DEF\u7531\u5E93</h2><h3 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> React Router</h3><ul><li>useNavigate\uFF08\u8DEF\u7531\u8DF3\u8F6C\uFF09</li><li>useParams\uFF08\u83B7\u53D6\u52A8\u6001\u8DEF\u7531 params \u53C2\u6570\uFF0C\u5F62\u5982\uFF1A/a/:id\uFF09</li><li>useSearchParams\uFF08\u83B7\u53D6\u8DEF\u5F84\u540E\u9762\u7684 search \u53C2\u6570\uFF0C\u5F62\u5982\uFF1A/a?name=violet\uFF09</li><li>useLocation\uFF08\u83B7\u53D6\u8DEF\u7531\u8DF3\u8F6C\u65F6\u9644\u5E26\u7684 state \u53C2\u6570\uFF09</li><li>useRoutes</li></ul><h2 id="\u72B6\u6001\u5E93" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u5E93" aria-hidden="true">#</a> \u72B6\u6001\u5E93</h2><h3 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx" aria-hidden="true">#</a> Mobx</h3><ul><li>when</li><li>autorun</li><li>reaction</li></ul><h3 id="recoil" tabindex="-1"><a class="header-anchor" href="#recoil" aria-hidden="true">#</a> Recoil</h3><ul><li>Atom\uFF08\u72B6\u6001\uFF09</li><li>Selector\uFF08\u6D3E\u751F\u72B6\u6001\uFF09</li></ul><hr><ul><li>useRecoilState</li><li>useRecoilValue</li><li>useSetRecoilState</li></ul><h2 id="\u5DE5\u5177\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u5E93" aria-hidden="true">#</a> \u5DE5\u5177\u5E93</h2><h3 id="qs" tabindex="-1"><a class="header-anchor" href="#qs" aria-hidden="true">#</a> qs</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// parse \u89E3\u6790 url
const url = &#39;https://www.example.com/search?name=violet&amp;age=20&#39;;
const params = qs.parse(url.split(&#39;?&#39;)[1]);

// stringify \u62FC\u63A5 url
const params = {name: &#39;violet&#39;, age: 20}
let url = &#39;https://www.example.com/search&#39;
url += \`?\${qs.stringify(params)}\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="moment" tabindex="-1"><a class="header-anchor" href="#moment" aria-hidden="true">#</a> moment</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>years | quarters | months | weeks | days | hours | minutes | seconds | milliseconds</li><li>y | Q | M | w | d | h | m | s | ms</li></ul></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u683C\u5F0F\u5316\u65E5\u671F\u5B57\u7B26\u4E32
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="currency" tabindex="-1"><a class="header-anchor" href="#currency" aria-hidden="true">#</a> currency</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u52A0\u51CF\u4E58\u9664
currency(xxx).add(xxx)
currency(xxx).subtract(xxx)
currency(xxx).multipy(xxx)
currency(xxx).divide(xxx)

// \u683C\u5F0F\u8F6C\u6362\uFF08\u9ED8\u8BA4\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570\uFF0C\u56DB\u820D\u4E94\u5165\uFF09
currency(xxx).value

// \u8BBE\u7F6E\u7CBE\u5EA6
currency(xxx, { precision: 3 })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[d];function r(t,c){return i(),n("div",null,l)}var u=e(a,[["render",r],["__file","package.html.vue"]]);export{u as default};
