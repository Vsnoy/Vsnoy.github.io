import{_ as i,o as s,c as t,a as e,b as d,d as l,e as a,r as c}from"./app.7072a82a.js";const v={},r=l(`<h1 id="\u540C\u6B65\u5F02\u6B65-\u6279\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u5F02\u6B65-\u6279\u5904\u7406" aria-hidden="true">#</a> \u540C\u6B65\u5F02\u6B65 &amp; \u6279\u5904\u7406</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5C5E\u4E8E <code>React</code> \u63A7\u5236\u4E4B\u5185\u7684\u4F1A\u8D70\u5F02\u6B65\u6279\u5904\u7406\uFF0C\u63A7\u5236\u4E4B\u5916\u7684\u4F1A\u8D70\u540C\u6B65\u975E\u6279\u5904\u7406\u3002</p><ul><li>\u5728\u539F\u751F\u4E8B\u4EF6\u6216\u5F02\u6B65\u4EE3\u7801\u4E2D\uFF0C<code>setState</code> \u662F\u540C\u6B65\uFF0C\u975E\u6279\u5904\u7406\u3002</li><li>\u5728\u5408\u6210\u4E8B\u4EF6\u6216\u94A9\u5B50\u51FD\u6570\u4E2D\uFF0C<code>setState</code> \u662F\u5F02\u6B65\uFF0C\u6279\u5904\u7406\u3002</li></ul><p>\u6CE8 1\uFF1A\u5BF9\u4E8E <code>setState</code>\uFF0C\u7C7B\u7EC4\u4EF6\u4E2D\u65E0\u8BBA\u524D\u540E\u503C\u662F\u5426\u4E00\u81F4\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u91CD\u6E32\u67D3\uFF1B\u51FD\u6570\u7EC4\u4EF6\u4E2D\u82E5\u524D\u540E\u503C\u4E00\u81F4\uFF0C\u7406\u8BBA\u4E0A\u4E0D\u4F1A\u5BFC\u81F4\u91CD\u6E32\u67D3\uFF08\u4F46\u4ECD\u53EF\u80FD\u91CD\u6E32\u67D3\uFF0C\u4E0D\u8FC7\u4E0D\u4F1A\u91CD\u6E32\u67D3\u5B50\u7EC4\u4EF6\uFF09\u3002</p><p>\u6CE8 2\uFF1A<code>React</code> \u672C\u8EAB\u6267\u884C\u7684\u8FC7\u7A0B\u548C\u4EE3\u7801\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u53EA\u662F\u5408\u6210\u4E8B\u4EF6\u548C\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u987A\u5E8F\u5728\u66F4\u65B0\u4E4B\u524D\uFF0C\u5BFC\u81F4\u5728\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\u4E2D\u6CA1\u6CD5\u7ACB\u9A6C\u62FF\u5230\u66F4\u65B0\u540E\u7684\u503C\uFF0C\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u5F02\u6B65\u4E86\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><code>React 18</code> \u5F15\u5165\u4E86\u65B0\u7279\u6027 <code>Automatic Batching</code> \u81EA\u52A8\u6279\u5904\u7406\uFF0C\u8BE5\u7279\u6027\u4F7F\u5F97\u5728\u539F\u751F\u4E8B\u4EF6\u6216\u5F02\u6B65\u4EE3\u7801\u4E2D\u4E5F\u4F1A\u81EA\u52A8\u8D70\u6279\u5904\u7406\u3002\u540E\u7EED\u5F85\u7814\u7A76\u3002</p></div><h2 id="\u540C\u6B65-\u975E\u6279\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65-\u975E\u6279\u5904\u7406" aria-hidden="true">#</a> \u540C\u6B65 &amp; \u975E\u6279\u5904\u7406</h2><h3 id="\u539F\u751F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F\u4E8B\u4EF6" aria-hidden="true">#</a> \u539F\u751F\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class App extends Component {
  state = { 
    count: 0 
  }

  handleClick = () =&gt; {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 }) 
    this.setState({ count: this.state.count + 1 })  

    console.log(this.state.count) // 3
  }

  componentDidMount() {
    document.body.addEventListener(&#39;click&#39;, this.handleClick)
  }

  render() {
    return &lt;div&gt;{this.state.count}&lt;/div&gt; // 3
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F02\u6B65\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u4EE3\u7801" aria-hidden="true">#</a> \u5F02\u6B65\u4EE3\u7801</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class App extends Component {
  state = { 
    count: 0 
  }

  handleClick = () =&gt; {
    setTimeout(() =&gt; {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 }) 
      this.setState({ count: this.state.count + 1 })  
      
      console.log(this.state.count) // 3
    }, 0)
  }

  render() {
    return &lt;div onClick={this.handleClick}&gt;{this.state.count}&lt;/div&gt; // 3
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5408\u6210\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u51FD\u6570\u4E2D\u5D4C\u5957\u5F02\u6B65\u4EE3\u7801\uFF0C\u5F02\u6B65\u4EE3\u7801\u4E2D\u7684 <code>setState</code> \u91C7\u7528\u540C\u6B65\u975E\u6279\u5904\u7406\uFF0C\u9075\u5FAA\u5C31\u8FD1\u539F\u5219\u3002</p><h2 id="\u5F02\u6B65-\u6279\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65-\u6279\u5904\u7406" aria-hidden="true">#</a> \u5F02\u6B65 &amp; \u6279\u5904\u7406</h2><h3 id="\u5408\u6210\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5408\u6210\u4E8B\u4EF6" aria-hidden="true">#</a> \u5408\u6210\u4E8B\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class App extends Component {
  state = { 
    count: 0 
  }

  handleClick = () =&gt; {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 }) 
    this.setState({ count: this.state.count + 1 })  
    
    console.log(this.state.count) // 0
  }

  render() {
    return &lt;div onClick={this.handleClick}&gt;{this.state.count}&lt;/div&gt; // 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class App extends Component {
  state = { 
    count: 0 
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 }) 
    this.setState({ count: this.state.count + 1 })  
    
    console.log(this.state.count) // 0
  }

  render() {
    return &lt;div&gt;{this.state.count}&lt;/div&gt; // 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\u4E2D\uFF0C<code>setState</code> \u662F\u5F02\u6B65\uFF0C\u6279\u5904\u7406\u3002<br> \u4F46\u6709\u4E2A\u4F8B\u5916\uFF0C<code>setState</code> \u53C2\u6570\u662F\u51FD\u6570\u5F62\u5F0F\u65F6\uFF0C\u867D\u5176\u4ECD\u662F\u5F02\u6B65\uFF0C\u4F46\u4E0D\u53C2\u4E0E\u6279\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class App extends Component {
  state = { 
    count: 0 
  }

  handleClick = () =&gt; {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 }) 
    this.setState({ count: this.state.count + 1 })

    this.setState(state =&gt; {
      return { count: state.count + 1 }
    })  
    
    console.log(this.state.count) // 0
  }

  render() {
    return &lt;div onClick={this.handleClick}&gt;{this.state.count}&lt;/div&gt; // 2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> \u601D\u8003\u9898</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    };
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val); // \u7B2C 1 \u6B21 log

    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val); // \u7B2C 2 \u6B21 log

    setTimeout(() =&gt; {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val); // \u7B2C 3 \u6B21 log

      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val); // \u7B2C 4 \u6B21 log
    }, 0);
  }

  render() {
    return null
  }
}

// React 18 \u4E4B\u524D\u8F93\u51FA
0\u30010\u30012\u30013

// React 18 \u4E4B\u540E\u8F93\u51FA\u3002\u5F85\u7814\u7A76\u3002
0\u30010\u30011\u30011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,18),u={href:"https://jolylai.github.io/notebook-react/react/setState.html",target:"_blank",rel:"noopener noreferrer"},o=a("setState");function m(b,h){const n=c("ExternalLinkIcon");return s(),t("div",null,[r,e("ul",null,[e("li",null,[e("a",u,[o,d(n)])])])])}var g=i(v,[["render",m],["__file","\u540C\u6B65\u5F02\u6B65 & \u6279\u5904\u7406.html.vue"]]);export{g as default};
