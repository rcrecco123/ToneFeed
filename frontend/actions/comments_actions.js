import * as CommentsUtil from '../utils/comments';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENTS = "DELETE_COMMENTS";

export const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export const deleteComment = comment => {
    return {
        type: DELETE_COMMENT,
        comment: comment.id
    }
}

export const fetchComments = () => dispatch => {
    return (
        CommentsUtil.fetchComments()
            .then((comments) => dispatch(receiveComments(comments))) //the "comments" reffers
    )                                                                // to the payload, noted on line 9
};


export const destroyComment = comment => dispatch => {
    return (
        CommentsUtil.destroyComment(comment)
            .then((comment) => dispatch(deleteComment(comment))
        ))
}