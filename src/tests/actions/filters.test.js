import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

describe(`Actions: all filter actions`, () => {
  test(`should setup setTextFilter action object with default value`, () => {
    const action = setTextFilter()

    expect(action).toEqual({
      type: `SET_TEXT_FILTER`,
      text: ``,
    })
  })

  test(`should setup setTextFilter action object with provided value`, () => {
    const action = setTextFilter(`some text`)

    expect(action).toEqual({
      type: `SET_TEXT_FILTER`,
      text: `some text`,
    })
  })

  test(`should setup sortByDate action object`, () => {
    const action = sortByDate()

    expect(action).toEqual({
      type: `SORT_BY_DATE`,
    })
  })

  test(`should setup sortByAmount action object`, () => {
    const action = sortByAmount()

    expect(action).toEqual({
      type: `SORT_BY_AMOUNT`,
    })
  })

  test(`should setup setStartDate action object`, () => {
    const action = setStartDate(10)

    expect(action).toEqual({
      type: `SET_START_DATE`,
      startDate: 10,
    })
  })

  test(`should setup setEndDate action object`, () => {
    const action = setEndDate(10)

    expect(action).toEqual({
      type: `SET_END_DATE`,
      endDate: 10,
    })
  })
})