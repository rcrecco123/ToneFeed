import { RECEIVE_SEARCH_TRACKS } from "../actions/tracks_actions";

export default function searchReducer(oldState = {}, action) {
    switch (action.type) {
        case RECEIVE_SEARCH_TRACKS:
            return Object.assign({}, oldState, action.tracks);
        default:
            return oldState;
    }
}