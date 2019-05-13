import { RECEIVE_COMMENTS } from '../actions/comments_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case (RECEIVE_COMMENTS):
            return Object.assign({}, oldState, action.comments)
        // case (DESTROY_RECORDING):
        //     let newState = merge({}, oldState);
        //     delete newState[action.comment];
        //     return newState;
        default:
            return oldState;
    }
};