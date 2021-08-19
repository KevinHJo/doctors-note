export const isDataReady = state => {
  return state.entities.user !== null
}

export const getPatients = state => {
  if (!state.entities.user) return null
  if (!state.entities.user.patients) return null
  let patients = Object.values(state.entities.user.patients)
  return patients.sort((a, b) => (a.lname + a.fname).toUpperCase().localeCompare((b.lname + b.fname).toUpperCase()))
}

export const getPatient = (state, patientId) => (
  state.entities.patients[patientId]
)
