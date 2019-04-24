export const cal = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state+action.val
    case "DEL":
      return state-action.val
    default:
      return state
  }
}