import ChartsIndex from './charts_index';
import { connect } from 'react-redux';
import { fetchDoctor } from '../../actions/user_actions'
const { getPatients, isDataReady } = require("../../selectors/chart_selectors")

const mSTP = (state) => ({
  state: state,
  doctorId: state.session.user.id,
  isDataReady: isDataReady(state),
  patients: getPatients(state),
  history: state.history,
})

const mDTP = dispatch => ({
  fetchDoctor: doctorId => dispatch(fetchDoctor(doctorId))
})

export default connect(mSTP, mDTP)(ChartsIndex)

