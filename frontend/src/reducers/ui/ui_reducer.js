import { combineReducers } from "redux";
import PatientModalReducer from "./patient_modal_reducer";
import ProductKeyReducer from './product_key_reducer';
import NewestVisitReducer from './newest_visit_reducer';
import DoctorModalReducer from './doctor_modal_reducer';

const UIReducer = combineReducers({
  patientModal: PatientModalReducer,
  newestVisit: NewestVisitReducer,
  prodKey: ProductKeyReducer,
  doctorModal: DoctorModalReducer
});

export default UIReducer