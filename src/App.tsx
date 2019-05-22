import React, { useState, useReducer } from 'react'

type StateType = {
  // todos: string[],
  text: string
}
type ActionType = {
  type: "HANDLE_TEXT",
  payload: string
}
// 'ADD_TODO' | 'REMOVE_TODO' | 'EDIT_TODO' |


const initialState = {
  // todos: [],
  text: ''
}

function reducer(state: StateType = initialState, action: ActionType) {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return [...state.todos, state.text]
    case 'HANDLE_TEXT':
      return { text: action.payload }
    default:
      return state;
  }
}

function App({ initialText = '' }) {
  const [state, dispatch] = useReducer(reducer, { text: initialText })
  return (
    <>
      {/* <div>
        Todos: {state.todos.map((i: string) => <div>{i}</div>)}
      </div> */}
      <h4>Current text: {state.text}</h4>
      <input onChange={e => dispatch({ type: 'HANDLE_TEXT', payload: e.target.value })} type='text' />
    </>
  )
}


// type StateType = {
//   count: number
// }

// type ActionType = {
//   type: 'reset' | 'decrement' | 'increment'
// }

// const initialState = { count: 0 }

// function reducer(state: StateType, action: ActionType) {
//   switch (action.type) {
//     case 'reset':
//       return initialState
//     case 'increment':
//       return { count: state.count + 1 }
//     case 'decrement':
//       return { count: state.count - 1 }
//     default:
//       return state
//   }
// }

// function App({ initialCount = 1 }) {
//   const [state, dispatch] = useReducer(reducer, { count: initialCount })
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>Add</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Dec</button>
//     </>
//   )
// }

export default App