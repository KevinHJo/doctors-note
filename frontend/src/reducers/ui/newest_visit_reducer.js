import { RECEIVE_VISIT } from '../../actions/visit_actions';

const NewestVisitReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VISIT:
      return action.visit;
    default:
      return state;
  }
}

export default NewestVisitReducer