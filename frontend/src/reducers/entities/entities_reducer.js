import { combineReducers } from "redux";
import VisitsReducer from "./visits_reducer";

const EntitiesReducer = combineReducers({
  visits: VisitsReducer
});

export default EntitiesReducer