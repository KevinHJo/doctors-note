export const getUser = state => {
  if (!state.entities.user) return null
  return state.entities.user.patients[state.session.user.id]
}
