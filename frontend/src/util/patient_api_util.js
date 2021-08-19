import axios from 'axios';

export const createPatient = (patient) => {
  return axios.post('/api/patients/new', patient);
};

export const updatePatient = (patient) => {
  return axios.patch(`/api/patients/update/${patient.id}`, patient);
};

export const fetchDoctorPatients = doctorId => {
  return axios.get(`/api/patients/${doctorId}`);
};

export const fetchPatient = patientId => {
  return axios.get(`/api/patients/${patientId}`);
};