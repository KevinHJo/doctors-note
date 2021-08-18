import axios from 'axios';

export const createPatient = patient => {
  // axios.patch(`/api/users/update/${patient.doctorId}`, patient);
  return axios.post('/api/patients/new', patient);
};

export const addPatientToDoctor = patient => {
  return axios.patch(`/api/users/update/${patient.doctorId}`, patient);
};
