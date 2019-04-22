import { combineReducers } from "redux";
import ui from './ui';
import session from './session';
import entities from "./entities";
import errors from './errors';

//MY STATE

//return value of session reducer is the value of session key WHICH IS A SLICE OF STATE
const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors,
})

export default rootReducer;
