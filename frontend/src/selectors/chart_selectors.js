export const isDataReady = state => {
  return state.entities.user !== null
}

export const getPatients = state => {
  if (!state.entities.user) return null
  return Object.values(state.entities.user.patients)
}

// export const getPatient = state => (
//   Object.values(state.session.user.patients).filter(patient => )
// )
