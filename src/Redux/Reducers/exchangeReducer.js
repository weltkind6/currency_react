const EXCHANGE_CURRENCY = 'EXCHANGE-CURRENCY'

const initialState = {
    count: 0
}

export const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXCHANGE_CURRENCY:
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}

export const exchangeReducerAc = payload => ({type: EXCHANGE_CURRENCY, payload})

// const CURRENCY_CONVERSION = 'CURRENCY-CONVERSION'