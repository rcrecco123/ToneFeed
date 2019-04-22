import { RECEIVE_TRACKS } from '../actions/tracks_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case (RECEIVE_TRACKS):
            return Object.assign({}, oldState, action.tracks);
        default:
            return oldState;        
    }
};
