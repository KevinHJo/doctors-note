import { RECEIVE_DOCTOR } from "../../actions/user_actions"

const UserReducer = (state=null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_DOCTOR:
      return action.doctor.data
    default:
      return state
  }
}

export default UserReducer
