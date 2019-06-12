import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/tracks_actions';
import { merge } from "lodash";

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = merge({}, oldState)
    switch (action.type) {
        case (RECEIVE_TRACKS):
            return Object.assign({}, oldState, action.tracks);
        case (RECEIVE_TRACK):
            return Object.assign({}, oldState, action.track);
        case (REMOVE_TRACK):
            delete nextState[Object.keys(action.track)];
            return nextState;
        default:
            return oldState;
    }
};

