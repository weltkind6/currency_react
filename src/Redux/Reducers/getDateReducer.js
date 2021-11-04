const GET_DATE = 'GET-DATE'
const initialState = {
    current: ''
}
export const getDateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATE:
            return {...state, current: state.current + action.payload}

        default:
            return state
    }
}

export const getDateAc = payload => ({type: GET_DATE, payload})