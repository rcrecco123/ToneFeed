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

export const discoverTrack = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks/discover'
    })
}

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