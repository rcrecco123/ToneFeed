import { combineReducers } from "redux";
import ui from './ui_reducer';
import session from './session_reducer';
import entities from "./entities_reducer";
import errors from './errors_reducer';

//MY STATE

//return value of session reducer is the value of session key WHICH IS A SLICE OF STATE
const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors,
})

export default rootReducer;
