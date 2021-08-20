import { RECEIVE_CHART } from '../../actions/doctor_modal_actions';

const ShowChartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART:
      return action.patientId;
    default:
      return state;
  }
}

export default ShowChartReducer