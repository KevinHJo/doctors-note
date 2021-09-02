import { connect } from 'react-redux';
import { login, logout, receiveCurrentUser } from '../../actions/session_actions';
import { toggleModal } from '../../actions/patient_modal_actions';
import { fetchDoctor } from '../../actions/user_actions';
import IndexPage from './index_page';
import { updatePatient } from '../../actions/patient_actions';
import { getUser } from '../../selectors/patient_selectors';

const mSTP = (state, ownParams) => {
  return ({
    history: ownParams.history,
    loggedIn: state.session.isAuthenticated,
    modal: state.ui.patientModal,
    doctorId: state.session.user.doctorId,
    user: getUser(state),
    doctor: state.entities.user,
  })
};

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  updatePatient: patient => dispatch(updatePatient(patient)),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
  toggleModal: (modalId) => dispatch(toggleModal(modalId)),
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
});

export default connect(mSTP, mDTP)(IndexPage);