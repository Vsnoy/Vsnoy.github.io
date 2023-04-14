import{_ as s,o as t,c as a,a as e,b as l,e as d,d as i,r}from"./app.91713533.js";const c={},v=d('<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><h2 id="\u5B98\u65B9\u91CD\u70B9\u8BED\u5F55\u5907\u5FD8" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u91CD\u70B9\u8BED\u5F55\u5907\u5FD8" aria-hidden="true">#</a> \u5B98\u65B9\u91CD\u70B9\u8BED\u5F55\u5907\u5FD8</h2><ul><li>\u4E00\u4E2A\u5143\u7D20\u7684 <code>key</code> \u6700\u597D\u662F\u8FD9\u4E2A\u5143\u7D20\u5728\u5217\u8868\u4E2D\u62E5\u6709\u7684\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684\u5B57\u7B26\u4E32\u3002\u901A\u5E38\uFF0C\u6211\u4EEC\u4F7F\u7528\u6570\u636E\u4E2D\u7684 <code>id</code> \u6765\u4F5C\u4E3A\u5143\u7D20\u7684 <code>key</code> \u3002\u5F53\u5143\u7D20\u6CA1\u6709\u786E\u5B9A <code>id</code> \u7684\u65F6\u5019\uFF0C\u4E07\u4E0D\u5F97\u5DF2\u4F60\u53EF\u4EE5\u4F7F\u7528\u5143\u7D20\u7D22\u5F15 <code>index</code> \u4F5C\u4E3A <code>key</code> \u3002</li><li>\u5982\u679C\u5217\u8868\u9879\u76EE\u7684\u987A\u5E8F\u53EF\u80FD\u4F1A\u53D8\u5316\uFF0C\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7D22\u5F15\u6765\u7528\u4F5C <code>key</code> \u503C\uFF0C\u56E0\u4E3A\u8FD9\u6837\u505A\u4F1A\u5BFC\u81F4\u6027\u80FD\u53D8\u5DEE\uFF0C\u8FD8\u53EF\u80FD\u5F15\u8D77\u7EC4\u4EF6\u72B6\u6001\u7684\u95EE\u9898\u3002\u5982\u679C\u4F60\u9009\u62E9\u4E0D\u6307\u5B9A\u663E\u5F0F\u7684 <code>key</code> \u503C\uFF0C\u90A3\u4E48 React \u5C06\u9ED8\u8BA4\u4F7F\u7528\u7D22\u5F15\u7528\u4F5C\u4E3A\u5217\u8868\u9879\u76EE\u7684 <code>key</code> \u503C\u3002</li><li>\u6570\u7EC4\u5143\u7D20\u4E2D\u4F7F\u7528\u7684 <code>key</code> \u5728\u5176\u5144\u5F1F\u8282\u70B9\u4E4B\u95F4\u5E94\u8BE5\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\u3002\u7136\u800C\uFF0C\u5B83\u4EEC\u4E0D\u9700\u8981\u662F\u5168\u5C40\u552F\u4E00\u7684\u3002\u5F53\u6211\u4EEC\u751F\u6210\u4E24\u4E2A\u4E0D\u540C\u7684\u6570\u7EC4\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684 <code>key</code> \u503C\u3002</li></ul>',3),u={href:"https://zh-hans.reactjs.org/docs/lists-and-keys.html",target:"_blank",rel:"noopener noreferrer"},o=i("\u5217\u8868 & Key"),m=d("<hr><ul><li>\u4E0E <code>class</code> \u7EC4\u4EF6\u4E2D\u7684 <code>setState</code> \u65B9\u6CD5\u4E0D\u540C\uFF0C<code>useState</code> \u4E0D\u4F1A\u81EA\u52A8\u5408\u5E76\u66F4\u65B0\u5BF9\u8C61\u3002</li><li>\u5982\u679C\u4F60\u7684\u66F4\u65B0\u51FD\u6570\u8FD4\u56DE\u503C\u4E0E\u5F53\u524D <code>state</code> \u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u968F\u540E\u7684\u91CD\u6E32\u67D3\u4F1A\u88AB\u5B8C\u5168\u8DF3\u8FC7\u3002</li><li>\u5982\u679C\u4F60\u66F4\u65B0 <code>State Hook</code> \u540E\u7684 <code>state</code> \u4E0E\u5F53\u524D\u7684 <code>state</code> \u76F8\u540C\u65F6\uFF0C<code>React</code> \u5C06\u8DF3\u8FC7\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3\u5E76\u4E14\u4E0D\u4F1A\u89E6\u53D1 <code>effect</code> \u7684\u6267\u884C\u3002\uFF08 <code>React</code> \u4F7F\u7528 <code>Object.is</code> \u6BD4\u8F83\u7B97\u6CD5 \u6765\u6BD4\u8F83 <code>state</code> \uFF09</li><li>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<code>React</code> \u53EF\u80FD\u4ECD\u9700\u8981\u5728\u8DF3\u8FC7\u6E32\u67D3\u524D\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u3002\u4E0D\u8FC7\u7531\u4E8E <code>React</code> \u4E0D\u4F1A\u5BF9\u7EC4\u4EF6\u6811\u7684\u201C\u6DF1\u5C42\u201D\u8282\u70B9\u8FDB\u884C\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u5927\u53EF\u4E0D\u5FC5\u62C5\u5FC3\u3002\u5982\u679C\u4F60\u5728\u6E32\u67D3\u671F\u95F4\u6267\u884C\u4E86\u9AD8\u5F00\u9500\u7684\u8BA1\u7B97\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 <code>useMemo</code> \u6765\u8FDB\u884C\u4F18\u5316\u3002</li></ul>",2),b={href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate",target:"_blank",rel:"noopener noreferrer"},h=i("Hook API \u7D22\u5F15\u4E4B useState"),g=d('<h2 id="\u5176\u4ED6\u91CD\u70B9\u8BED\u5F55\u5907\u5FD8" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u91CD\u70B9\u8BED\u5F55\u5907\u5FD8" aria-hidden="true">#</a> \u5176\u4ED6\u91CD\u70B9\u8BED\u5F55\u5907\u5FD8</h2><ul><li>\u51FD\u6570\u7EC4\u4EF6\u7684\u6BCF\u4E00\u5E27\u4F1A\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684 <code>props</code>\u3001<code>state</code> \u3001<code>function</code>\u3001<code>effect</code>\u3002</li><li>\u5982\u679C\u67D0\u4E9B\u60C5\u51B5\u4E0B <code>key</code> \u4E0D\u8D77\u4F5C\u7528\uFF08\u53EF\u80FD\u662F\u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u5F00\u9500\u592A\u5927\uFF09</li><li><code>React</code> \u7EC4\u4EF6\u4E2D\u7684 <code>key</code> \u5C5E\u6027\u7684\u503C\u6539\u53D8\uFF0C<code>React</code> \u5C06\u4F1A\u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F\u66F4\u65B0\u73B0\u6709\u7684\u5B9E\u4F8B\u3002</li><li><code>React</code> \u672C\u8EAB\u6267\u884C\u7684\u8FC7\u7A0B\u548C\u4EE3\u7801\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u53EA\u662F\u5408\u6210\u4E8B\u4EF6\u548C\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u987A\u5E8F\u5728\u66F4\u65B0\u4E4B\u524D\uFF0C\u5BFC\u81F4\u5728\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\u4E2D\u6CA1\u6CD5\u7ACB\u9A6C\u62FF\u5230\u66F4\u65B0\u540E\u7684\u503C\uFF0C\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u5F02\u6B65\u4E86\u3002</li><li>\u66F4\u65B0 DOM \u4E4B\u524D\u4E00\u5B9A\u4F1A\u91CD\u6E32\u67D3\uFF0C\u4F46\u91CD\u6E32\u67D3\u4E0D\u4EE3\u8868\u4E00\u5B9A\u4F1A\u66F4\u65B0 DOM\uFF0C\u4E8C\u8005\u4E0D\u7B49\u4EF7\u3002</li></ul><h2 id="\u65B0\u67B6\u6784-v16-\u4EE5\u540E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u67B6\u6784-v16-\u4EE5\u540E" aria-hidden="true">#</a> \u65B0\u67B6\u6784 (v16 \u4EE5\u540E\uFF09</h2><ul><li>Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09\uFF1A\u8D1F\u8D23\u8C03\u5EA6\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7</li><li>Reconciler\uFF08\u534F\u8C03\u5668\uFF09\uFF1A\u8D1F\u8D23\u627E\u51FA UI \u53D8\u5316</li><li>Renderer\uFF08\u6E32\u67D3\u5668\uFF09\uFF1A\u8D1F\u8D23\u5C06 UI \u53D8\u5316\u6E32\u67D3\u5230\u9875\u9762\u4E0A</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>Scheduler \u5BF9\u5E94 Schedule \u9636\u6BB5</li><li>Reconciler \u5BF9\u5E94 Render \u9636\u6BB5</li><li>Renderer \u5BF9\u5E94 Commit \u9636\u6BB5</li></ul><p>\u65E7\u67B6\u6784\u6CA1\u6709 Schedule \u9636\u6BB5\uFF0C\u4E00\u65E6\u66F4\u65B0\u6D41\u7A0B\u5F00\u59CB\uFF0C\u5C31\u4F1A\u9012\u5F52\u66F4\u65B0\u5B50\u7EC4\u4EF6\uFF0C\u4E2D\u9014\u65E0\u6CD5\u4E2D\u65AD\u3002</p></div><h2 id="hooks-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#hooks-\u5217\u8868" aria-hidden="true">#</a> Hooks \u5217\u8868</h2><ul><li>useState\u3001useReducer</li><li>useEffect\u3001useLayoutEffect</li><li>useMemo\u3001useCallback</li><li>useRef</li><li>useContext</li><li>useImperativeHandle</li><li>useTransition\u3001useDeferredValue</li><li>\u7B49\u7B49</li></ul>',7),x={href:"https://mp.weixin.qq.com/s/Qm7BHndYlvsSmNXZqifwcw",target:"_blank",rel:"noopener noreferrer"},f=i("React Hooks \u5927\u5168"),p=e("h2",{id:"\u5143\u7D20-\u7EC4\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5143\u7D20-\u7EC4\u4EF6","aria-hidden":"true"},"#"),i(" \u5143\u7D20 & \u7EC4\u4EF6")],-1),k=e("ul",null,[e("li",null,"\u5143\u7D20\u662F\u7528\u6765\u5C55\u73B0 DOM \u8282\u70B9\u6216\u7EC4\u4EF6\u7684\u4E00\u4E2A\u5BF9\u8C61"),e("li",null,"\u7EC4\u4EF6\u53EF\u4EE5\u662F\u7C7B\u6216\u8005\u51FD\u6570\uFF0C\u5B83\u5C06 Props \u4F5C\u4E3A\u8F93\u5165\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\u7684\u6811\u5F62\u7ED3\u6784\u4F5C\u4E3A\u8F93\u51FA")],-1),C={href:"https://ld246.com/article/1551068452927",target:"_blank",rel:"noopener noreferrer"},_=i("\u5143\u7D20\u4E0E\u7EC4\u4EF6\u533A\u522B"),R=d(`<h2 id="\u7C7B\u7EC4\u4EF6-\u51FD\u6570\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6-\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6 &amp; \u51FD\u6570\u7EC4\u4EF6</h2><ul><li>\u72B6\u6001 <ul><li>\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u72B6\u6001 State</li><li>\u51FD\u6570\u7EC4\u4EF6\u4E4B\u524D\u6CA1\u6709\uFF0C\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528 useState \u6765\u4F7F\u7528\u72B6\u6001</li></ul></li><li>\u751F\u547D\u5468\u671F <ul><li>\u7C7B\u7EC4\u4EF6\u6709\u81EA\u5DF1\u7684\u751F\u547D\u5468\u671F</li><li>\u51FD\u6570\u7EC4\u4EF6\u4E4B\u524D\u6CA1\u6709\uFF0C\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528 useEffect \u6765\u5B9E\u73B0\u7C7B\u4F3C\u529F\u80FD</li></ul></li><li>\u6027\u80FD\u4F18\u5316 <ul><li>\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 shouldComponentUpdate \u548C React.PureComponent</li><li>\u51FD\u6570\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 React.memo</li></ul></li></ul><h2 id="\u8C03\u548C-diff-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u548C-diff-\u7B97\u6CD5" aria-hidden="true">#</a> \u8C03\u548C &amp; Diff \u7B97\u6CD5</h2><ul><li>\u8C03\u548C\uFF1A\u5C06\u865A\u62DF DOM \u8F6C\u6210 \u771F\u5B9E DOM \u7684\u6700\u5C11\u64CD\u4F5C\u7684\u8FC7\u7A0B</li><li>Diff \u7B97\u6CD5\uFF1A\u8C03\u548C\u7684\u5177\u4F53\u5B9E\u73B0</li></ul><h2 id="useeffect-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#useeffect-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> useEffect &amp; \u751F\u547D\u5468\u671F</h2><ul><li><p>useEffect \u6A21\u62DF componentDidMount</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>useEffect(() =&gt; {}, [])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>useEffect \u6A21\u62DF componentDidUpdate</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const flag = useRef(true)

useEffect(() =&gt; {
  if (flag.current) {
    flag.current = false
  } else {
    ...
  }
}, [])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>useEffect \u6A21\u62DF componentWillUnmount</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>useEffect(() =&gt; {
  return () =&gt; {}
}, [])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u5408\u6210\u4E8B\u4EF6-\u539F\u751F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5408\u6210\u4E8B\u4EF6-\u539F\u751F\u4E8B\u4EF6" aria-hidden="true">#</a> \u5408\u6210\u4E8B\u4EF6 &amp; \u539F\u751F\u4E8B\u4EF6</h2><ul><li>\u5BF9\u4E8E\u4E8B\u4EF6\u540D\u79F0\u547D\u540D\u65B9\u5F0F\uFF0C\u539F\u751F\u4E8B\u4EF6\u4E3A\u5168\u5C0F\u5199\uFF0C\u5408\u6210\u4E8B\u4EF6\u91C7\u7528\u5C0F\u9A7C\u5CF0</li><li>\u5BF9\u4E8E\u4E8B\u4EF6\u51FD\u6570\u5904\u7406\u8BED\u6CD5\uFF0C\u539F\u751F\u4E8B\u4EF6\u4F7F\u7528\u5F15\u53F7\uFF0C\u5408\u6210\u4E8B\u4EF6\u4F7F\u7528\u5927\u62EC\u53F7</li><li>\u5BF9\u4E8E\u963B\u6B62\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u539F\u751F\u4E8B\u4EF6\u4F7F\u7528 return false\uFF0C\u5408\u6210\u4E8B\u4EF6\u91C7\u7528 event.prenventDefault()</li></ul><h2 id="jsx-react-createelement" tabindex="-1"><a class="header-anchor" href="#jsx-react-createelement" aria-hidden="true">#</a> JSX &amp; React.createElement</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// JSX \u5F62\u5F0F
&lt;div&gt;
  &lt;button onClick={this.handleClick}&gt;\u70B9\u51FB&lt;/button&gt;
&lt;/div&gt;

// React.createElement \u5F62\u5F0F
React.createElement(
  &quot;div&quot;, 
  null, 
  React.createElement(
    &quot;button&quot;, 
    { onClick: this.handleClick }, 
    &quot;\u70B9\u51FB&quot;
  )
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs-\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#refs-\u8F6C\u53D1" aria-hidden="true">#</a> refs \u8F6C\u53D1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const FancyButton = React.forwardRef((props, ref) =&gt; (
  &lt;button ref={ref} className=&quot;FancyButton&quot;&gt;
    {props.children}
  &lt;/button&gt;
))

