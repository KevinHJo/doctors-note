import * as SessionAPIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

//ACTION CREATORS
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserLogin = () => ({
    type: RECEIVE_USER_LOGIN
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//THUNK ACTION CREATORS
export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    SessionAPIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(() => (
        dispatch(receiveUserLogin())
    ), err => (
        dispatch(receiveSessionErrors(err.response.data))
    ))
);

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)