import{_ as l,o as r,c as s,a as e,b as i,e as t,d,r as c}from"./app.2765fdee.js";const a={},v=t(`<h1 id="\u91CD\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6E32\u67D3" aria-hidden="true">#</a> \u91CD\u6E32\u67D3</h1><h2 id="\u7EC4\u4EF6\u81EA\u8EAB\u72B6\u6001\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u81EA\u8EAB\u72B6\u6001\u53D8\u66F4" aria-hidden="true">#</a> \u7EC4\u4EF6\u81EA\u8EAB\u72B6\u6001\u53D8\u66F4</h2><p>\u7EC4\u4EF6\u81EA\u8EAB\u901A\u8FC7 <code>setState</code> \u66F4\u65B0\u72B6\u6001\uFF0C\u4F1A\u5BFC\u81F4\u7EC4\u4EF6 <code>re-render</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const Child = () =&gt; {
  const [count, setCount] = useState(0)

  console.log(&#39;re-render!!&#39;)

  return (
    &lt;div&gt;
      &lt;div&gt;{\`count: \${count}\`}&lt;/div&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click&lt;/button&gt;
    &lt;/div&gt;
  )
}

// \u8F93\u51FA
re-render!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u66F4" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u66F4</h2><p>\u7236\u7EC4\u4EF6\u901A\u8FC7 <code>setState</code> \u66F4\u65B0\u72B6\u6001\uFF0C\u4F1A\u5BFC\u81F4\u7236\u7EC4\u4EF6\u81EA\u8EAB\u53CA\u5176\u5B50\u7EC4\u4EF6 <code>re-render</code>\uFF0C\u65E0\u8BBA\u5B50\u7EC4\u4EF6\u662F\u5426\u6709\u901A\u8FC7 <code>Props</code> \u63A5\u6536\u7236\u7EC4\u4EF6\u72B6\u6001\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const Parent = () =&gt; {
  const [count, setCount] = useState(0)

  console.log(&#39;Parent re-render!!&#39;)

  return (
    &lt;div&gt;
      &lt;div&gt;{\`count: \${count}\`}&lt;/div&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click&lt;/button&gt;

      &lt;Child/&gt;
    &lt;/div&gt;
  )
}

const Child = () =&gt; {
  console.log(&#39;Child re-render!!&#39;)

  return &lt;div&gt;Violet Evergadern&lt;/div&gt;
}

// \u8F93\u51FA
Parent re-render!!
Child re-render!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>Props</code> \u53D1\u751F\u53D8\u5316\u4E0E\u7EC4\u4EF6 <code>re-render</code> \u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\uFF0C\u672C\u8D28\u8FD8\u662F\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u66F4\u5BFC\u81F4\u7684\u3002</p></div><h2 id="context-\u503C\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#context-\u503C\u53D8\u66F4" aria-hidden="true">#</a> Context \u503C\u53D8\u66F4</h2><p><code>Context</code> \u503C\u53D8\u66F4\uFF0C\u4F1A\u5BFC\u81F4\u7528\u5230 <code>Context</code> \u503C\u7684\u7EC4\u4EF6 <code>re-render</code>\uFF0C\u4E14\u6839\u636E\u4E0A\u4E00\u6761\u89C4\u5219\uFF0C\u8BE5\u7EC4\u4EF6\u5B50\u7EC4\u4EF6\u4E5F\u4F1A <code>re-render</code>\u3002 \u81F3\u4E8E <code>Context Provider</code> \u6240\u5728\u7EC4\u4EF6\u53CA\u7528\u5230 <code>Context</code> \u503C\u7684\u7EC4\u4EF6\u4E2D\u95F4\u8DF3\u8FC7\u7684\u7EC4\u4EF6\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C <code>re-render</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const context = createContext()

const App = () =&gt; {
  return (
    &lt;Parent&gt;
      &lt;Child/&gt;
    &lt;/Parent&gt;
  )
}

const Parent = ({children}) =&gt; {
  const [count, setCount] = useState(0)

  console.log(&#39;Parent re-render!!&#39;)

  return (
    &lt;div&gt;
      &lt;div&gt;{\`count: \${count}\`}&lt;/div&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click&lt;/button&gt;

      &lt;Context.Provider value={count}&gt;
        {children}
      &lt;/Context.Provider&gt;
    &lt;/div&gt;
  )
}

const Child = () =&gt; {
  console.log(&#39;Child re-render!!&#39;)

  return &lt;GrandChild/&gt;
}

const GrandChild = () =&gt; {
  const count = useContext(context)

  console.log(&#39;GrandChild re-render!!&#39;)

  return &lt;GrandGrandChild/&gt;
}

const GrandGrandChild = () =&gt; {
  console.log(&#39;GrandGrandChild re-render!!&#39;)

  return &lt;div&gt;Violet Evergadern&lt;/div&gt;
}

// \u8F93\u51FA
Parent re-render!!
GrandChild re-render!!
GrandGrandChild re-render!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5176\u5B9E <code>Context</code> \u503C\u4E4B\u6240\u4EE5\u4F1A\u53D8\u66F4\uFF0C\u672C\u8D28\u8FD8\u662F <code>State</code> \u53D8\u5316\u4E86\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8BF4 <code>React</code> \u4E2D\u4E00\u5207 <code>re-render</code> \u91CD\u6E32\u67D3\u90FD\u8DDF <code>State</code> \u72B6\u6001\u6709\u5173\u3002</p></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),o={href:"https://www.joshwcomeau.com/react/why-react-re-renders/",target:"_blank",rel:"noopener noreferrer"},u=d("Why React Re-Renders"),m={href:"https://www.developerway.com/posts/react-re-renders-guide",target:"_blank",rel:"noopener noreferrer"},b=d("React re-renders guide");function g(h,C){const n=c("ExternalLinkIcon");return r(),s("div",null,[v,e("ul",null,[e("li",null,[e("a",o,[u,i(n)])]),e("li",null,[e("a",m,[b,i(n)])])])])}var x=l(a,[["render",g],["__file","\u91CD\u6E32\u67D3.html.vue"]]);export{x as default};
