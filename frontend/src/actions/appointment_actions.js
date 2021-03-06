import * as AppointmentAPIUtil from '../util/appointment_api_util'

export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';
export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';
export const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

//ACTION CREATORS
const receiveAppointment = appointment => ({
  type: RECEIVE_APPOINTMENT,
  appointment
})

const receiveAppointments = appointments => ({
  type: RECEIVE_APPOINTMENTS,
  appointments
})

const removeAppointment = appointmentId => ({
  type: REMOVE_APPOINTMENT,
  appointmentId
})

//THUNK ACTION CREATORS
export const createAppointment = appointment => dispatch => (
  AppointmentAPIUtil.createAppointment(appointment)
    .then(appointment => dispatch(receiveAppointment(appointment.data)))
);

export const fetchDoctorAppointments = doctorId => dispatch => (
  AppointmentAPIUtil.fetchDoctorAppointments(doctorId)
    .then(appointments => dispatch(receiveAppointments(appointments.data)))
);

export const deleteAppointment = appointmentId => dispatch => (
  AppointmentAPIUtil.deleteAppointment(appointmentId)
    .then(() => dispatch(removeAppointment(appointmentId)))
);

export const fetchPatientAppointments = patientId => dispatch => (
  AppointmentAPIUtil.fetchPatientAppointments(patientId)
    .then(appointments => dispatch(receiveAppointments(appointments.data)))
)

export const updateAppointment = appointment => dispatch => (
  AppointmentAPIUtil.updateAppointment(appointment)
    .then(appointment => dispatch(receiveAppointment(appointment.data)))
)