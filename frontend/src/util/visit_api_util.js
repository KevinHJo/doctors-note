import axios from 'axios';

export const createVisit = (visit) => {
  return axios.post('/api/visits/new', visit);
};

export const updateVisit = (visit) => {
  return axios.patch(`/api/visits/update/${visit._id}`, visit);
};

export const fetchPatientVisits = patientId => {
  return axios.get(`/api/visits/${patientId}`);
}

export const fetchVisit = visitId => {
  return axios.get(`/api/visits/patients/${visitId}`);
}

export const deleteVisit = visit => {
  return axios.delete(`/api/visits/delete/${visit._id}`, {data: visit})
}
