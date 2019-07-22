import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import AppRouter from './routers/AppRouter'

const store = configureStore()

store.dispatch(addExpense({
  description: `Rent`,
  amount: 40000,
  createdAt: 1,
}))
store.dispatch(addExpense({
  description: `Hair treatment`,
  note: `Pretty Pretty`,
  amount: 16600,
  createdAt: 2,
}))
store.dispatch(addExpense({
  description: `Bubble Tea`,
  note: `It's summer!`,
  amount: 400,
  createdAt: 3,
}))
store.dispatch(setTextFilter(``))

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)

console.log(visibleExpenses)

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
