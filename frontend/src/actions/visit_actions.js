import * as VisitAPIUtil from '../util/visit_api_util';

export const RECEIVE_VISIT = 'RECEIVE_VISIT';
export const RECEIVE_VISITS = 'RECEIVE_VISITS';

//ACTION CREATORS
const receiveVisits = visits => ({
  type: RECEIVE_VISITS,
  visits
});

const receiveVisit = visit => ({
  type: RECEIVE_VISIT,
  visit
});

//THUNK ACTION CREATORS
export const fetchVisit = visitId => dispatch => (
  VisitAPIUtil.fetchVisit(visitId)
    .then(visit => dispatch(receiveVisit(visit.data)))
);

export const fetchPatientVisits = patientId => dispatch => (
  VisitAPIUtil.fetchPatientVisits(patientId)
    .then(visits => dispatch(receiveVisits(visits)))
);

export const createVisit = visit => dispatch => (
  VisitAPIUtil.createVisit(visit).then(visit => {
    dispatch(receiveVisit(visit.data))
  }   
));

export const updateVisit = visit => dispatch => {
  return VisitAPIUtil.updateVisit(visit)
    .then(visit => dispatch(receiveVisit(visit.data)))
};