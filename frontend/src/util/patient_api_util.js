import axios from 'axios';


export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (patientData) => {
  return axios.post('/api/patients/register', patientData);
};

export const login = (patientData) => {
  return axios.post('/api/patients/login', patientData);
};

export const createPatient = (patient) => {
  return axios.post('/api/patients/new', patient);
};

export const updatePatient = (patient) => {
  return axios.patch(`/api/patients/update/${patient._id}`, patient);
};

export const fetchDoctorPatients = doctorId => {
  return axios.get(`/api/patients/${doctorId}`);
};

export const fetchPatient = patientId => {
  return axios.get(`/api/patients/${patientId}`);
};
