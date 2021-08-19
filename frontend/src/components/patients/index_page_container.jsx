import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import IndexPage from './index_page';

const mSTP = (state, ownParams) => {
  return ({
    history: ownParams.history,
    loggedIn: state.session.isAuthenticated,
  })
};

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(IndexPage);