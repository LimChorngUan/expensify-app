import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import ExpenseForm, { FORM_TYPE } from '../../components/ExpenseForm'
import { expenses } from '../fixture/expenses'
import { generateTestId } from '../utils'

describe(`Component: ExpenseForm`, () => {
  describe(`should render the correct form type`, () => {
    test(`Add expense form type`, () => {
      const wrapper = shallow(<ExpenseForm formType={FORM_TYPE.ADD} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    test(`Edit expense form type`, () => {
      const wrapper = shallow(<ExpenseForm formType={FORM_TYPE.EDIT} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe(`should render correctly with provided expense`, () => {
    const expense = expenses[0]

    test(`Add expense form`, () => {
      const wrapper = shallow(<ExpenseForm formType={FORM_TYPE.ADD} expense={expense} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    test(`Edit expense form`, () => {
      const wrapper = shallow(<ExpenseForm formType={FORM_TYPE.EDIT} expense={expense} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe(`Test user iteraction`, () => {
    const mockedEvent = {}

    test(`handleSumit is called on form submit `, () => {
      const component = mount(
        <ExpenseForm
          formType={FORM_TYPE.ADD}
          handleSubmit={jest.fn()}
        />
        )
      component.find(generateTestId(`expense-form`)).simulate(`submit`, mockedEvent)
      expect(component.props().handleSubmit).toBeCalledTimes(1)
    })

  })
})