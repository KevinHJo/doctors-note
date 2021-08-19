import { connect } from 'react-redux'
import ChartForm from './chart_form'
import { createPatient } from '../../actions/patient_actions'

const mSTP = state => ({
  doctorId: state.session.user.id
})

const mDTP = dispatch => ({
  createPatient: patient => dispatch(createPatient(patient))
})

const ChartFormContainer = connect(mSTP, mDTP)(ChartForm)
export default ChartFormContainer
