import React from 'react'
import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
import _ from 'lodash'

// Expense Actions
const addExpense = ({
  description = ``,
  note = ``,
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: `ADD_EXPENSE`,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
})

const removeExpense = ({ id }) => ({
  type: `REMOVE_EXPENSE`,
  id,
})

const editExpense = (id, updates) => ({
  type: `EDIT_EXPENSE`,
  id,
  updates,
})

// Filter Actions
const setTextFilter = (text = ``) => ({
  type: `SET_TEXT_FILTER`,
  text,
})

const sortByDate = () => ({
  type: `SORT_BY_DATE`
})

const sortByAmount = () => ({
  type: `SORT_BY_AMOUNT`
})

const setStartDate = (startDate) => ({
  type: `SET_START_DATE`,
  startDate,
})

const setEndDate = (endDate) => ({
  type: `SET_END_DATE`,
  endDate,
})

// Initial states
const expensesDefualtState = []
const filtersDefualtState = {
  text: ``,
  sortBy: `date`, // date or amount
  startDate: undefined,
  endDate: undefined,
}

// Reducers
const expensesReducer = (state = expensesDefualtState, action) => {
  switch (action.type) {
    case `ADD_EXPENSE`:
      return [
        ...state,
        action.expense,
      ]
    case `REMOVE_EXPENSE`:
     return state.filter(({ id }) => id !== action.id)
    case `EDIT_EXPENSE`:
     return state.map(item => {
       if (item.id === action.id) {
         return ({
           ...item,
           ...action.updates,
         })
       } else {
         return item
       }
     })
    default:
      return state
  }
}

const filtersReducer = (state = filtersDefualtState, action) => {
  switch (action.type) {
    case `SET_TEXT_FILTER`:
      return ({
        ...state,
        text: action.text,
      })
    case `SORT_BY_DATE`:
      return ({
        ...state,
        sortBy: `date`,
      })
    case `SORT_BY_AMOUNT`:
      return ({
        ...state,
        sortBy: `amount`,
      })
    case `SET_START_DATE`:
      return ({
        ...state,
        startDate: action.startDate,
      })
    case `SET_END_DATE`:
      return ({
        ...state,
        endDate: action.endDate,
      })
    default:
      return state
  }
}

// Store
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}))

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
  const filteredExpenses = expenses.filter(expense => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    const startDateMatch = typeof startDate !== `number` || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== `number` || expense.createdAt <= endDate

    return textMatch && startDateMatch && endDateMatch
  })

  if (sortBy === `amount`) {
    return _.sortBy(filteredExpenses, [`amount`])
  } else if (sortBy === `date`) {
    return _.sortBy(filteredExpenses, [`createdAt`])
  }
}

store.subscribe(() => {
  const state = store.getState()
  console.log(getVisibleExpenses(state.expenses, state.filters))
})

// Dispatch Actions
const expense1 = store.dispatch(addExpense({
  description: `July rent`,
  note: `Final payment for this address`,
  amount: 40000,
  createdAt: 1,
}))

const expense2 = store.dispatch(addExpense({
  description: `Bubble tea`,
  note: `Delicious`,
  amount: 400,
  createdAt: 250,
}))

const expense3 = store.dispatch(addExpense({
  description: `Hair treatment`,
  amount: 16600,
  createdAt: 250,
}))

store.dispatch(removeExpense({ id: expense2.expense.id }))

store.dispatch(editExpense(
  expense1.expense.id,
  {
    note: `OH NO`,
    amount: 42000,
  }
))

store.dispatch(addExpense({
  description: `locitance`,
  amount: 15000,
  createdAt: 35,
}))

// store.dispatch(setTextFilter(`hair`))

// store.dispatch(setTextFilter())

store.dispatch(sortByDate())

// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(20))

// store.dispatch(setStartDate())

// store.dispatch(setEndDate(200))

// Demo state
const demoState = {
  expenses: [
    {
      id: `123`,
      description: `January rent`,
      note: `Final payment for this address`,
      amount: 33500, // in cents
      createdAt: 0,
    }
  ],
  filters: {
    text: `rent`,
    sortBy: `amount`, // date or amount
    startDate: undefined,
    endDate: undefined,
  },
}

const ExpensifyPlayground = () => (
  <div>
    redux
  </div>
)

export default ExpensifyPlayground