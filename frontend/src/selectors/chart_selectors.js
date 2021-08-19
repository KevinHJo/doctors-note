export const isDataReady = state => {
  return state.entities.user !== null
}

export const getPatients = state => {
  if (!state.entities.user) return null
  if (!state.entities.user.patients) return null
  return Object.values(state.entities.user.patients)
}

export const getPatient = (state, patientId) => (
  state.entities.patients[patientId]
)
