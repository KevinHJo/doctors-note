import { combineReducers } from "redux";
import SignupReducer from './signup_errors_reducer'
import SigninReducer from './signin_errors_reducer'
import SessionErrorsReducer from './session_errors_reducer'

const ErrorsReducer = combineReducers({
  signin: SigninReducer,
  signup: SignupReducer,
  session: SessionErrorsReducer,
})

export default ErrorsReducer;