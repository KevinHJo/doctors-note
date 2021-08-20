import { RECEIVE_DOCTOR } from "../../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from "../../actions/session_actions";

const UserReducer = (state=null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_DOCTOR:
      return action.doctor.data;
    case RECEIVE_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}

export default UserReducer
