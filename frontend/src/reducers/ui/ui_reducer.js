import { combineReducers } from "redux";
import PatientModalReducer from "./patient_modal_reducer";
import ProductKeyReducer from './product_key_reducer';
import NewestVisitReducer from './newest_visit_reducer';

const UIReducer = combineReducers({
  patientModal: PatientModalReducer,
  newestVisit: NewestVisitReducer,
  prodKey: ProductKeyReducer
});

export default UIReducer