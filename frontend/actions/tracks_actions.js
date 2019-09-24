import * as TracksUtil from "../utils/track_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_DISCOVER = "RECEIVE_DISCOVER";
export const RECEIVE_SEARCH_TRACKS = "RECEIVE_SEARCH_TRACKS";

export const receiveTracks = tracks => {

    return {
        type: RECEIVE_TRACKS,
        tracks
    }
}

export const receiveTrack = track => {

    return {
        type: RECEIVE_TRACK,
        track
    }
}

export const receiveSearchTracks = tracks => {
    return {
        type: RECEIVE_SEARCH_TRACKS,
        tracks
    }
}

export const receiveDiscover = tracks => {

    return {
        type: RECEIVE_DISCOVER,
        tracks
    }
}

export const removeTrack = trackId => {
    return {
        type: REMOVE_TRACK,
        trackId
    }
}

export const fetchTracks = () => dispatch => {
    return (
        TracksUtil.fetchTracks()
            .then(tracks => dispatch(receiveTracks(tracks)))
    )
};

export const fetchTrack = track => dispatch => {

    return (
        TracksUtil.fetchTrack(track)
            .then(track => dispatch(receiveTrack(track)))
    )
}

export const fetchDiscover = () => dispatch => {
    return (
        TracksUtil.fetchDiscover()
            .then(() => dispatch(receiveDiscover()))
    )
}

export const deleteTrack = id => dispatch => {

    return (
        TracksUtil.deleteTrack(id)
            .then(() => dispatch(removeTrack(id)))
    )
}

export const updateTrack = track => dispatch => {
    return (
        TracksUtil.updateTrack(track)
            .then(track => dispatch(receiveTrack(track)))
    )
}

export const uploadTrack = formData => dispatch => {
    return (
        TracksUtil.uploadTrack(formData)
            .then(track => dispatch(receiveTrack(track)))
    )
}

export const getRandomTracks = () => dispatch => {

    return (
        TracksUtil.getRandomTracks()
            .then(tracks => dispatch(receiveDiscover(tracks)))
    )
}

export const searchTracks = (search) => dispatch => {
    return (
        TracksUtil.searchTracks(search)
            .then(tracks => dispatch(receiveSearchTracks(tracks)))
    )
}

