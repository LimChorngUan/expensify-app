import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ExpenseListItem from '../../components/ExpenseListItem'
import { expenses } from '../fixture/expenses'

describe(`Component: ExpenseListItem`, () => {
  const item = expenses[0]
  
  test(`Should render ExpenseListItem correctly`, () => {
    const wrapper = shallow(<ExpenseListItem {...item} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})