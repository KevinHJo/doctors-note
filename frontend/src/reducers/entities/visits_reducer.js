import {RECEIVE_VISIT, RECEIVE_VISITS, REMOVE_VISIT} from '../../actions/visit_actions'
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';
import { RECEIVE_PATIENT_LOGOUT } from '../../actions/patient_actions';

const VisitsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_VISITS:
      nextState = {};
      action.visits.forEach(visit => nextState[visit._id] = visit);
      return nextState;
    case RECEIVE_VISIT:
      nextState[action.visit._id] = action.visit;
      return nextState;
    case REMOVE_VISIT:
      delete nextState[action.visit._id]
      return nextState;
    case RECEIVE_USER_LOGOUT:
      return {};
    case RECEIVE_PATIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default VisitsReducer;