import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import VisitsReducer from "./visits_reducer";

const EntitiesReducer = combineReducers({
  visits: VisitsReducer,
  user: UserReducer
});

export default EntitiesReducer