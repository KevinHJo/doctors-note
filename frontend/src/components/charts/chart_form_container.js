import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ChartForm from './chart_form'
import { createPatient } from '../../actions/patient_actions'

const mSTP = state => ({
  doctorId: state.session.user.id
})

const mDTP = dispatch => ({
  createPatient: patient => dispatch(createPatient(patient))
})

const ChartFormContainer = withRouter(connect(mSTP, mDTP)(ChartForm))
export default ChartFormContainer
