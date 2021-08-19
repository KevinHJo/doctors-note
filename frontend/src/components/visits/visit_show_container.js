import { connect } from "react-redux";
import { fetchVisit } from "../../actions/visit_actions";
import VisitShow from "./visit_show";

const mSTP = (state, props) => ({
  visitId: props.location.state.visitId
});

const mDTP = dispatch => ({
  fetchVisit: visitId => dispatch(fetchVisit(visitId))
});

export default connect(mSTP, mDTP)(VisitShow)