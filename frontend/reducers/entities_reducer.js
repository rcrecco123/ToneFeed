import { combineReducers } from 'redux';
import users from './users_reducer';
import tracks from './tracks_reducer';
import comments from './comments_reducer';
import userShow from './user_show_reducer';

export default combineReducers({
    users,
    // userShow,
    tracks,
    comments
});