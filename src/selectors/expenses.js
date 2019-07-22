import _ from 'lodash'

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

export default getVisibleExpenses