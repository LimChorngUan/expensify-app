import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { ExpenseList } from '../../components/ExpenseList'
import { expenses } from '../fixture/expenses'

describe(`Component: ExpenseList`, () => {
  let wrapper

  const setup = (props = {}) => {
    return shallow(<ExpenseList {...props} />)
  }

  beforeEach(() => {
    wrapper = setup()
  })

  test(`Should render "No expense" when expenses is undefined`, () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test(`Should render "No expense" when expenses is an empty array`, () => {
    wrapper = setup({ expenses: [] })
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test(`Should render a list of expenses`, () => {
    wrapper = setup({ expenses })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
