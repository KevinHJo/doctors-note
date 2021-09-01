import { connect } from "react-redux";
import Calendar from './calendar'
import {fetchDoctorAppointments, createAppointment} from '../../actions/appointment_actions'

const mSTP = state => ({
  appointments: Object.values(state.entities.appointments)
})

const mDTP = dispatch => ({
  fetchDoctorAppointments: doctorId => dispatch(fetchDoctorAppointments(doctorId)),
  createAppointment: appointment => dispatch(createAppointment(appointment))
})

export default connect(mSTP, mDTP)(Calendar)