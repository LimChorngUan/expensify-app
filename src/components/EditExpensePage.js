import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = ({
  match: { params: { id } },
  expense,
  editExpense,
  removeExpense,
  history
}) => {
  const handleSubmit = useCallback(updates => {
      editExpense(id, updates)
      history.push(`/`)
    },
    []
  )

  const handleRemoveClick = useCallback(id => {
      removeExpense(id)
      history.push(`/`)
    },
    []
  )

  return (
    <React.Fragment>
      <ExpenseForm
        expense={expense}
        formType="edit"
        handleSubmit={handleSubmit}
        data-test-id="edit-expense-form"
      />
      <button
        onClick={() => {handleRemoveClick(id)}}
        data-test-id="remove-button"
      >
        Remove
      </button>
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => ({
  expense: _.find(state.expenses, item => item.id === ownProps.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: id => dispatch(removeExpense({ id })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditExpensePage)
export { EditExpensePage }