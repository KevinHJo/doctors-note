import { RECEIVE_DOCTOR } from "../../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from "../../actions/session_actions";
import { RECEIVE_PATIENT_LOGOUT } from '../../actions/patient_actions';
import { RECEIVE_PATIENT, REMOVE_PATIENT } from "../../actions/patient_actions";

const UserReducer = (state=null, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_DOCTOR:
      return action.doctor.data;
    case RECEIVE_USER_LOGOUT:
      return null;
    case RECEIVE_PATIENT_LOGOUT:
      return null;
    case RECEIVE_PATIENT:
      if (nextState.patients) nextState.patients[action.patient._id] = action.patient;
      return nextState
    case REMOVE_PATIENT:
      if (nextState.patients) delete nextState.patients[action._id]
      return nextState
    default:
      return state;
  }
}

export default UserReducer
