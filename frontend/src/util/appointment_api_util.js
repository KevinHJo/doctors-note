import axios from 'axios';

export const createAppointment = (appointment) => {
  return axios.post('/api/appointments/new', appointment);
};

export const updateAppointment = (appointment) => {
  return axios.patch(`/api/appointments/${appointment._id}`, appointment);
};

export const fetchDoctorAppointments = doctorId => {
  return axios.get(`/api/appointments/${doctorId}`);
}

export const deleteAppointment = appointmentId => {
  return axios.delete(`/api/appointments/${appointmentId}`)
}

export const fetchPatientAppointments = patientId => {
  return axios.get(`/api/appointments/patient/${patientId}`);
}