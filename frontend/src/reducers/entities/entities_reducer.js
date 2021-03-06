import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import VisitsReducer from "./visits_reducer";
import PatientsReducer from './patients_reducer'
import AppointmentsReducer from "./appointments_reducer";

const EntitiesReducer = combineReducers({
  visits: VisitsReducer,
  user: UserReducer,
  patients: PatientsReducer,
  appointments: AppointmentsReducer
});

export default EntitiesReducer