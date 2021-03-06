import { connect } from "react-redux";
import { fetchPatient, updatePatient } from "../../actions/patient_actions";
import EditChartForm from "./edit_chart_form";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
  const patientId = ownProps.match.params.patientId;

  return {
    doctorId: state.session.user.id,
    patient: state.entities.patients[patientId],
    patientId: patientId,
    formHeader: <h1>Edit Existing Patient Information</h1>,
    formSubmit: 'Save'
}};

const mDTP = dispatch => ({
  processForm: patient => dispatch(updatePatient(patient)),
  fetchPatient: patientId => dispatch(fetchPatient(patientId))
});

export default withRouter(connect(mSTP, mDTP)(EditChartForm));