import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

const SORT_BY_VALUE = {
  DATE: `date`,
  AMOUNT: `amount`,
}

const ExpenseFilter = ({
  filters,
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
}) => {
  const handleSelectChange = useCallback(
    (sortByValue) => {
      switch(sortByValue) {
        case SORT_BY_VALUE.DATE:
          sortByDate()
          break
        case SORT_BY_VALUE.AMOUNT:
          sortByAmount()
          break
        default:
          console.log(`nah`)
      }
    }, []
  )

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={setTextFilter}
        data-test-id="text-filter-input"
      />

      <label htmlFor="sort-by">Sort By:</label>
      <select
        id="sort-by"
        value={filters.sortBy}
        onChange={(e) => handleSelectChange(e.target.value)}
        data-test-id="sort-by-selector"
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

      <label htmlFor="start-date">Start date</label>
      <input
        id="start-date"
        type="number"
        value={filters.startDate}
        onChange={(e) => setStartDate(e.target.value)}
        data-test-id="start-date-input"
      />

      <label htmlFor="end-date">End date</label>
      <input
        id="end-date"
        type="number"
        value={filters.endDate}
        onChange={(e) => setEndDate(e.target.value)}
        data-test-id="end-date-input"
      />
    </div>
  )
}

const mapStateToProps = state => ({
  filters: state.filters,
})

const mapDispatchToProps = dispatch => ({
  setTextFilter: e => dispatch(setTextFilter(e.target.value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(Number(startDate))),
  setEndDate: endDate => dispatch(setEndDate(Number(endDate))),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseFilter)
export { ExpenseFilter }