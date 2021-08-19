import {RECEIVE_VISIT, RECEIVE_VISITS} from '../../actions/visit_actions'

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
    default:
      return state;
  }
};

export default VisitsReducer;