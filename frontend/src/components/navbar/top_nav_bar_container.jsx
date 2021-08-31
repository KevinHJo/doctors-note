import { connect } from 'react-redux';
import { login, logout, removeErrors } from '../../actions/session_actions';
import TopNavBar from './top_nav_bar';

const mSTP = (state, ownParams) => {
  return ({
    history: ownParams.history,
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    signinErrors: state.errors.signin,
  })
};

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(TopNavBar);