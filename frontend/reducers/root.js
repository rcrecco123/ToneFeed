import { combineReducers } from "redux";
import sessionReducer from './session'

//return value of session reducer is the value of session key WHICH IS A SLICE OF STATE
export default combineReducers({
    session: sessionReducer,
})
