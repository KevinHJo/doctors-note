import { connect } from "react-redux";
import { fetchPatientVisits } from "../../actions/visit_actions";
import VisitsIndex from "./visits_index";

const mSTP = (state, ownProps) => {
  const patientId = ownProps.match.params.patientId
  return {
    patientId: patientId,
    patient: state.entities.patients.patientId
  }
};

const mDTP = dispatch => ({
  fetchPatientVisits: () => dispatch(fetchPatientVisits)
})