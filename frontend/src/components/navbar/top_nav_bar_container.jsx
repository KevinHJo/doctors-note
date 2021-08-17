import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import TopNavBar from './top_nav_bar';

const mSTP = (state) => ({
  history: state.history,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(TopNavBar);