export const uuid = () =>
  '_' +
  Math.random()
    .toString(16)
    .slice(2);

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
          comments: [
            {
              id: uuid(),
              content: 'Some comment title',
              author: 'Who?'
            },
            {
              id: uuid(),
              content: 'Some comment title 2',
              author: 'Who?'
            }
          ]
        },
        {
          description: '',
          name: 'second task',
          id: uuid(),
          userAssigned: null,
          comments: [
            {
              id: uuid(),
              content: 'Some comment title',
              author: 'Who?'
            }
          ]
        },
        {
          description: '',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null,
          comments: [
            {
              id: uuid(),
              content: 'Some comment title',
              author: 'Who?'
            },
            {
              id: uuid(),
              content: 'Some comment title 2',
              author: 'Who?'
            },
            {
              id: uuid(),
              content: 'Some comment title 3',
              author: 'Who?'
            }
          ]
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
          comments: [
            {
              id: uuid(),
              content: 'Some comment title',
              author: 'Who?'
            },
            {
              id: uuid(),
              content: 'Some comment title 2',
              author: 'Who?'
            }
          ]
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
          comments: [
            {
              id: uuid(),
              content: 'Some comment title',
              author: 'Who?'
            },
            {
              id: uuid(),
              content: 'Some comment title 2',
              author: 'Who?'
            },
            {
              id: uuid(),
              content: 'Some comment title 3',
              author: 'Who?'
            }
          ]
        }
      ]
    }
  ]
};

export function saveStateToStorage(store) {
  store.subscribe((_, state) => {
    localStorage.setItem('board', JSON.stringify(state.board));
  });
}
