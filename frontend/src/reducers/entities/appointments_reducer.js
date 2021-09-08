import {RECEIVE_APPOINTMENT, RECEIVE_APPOINTMENTS, REMOVE_APPOINTMENT} from '../../actions/appointment_actions'
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';
import { RECEIVE_PATIENT_LOGOUT } from '../../actions/patient_actions';

const AppointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_APPOINTMENT:
      nextState[action.appointment._id] = action.appointment;
      return nextState;
    case RECEIVE_APPOINTMENTS:
      action.appointments.forEach(appointment => nextState[appointment._id] = appointment)
      return nextState;
    case REMOVE_APPOINTMENT:
      delete nextState[action.appointmentId];
      return nextState;
    case RECEIVE_USER_LOGOUT:
      return {};
    case RECEIVE_PATIENT_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default AppointmentsReducer;