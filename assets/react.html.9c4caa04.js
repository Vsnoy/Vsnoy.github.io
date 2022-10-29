import{_ as e,o as i,c as n,d as l}from"./app.380aa556.js";const t={},s=l(`<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><h2 id="react-\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#react-\u57FA\u7840" aria-hidden="true">#</a> React \u57FA\u7840</h2><h3 id="\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</h3><ul><li><p>\u6302\u8F7D\u9636\u6BB5</p><ul><li>constructor</li><li>getDerivedStateFromProps</li><li>render</li><li>componentDidMount</li></ul></li><li><p>\u66F4\u65B0\u9636\u6BB5</p><ul><li>getDerivedStateFromProps</li><li>shouldComponentUpdate</li><li>render</li><li>getSnapShotBeforeUpdate</li><li>componentDidUpdate</li></ul></li><li><p>\u5378\u8F7D\u9636\u6BB5</p><ul><li>componentWillUnmount</li></ul></li></ul><h3 id="\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F</h3><ul><li><p>\u6302\u8F7D\u8FC7\u7A0B</p><ol><li>\u7236\u7EC4\u4EF6 constructor</li><li>\u7236\u7EC4\u4EF6 getDerivedStateFromProps</li><li>\u7236\u7EC4\u4EF6 render</li><li>\u5B50\u7EC4\u4EF6 constructor</li><li>\u5B50\u7EC4\u4EF6 getDerivedStateFromProps</li><li>\u5B50\u7EC4\u4EF6 render</li><li>\u5B50\u7EC4\u4EF6 componentDidMount</li><li>\u7236\u7EC4\u4EF6 componentDidMount</li></ol></li><li><p>\u66F4\u65B0\u8FC7\u7A0B</p><ol><li>\u7236\u7EC4\u4EF6 getDerivedStateFromProps</li><li>\u7236\u7EC4\u4EF6 shouldComponentUpdate</li><li>\u7236\u7EC4\u4EF6 render</li><li>\u5B50\u7EC4\u4EF6 getDerivedStateFromProps</li><li>\u5B50\u7EC4\u4EF6 shouldComponentUpdate</li><li>\u5B50\u7EC4\u4EF6 render</li><li>\u5B50\u7EC4\u4EF6 getSnapShotBeforeUpdate</li><li>\u7236\u7EC4\u4EF6 getSnapShotBeforeUpdate</li><li>\u5B50\u7EC4\u4EF6 componentDidUpdate</li><li>\u7236\u7EC4\u4EF6 componentDidUpdate</li></ol></li><li><p>\u5378\u8F7D\u8FC7\u7A0B</p><ol><li>\u7236\u7EC4\u4EF6 componentWillUnmount</li><li>\u5B50\u7EC4\u4EF6 componentWillUnmount</li></ol></li></ul><h3 id="\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u533A\u522B" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u533A\u522B</h3><ul><li>\u72B6\u6001 <ul><li>\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u72B6\u6001 State</li><li>\u51FD\u6570\u7EC4\u4EF6\u4E4B\u524D\u6CA1\u6709\uFF0C\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528 useState \u6765\u4F7F\u7528\u72B6\u6001</li></ul></li><li>\u751F\u547D\u5468\u671F <ul><li>\u7C7B\u7EC4\u4EF6\u6709\u81EA\u5DF1\u7684\u751F\u547D\u5468\u671F</li><li>\u51FD\u6570\u7EC4\u4EF6\u4E4B\u524D\u6CA1\u6709\uFF0C\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528 useEffect \u6765\u5B9E\u73B0\u7C7B\u4F3C\u529F\u80FD</li></ul></li><li>\u6027\u80FD\u4F18\u5316 <ul><li>\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 shouldComponentUpdate \u548C React.PureComponent</li><li>\u51FD\u6570\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 React.memo</li></ul></li></ul><h3 id="\u7C7B\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A-this-\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A-this-\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6\u4E8B\u4EF6\u7ED1\u5B9A this \u7684\u56DB\u79CD\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// constructor \u4E2D\u4F7F\u7528 bind  
this.handleClick = this.handleClick.bind(this)

// \u5B9A\u4E49\u5904\u4F7F\u7528\u7C7B\u53D8\u91CF\u8BED\u6CD5
handleClick = () =&gt; { ... }

// render \u65B9\u6CD5\u4E2D\u4F7F\u7528 bind
&lt;button onClick={this.handleClick.bind(this)}&gt; \u70B9\u51FB &lt;/button&gt;

// render \u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570
&lt;button onClick={() =&gt; {this.handleClick()}}&gt; \u70B9\u51FB &lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="refs-\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#refs-\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> refs \u7684\u56DB\u79CD\u65B9\u5F0F</h3><ul><li>\u7C7B\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.aRef = React.createRef()
    this.bRef = React.createRef()
    this.cRef = React.createRef()
  }

  changeText = () =&gt; {
    this.refs.aRef.innerText = &#39;Hello, A&#39;
    this.bRef.current.innerText = &#39;Hello, B&#39;
    this.cRef.innerText = &#39;Hello, C&#39;
  }

  render() {
    return (
      &lt;div&gt;
        // \u4F20\u5165\u5B57\u7B26\u4E32
        &lt;div ref=&quot;aRef&quot;&gt;Hi, A&lt;/div&gt;
        
        // \u4F20\u5165\u5BF9\u8C61
        &lt;div ref={this.bRef}&gt;Hi, B&lt;/div&gt;
        
        // \u4F20\u5165\u56DE\u8C03\u51FD\u6570
        &lt;div ref={e =&gt; this.cRef = e}&gt;Hi, C&lt;/div&gt;

        &lt;button onClick={this.changeText}&gt;ref \u5185\u5BB9\u5207\u6362&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u51FD\u6570\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function MyComponent() {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="refs-\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#refs-\u8F6C\u53D1" aria-hidden="true">#</a> refs \u8F6C\u53D1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const FancyButton = React.forwardRef((props, ref) =&gt; (
  &lt;button ref={ref} className=&quot;FancyButton&quot;&gt;
    {props.children}
  &lt;/button&gt;
))

// \u4F60\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM button \u7684 ref
const ref = React.createRef()
&lt;FancyButton ref={ref}&gt;Click me!&lt;/FancyButton&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u4EF6\u673A\u5236\u4E0E\u5408\u6210\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u673A\u5236\u4E0E\u5408\u6210\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6\u673A\u5236\u4E0E\u5408\u6210\u4E8B\u4EF6</h3><p><code>React</code> \u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u673A\u5236\uFF0C\u81EA\u8EAB\u5B9E\u73B0\u4E86\u4E00\u5957\u4E8B\u4EF6\u673A\u5236\uFF0C\u5305\u62EC\u4E8B\u4EF6\u6CE8\u518C\u3001\u4E8B\u4EF6\u5408\u6210\u3001\u4E8B\u4EF6\u5192\u6CE1\u3001\u4E8B\u4EF6\u5206\u53D1\u7B49\u3002\u5728 <code>React</code> \u4E2D\uFF0C\u8FD9\u5957\u4E8B\u4EF6\u673A\u5236\u88AB\u79F0\u4E4B\u4E3A\u5408\u6210\u4E8B\u4EF6\u3002</p><p>\u5408\u6210\u4E8B\u4EF6\uFF0C\u662F <code>React</code> \u6A21\u62DF\u539F\u751F DOM \u4E8B\u4EF6\u6240\u6709\u80FD\u529B\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u6839\u636E W3C \u6807\u51C6\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u62E5\u6709\u4E0E\u539F\u751F\u4E8B\u4EF6\u76F8\u540C\u7684\u63A5\u53E3\u3002</p><p>\u4E3A\u4EC0\u4E48\u8981\u53E6\u5916\u5B9E\u73B0\u4E00\u5957\u4E8B\u4EF6\u673A\u5236\u5462\uFF1F\u539F\u56E0\u662F\u4E3A\u4E86\u89E3\u51B3\u8DE8\u5E73\u53F0\u3001\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><h3 id="\u5408\u6210\u4E8B\u4EF6\u4E0E\u539F\u751F\u4E8B\u4EF6\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5408\u6210\u4E8B\u4EF6\u4E0E\u539F\u751F\u4E8B\u4EF6\u533A\u522B" aria-hidden="true">#</a> \u5408\u6210\u4E8B\u4EF6\u4E0E\u539F\u751F\u4E8B\u4EF6\u533A\u522B</h3><ul><li>\u5BF9\u4E8E\u4E8B\u4EF6\u540D\u79F0\u547D\u540D\u65B9\u5F0F\uFF0C\u539F\u751F\u4E8B\u4EF6\u4E3A\u5168\u5C0F\u5199\uFF0C\u5408\u6210\u4E8B\u4EF6\u91C7\u7528\u5C0F\u9A7C\u5CF0</li><li>\u5BF9\u4E8E\u4E8B\u4EF6\u51FD\u6570\u5904\u7406\u8BED\u6CD5\uFF0C\u539F\u751F\u4E8B\u4EF6\u4F7F\u7528\u5F15\u53F7\uFF0C\u5408\u6210\u4E8B\u4EF6\u4F7F\u7528\u5927\u62EC\u53F7</li><li>\u5BF9\u4E8E\u963B\u6B62\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u539F\u751F\u4E8B\u4EF6\u4F7F\u7528 return false\uFF0C\u5408\u6210\u4E8B\u4EF6\u91C7\u7528 event.prenventDefault()</li></ul><h3 id="setstate-\u6267\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#setstate-\u6267\u884C\u673A\u5236" aria-hidden="true">#</a> setState \u6267\u884C\u673A\u5236</h3><p>\u5C5E\u4E8E <code>React</code> \u63A7\u5236\u4E4B\u5185\u7684\u4F1A\u8D70\u5F02\u6B65\u6279\u5904\u7406\uFF0C\u63A7\u5236\u4E4B\u5916\u7684\u4F1A\u8D70\u540C\u6B65\u975E\u6279\u5904\u7406\u3002</p><ul><li>\u5728\u539F\u751F\u4E8B\u4EF6\u6216\u5F02\u6B65\u4EE3\u7801\u4E2D\uFF0C<code>setState</code> \u662F\u540C\u6B65\uFF0C\u975E\u6279\u5904\u7406\u3002</li><li>\u5728\u5408\u6210\u4E8B\u4EF6\u6216\u94A9\u5B50\u51FD\u6570\u4E2D\uFF0C<code>setState</code> \u662F\u5F02\u6B65\uFF0C\u6279\u5904\u7406\u3002</li></ul><p>React \u672C\u8EAB\u6267\u884C\u7684\u8FC7\u7A0B\u548C\u4EE3\u7801\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u53EA\u662F\u5408\u6210\u4E8B\u4EF6\u548C\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u987A\u5E8F\u5728\u66F4\u65B0\u4E4B\u524D\uFF0C \u5BFC\u81F4\u5728\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\u4E2D\u6CA1\u6CD5\u7ACB\u9A6C\u62FF\u5230\u66F4\u65B0\u540E\u7684\u503C\uFF0C\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u5F02\u6B65\u4E86\u3002</p><h3 id="super-\u548C-super-props-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#super-\u548C-super-props-\u7684\u533A\u522B" aria-hidden="true">#</a> super() \u548C super(props) \u7684\u533A\u522B</h3><ul><li>super()\uFF0C\u4E3A\u4E86\u7EE7\u627F\u7236\u7C7B\u4E2D\u7684 this \u5BF9\u8C61</li><li>super(props)\uFF0C\u4E3A\u4E86\u5728 constructor \u4E2D\u4F7F\u7528 this.props</li></ul><h3 id="\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7EC4\u4EF6\u901A\u4FE1</h3><ul><li>props/\u56DE\u8C03</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\uFF1A
&lt;Child name=&quot;rem&quot; callback={this.changeName}&gt;&lt;/Child&gt;

\u5B50\u7EC4\u4EF6\uFF1A
&lt;button onClick={this.props.callback.bind(this, &#39;violet&#39;)}&gt;\u70B9\u51FB&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>eventBus</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { EventEmitter } from &#39;events&#39;

const eventBus = new EventEmitter()

\u7EC4\u4EF6 A \uFF08\u53D1\u9001\u4E8B\u4EF6\uFF09
eventBus.emit(&#39;sayHello&#39;, &#39;Hello React&#39;)

\u7EC4\u4EF6 B \uFF08\u63A5\u6536\u4E8B\u4EF6\uFF09
eventBus.addListener(&#39;sayHello&#39;, (msg) =&gt; {
  console.log(msg)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>context</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const context = React.createContext()

\u7236\u7EC4\u4EF6\uFF1A
&lt;context.Provider value={{name: &#39;rem&#39;, callback: this.changeName}}&gt;
  &lt;Child /&gt;
&lt;/context.Provider&gt;

\u5B50\u5B59\u7EC4\u4EF6\uFF08\u63A5\u6536\u65B9\u5F0F\u4E00\uFF09:
&lt;context.Consumer&gt;
  {
    value =&gt; (
      &lt;div&gt;
        &lt;div&gt;{value.name}&lt;/div&gt;
        &lt;button onClick={value.callback.bind(this, &#39;violet&#39;)}&gt;\u70B9\u51FB&lt;/button&gt;
      &lt;/div&gt;
    )
  }
&lt;/context.Consumer&gt;

\u5B50\u5B59\u7EC4\u4EF6\uFF08\u63A5\u6536\u65B9\u5F0F\u4E8C\uFF09
const value = useContext(context)

&lt;div&gt;{value.name}&lt;/div&gt;
&lt;button onClick={value.callback.bind(this, &#39;violet&#39;)}&gt;\u70B9\u51FB&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mobx</li><li>Redux</li><li>\u7B49\u7B49</li></ul><h3 id="react-diff-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#react-diff-\u539F\u7406" aria-hidden="true">#</a> React Diff \u539F\u7406</h3><ul><li>\u628A\u6811\u5F62\u7ED3\u6784\u6309\u7167\u5C42\u7EA7\u5206\u89E3\uFF0C\u53EA\u6BD4\u8F83\u540C\u7EA7\u5143\u7D20</li><li>\u7ED9\u5217\u8868\u7ED3\u6784\u7684\u6BCF\u4E2A\u5355\u5143\u6DFB\u52A0\u552F\u4E00\u7684 key \u5C5E\u6027\uFF0C\u65B9\u4FBF\u6BD4\u8F83</li><li>React \u53EA\u4F1A\u5339\u914D\u76F8\u540C class \u7684 component\uFF08\u8FD9\u91CC\u9762\u7684 class \u6307\u7684\u662F\u7EC4\u4EF6\u7684\u540D\u5B57\uFF09</li><li>\u5408\u5E76\u64CD\u4F5C\uFF0C\u8C03\u7528 component \u7684 setState \u65B9\u6CD5\u7684\u65F6\u5019\uFF0CReact \u5C06\u5176\u6807\u8BB0\u4E3A dirty\u3002\u5230\u6BCF\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F\uFF0CReact \u68C0\u67E5\u6240\u6709\u6807\u8BB0 dirty \u7684 component \u91CD\u65B0\u7ED8\u5236\u3002</li><li>\u9009\u62E9\u6027\u5B50\u6811\u6E32\u67D3\u3002\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u91CD\u5199 shouldComponentUpdate \u63D0\u9AD8 diff \u7684\u6027\u80FD\u3002</li></ul><h3 id="react-fiber-\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#react-fiber-\u7406\u89E3" aria-hidden="true">#</a> React Fiber \u7406\u89E3</h3><ul><li>React Fiber \u662F\u4E00\u79CD\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u5355\u7EBF\u7A0B\u8C03\u5EA6\u7B97\u6CD5\u3002</li><li>React 16 \u4E4B\u524D \uFF0Creconcilation \u7B97\u6CD5\u5B9E\u9645\u4E0A\u662F\u9012\u5F52\uFF0C\u60F3\u8981\u4E2D\u65AD\u9012\u5F52\u662F\u5F88\u56F0\u96BE\u7684\uFF0CReact 16 \u5F00\u59CB\u4F7F\u7528\u4E86\u5FAA\u73AF\u6765\u4EE3\u66FF\u4E4B\u524D\u7684\u9012\u5F52\u3002</li><li>React Fiber\uFF1A\u4E00\u79CD\u5C06 recocilation \uFF08\u9012\u5F52 diff\uFF09\uFF0C\u62C6\u5206\u6210\u65E0\u6570\u4E2A\u5C0F\u4EFB\u52A1\u7684\u7B97\u6CD5\uFF1B\u5B83\u968F\u65F6\u80FD\u591F\u505C\u6B62\uFF0C\u6062\u590D\u3002\u505C\u6B62\u6062\u590D\u7684\u65F6\u673A\u53D6\u51B3\u4E8E\u5F53\u524D\u7684\u4E00\u5E27\uFF0816ms\uFF09\u5185\uFF0C\u8FD8\u6709\u6CA1\u6709\u8DB3\u591F\u7684\u65F6\u95F4\u5141\u8BB8\u8BA1\u7B97</li></ul><h2 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> React hooks</h2><h3 id="\u4F7F\u7528-hooks-\u8981\u9075\u5FAA\u7684\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-hooks-\u8981\u9075\u5FAA\u7684\u89C4\u8303" aria-hidden="true">#</a> \u4F7F\u7528 Hooks \u8981\u9075\u5FAA\u7684\u89C4\u8303</h3><ul><li>\u53EA\u80FD\u5728\u51FD\u6570\u5F0F\u7EC4\u4EF6\u548C\u81EA\u5B9A\u4E49 Hook \u4E2D\u4F7F\u7528\u3002</li><li>\u53EA\u80FD\u5728\u6700\u9876\u5C42\u4F7F\u7528\u3002\u4E0D\u80FD\u5728\u6761\u4EF6\u3001\u5FAA\u73AF\u3001\u5D4C\u5957\u4E2D\u4F7F\u7528\u3002</li></ul><h3 id="useeffect-\u548C-uselayouteffect-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#useeffect-\u548C-uselayouteffect-\u7684\u533A\u522B" aria-hidden="true">#</a> useEffect \u548C useLayoutEffect \u7684\u533A\u522B</h3><ul><li>useEffect \u4E0D\u4F1A\u963B\u585E\u6D4F\u89C8\u5668\u6E32\u67D3\uFF0C\u800C useLayoutEffect \u4F1A</li><li>useEffect \u4F1A\u5728\u6D4F\u89C8\u5668\u6E32\u67D3\u7ED3\u675F\u4E4B\u540E\u6267\u884C\uFF0C\u800C useLayoutEffect \u5219\u662F\u5728 DOM \u66F4\u65B0\u5B8C\u6210\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u6E32\u67D3\u4E4B\u524D\u6267\u884C\u3002</li></ul><p>PS\uFF1A\u540E\u8005\u603B\u662F\u6BD4\u524D\u8005\u5148\u6267\u884C\uFF0C\u540E\u8005\u4E3B\u8981\u7528\u4E8E\u5904\u7406 DOM \u64CD\u4F5C\u3001\u8C03\u6574\u6837\u5F0F\u3001\u907F\u514D\u5C4F\u95EA\u7B49\u95EE\u9898\u3002\u4E3E\u4E2A\u6817\u5B50\uFF1A\u79FB\u52A8\u65B9\u5757\u3002</p><h3 id="react-hooks-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#react-hooks-\u793A\u4F8B" aria-hidden="true">#</a> React Hooks \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from &#39;react&#39;;

const InfoContext = React.createContext()

function Child() {
  const info = useContext(InfoContext)
  const {name, age} = info

  return (
    &lt;div&gt;{name} {age}&lt;/div&gt;
  )
}

export default function Parent() {
  const [count, setCount] = useState(0)
  const textRef = useRef()

  useEffect(() =&gt; {
    document.title = \`You clicked \${count} times\`
  }, [count])

  useLayoutEffect(() =&gt; {
    textRef.current.innerText = &#39;\u5973\u53CB\u6210\u53CC&#39;
  })

  return (
    &lt;div&gt;
      &lt;span&gt;You clicked {count} times &lt;/span&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;

      &lt;div ref={textRef}&gt;\u6211\u4EEC\u7684\u91CD\u5236\u4EBA\u751F&lt;/div&gt;

      &lt;InfoContext.Provider value={{name: &#39;Violet&#39;, age: 20}}&gt;
        &lt;Child/&gt;
      &lt;/InfoContext.Provider&gt;
    &lt;/div&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> React Router</h2><h3 id="\u8DEF\u7531\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4FE1\u606F" aria-hidden="true">#</a> \u8DEF\u7531\u4FE1\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this.props.history.push()
this.props.history.replace()
this.props.history.go()

this.props.match.params

this.props.location.search
this.props.location.query
this.props.location.state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DEF\u7531\u4F20\u53C2\u7684\u56DB\u79CD\u65B9\u5F0F\u53CA\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2\u7684\u56DB\u79CD\u65B9\u5F0F\u53CA\u533A\u522B" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2\u7684\u56DB\u79CD\u65B9\u5F0F\u53CA\u533A\u522B</h3><ul><li>params \u4F20\u53C2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F20\u9012\u53C2\u6570\uFF1A
&lt;Link to=&#39;/A/996/Violet&#39;&gt;Page A&lt;/Link&gt;

this.props.history.push(&quot;/A/996/Violet&quot;)

\u63A5\u6536\u53C2\u6570\uFF1A
this.props.match.params

\u8DEF\u7531\u914D\u7F6E\uFF1A
&lt;Route exact path=&#39;/A/:id/:name&#39; component={PageA}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>search \u4F20\u53C2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F20\u9012\u53C2\u6570\uFF1A
&lt;Link to=&#39;/B?id=996&amp;name=Violet&#39;&gt;Page B&lt;/Link&gt;

this.props.history.push(&quot;/B?id=996&amp;name=Violet&quot;)

\u63A5\u6536\u53C2\u6570\uFF1A
this.props.location.search
new URLSearchParams(this.props.location.search)
queryString.parse(this.props.location.search)

\u8DEF\u7531\u914D\u7F6E\uFF1A
&lt;Route exact path=&#39;/B&#39; component={PageB}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>query \u4F20\u53C2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F20\u9012\u53C2\u6570\uFF1A
&lt;Link to={{pathname: &#39;/C&#39;, query: {id: 996, name: &#39;Violet&#39;}}}&gt;Page C&lt;/Link&gt;

this.props.history.push({pathname: &#39;/C&#39;, query: {id: 996, name: &#39;Violet&#39;})

\u63A5\u6536\u53C2\u6570\uFF1A
this.props.location.query

\u8DEF\u7531\u914D\u7F6E\uFF1A
&lt;Route exact path=&#39;/C&#39; component={PageC}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>state \u4F20\u53C2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F20\u9012\u53C2\u6570\uFF1A
&lt;Link to={{pathname: &#39;/D&#39;, state: {id: 996, name: &#39;Violet&#39;}}}&gt;Page D&lt;/Link&gt;

this.props.history.push({pathname: &#39;/D&#39;, state: {id: 996, name: &#39;Violet&#39;})

\u63A5\u6536\u53C2\u6570\uFF1A
this.props.location.state

\u8DEF\u7531\u914D\u7F6E\uFF1A
&lt;Route exact path=&#39;/D&#39; component={PageD}&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>params \u4F20\u53C2\uFF0C\u4F7F\u7528 props.match.params \u63A5\u6536</li><li>search \u4F20\u53C2\uFF0C\u4F7F\u7528 props.location.search \u63A5\u6536</li><li>query \u4F20\u53C2\uFF0C\u4F7F\u7528 props.location.query \u63A5\u6536\u3002\u5237\u65B0\u4F1A\u4E22\u5931\u6570\u636E\u3002</li><li>state \u4F20\u53C2\uFF0C\u4F7F\u7528 props.location.state \u63A5\u6536\u3002BrowserRouter \u4E2D\u5237\u65B0\u4E0D\u4F1A\u4E22\u5931\u6570\u636E\uFF0CHashRouter \u4E2D\u5237\u65B0\u4F1A\u4E22\u5931\u6570\u636E\u3002</li></ul></div><h3 id="a-\u6807\u7B7E\u548C-link-\u6807\u7B7E\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#a-\u6807\u7B7E\u548C-link-\u6807\u7B7E\u533A\u522B" aria-hidden="true">#</a> a \u6807\u7B7E\u548C Link \u6807\u7B7E\u533A\u522B</h3><ul><li>a \u6807\u7B7E\u5728\u5B9E\u73B0\u9875\u9762\u8DF3\u8F6C\u65F6\uFF0C\u6574\u4E2A\u9875\u9762\u4F1A\u91CD\u65B0\u6E32\u67D3</li><li>Link \u6807\u7B7E\u53EA\u4F1A\u91CD\u65B0\u6E32\u67D3\u66F4\u65B0\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u907F\u514D\u4E86\u4E0D\u5FC5\u8981\u7684\u91CD\u6E32\u67D3\u3002</li></ul><h3 id="\u5982\u4F55\u8BBE\u7F6E\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8BBE\u7F6E\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u5982\u4F55\u8BBE\u7F6E\u91CD\u5B9A\u5411</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Switch&gt;
    &lt;Route exact path=&#39;/&#39; component={Page}&gt;&lt;/Route&gt;

    // \u65B9\u5F0F\u4E00
    &lt;Route path=&#39;/A&#39;&gt;
      &lt;Redirect to=&#39;/&#39;&gt;&lt;/Redirect&gt;
    &lt;/Route&gt;
    
    // \u65B9\u5F0F\u4E8C
    &lt;Redirect from=&#39;/A&#39; to=&#39;/&#39;&gt;&lt;/Redirect&gt;
&lt;/Switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-router-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#react-router-\u793A\u4F8B" aria-hidden="true">#</a> React Router \u793A\u4F8B</h3><h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h2><h3 id="redux-\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#redux-\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> Redux \u5DE5\u4F5C\u6D41\u7A0B</h3><ul><li>\u9996\u5148\uFF0C\u7528\u6237\u901A\u8FC7 dispatch \u65B9\u6CD5\u53D1\u51FA Action\u3002</li><li>\u7136\u540E\uFF0CStore \u81EA\u52A8\u8C03\u7528 Reducer\uFF0C\u8FD4\u56DE\u65B0\u7684 State\u3002</li><li>\u6700\u540E\uFF0CState \u53D1\u751F\u53D8\u5316\uFF0CStore \u8C03\u7528\u76D1\u542C\u51FD\u6570\uFF0C\u66F4\u65B0 View\u3002</li></ul><h3 id="redux-\u4E09\u5927\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#redux-\u4E09\u5927\u539F\u5219" aria-hidden="true">#</a> Redux \u4E09\u5927\u539F\u5219</h3><ul><li>\u5355\u4E00\u6570\u636E\u6E90<br> \u6574\u4E2A\u5E94\u7528\u7684 State \u90FD\u88AB\u5B58\u50A8\u5230\u4E00\u4E2A\u72B6\u6001\u6811\u91CC\u9762\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u72B6\u6001\u6811\uFF0C\u53EA\u5B58\u5728\u4E8E\u552F\u4E00\u7684 Store \u4E2D</li><li>State \u72B6\u6001\u53EA\u8BFB<br> State \u662F\u53EA\u8BFB\u7684\uFF0C\u552F\u4E00\u6539\u53D8 State \u7684\u65B9\u6CD5\u5C31\u662F\u89E6\u53D1 Action</li><li>\u4F7F\u7528\u7EAF\u51FD\u6570 Reducer \u6765\u4FEE\u6539 State</li></ul><h3 id="react-redux-\u4E2D-ui-\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#react-redux-\u4E2D-ui-\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6\u7684\u533A\u522B" aria-hidden="true">#</a> React Redux \u4E2D UI \u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6\u7684\u533A\u522B</h3><ul><li>UI \u7EC4\u4EF6\u8D1F\u8D23 UI \u7684\u5448\u73B0\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u8D1F\u8D23\u7BA1\u7406\u6570\u636E\u548C\u903B\u8F91</li><li>\u4E24\u8005\u901A\u8FC7 React Redux \u4E2D\u63D0\u4F9B\u7684 connect \u65B9\u6CD5\u8054\u7CFB\u8D77\u6765</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { connect } from &#39;react-redux&#39;

// UIComponent \u662F UI \u7EC4\u4EF6\uFF0CContainerComponent \u662F\u5BB9\u5668\u7EC4\u4EF6
const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(UIComponent)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#redux-\u793A\u4F8B" aria-hidden="true">#</a> Redux \u793A\u4F8B</h3><ul><li>\u793A\u4F8B\u4E00</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createStore } from &#39;redux&#39;

// state
const initialState = {
  counter: 0,
}

// actionCreators
const addAction = num =&gt; ({ type: &quot;ADD_NUMBER&quot;, num })
const subAction = num =&gt; ({ type: &quot;SUB_NUMBER&quot;, num })

// reducer
const reducer = (state = initialState, action) =&gt; {
  switch (action.type) {
    case &quot;ADD_NUMBER&quot;:
      return { ...state, counter: state.counter + action.num };
    case &quot;SUB_NUMBER&quot;:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

// store
const store = createStore(reducer)

// store \u72B6\u6001\u53D8\u66F4\u8BA2\u9605
store.subscribe(() =&gt; {
  console.log(&quot;counter:&quot;, store.getState().counter);
})

// action \u6D3E\u53D1
store.dispatch(addAction(1));
store.dispatch(subAction(1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u793A\u4F8B\u4E8C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;
import ReactDOM from &quot;react-dom&quot;
import { createStore } from &#39;redux&#39;
import { Provider, connect } from &#39;react-redux&#39;

class Home extends Component {
  render() {
    return (
      &lt;div&gt;
        &lt;h2&gt;\u5F53\u524D\u8BA1\u6570\uFF1A{this.props.counter}&lt;/h2&gt;
        &lt;button onClick={this.props.addNumber.bind(this, 1)}&gt;\u52A0\u4E00&lt;/button&gt;
        &lt;button onClick={this.props.subNumber.bind(this, 1)}&gt;\u51CF\u4E00&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}

// state
const initialState = {
  counter: 0,
}

// actionCreators
const addAction = num =&gt; ({ type: &quot;ADD_NUMBER&quot;, num })
const subAction = num =&gt; ({ type: &quot;SUB_NUMBER&quot;, num })

// reducer
const reducer = (state = initialState, action) =&gt; {
  switch (action.type) {
    case &quot;ADD_NUMBER&quot;:
      return { ...state, counter: state.counter + action.num };
    case &quot;SUB_NUMBER&quot;:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

// store
const store = createStore(reducer)

// mapState
const mapStateToProps = state =&gt; ({
  counter: state.counter
})

// mapDispatch
const mapDispatchToProps = dispatch =&gt; ({
  addNumber(num) {
    dispatch(addAction(num))
  },
  subNumber(num) {
    dispatch(subAction(num))
  }
})

const App = connect(mapStateToProps, mapDispatchToProps)(Home)

ReactDOM.render(
  &lt;Provider store={store}&gt;
    &lt;App /&gt;
  &lt;/Provider&gt;,
  document.getElementById(&#39;root&#39;)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx" aria-hidden="true">#</a> Mobx</h2><ul><li>@observable</li><li>@action</li><li>@computed</li></ul><hr><ul><li>autorun<br> \u81EA\u52A8\u8FFD\u8E2A\u53EF\u89C2\u5BDF\u6570\u636E\uFF0C\u5F53\u5728\u53EF\u89C2\u5BDF\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\uFF08\u4F1A\u521D\u59CB\u5316\u6267\u884C\u4E00\u6B21\uFF09</li><li>reaction<br> \u63A5\u6536\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u51FD\u6570\u662F\u7528\u6765\u8FFD\u8E2A\u5E76\u8FD4\u56DE\u6570\u636E\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u51FD\u6570\u7684\u8F93\u5165</li><li>when<br> \u63A5\u6536\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE true \u65F6\uFF0C\u6267\u884C\u7B2C\u4E8C\u4E2A\u51FD\u6570</li></ul>`,84),d=[s];function a(r,c){return i(),n("div",null,d)}var v=e(t,[["render",a],["__file","react.html.vue"]]);export{v as default};
