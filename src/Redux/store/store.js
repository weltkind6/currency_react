import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

// action = {type: 'ADD-COUNT', payload: 5}

const initialState = {
    count: 0
}
const EXCHANGE_CURRENCY = 'EXCHANGE-CURRENCY'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EXCHANGE_CURRENCY:
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}
export const exchangeCurrencyAc = payload => ({type: EXCHANGE_CURRENCY, payload})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))