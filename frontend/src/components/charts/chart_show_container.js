import { connect } from 'react-redux'
import ChartShow from './chart_show'
import { deletePatient, fetchPatient } from '../../actions/patient_actions'
import { getPatient } from '../../selectors/chart_selectors'

const mSTP = (state, ownProps) => ({
  patientId: ownProps.match.params.patientId,
  patient: getPatient(state, ownProps.match.params.patientId)
})

const mDTP = dispatch => ({
  fetchPatient: patientId => dispatch(fetchPatient(patientId)),
  deletePatient: patientId => dispatch(deletePatient(patientId))
})

const ChartShowContainer = connect(mSTP, mDTP)(ChartShow)
export default ChartShowContainer
