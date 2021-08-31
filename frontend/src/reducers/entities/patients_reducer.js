import { RECEIVE_PATIENT, RECEIVE_PATIENTS } from "../../actions/patient_actions";

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
    default:
      return state;
  }
};

export default PatientsReducer;