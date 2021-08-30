import { RECEIVE_DOCTOR } from "../../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from "../../actions/session_actions";
import { REMOVE_PATIENT } from "../../actions/patient_actions";

const UserReducer = (state=null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_DOCTOR:
      return action.doctor.data;
    case RECEIVE_USER_LOGOUT:
      return null;
    case REMOVE_PATIENT:
      let nextState = Object.assign({}, state)
      delete nextState[action._id]
      return nextState
    default:
      return state;
  }
}

export default UserReducer
