import{_ as i,o as s,c as l,a as e,b as a,d as t,e as d,r}from"./app.3a5b5902.js";const v={},c=t(`<h1 id="\u7ADE\u6001" tabindex="-1"><a class="header-anchor" href="#\u7ADE\u6001" aria-hidden="true">#</a> \u7ADE\u6001</h1><p>\u4EC0\u4E48\u662F\u7ADE\u6001\uFF1F</p><p>\u6267\u884C\u66F4\u65E9\u4F46\u8FD4\u56DE\u66F4\u665A\u7684\u60C5\u51B5\u4F1A\u5BF9\u540E\u6765\u6700\u65B0\u7ED3\u679C\u8FDB\u884C\u8986\u76D6\u3002<br> \u6267\u884C\u66F4\u665A\u4F46\u8FD4\u56DE\u7ED3\u679C\u66F4\u65E9\u7684\u60C5\u51B5\u4F1A\u5148\u4E00\u6B65\u8FDB\u884C\u5C55\u793A\u3002</p><p>\u4E3E\u4E2A\u6817\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Search() {
  // \u641C\u7D22\u8F93\u5165\u8BCD
  const [value, setValue] = useState(&#39;&#39;)

  // \u641C\u7D22\u8054\u60F3\u5217\u8868
  const [list, setList] = useState([])

  // \u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42
  const fetchData = () =&gt;
    new Promise(resolve =&gt; {
      setTimeout(() =&gt; {
        resolve(list)
      }, Math.random() * 1000 + 1000)
    })

  const handleChange = e =&gt; {
    setValue(e.target.value)

    const list = await fetchList()
    setList(list)
  }

  return (
    &lt;&gt;
      &lt;input type=&quot;text&quot; value={this.value} onChange={handleChange}/&gt;
      &lt;ul&gt;
        { 
          list.map(item =&gt; &lt;li key={item.id} value={item.value} /&gt;) 
        }
      &lt;/ul&gt;
    &lt;/&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u641C\u7D22\u8054\u60F3\u7684\u7B80\u5355\u6848\u4F8B\uFF0C\u7ADE\u6001\u5728\u8FD9\u91CC\u7684\u8868\u73B0\u5F62\u5F0F\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u7531\u4E8E\u5F02\u6B65\u8BF7\u6C42\u8FD4\u56DE\u65F6\u95F4\u7684\u4E0D\u786E\u5B9A\u6027\uFF0C\u540E\u6765\u7684\u641C\u7D22\u8054\u60F3\u53EF\u80FD\u6BD4\u5148\u524D\u7684\u641C\u7D22\u8054\u60F3\u5148\u4E00\u6B65\u8FD4\u56DE\u6E32\u67D3\uFF0C\u800C\u5148\u524D\u7684\u641C\u7D22\u8054\u60F3\u53EF\u80FD\u8986\u76D6\u540E\u6765\u7684\u641C\u7D22\u8054\u60F3\u3002</p><p>\u4F60\u53EF\u80FD\u4F1A\u8BF4\u8FD9\u91CC\u6CA1\u6709\u7528\u4E0A\u9632\u6296\u554A\uFF0C\u8FD9\u4E2A\u573A\u666F\u4E0B\u4F7F\u7528\u9632\u6296\u518D\u9002\u5408\u4E0D\u8FC7\uFF0C\u7136\u800C\u672F\u4E1A\u6709\u4E13\u653B\uFF0C\u9632\u6296\u5E76\u4E0D\u80FD\u89E3\u51B3\u7ADE\u6001\u95EE\u9898\u3002\u9632\u6296\u63A7\u5236\u7684\u662F\u5F02\u6B65\u8BF7\u6C42\u7684\u9891\u7387\uFF0C\u65E0\u6CD5\u63A7\u5236\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u7ED3\u679C\u7684\u8FD4\u56DE\u65F6\u95F4\uFF0C\u81EA\u7136\u5C31\u6CA1\u6709\u6548\u679C\u4E86\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u5904\u7406\u7ADE\u6001\u95EE\u9898\u5462\uFF1F</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,10),u={href:"https://github.com/beichensky/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"},m=d("\u7ADE\u6001");function o(b,h){const n=r("ExternalLinkIcon");return s(),l("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[m,a(n)])])])])}var _=i(v,[["render",o],["__file","\u7ADE\u6001.html.vue"]]);export{_ as default};
