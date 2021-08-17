export const getPatients = state => (
  // Object.values(state.doctor.patients)
  Object.values(state.session.user.patients)
)

// export const getPatient = state => (
//   Object.values(state.session.user.patients).filter(patient => )
// )
