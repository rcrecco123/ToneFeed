import { RECEIVE_TRACKS, 
        RECEIVE_TRACK, 
        REMOVE_TRACK, 
        RECEIVE_DISCOVER } from '../actions/tracks_actions';
import { merge } from "lodash";

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = merge({}, oldState)
    
    switch (action.type) {
        case (RECEIVE_TRACKS):
            return Object.assign({}, oldState, action.tracks);
        case (RECEIVE_TRACK):
            return Object.assign({}, oldState, action.track);
        case (RECEIVE_DISCOVER):
            return Object.assign({}, oldState, action.tracks);
        case (REMOVE_TRACK):
            delete nextState[action.trackId];
            return nextState;
        default:
            return oldState;
    }
};

//