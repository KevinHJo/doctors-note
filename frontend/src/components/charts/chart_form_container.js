import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ChartForm from './chart_form'
import { createPatient } from '../../actions/patient_actions'
import { receiveForm } from '../../actions/doctor_modal_actions'

const mSTP = state => ({
  doctorId: state.session.user.id,
  reloaded: state.ui.doctorModal
})

const mDTP = dispatch => ({
  createPatient: patient => dispatch(createPatient(patient)),
  receiveForm: () => dispatch(receiveForm())
})

const ChartFormContainer = withRouter(connect(mSTP, mDTP)(ChartForm))
export default ChartFormContainer
