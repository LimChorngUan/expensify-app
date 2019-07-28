import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import AppRouter from './routers/AppRouter'

const store = configureStore()

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
store.dispatch(addExpense({
  description: `Yoga Mat`,
  note: `Workout RAhhh!`,
  amount: 2000,
  createdAt: 4,
}))
store.dispatch(addExpense({
  description: `Meow`,
  amount: 60000,
  createdAt: 5,
}))

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
