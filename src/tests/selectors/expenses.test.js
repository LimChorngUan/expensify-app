import getVisibleExpenses from '../../selectors/expenses'
import { expenses, testData } from './testData'

describe(`Selector: getVisibleExpenses. Should return the correct visible expenses for each filter:`, () => {
  test.each(testData)(
    `%p`,
    (testTitle, filters, expected) => {
      const visibleExpenses = getVisibleExpenses(expenses, filters)

      expect(visibleExpenses).toEqual(expected)
    }
  )
})