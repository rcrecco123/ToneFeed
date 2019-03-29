import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURENT_USER";

//type + payload

const receiveCurrentUser = ({ user }) => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER, //passed to recuder
        user,
    }
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


//THUNK ACTION CREATORS
//formUser = user object coming from form

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));


export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));