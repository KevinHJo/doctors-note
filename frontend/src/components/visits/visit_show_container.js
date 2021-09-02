import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toggleModal } from "../../actions/patient_modal_actions";
import { fetchVisit, updateVisit, deleteVisit } from "../../actions/visit_actions";
import { fetchPatient } from "../../actions/patient_actions";
import VisitShow from "./visit_show";

const mSTP = (state, ownProps) => {
  const visitId = ownProps.match.params.visitId
  console.log(ownProps)
  return {
    visitId: visitId,
    visit: state.entities.visits[visitId],
    modal: state.ui.patientModal,
    history: ownProps.history,
  }
};

const mDTP = dispatch => ({
  fetchPatient: patientId => dispatch(fetchPatient(patientId)),
  fetchVisit: visitId => dispatch(fetchVisit(visitId)),
  processForm: visit => dispatch(updateVisit(visit)),
  deleteVisit: visitId => dispatch(deleteVisit(visitId)),
  toggleModal: modalId => dispatch(toggleModal(modalId))
});

export default withRouter(connect(mSTP, mDTP)(VisitShow))