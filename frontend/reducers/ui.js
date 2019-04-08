import { combineReducers } from 'redux';
import merge from 'lodash/merge';
// import filters from './filters_reducer';
import modal from '../reducers/modal';

export default combineReducers({
    // filters,
    modal
});