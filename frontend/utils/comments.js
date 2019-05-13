
export const fetchComments = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/comments/'
    })
}

export const destroyComment = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${id}`
    })
};