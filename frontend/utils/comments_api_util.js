
export const fetchComments = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/comments/'
    })
}

export const destroyComment = (comment) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${comment.id}`,
        data: comment.id
    })
};

export const createComment = (comment) => {
    
    return $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: comment
    })
}


