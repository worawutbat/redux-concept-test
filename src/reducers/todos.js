let index = 0
export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: index++, text: action.text}]
    default:
      return state
  }
}
