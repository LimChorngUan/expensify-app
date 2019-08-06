import filtersReducer from '../../reducers/filters'
import { filtersTestData } from './filtersTestData'

describe(`Reducer: filtersReducer`, () => {
  test.each(filtersTestData)(
    `%p`,
    (testTitle, currentState, action, nextState) => {
      expect(filtersReducer(currentState, action)).toEqual(nextState)
    }
  )
})