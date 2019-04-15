import { combineReducers } from "redux";
import ui from './ui';
import session from './session';
import modal from "./modal";
import entities from "./entities";
import errors from './errors';

//return value of session reducer is the value of session key WHICH IS A SLICE OF STATE
const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors,
})

export default rootReducer;
