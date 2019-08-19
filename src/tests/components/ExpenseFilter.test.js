import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import { ExpenseFilter } from '../../components/ExpenseFilter'
import { generateTestId } from '../utils'

describe(`Component: ExpenseFilter`, () => {
  let component
  const props = {
    filters: {
      text: ``,
      sortBy: `date`,
      startDate: undefined,
      endDate: undefined,
    },
    setTextFilter: jest.fn(),
    sortByDate: jest.fn(),
    sortByAmount: jest.fn(),
    setStartDate: jest.fn(),
    setEndDate: jest.fn(),
  }

  beforeEach(() => {
    component = mount(<ExpenseFilter {...props} />)
  })

  test(`should render correctly`, () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})