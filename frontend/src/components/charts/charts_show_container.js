const { getPatients } = require("../../selectors/chart_selectors")
import { connect } from 'react-redux'
import ChartsIndex from './charts_index'

const mapStateToProps = state => ({
  patients: getPatients(state)
})

const mapDispatchToProps = dispatch => ({
  // fetchDoctor: doctorId => dispatch(fetchDoctor(doctorId))
})

const ChartsShowContainer = connect(mapStateToProps, mapDispatchToProps)(ChartsIndex)
export default ChartsShowContainer
