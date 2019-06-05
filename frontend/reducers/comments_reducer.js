import { RECEIVE_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comments_actions';
import { merge } from "lodash";

//comments part of state comments: { object }

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = merge({}, oldState)

    switch (action.type) {
        case (RECEIVE_COMMENTS):
            return Object.assign({}, oldState, action.comments)
        case (RECEIVE_COMMENT):
            return Object.assign({}, oldState, action.comment)
        case (DELETE_COMMENT):
            delete nextState[Object.keys(action.comment)];
            return nextState; 
        default:
            return oldState;
    }
};