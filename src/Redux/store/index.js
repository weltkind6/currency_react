import {combineReducers} from "redux";
import {exchangeReducer} from "../Reducers/exchangeReducer";
import {getDateReducer} from "../Reducers/getDateReducer";

export const rootReducer = combineReducers({exchangeReducer, getDateReducer})