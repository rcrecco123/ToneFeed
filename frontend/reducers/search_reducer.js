import { RECEIVE_SEARCH_TRACKS } from "../actions/tracks_actions";

export default function searchReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_SEARCH_TRACKS:
            return action.tracks;
        default:
            return state;
    }
}