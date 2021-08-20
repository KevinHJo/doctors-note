import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/patient_modal_actions';
import { fetchDoctor } from '../../actions/user_actions';
import IndexPage from './index_page';

const mSTP = (state, ownParams) => {
  return ({
    history: ownParams.history,
    loggedIn: state.session.isAuthenticated,
    modal: state.ui.patientModal,
    user: state.session.user,
    doctor: state.entities.user,
  })
};

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  toggleModal: (modalId) => dispatch(toggleModal(modalId)),
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
});

export default connect(mSTP, mDTP)(IndexPage);