import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { addExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

const AddExpensePage = ({
  addExpense,
  history
}) => {
  const handleSubmit = useCallback(expense => {
    addExpense(expense)
    history.push(`/`)
  }, [])

  return (
    <div>
      This is from my add expense component
      <ExpenseForm
        handleSubmit={handleSubmit}
        formType="add"
        data-test-id="add-expense-form"
      />
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
})

export default connect(
  null,
  mapDispatchToProps,
)(AddExpensePage)

export { AddExpensePage }
