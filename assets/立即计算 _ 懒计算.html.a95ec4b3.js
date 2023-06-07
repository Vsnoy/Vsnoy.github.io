import{_ as i,o as l,c as s,a as e,b as d,d as r,e as v,r as t}from"./app.bf5f5edd.js";const a={},c=r(`<h1 id="\u7ACB\u5373\u8BA1\u7B97-\u61D2\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u8BA1\u7B97-\u61D2\u8BA1\u7B97" aria-hidden="true">#</a> \u7ACB\u5373\u8BA1\u7B97 &amp; \u61D2\u8BA1\u7B97</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4E0B\u8FF0\u7814\u7A76\u90FD\u662F\u5EFA\u7ACB\u5728 <code>Hooks</code> \u51FD\u6570\u7EC4\u4EF6\u5185\uFF0C\u4E14\u4EC5\u9002\u7528\u4E8E\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\uFF08 <code>useEffect</code> \uFF09\u5185\u3002<br> \u7ACB\u5373\u8BA1\u7B97\u5207\u6362\u61D2\u8BA1\u7B97\u597D\u8BF4\uFF0C\u61D2\u8BA1\u7B97\u5207\u6362\u7ACB\u5373\u8BA1\u7B97\u7684\u65F6\u673A\uFF0C\u4E0B\u8FF0\u89C4\u5219\u4E0E\u5B9E\u9645\u8FD8\u6709\u4E9B\u51FA\u5165\uFF0C\u540E\u7EED\u5F85\u7814\u7A76\u3002</p></div><h2 id="\u7ACB\u5373\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u8BA1\u7B97" aria-hidden="true">#</a> \u7ACB\u5373\u8BA1\u7B97</h2><p><code>React</code> \u9ED8\u8BA4\u91C7\u7528\u7684\u662F\u7ACB\u5373\u8BA1\u7B97\u7B56\u7565\u3002</p><ul><li>\u4F7F\u7528\u573A\u666F <ul><li>\u4E0A\u4E2A <code>state</code> \u4E3A\u521D\u59CB <code>state</code></li><li>\u4E0A\u4E2A <code>state</code> \u76F8\u8F83\u4E4B\u524D\u672A\u53D1\u751F\u53D8\u5316</li></ul></li><li>\u5177\u4F53\u89C4\u5219 <ul><li>\u5982\u679C <code>state</code> \u503C\u4E0D\u53D8\uFF0C\u5219\u4E0D\u4F1A\u89E6\u53D1 <code>re-render</code></li><li>\u5982\u679C <code>state</code> \u503C\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u7ACB\u5373\u8F6C\u5230\u61D2\u8BA1\u7B97\u7B56\u7565</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Counter() {
  const [counter, setCounter] = useState(0)

  console.log(&#39;Counter.render&#39;)

  return (
    &lt;&gt;
      &lt;p&gt;{\`couter: \${counter}\`}&lt;/p&gt;
      
      &lt;button onClick={
        () =&gt; {
          console.log(&#39;click start&#39;)

          // \u4E0A\u4E2A state \u662F\u521D\u59CB state\uFF0C\u91C7\u7528\u7ACB\u5373\u8BA1\u7B97
          setCounter(prev =&gt; {
            console.log(\`update 0, prev \${prev}\`)
            return 0
          })

          // \u4E0A\u4E2A state \u76F8\u8F83\u4E4B\u524D\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u7EE7\u7EED\u91C7\u7528\u7ACB\u5373\u8BA1\u7B97
          setCounter(prev =&gt; {
            console.log(\`update 1, prev \${prev}\`)
            return 1
          })

          // \u4E0A\u4E2A state \u76F8\u8F83\u4E4B\u524D\u53D1\u751F\u53D8\u5316\uFF0C\u7ACB\u5373\u8BA1\u7B97\u8F6C\u53D8\u6210\u61D2\u8BA1\u7B97
          setCounter(prev =&gt; {
            console.log(\`update 2, prev \${prev}\`)
            return 2
          })

          setCounter(prev =&gt; {
            console.log(\`update 3, prev \${prev}\`)
            return 3
          })

          console.log(&#39;click end&#39;)
        }
      }&gt;
        setCounter
      &lt;/button&gt;
    &lt;/&gt;
  )
}

// \u70B9\u51FB setCounter \u540E\u8F93\u51FA
click start
update 0, prev 0
update 1, prev 0
click end
update 2, prev 1
update 3, prev 2
Counter.render
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u61D2\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u61D2\u8BA1\u7B97" aria-hidden="true">#</a> \u61D2\u8BA1\u7B97</h2><p>\u9664\u4E0A\u8FF0\u63D0\u5230\u7684\u4E24\u79CD\u573A\u666F\u4E4B\u5916\uFF0C\u90FD\u662F\u61D2\u8BA1\u7B97\u3002</p><ul><li>\u5177\u4F53\u89C4\u5219 <ul><li>\u5148\u6E32\u67D3\uFF0C\u518D\u6267\u884C\u5404\u66F4\u65B0\u961F\u5217\u5185\u7684\u66F4\u65B0\u51FD\u6570</li><li>\u66F4\u65B0\u961F\u5217\u6267\u884C\u5148\u540E\u987A\u5E8F\uFF0C\u53D6\u51B3\u4E8E <code>useState</code> \u58F0\u660E\u987A\u5E8F</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Counter() {
  // \u61D2\u8BA1\u7B97\u6839\u636E useState \u58F0\u660E\u5148\u540E\u987A\u5E8F\uFF0C\u4F9D\u6B21\u6267\u884C\u5BF9\u5E94 state \u7684\u66F4\u65B0\u961F\u5217
  // \u8FD9\u91CC counter1 \u5BF9\u5E94\u7684 useState \u5728 counter2 \u4E4B\u524D
  // \u5219\u5148\u6267\u884C counter1 \u5BF9\u5E94\u7684\u66F4\u65B0\u961F\u5217\uFF0C\u518D\u6267\u884C counter2 \u5BF9\u5E94\u7684\u66F4\u65B0\u961F\u5217
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  
  console.log(&#39;Counter.render&#39;)

  return (
    &lt;&gt;
      &lt;p&gt;{\`couter1: \${counter1}\`}&lt;/p&gt;
      &lt;p&gt;{\`couter2: \${counter2}\`}&lt;/p&gt;

      &lt;button onClick={
        () =&gt; {
          console.log(&#39;click start&#39;)

          // \u4E0A\u4E2A state \u662F\u521D\u59CB state\uFF0C\u91C7\u7528\u7ACB\u5373\u8BA1\u7B97
          setCounter1(prev =&gt; {
            console.log(\`setCounter1: update 1, prev \${prev}\`)
            return 1
          })

          // \u4E0A\u4E2A state \u76F8\u8F83\u4E4B\u524D\u53D1\u751F\u53D8\u5316\uFF0C\u7ACB\u5373\u8BA1\u7B97\u8F6C\u53D8\u6210\u61D2\u8BA1\u7B97
          // \u4EE5\u4E0B\u66F4\u65B0\u51FD\u6570\u90FD\u8D70\u61D2\u8BA1\u7B97\uFF0C\u5206 counter1\u3001counter2 \u4E24\u4E2A\u66F4\u65B0\u961F\u5217
          // \u6267\u884C\u987A\u5E8F\u6309\u7167\u5BF9\u5E94 useState \u58F0\u660E\u987A\u5E8F
          setCounter2(prev =&gt; {
            console.log(\`setCounter2: update 1, prev \${prev}\`)
            return 1
          })

          setCounter1(prev =&gt; {
            console.log(\`setCounter1: update 2, prev \${prev}\`)
            return 2
          })

          setCounter2(prev =&gt; {
            console.log(\`setCounter2: update 2, prev \${prev}\`)
            return 2
          })
          
          console.log(&#39;click end&#39;)
        }
      }&gt;
        setCounter
      &lt;/button&gt;
    &lt;/&gt;
  )
}

// \u70B9\u51FB setCounter \u540E\u8F93\u51FA

click start 
setCounter1: update1, prev 0
click end 
setCounter1: update2, prev 1 
setCounter2: update1, prev 0 
setCounter2: update2, prev 1 
Counter.render 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,11),u={href:"https://github.com/yaofly2012/note/issues/204",target:"_blank",rel:"noopener noreferrer"},o=v("\u89E3\u5BC6 React State Hook");function m(b,p){const n=t("ExternalLinkIcon");return l(),s("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[o,d(n)])])])])}var h=i(a,[["render",m],["__file","\u7ACB\u5373\u8BA1\u7B97 & \u61D2\u8BA1\u7B97.html.vue"]]);export{h as default};
