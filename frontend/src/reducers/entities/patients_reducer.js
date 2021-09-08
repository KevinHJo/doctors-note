import { RECEIVE_PATIENT, RECEIVE_PATIENTS } from "../../actions/patient_actions";
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';
import { RECEIVE_PATIENT_LOGOUT } from '../../actions/patient_actions';

const PatientsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PATIENT:
      nextState[action.patient._id] = action.patient;
      return nextState
    case RECEIVE_PATIENTS:
      return action.patients
      // nextState = {};
      // action.patients.forEach(patient => nextState[patient._id] = patient);
      // return nextState;
    case RECEIVE_USER_LOGOUT:
      return {};
    case RECEIVE_PATIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default PatientsReducer;