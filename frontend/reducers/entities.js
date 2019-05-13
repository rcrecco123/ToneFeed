import { combineReducers } from 'redux';
import users from './users';
import tracks from './tracks';
import comments from './comments';

export default combineReducers({
    users,
    tracks,
    comments
});