import { connect } from 'react-redux';
import { login, logout } from '../../actions/patient_actions';
import { removeErrors } from '../../actions/session_actions';
import LoginPage from './login_page';

const mSTP = (state, ownProps) => ({
  history: ownProps.history,
  signinErrors: state.errors.session,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(LoginPage);