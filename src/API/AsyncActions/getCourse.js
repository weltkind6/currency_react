import axios from "axios";
import {baseUrl} from "../API";
import {exchangeReducerAc} from "../../Redux/Reducers/exchangeReducer";


export const getCourse = () => {
    return function (dispatch) {
        axios.get(baseUrl)
            .then(response => dispatch(exchangeReducerAc(response.data.rates.RUB)))
            .catch(err => console.log(err, 'Error'))
    }
}

// .then(response => setState(response.data.rates.RUB))



