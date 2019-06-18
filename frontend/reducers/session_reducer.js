import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

//setup default state for session

const _nullSession = {
    currentUser: null,
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, {currentUser: +Object.keys(action.user)[0]});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};



