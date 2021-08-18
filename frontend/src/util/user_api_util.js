import axios from 'axios';

export const fetchDoctor = doctorId => (
  axios.get(`/api/users/${doctorId}`)
)

export const createPatient = patient => {
  // axios.patch(`/api/users/update/${patient.doctorId}`, patient);
  return axios.post('/api/patients/new', patient);
};

export const addPatientToDoctor = (patientId) => {
  return axios.patch(`/api/users/update/${patientId}`);
};
