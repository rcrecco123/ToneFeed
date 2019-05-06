import * as TracksUtil from "../utils/track_utils";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";

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



