import React from 'react'

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
}) => (
  <div>
    <h4>{description}</h4>
    <p>Amount: {amount}</p>
    <p>Create at: {createdAt}</p>
  </div>
)

export default ExpenseListItem
