import React from 'react'
import { createStore } from 'redux'

// Action Factory
const addIncrement = ({ incrementBy = 1 } = {}) => ({
  type: `INCREMENT`,
  incrementBy,
})

const addDecrement = ({ decrementBy = 1 } = {}) => ({
  type: `DECREMENT`,
  decrementBy,
})

const addSetCount = ({ setCount }) => ({
  type: `SET`,
  setCount,
})

const addReset = () => ({
  type: `RESET`,
})

// Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case `INCREMENT`:
      return { count: state.count + action.incrementBy }
    case `DECREMENT`:
      return { count: state.count - action.decrementBy }
    case `SET`:
      return { count: action.setCount }
    case `RESET`:
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addIncrement())

store.dispatch(addIncrement({ incrementBy: 5 }))

store.dispatch(addSetCount({ setCount: 101 }))

store.dispatch(addReset())

store.dispatch(addDecrement())

store.dispatch(addDecrement({ decrementBy: 10 }))
