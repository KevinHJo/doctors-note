export const RECEIVE_PATIENT_MODAL = 'RECEIVE_PATIENT_MODAL';
export const RECEIVE_NEW_PATIENT_BANNER = "RECEIVE_NEW_PATIENT_BANNER";
export const REMOVE_NEW_PATIENT_BANNER = "RECEIVE_NEW_PATIENT_BANNER";

export const toggleModal = (modalId) => ({
  type: RECEIVE_PATIENT_MODAL,
  modalId: modalId
})

export const newPatientBanner = (patient) => ({
  type: RECEIVE_NEW_PATIENT_BANNER,
  patient
})

export const removePatientBanner = () => ({
  type: REMOVE_NEW_PATIENT_BANNER
})