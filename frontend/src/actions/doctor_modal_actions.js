export const RECEIVE_FORM = 'RECEIVE_FORM';

export const receiveForm = () => ({
  type: RECEIVE_FORM
})

export const RECEIVE_CHART = 'RECEIVE_CHART';

export const receiveChart = (patientId) => ({
  type: RECEIVE_CHART,
  patientId
})