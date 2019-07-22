import React from 'react'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({
  description: `Water bill`,
  amount: 1200,
}))
store.dispatch(addExpense({
  description: `Gas bill`,
  note: `It's summer!`,
  amount: 100,
}))
store.dispatch(setTextFilter(`gas`))

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)

console.log(visibleExpenses)

function App() {
  return (
    <div>hello Redux</div>
  );
}

export default App;
