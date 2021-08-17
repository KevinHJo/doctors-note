import ChartsIndex from './charts_index';
import { connect } from 'react-redux';
const { getPatients } = require("../../selectors/chart_selectors")

const mSTP = (state) => ({
  patients: getPatients(state),
  history: state.history,
})

const mDTP = dispatch => ({
  // fetchDoctor: doctorId => dispatch(fetchDoctor(doctorId))
})

export default connect(mSTP, mDTP)(ChartsIndex)

