import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {exchangeCurrency} from "../Reducers/exchangeCurrency";

// action = {type: 'ADD-COUNT', payload: 5}


export const store = createStore(exchangeCurrency, composeWithDevTools(applyMiddleware(thunk)))