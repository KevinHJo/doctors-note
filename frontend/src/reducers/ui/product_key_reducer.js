import { RECEIVE_PROD_KEY } from '../../actions/session_actions';

const ProductKeyReducer = (state = '', action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROD_KEY:
      return action.prodKey;
    default:
      return state;
  }
}

export default ProductKeyReducer