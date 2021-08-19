import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER, RECEIVE_USER_LOGIN } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
        role: action.currentUser.role,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_LOGIN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}

export default SessionReducer;