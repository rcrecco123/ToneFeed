//AJAX REQUESTS

export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks',
    })
};

export const fetchTrack = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${id}`
    })
};
export const deleteTrack = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/tracks/${id}`
    })
}

export const updateTrack = id => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tracks/${id}`
    })
}

export const uploadTrack = formData => {
    return $.ajax({
        url: "/api/tracks",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
    })
}

export const getRandomTracks = () => {

    return $.ajax({
        method: "GET",
        url: "/api/tracks/discover"
    })
}

export const searchTracks = (search) => {
    debugger
    return $.ajax({
        method: "GET",
        url: `/api/tracks/:id/search`,
        data: { search },
    })

    //  {search} is passed to params by giving a key of data: pointing to search in our AJAX request.
}
