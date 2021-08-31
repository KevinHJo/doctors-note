import { connect } from "react-redux";
import Calendar from './calendar'
import {fetchDoctorAppointments} from '../../actions/appointment_actions'

const mSTP = state => ({
  appointments: state.entities.appointments
})

const mDTP = dispatch => ({
  fetchDoctorAppointments: doctorId => dispatch(fetchDoctorAppointments(doctorId)),
})

export default connect(mSTP, mDTP)(Calendar)