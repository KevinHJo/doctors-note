import { RECEIVE_PATIENT_MODAL } from '../../actions/patient_modal_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_CHART } from '../../actions/doctor_modal_actions';

const PatientModalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PATIENT_MODAL:
      return {[action.modalId]: true};
    case RECEIVE_CURRENT_USER:
      return ({1: true})
    case RECEIVE_CHART:
      return ({3: true})
    default:
      return ({1: true});
  }
}

export default PatientModalReducer