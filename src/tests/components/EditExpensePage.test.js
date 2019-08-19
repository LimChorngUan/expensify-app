import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import { EditExpensePage } from '../../components/EditExpensePage'
import { generateTestId } from '../utils'

describe(`Component: EditExpensePage`, () => {
  let component
  const props = {
    match: { params: { id: `A` } },
    expense: {
      description: `A`,
      amount: 10,
      note: `aaa`,
      createdAt: 1
    },
    editExpense: jest.fn(),
    removeExpense: jest.fn(),
    history: { push: jest.fn() },
  }

  beforeEach(() => {
    component = mount(<EditExpensePage {...props}/>)
  })

  test(`should render correctly`, () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  test(`handleSubmit should work correctly`, () => {
    const updates = { description: `B` }

    component.find(generateTestId(`edit-expense-form`)).props().handleSubmit(updates)

    expect(component.props().editExpense).toBeCalledTimes(1)
    expect(component.props().editExpense).toBeCalledWith(`A`, { description: `B`})
    expect(component.props().history.push).toBeCalledWith(`/`)
  })

  test(`handleRemoveClick should work correctly`, () => {
    component.find(generateTestId(`remove-button`)).simulate(`click`)

    expect(component.props().removeExpense).toBeCalledTimes(1)
    expect(component.props().removeExpense).toBeCalledWith(`A`)
    expect(component.props().history.push).toBeCalledWith(`/`)
  })
})