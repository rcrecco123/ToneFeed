import * as TracksUtil from "../utils/track_utils";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const receiveTracks = tracks => {
    return {
        type: RECEIVE_TRACKS,
        tracks
    }
}

export const fetchTracks = () => dispatch => {
    return (
        TracksUtil.fetchTracks()
            .then(tracks => (dispatch(receiveTracks(tracks))
        ))
    )
};