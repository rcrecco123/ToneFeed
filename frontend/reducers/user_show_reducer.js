import { RECEIVE_USER_SHOW } from "../actions/user_actions";

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type){
        case (RECEIVE_USER_SHOW):
            return Object.assign({}, oldState, action.user)
        default:
            return oldState
    }
}