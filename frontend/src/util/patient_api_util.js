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