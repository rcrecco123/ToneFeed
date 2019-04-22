import { combineReducers } from 'redux';
import users from './users';
import tracks from './tracks';

export default combineReducers({
    users,
    tracks
});