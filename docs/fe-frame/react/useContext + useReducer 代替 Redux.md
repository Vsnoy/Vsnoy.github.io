# useContext + useReducer 代替 Redux

:::warning
待完善，还有可以优化的点，后续研究下。  
https://www.v2ex.com/t/851160
:::

```
const initState = {
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + action.value}
    case 'sub':
      return { count: state.count - action.value }
    default:
      return state
  }
}

const context = createContext()

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState)
  
  return (
    <context.Provider value={{state, dispatch}}>
      {children}
    </context.Provider>
  )
}
```

```
const App = () => {
  return (
    <ContextProvider>
      <Parent/>
    </ContextProvider>
  )
}

const Parent = () => {
  const { state: { count } } = useContext(context)
  
  return (
    <div>
      <div>{`count: ${count}`}</div>

      <Child/>
    </div>
  )
}

const Child = () => {
  const { dispatch } = useContext(context)

  const add = () => dispatch({type: 'add', value: 1})
  const sub = () => dispatch({type: 'sub', value: 1})

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  )
}
```
