// testTitle, currentState, action, nextState
const filtersState= {
  text: ``,
  sortBy: `date`, // date or amount
  startDate: undefined,
  endDate: undefined,
}

export const filtersTestData = [
  [
    `should return the initial/default state`,
    filtersState,
    {},
    filtersState,
  ],
  [
    `should handle SET_TEXT_FILTER`,
    filtersState,
    { type: `SET_TEXT_FILTER`, text: `A` },
    {
      ...filtersState,
      text: `A`,
    }
  ],
  [
    `should handle SORT_BY_DATE`,
    {
      ...filtersState,
      sortBy: `amount`,
    },
    { type: `SORT_BY_DATE` },
    {
      ...filtersState,
      sortBy: `date`,
    }
  ],
  [
    `should handle SORT_BY_AMOUNT`,
    filtersState,
    { type: `SORT_BY_AMOUNT` },
    {
      ...filtersState,
      sortBy: `amount`,
    }
  ],
  [
    `should handle SET_START_DATE`,
    filtersState,
    { type: `SET_START_DATE`, startDate: 1 },
    {
      ...filtersState,
      startDate: 1,
    }
  ],
  [
    `should handle SET_END_DATE`,
    filtersState,
    { type: `SET_END_DATE`, endDate: 1 },
    {
      ...filtersState,
      endDate: 1,
    }
  ],
]