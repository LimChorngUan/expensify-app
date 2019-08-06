import expensesReducer from '../../reducers/expenses'
import { expensesTestData } from './expensesTestData'

describe(`Reducer: expensesReducer`, () => {
  test.each(expensesTestData)(
    `%p`,
    (testTitle, currentState, action, nextState) => {
      expect(expensesReducer(currentState, action)).toEqual(nextState)
    }
  )
})