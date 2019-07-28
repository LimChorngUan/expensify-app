import React, { useState } from 'react'

const FORM_TYPE = {
  ADD: `add`,
  EDIT: `edit`,
}

const BUTTON_TEXT = {
  [FORM_TYPE.ADD]: `Add Expense`,
  [FORM_TYPE.EDIT]: `Edit Expense`,
}

const ExpenseForm = ({
  handleSubmit,
  expense = {},
  formType
}) => {
  const [description, setDescription] = useState(expense.description || ``)
  const [amount, setAmount] = useState(expense.amount || 0)
  const [createdAt, setCreatedAt] = useState(expense.createdAt || 0)
  const [note, setNote] = useState(expense.note || ``)

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, {
        description,
        amount,
        createdAt,
        note,
      })}>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="created at"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <textarea
          placeholder="Write your notes here (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">{BUTTON_TEXT[formType]}</button>
      </form>
    </div>
  )
}

export default ExpenseForm