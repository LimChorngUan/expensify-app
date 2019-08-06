// testTitle, currentState, action, nextState

export const expensesTestData = [
  [
    `should return the initial/default state`,
    [],
    {},
    [],
  ],
  [
    `Current expenses state is an empty array. Should handle ADD_EXPENSE.`,
    [],
    {
      type: `ADD_EXPENSE`,
      expense: { description: `A`, note: `A`, amount: 1, createdAt: 1, }
    },
    [
      { description: `A`, note: `A`, amount: 1, createdAt: 1, },
    ]
  ],
  [
    `Current expenses state is has one expense. Should handle ADD_EXPENSE.`,
    [
      { description: `A`, note: `A`, amount: 1, createdAt: 1, },
    ],
    {
      type: `ADD_EXPENSE`,
      expense: { description: `B`, note: `B`, amount: 2, createdAt: 2, }
    },
    [
      { description: `A`, note: `A`, amount: 1, createdAt: 1, },
      { description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ]
  ],
  [
    `Should handle REMOVE_EXPENSE`,
    [
      { id: `A`, description: `A`, note: `A`, amount: 1, createdAt: 1, },
      { id: `B`, description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ],
    { type: `REMOVE_EXPENSE`, id: `A` },
    [
      { id: `B`, description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ]
  ],
  [
    `Should handle EDIT_EXPENSE, edited expense is existed`,
    [
      { id: `A`, description: `A`, note: `A`, amount: 1, createdAt: 1, },
      { id: `B`, description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ],
    { type: `EDIT_EXPENSE`, id: `A`, updates: { description: `C` } },
    [
      { id: `A`, description: `C`, note: `A`, amount: 1, createdAt: 1, },
      { id: `B`, description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ],
  ],
  [
    `Should handle EDIT_EXPENSE, edited expense doesn't exist`,
    [
      { id: `A`, description: `A`, note: `A`, amount: 1, createdAt: 1, },
      { id: `B`, description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ],
    { type: `EDIT_EXPENSE`, id: `C`, updates: { description: `C` } },
    [
      { id: `A`, description: `A`, note: `A`, amount: 1, createdAt: 1, },
      { id: `B`, description: `B`, note: `B`, amount: 2, createdAt: 2, },
    ],
  ],
]