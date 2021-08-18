import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_DOCTOR = 'RECEIVE_DOCTOR'

export const receiveDoctor = doctor => ({
  type: RECEIVE_DOCTOR,
  doctor
})

export const fetchDoctor = doctorId => dispatch => (
  UserAPIUtil.fetchDoctor(doctorId)
    .then(doctor => dispatch(receiveDoctor(doctor)))
)
