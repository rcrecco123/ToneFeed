import * as CommentsUtil from '../utils/comments_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComment = comment => {

    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const deleteComment = comment => {

    return {
        type: DELETE_COMMENT,
        comment
    }
}

export const fetchComments = () => dispatch => {
    return (
        CommentsUtil.fetchComments()
            .then((comments) => dispatch(receiveComment(comments))) //the "comments" reffers
    )                                                                // to the payload, noted on line 9
};

export const createComment = comment => dispatch => {
    return (
        CommentsUtil.createComment(comment).then(comment => (
            dispatch(receiveComment(comment)))
        ));
};

export const destroyComment = comment => dispatch => {

    return (
        CommentsUtil.destroyComment(comment)
            .then((comment) => {

                dispatch(deleteComment(comment))
            }
            ))
}


