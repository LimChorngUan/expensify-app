export const expenses = [
  {
    id: `A`,
    description: `A`,
    note: `A`,
    amount: 3,
    createdAt: 1,
  },
  {
    id: `B`,
    description: `B`,
    note: `B`,
    amount: 2,
    createdAt: 2,
  },
  {
    id: `C`,
    description: `C`,
    note: `C`,
    amount: 1,
    createdAt: 3,
  },
  {
    id: `D`,
    description: `C`,
    note: `C`,
    amount: 4,
    createdAt: 4,
  },
]

const defaultFilters = {
  text: ``,
  sortBy: `date`,
  startDate: undefined,
  endDate: undefined,
}

// no filter
// only text (uppercase, lowercase)
// only sortBy (amount, date)
// only startDate
// only endDate
// combine

export const testData = [
  [
    `default filter applied`,
    defaultFilters,
    expenses,
  ],
  [
    `lowercase text filter`,
    {
      ...defaultFilters,
      text: `a`,
    },
    [
      {
        id: `A`,
        description: `A`,
        note: `A`,
        amount: 3,
        createdAt: 1,
      },
    ]
  ],
  [
    `uppercase text filter`,
    {
      ...defaultFilters,
      text: `A`,
    },
    [
      {
        id: `A`,
        description: `A`,
        note: `A`,
        amount: 3,
        createdAt: 1,
      },
    ]
  ],
  [
    `sort by date (by default)`,
    {
      ...defaultFilters,
      sortBy: `date`
    },
    expenses,
  ],
  [
    `sort by amount`,
    {
      ...defaultFilters,
      sortBy: `amount`
    },
    [
      {
        id: `C`,
        description: `C`,
        note: `C`,
        amount: 1,
        createdAt: 3,
      },
      {
        id: `B`,
        description: `B`,
        note: `B`,
        amount: 2,
        createdAt: 2,
      },
      {
        id: `A`,
        description: `A`,
        note: `A`,
        amount: 3,
        createdAt: 1,
      },
      {
        id: `D`,
        description: `C`,
        note: `C`,
        amount: 4,
        createdAt: 4,
      },
    ]
  ],
  [
    `start date filter 1`,
    {
      ...defaultFilters,
      startDate: 3,
    },
    [
      {
        id: `C`,
        description: `C`,
        note: `C`,
        amount: 1,
        createdAt: 3,
      },
      {
        id: `D`,
        description: `C`,
        note: `C`,
        amount: 4,
        createdAt: 4,
      },
    ]
  ],
  [
    `start date filter 2`,
    {
      ...defaultFilters,
      startDate: 5,
    },
    [],
  ],
  [
    `end date filter 1`,
    {
      ...defaultFilters,
      endDate: 1,
    },
    [
      {
        id: `A`,
        description: `A`,
        note: `A`,
        amount: 3,
        createdAt: 1,
      },
    ]
  ],
  [
    `end date filter 2`,
    {
      ...defaultFilters,
      endDate: 5,
    },
    expenses
  ],
  [
    `combined filter`,
    {
      text: ``,
      sortBy: `amount`,
      startDate: 1,
      endDate: 3,
    },
    [
      {
        id: `C`,
        description: `C`,
        note: `C`,
        amount: 1,
        createdAt: 3,
      },
      {
        id: `B`,
        description: `B`,
        note: `B`,
        amount: 2,
        createdAt: 2,
      },
      {
        id: `A`,
        description: `A`,
        note: `A`,
        amount: 3,
        createdAt: 1,
      },
    ]
  ]
]