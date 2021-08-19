import { RECEIVE_PATIENT_MODAL } from '../../actions/patient_modal_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const PatientModalReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PATIENT_MODAL:
      return {[action.modalId]: true};
    case RECEIVE_CURRENT_USER:
      return ({1: true})
    default:
      return state;
  }
}

export default PatientModalReducer