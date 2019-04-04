import { combineReducers } from "redux";
import ui from './ui';
import session from './session';
import modal from "./modal";
import entities from "./entities"

//return value of session reducer is the value of session key WHICH IS A SLICE OF STATE
const rootReducer = combineReducers({
    // session: sessionReducer,
    // ui: uiReducer,
    // modal: modalReducer
    // entities,
    session,
    ui,
})

export default rootReducer;
