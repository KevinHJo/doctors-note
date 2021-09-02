import {RECEIVE_APPOINTMENT, RECEIVE_APPOINTMENTS, REMOVE_APPOINTMENT} from '../../actions/appointment_actions'

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
    default:
      return state;
  }
}

export default AppointmentsReducer;