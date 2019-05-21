import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //interpolate a key with []
            return Object.assign({}, { [action.user.id]: action.user});
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
            break;
    }
};

//we always want the key to be the ID and the value to be the information
//that corresponds to the ID