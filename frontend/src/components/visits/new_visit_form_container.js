import { connect } from "react-redux";
import VisitForm from "./visit_form";
import { createVisit } from "../../actions/visit_actions";

const mSTP = (state, ownProps) => ({
  visit: {
    _id: '',
    subjective: '',
    objective: '',
    assessment: '',
    plan: '',
    patientId: ownProps.match.params.patientId
    },
  newVisit: state.ui.newestVisit,
  history: ownProps.history,
  updateEditedVisit: () => null,
  toggleEdit: () => ownProps.history.push(`/charts/${ownProps.match.params.patientId}`),

});

const mDTP = dispatch => ({
  processForm: visit => dispatch(createVisit(visit))
});

export default connect(mSTP, mDTP)(VisitForm)