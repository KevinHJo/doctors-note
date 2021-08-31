import { connect } from 'react-redux'
import ChartShow from './chart_show'
import { deletePatient, fetchPatient } from '../../actions/patient_actions'
import { getPatient } from '../../selectors/chart_selectors'
import { fetchDoctor } from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
  patientId: ownProps.match.params.patientId,
  doctorId: state.session.user.id,
  patient: getPatient(state, ownProps.match.params.patientId),
})

const mDTP = dispatch => ({
  fetchPatient: patientId => dispatch(fetchPatient(patientId)),
  deletePatient: patientId => dispatch(deletePatient(patientId)),
  fetchDoctor: doctorId => dispatch(fetchDoctor(doctorId))
})

const ChartShowContainer = connect(mSTP, mDTP)(ChartShow)
export default ChartShowContainer
