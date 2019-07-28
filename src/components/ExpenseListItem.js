import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
}) => (
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p>Amount: {amount}</p>
    <p>Create at: {createdAt}</p>
  </div>
)

export default ExpenseListItem
