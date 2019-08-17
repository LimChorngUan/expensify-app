import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import filterExpense from '../selectors/expenses'

import ExpenseListItem from './ExpenseListItem'

const ExpenseList = ({
  expenses
}) => (
  <div>
    <h1>My Expenses</h1>

    {!_.size(expenses) && (
      <p>No expense</p>
    )}

    {_.size(expenses) &&
      expenses.map(item => (
        <ExpenseListItem key={item.id} {...item}></ExpenseListItem>
      ))
    }
  </div>
)

const mapStateToProps = (state) => ({
  expenses: filterExpense(state.expenses, state.filters)
})

export default connect(
  mapStateToProps
)(ExpenseList)
export { ExpenseList }