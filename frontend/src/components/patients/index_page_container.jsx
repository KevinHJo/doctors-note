import { connect } from 'react-redux';
import { login, logout, receiveCurrentUser } from '../../actions/session_actions';
import { toggleModal } from '../../actions/patient_modal_actions';
import { fetchDoctor } from '../../actions/user_actions';
import { fetchPatientAppointments, deleteAppointment } from '../../actions/appointment_actions';
import IndexPage from './index_page';
import { updatePatient } from '../../actions/patient_actions';
import { getUser } from '../../selectors/patient_selectors';

const mSTP = (state, ownParams) => {
  return ({
    history: ownParams.history,
    loggedIn: state.session.isAuthenticated,
    modal: state.ui.patientModal,
    patientId: state.session.user.id,
    doctorId: state.session.user.doctorId,
    user: getUser(state),
    doctor: state.entities.user,
    appointments: Object.values(state.entities.appointments)
  })
};

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  updatePatient: patient => dispatch(updatePatient(patient)),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
  toggleModal: (modalId) => dispatch(toggleModal(modalId)),
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchPatientAppointments: patientId => dispatch(fetchPatientAppointments(patientId)),
  deleteAppointment: appointmentId => dispatch(deleteAppointment(appointmentId)),
});

export default connect(mSTP, mDTP)(IndexPage);