// \u4F60\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM button \u7684 ref
const ref = React.createRef()
&lt;FancyButton ref={ref}&gt;Click me!&lt;/FancyButton&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs-\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#refs-\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> refs \u7684\u56DB\u79CD\u65B9\u5F0F</h2><ul><li>\u7C7B\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.bRef = createRef()
  }

  changeText = () =&gt; {
    this.refs.aRef.innerText = &#39;Hello, A&#39;
    this.bRef.current.innerText = &#39;Hello, B&#39;
    this.cRef.innerText = &#39;Hello, C&#39;
  }

  render() {
    return (
      &lt;div&gt;
        {/* \u4F20\u5165\u5B57\u7B26\u4E32\uFF08\u4E0D\u63A8\u8350\uFF09 */}
        &lt;div ref=&quot;aRef&quot;&gt;Hi, A&lt;/div&gt;
        
        {/* \u4F20\u5165\u5BF9\u8C61 */}
        &lt;div ref={this.bRef}&gt;Hi, B&lt;/div&gt;
        
        {/* \u4F20\u5165\u56DE\u8C03\u51FD\u6570 */}
        &lt;div ref={e =&gt; this.cRef = e}&gt;Hi, C&lt;/div&gt;

        &lt;button onClick={this.changeText}&gt;ref \u5185\u5BB9\u5207\u6362&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u51FD\u6570\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const MyComponent = () =&gt; {
  const dRef = useRef()

  const changeText = () =&gt; {
    dRef.current.innerText = &#39;Hello, D&#39;
  }

  return (
    &lt;div&gt;
      // \u4F20\u5165 hooks
      &lt;div ref={dRef}&gt;Hi, D&lt;/div&gt;
      
      &lt;button onClick={changeText}&gt;ref \u5185\u5BB9\u5207\u6362&lt;/button&gt;
    &lt;/div&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="context-\u7684\u4E09\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#context-\u7684\u4E09\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> context \u7684\u4E09\u79CD\u65B9\u5F0F</h2><ul><li>\u7C7B\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const ThemeContext = createContext(&quot;light&quot;)

class ThemedButton extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context;

    return (
      &lt;button style={{ background: theme }}&gt;
        I am styled by theme context!
      &lt;/button&gt;
    )
  }
}

class Toolbar extends Component {
  render() {
    return (
      &lt;div&gt;
        &lt;ThemedButton /&gt;
      &lt;/div&gt;
    );
  }
}

class App extends Component {
  render() {
    return (
      &lt;ThemeContext.Provider value=&quot;dark&quot;&gt;
        &lt;Toolbar /&gt;
      &lt;/ThemeContext.Provider&gt;
    );
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const ThemeContext = createContext(&quot;light&quot;)

class ThemedButton extends Component {
  render() {
    return (
      &lt;ThemeContext.Consumer&gt;
        {theme =&gt; (
          &lt;button style={{ background: theme }}&gt;
            I am styled by theme context!
          &lt;/button&gt;
        )}
      &lt;/ThemeContext.Consumer&gt;
    )
  }
}

class Toolbar extends Component {
  render() {
    return (
      &lt;div&gt;
        &lt;ThemedButton /&gt;
      &lt;/div&gt;
    );
  }
}

class App extends Component {
  render() {
    return (
      &lt;ThemeContext.Provider value=&quot;dark&quot;&gt;
        &lt;Toolbar /&gt;
      &lt;/ThemeContext.Provider&gt;
    );
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u51FD\u6570\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const ThemeContext = createContext(&#39;light&#39;)

const ThemedButton = () =&gt; {
  const theme = useContext(ThemeContext)
  
  return (
    &lt;button style={{ background: theme }}&gt;
      I am styled by theme context!
    &lt;/button&gt;
  )
}

const Toolbar = () =&gt; (
  &lt;div&gt;
    &lt;ThemedButton /&gt;
  &lt;/div&gt;
)

const App = () =&gt; (
  &lt;ThemeContext.Provider value=&quot;dark&quot;&gt;
    &lt;Toolbar /&gt;
  &lt;/ThemeContext.Provider&gt;
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u590D\u7528\u7684\u4E09\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u590D\u7528\u7684\u4E09\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u4EE3\u7801\u590D\u7528\u7684\u4E09\u79CD\u65B9\u5F0F</h2><ul><li>HOC\uFF1A\u53C2\u6570\u4E3A\u7EC4\u4EF6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u65B0\u7EC4\u4EF6\u7684\u51FD\u6570</li><li>Render Props\uFF1A\u544A\u77E5\u7EC4\u4EF6\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u5185\u5BB9\u7684\u51FD\u6570 Prop</li><li>Hooks</li></ul><h2 id="\u7C7B\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A-this-\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A-this-\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A this \u7684\u56DB\u79CD\u65B9\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
// constructor \u4E2D\u4F7F\u7528 bind  
this.handleClick = this.handleClick.bind(this)

// \u5B9A\u4E49\u5904\u4F7F\u7528\u7C7B\u53D8\u91CF\u8BED\u6CD5
handleClick = () =&gt; { ... }

// render \u65B9\u6CD5\u4E2D\u4F7F\u7528 bind
&lt;button onClick={this.handleClick.bind(this)}&gt; \u70B9\u51FB &lt;/button&gt;

// render \u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570
&lt;button onClick={() =&gt; {this.handleClick()}}&gt; \u70B9\u51FB &lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u5728 React \u7C7B\u7EC4\u4EF6\u4E2D\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7ED1\u5B9A this \uFF1F</p><ul><li>\u4E8B\u4EF6\u7ED1\u5B9A\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570\uFF0C\u4E22\u5931\u5176\u4E0A\u4E0B\u6587\uFF0C\u6267\u884C\u7684\u662F\u9ED8\u8BA4\u7ED1\u5B9A\uFF0C\u4E0D\u662F\u9690\u5F0F\u7ED1\u5B9A</li><li>\u7C7B\u58F0\u660E\u548C\u7C7B\u8868\u8FBE\u5F0F\u7684\u4E3B\u4F53\u4EE5\u4E25\u683C\u6A21\u5F0F\u6267\u884C\uFF0Cthis \u6307\u5411 undefined</li></ul></div><h2 id="\u52A8\u6001\u6DFB\u52A0-classname-\u6216-style" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6DFB\u52A0-classname-\u6216-style" aria-hidden="true">#</a> \u52A8\u6001\u6DFB\u52A0 className \u6216 style</h2><h3 id="classname" tabindex="-1"><a class="header-anchor" href="#classname" aria-hidden="true">#</a> className</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&lt;div className={index === currentIndex ? &quot;active&quot; : null}&gt;\u662F\u5426\u9009\u4E2D&lt;/div&gt;

&lt;div className={\`violet \${index === currentIndex ? &quot;active&quot; : null}\`}&gt;\u662F\u5426\u9009\u4E2D&lt;/div&gt;
&lt;div className={[&quot;violet&quot;, index === currentIndex ? &quot;active&quot; : null].join(&#39; &#39;)}&gt;\u662F\u5426\u9009\u4E2D&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div style={{display: index === currentIndex ? &quot;block&quot; : &quot;none&quot;}}&gt;\u662F\u5426\u9690\u85CF&lt;/div&gt;

&lt;div style={{backgroundColor: &quot;pink&quot;, display: index === currentIndex ? &quot;block&quot; : &quot;none&quot;}}&gt;\u662F\u5426\u9690\u85CF&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function q(y,T){const n=r("ExternalLinkIcon");return t(),a("div",null,[v,e("p",null,[e("a",u,[o,l(n)])]),m,e("p",null,[e("a",b,[h,l(n)])]),g,e("p",null,[e("a",x,[f,l(n)])]),p,k,e("p",null,[e("a",C,[_,l(n)])]),R])}var B=s(c,[["render",q],["__file","react.html.vue"]]);export{B as default};
