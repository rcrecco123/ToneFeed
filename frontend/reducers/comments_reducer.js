import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/comments_actions';
import { merge } from "lodash";

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    debugger
    switch (action.type) {
        case (RECEIVE_COMMENTS):
            return Object.assign({}, oldState, action.comments)
        case (RECEIVE_COMMENT):
            debugger
            return merge({}, oldState, action.comment)
        default:
            return oldState;
    }
};