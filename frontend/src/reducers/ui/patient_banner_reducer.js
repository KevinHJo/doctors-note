import { RECEIVE_NEW_PATIENT_BANNER, REMOVE_NEW_PATIENT_BANNER } from '../../actions/patient_modal_actions';

const PatientBannerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_PATIENT_BANNER:
      return action.patient;
    case REMOVE_NEW_PATIENT_BANNER:
      return {};
    default:
      return state;
  }
}

export default PatientBannerReducer