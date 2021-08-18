import axios from 'axios';

export const createPatient = (patient) => {
  return axios.post('/api/patients/new', patient);
};

// export const updatePatient = (patient) => {
//   return axios.patch(`/api/patients/update/${patient.id}`, patient);
// };

export const fetchDoctorPatients = patientId => {
  return axios.get(`/api/patients/${patientId}`);
}

export const fetchPatient = patientId => {
  return axios.get(`/api/patients/patients/${patientId}`);
}