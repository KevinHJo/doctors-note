import * as PatientAPIUtil from '../util/patient_api_util'
import jwt_decode from 'jwt-decode';

export const RECEIVE_PATIENT = 'RECEIVE_PATIENT';
export const RECEIVE_PATIENTS = 'RECEIVE_PATIENTS';
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ALL_PATIENTS = "RECEIVE_ALL_PATIENTS";
export const REMOVE_PATIENT = 'REMOVE_PATIENT'

//ACTION CREATORS
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserLogin = (pkg) => {
    return ({
        type: RECEIVE_USER_LOGIN
    })
};

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receivePatient = patient => ({
  type: RECEIVE_PATIENT,
  patient
});

const receivePatients = patients => ({
  type: RECEIVE_PATIENTS,
  patients
});

// const receiveAllPatients = patients => ({
//   type: RECEIVE_ALL_PATIENTS,
//   patients
// });

export const removePatient = patient => ({
  type: REMOVE_PATIENT,
  patient
})

//THUNK ACTION CREATORS
export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    PatientAPIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};

export const signup = (user) => (dispatch) => (
    PatientAPIUtil.signup(user).then((res) => (
        dispatch(receiveUserLogin(res))
    ), err => (
        dispatch(receiveSessionErrors(err.response.data))
    ))
);

export const login = user => dispatch => (
    PatientAPIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        PatientAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveSessionErrors(err.response.data));
    })
)

// export const fetchAllPatients = () => dispatch => (
//     PatientAPIUtil.fetchAllPatients()
//         .then(patients => dispatch(receiveAllPatients(patients)))
// )

export const fetchPatient = patientId => dispatch => (
  PatientAPIUtil.fetchPatient(patientId)
    .then(patient => dispatch(receivePatient(patient.data)))
);

export const fetchDoctorPatients = doctorId => dispatch => (
  PatientAPIUtil.fetchDoctorPatients(doctorId)
    .then(patients => dispatch(receivePatients(patients)))
);

export const createPatient = patient => dispatch => (
  PatientAPIUtil.createPatient(patient)
    .then(patient => dispatch(receivePatient(patient.data)))
);

export const updatePatient = patient => dispatch => (
  PatientAPIUtil.updatePatient(patient)
    .then(patient => dispatch(receivePatient(patient.data)))
);

export const deletePatient = patientId => dispatch => (
  PatientAPIUtil.deletePatient(patientId)
    .then(patient => dispatch(removePatient(patient.data)))
)
