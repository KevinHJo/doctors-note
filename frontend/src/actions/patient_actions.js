import * as PatientAPIUtil from '../util/patient_api_util'

export const RECEIVE_PATIENT = 'RECEIVE_PATIENT';
export const RECEIVE_PATIENTS = 'RECEIVE_PATIENTS';

//ACTION CREATORS
const receivePatient = patient => ({
  type: RECEIVE_PATIENT,
  patient
});

const receivePatients = patients => ({
  type: RECEIVE_PATIENTS,
  patients
});

//THUNK ACTION CREATORS
export const fetchPatient = patientId => dispatch => (
  PatientAPIUtil.fetchPatient(patientId)
    .then(patient => dispatch(receivePatient(patient)))
);

export const fetchDoctorPatients = doctorId => dispatch => (
  PatientAPIUtil.fetchDoctorPatients(doctorId)
    .then(patients => dispatch(receivePatients(patients)))
);

export const createPatient = patient => dispatch => (
  PatientAPIUtil.createPatient(patient)
    .then(patient => dispatch(receivePatient(patient)))
);

export const updatePatient = patient => dispatch => (
  PatientAPIUtil.updatePatient(patient)
    .then(patient => dispatch(receivePatient(patient)))
);