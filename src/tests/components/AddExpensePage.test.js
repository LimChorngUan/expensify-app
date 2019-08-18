import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import { AddExpensePage } from '../../components/AddExpensePage'
import { generateTestId } from '../utils'

describe(`Component: AddExpensePage`, () => {
  let component

  beforeEach(() => {
    component = mount(
      <AddExpensePage
        addExpense={jest.fn()}
        history={{ push: jest.fn() }}
      />
      )
  })

  test(`should render correctly`, () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  test(`handleSubmit is called correctly`, () => {
    const expense = {}

    component.find(generateTestId(`add-expense-form`)).props().handleSubmit(expense)
    expect(component.props().addExpense).toBeCalledTimes(1)
    expect(component.props().addExpense).toBeCalledWith(expense)
    expect(component.props().history.push).toBeCalledTimes(1)
    expect(component.props().history.push).toBeCalledWith(`/`)
  })
})