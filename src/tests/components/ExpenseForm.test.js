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
    let component
    let mockedEvent

    beforeEach(() => {
      component = mount(
        <ExpenseForm
          formType={FORM_TYPE.ADD}
          handleSubmit={jest.fn()}
        />
        )
    })

    test(`description input value is updated on input change`, () => {
      mockedEvent = {
        target: {
          value: `A`,
        },
      }

      component.find(generateTestId(`description-input`)).simulate(`change`, mockedEvent)
      expect(component.find(generateTestId(`description-input`)).props().value).toEqual(`A`)
    })

    test(`note text area value is updated on text area change`, () => {
      mockedEvent = {
        target: {
          value: `aaaaa`,
        },
      }

      component.find(generateTestId(`note-input`)).simulate(`change`, mockedEvent)
      expect(component.find(generateTestId(`note-input`)).props().value).toEqual(`aaaaa`)
    })

    test(`amount input value is updated on input change`, () => {
      mockedEvent = {
        target: {
          value: 20,
        },
      }

      component.find(generateTestId(`amount-input`)).simulate(`change`, mockedEvent)
      expect(component.find(generateTestId(`amount-input`)).props().value).toEqual(20)
    })

    test(`handleSubmit is called on form submit`, () => {
      mockedEvent = { preventDefault: jest.fn() }

      component.find(generateTestId(`expense-form`)).simulate(`submit`, mockedEvent)
      expect(component.props().handleSubmit).toBeCalledTimes(1)
    })

    test(`handleSubmit is called with correct argument`, () => {
      component.find(generateTestId(`description-input`)).simulate(`change`, { target: { value: `A` }})
      component.find(generateTestId(`amount-input`)).simulate(`change`, { target: { value: 20 }})
      component.find(generateTestId(`note-input`)).simulate(`change`, { target: { value: `aaaaa` }})

      component.find(generateTestId(`expense-form`)).simulate(`submit`, { preventDefault: jest.fn()})
      expect(component.props().handleSubmit).toBeCalledWith({
        description: `A`,
        amount: 20,
        createdAt: 0,
        note: `aaaaa`,
      })
    })
  })
})