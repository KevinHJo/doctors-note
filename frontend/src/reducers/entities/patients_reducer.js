import { RECEIVE_PATIENT, RECEIVE_PATIENTS, RECEIVE_ALL_PATIENTS } from "../../actions/patient_actions";

const PatientsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PATIENT:
      nextState[action.patient._id] = action.patient;
      return nextState
    case RECEIVE_PATIENTS:
      nextState = {};
      action.patients.forEach(patient => nextState[patient._id] = patient);
      return nextState;
    case RECEIVE_ALL_PATIENTS:
      return nextState;
    default:
      return state;
  }
};

export default PatientsReducer;