import { RECEIVE_FORM } from '../../actions/doctor_modal_actions';

const DoctorModalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FORM:
      return true;
    default:
      return false;
  }
}

export default DoctorModalReducer