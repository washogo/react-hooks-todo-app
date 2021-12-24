const reducer = (states=[], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const todo = {title: action.title, status: action.status, body: action.body}
      const length = states.length
      const id = length === 0 ? 1 : states[length - 1].id + 1
      return [...states, {
        id: id,
        ...todo
      }]
    case "DELETE_TODO":
      return states.filter(todo => todo.id !== action.id)
    case "EDIT_TODO":
      return states
    default:
      return states
  }
}

export default reducer;