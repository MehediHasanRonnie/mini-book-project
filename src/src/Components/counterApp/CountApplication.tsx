// import React, { useReducer, useContext, createContext } from 'react'

// const initialState:number = {
//   count: 0
// }

// const CounterContext = React.createContext()

// const counterReducer = (state:number, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 }
//     case 'DECREMENT':
//       return { count: state.count - 1 }
//     default:
//       return state.count
//   }
// }

// const Counter:React.FC = () => {
//   const { state<any></any>, dispatch } = useContext(CounterContext)

//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//     </div>
//   )
// }

// const App = () => {
//   const [state, dispatch] = useReducer(counterReducer, initialState)

//   return (
//     <div id="app">
//       <CounterContext.Provider value={{state, dispatch}}>
//         <Counter />
//       </CounterContext.Provider>
//     </div>
//   )
// }
