import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import HomePage from './home_page';

const mSTP = (state) => ({
  history: state.history,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(HomePage);