import {RECEIVE_SIGNIN_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS} from '../../actions/session_actions';

const SigninErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  // let nextState = Object.freeze({}, state);
  switch (action.type) {
    case RECEIVE_SIGNIN_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default SigninErrorsReducer