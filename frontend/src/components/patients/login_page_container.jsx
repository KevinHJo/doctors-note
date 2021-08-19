import { connect } from 'react-redux';
import { login, logout } from '../../actions/patient_actions';
import LoginPage from './login_page';

const mSTP = (state, ownProps) => ({
  history: ownProps.history,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(LoginPage);