import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

//type + payload

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER, //passed to recuder
        user,
    }
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

const clearErrors = () => ({
    type: CLEAR_ERRORS
});


//THUNK ACTION CREATORS
//formUser = user object coming from form

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));


export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
       errors => dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()),
       errors => dispatch(receiveErrors(errors.responseJSON)));