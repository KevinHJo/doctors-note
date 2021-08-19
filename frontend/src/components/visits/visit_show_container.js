import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchVisit, updateVisit } from "../../actions/visit_actions";
import VisitShow from "./visit_show";

const mSTP = (state, ownProps) => {
  const visitId = ownProps.match.params.visitId
  return {
    visitId: visitId,
    visit: state.entities.visits[visitId]
  }
};

const mDTP = dispatch => ({
  fetchVisit: visitId => dispatch(fetchVisit(visitId)),
  processForm: visit => dispatch(updateVisit(visit))
});

export default withRouter(connect(mSTP, mDTP)(VisitShow))