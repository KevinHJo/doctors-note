import { connect } from 'react-redux';
import { signup, logout } from '../../actions/session_actions';
import SignupPage from './signup_page';

const mSTP = (state) => ({
  prodKey: state.ui.prodKey
});

const mDTP = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(SignupPage);