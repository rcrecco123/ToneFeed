import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/tracks_actions';
import { merge } from "lodash";

export default (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case (RECEIVE_TRACKS):
            return Object.assign({}, oldState, action.tracks);
        case (RECEIVE_TRACK):
            debugger
            return Object.assign({}, oldState, action.track);
        default:
            return oldState;
    }
};

