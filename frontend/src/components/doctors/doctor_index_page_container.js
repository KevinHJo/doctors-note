import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/patient_modal_actions';
import { fetchDoctor } from '../../actions/user_actions';
import { receiveChart } from '../../actions/doctor_modal_actions';
import { fetchDoctorPatients } from '../../actions/patient_actions';
import { fetchDoctorAppointments } from '../../actions/appointment_actions';
import DoctorIndexPage from './doctor_index_page';

const mSTP = (state, ownParams) => {
  return ({
    history: ownParams.history,
    loggedIn: state.session.isAuthenticated,
    modal: state.ui.patientModal,
    user: state.session.user,
    doctor: state.entities.user,
    patientId: state.ui.showChart
  })
};

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  toggleModal: (modalId) => dispatch(toggleModal(modalId)),
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  receiveChart: (patientId) => dispatch(receiveChart(patientId)),
  fetchDoctorPatients: doctorId => dispatch(fetchDoctorPatients(doctorId)),
  fetchDoctorAppointments: doctorId => dispatch(fetchDoctorAppointments(doctorId))
  // fetchAllPatients: () => dispatch(fetchAllPatients()),
});

export default connect(mSTP, mDTP)(DoctorIndexPage);