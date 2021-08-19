import { combineReducers } from "redux";
import PatientModalReducer from "./patient_modal_reducer";

const UIReducer = combineReducers({
  patientModal: PatientModalReducer,
});

export default UIReducer