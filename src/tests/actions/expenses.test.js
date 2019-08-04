import { addExpense, removeExpense, editExpense } from '../../actions/expenses'
import { editExpenseTestData } from './testData'

describe(`Actions: removeExpense`, () => {
  test(`should setup remove expense action object`, () => {
    const action = removeExpense({ id: `A` })

    expect(action).toEqual({
      type: `REMOVE_EXPENSE`,
      id: `A`,
    })
  })
})

describe(`Actions: editExpense`, () => {
  test.each(editExpenseTestData)(
    `%p`,
    (title, id, update, expected) => {
      const action = editExpense(id, update)

      expect(action).toEqual(expected)
    }
  );
})

describe(`Actions: addExpense`, () => {
  test(`should setup add expense action object with default value`, () => {
    const action = addExpense()

    expect(action).toEqual({
      type: `ADD_EXPENSE`,
      expense: {
        id: expect.any(String),
        description: ``,
        note: ``,
        amount: 0,
        createdAt: 0,
      }
    })
  })

  test(`should setup add expense action object with provided value`, () => {
    const data = {
      description: `rent`,
      note: `aiz`,
      amount: 400,
      createdAt: 1000,
    }
    const action = addExpense(data)

    expect(action).toEqual({
      type: `ADD_EXPENSE`,
      expense: {
        id: expect.any(String),
        ...data
      }
    })
  })
})