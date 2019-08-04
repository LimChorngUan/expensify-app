export const editExpenseTestData = [
  [
    `should setup edit expense action object A`,
    `A`,
    { description: `hair treatment`, note: `pretty pretty`, amount: 166, createdAt: 10 },
    {
      type: `EDIT_EXPENSE`,
      id: `A`,
      updates: {
        description: `hair treatment`, note: `pretty pretty`, amount: 166, createdAt: 10
      }
    }
  ],
  [
    `should setup edit expense action object B`,
    `B`,
    {},
    {
      type: `EDIT_EXPENSE`,
      id: `B`,
      updates: {},
    },
  ],
]
