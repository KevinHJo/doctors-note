import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ChartForm from './chart_form'
import { createPatient, fetchPatient } from '../../actions/patient_actions'
import { receiveForm } from '../../actions/doctor_modal_actions'

const mSTP = state => ({
  doctorId: state.session.user.id,
  reloaded: state.ui.doctorModal,
  patient: {
    fname: '',
      lname: '',
      dateOfBirth: '',
      sex: '',
      email: '',
      phone: '',
      address: '',
      doctorId: state.session.user.id,
      diagnoses: [],
      medications: [],
      allergies: []
  },
  formHeader: <h1>Create a New Patient</h1>,
  patientId: '',
  formSubmit: 'Create New Patient'
})

const mDTP = dispatch => ({
  processForm: patient => dispatch(createPatient(patient)),
  receiveForm: () => dispatch(receiveForm())
})

const ChartFormContainer = withRouter(connect(mSTP, mDTP)(ChartForm))
export default ChartFormContainer
