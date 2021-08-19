import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import HomePage from './home_page';

const mSTP = (state, ownParams) => ({
  history: ownParams.history,
  signupErrors: state.errors.signup,
  signinErrors: state.errors.signin,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(HomePage);