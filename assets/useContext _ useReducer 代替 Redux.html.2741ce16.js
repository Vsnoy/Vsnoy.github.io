import{_ as e,o as n,c as i,e as s}from"./app.d68713c7.js";const d={},t=s(`<h1 id="usecontext-usereducer-\u4EE3\u66FF-redux" tabindex="-1"><a class="header-anchor" href="#usecontext-usereducer-\u4EE3\u66FF-redux" aria-hidden="true">#</a> useContext + useReducer \u4EE3\u66FF Redux</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5F85\u5B8C\u5584\uFF0C\u8FD8\u6709\u53EF\u4EE5\u4F18\u5316\u7684\u70B9\uFF0C\u540E\u7EED\u7814\u7A76\u4E0B\u3002<br> https://www.v2ex.com/t/851160</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const initState = {
  count: 0
}

const reducer = (state, action) =&gt; {
  switch (action.type) {
    case &#39;add&#39;:
      return { count: state.count + action.value}
    case &#39;sub&#39;:
      return { count: state.count - action.value }
    default:
      return state
  }
}

const context = createContext()

const ContextProvider = ({children}) =&gt; {
  const [state, dispatch] = useReducer(reducer, initState)
  
  return (
    &lt;context.Provider value={{state, dispatch}}&gt;
      {children}
    &lt;/context.Provider&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const App = () =&gt; {
  return (
    &lt;ContextProvider&gt;
      &lt;Parent/&gt;
    &lt;/ContextProvider&gt;
  )
}

const Parent = () =&gt; {
  const { state: { count } } = useContext(context)
  
  return (
    &lt;div&gt;
      &lt;div&gt;{\`count: \${count}\`}&lt;/div&gt;

      &lt;Child/&gt;
    &lt;/div&gt;
  )
}

const Child = () =&gt; {
  const { dispatch } = useContext(context)

  const add = () =&gt; dispatch({type: &#39;add&#39;, value: 1})
  const sub = () =&gt; dispatch({type: &#39;sub&#39;, value: 1})

  return (
    &lt;div&gt;
      &lt;button onClick={add}&gt;Add&lt;/button&gt;
      &lt;button onClick={sub}&gt;Sub&lt;/button&gt;
    &lt;/div&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function v(c,r){return n(),i("div",null,l)}var u=e(d,[["render",v],["__file","useContext + useReducer \u4EE3\u66FF Redux.html.vue"]]);export{u as default};
