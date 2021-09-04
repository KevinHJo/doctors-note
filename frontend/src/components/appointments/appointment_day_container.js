import { connect } from "react-redux";
import AppointmentDay from './appointment_day'
import {fetchDoctorAppointments} from '../../actions/appointment_actions'

const mSTP = state => ({
  appointments: Object.values(state.entities.appointments),
})

const mDTP = dispatch => ({
  fetchDoctorAppointments: doctorId => dispatch(fetchDoctorAppointments(doctorId)),
  // createAppointment: appointment => dispatch(createAppointment(appointment)),
  // deleteAppointment: appointmentId => dispatch(deleteAppointment(appointmentId)),
  // updateAppointment: appointmentId => dispatch(updateAppointment(appointmentId))
})

export default connect(mSTP, mDTP)(AppointmentDay)