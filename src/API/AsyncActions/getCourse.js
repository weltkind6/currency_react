import axios from "axios";
import {baseUrl} from "../API";
import {exchangeCurrencyAc} from "../../Redux/store/store";

export const getCourse = () => {
    return function (dispatch) {
        axios.get(baseUrl)
            .then(response => dispatch(exchangeCurrencyAc(response.data.rates.RUB)))
            .catch(err => console.log(err, 'Error'))
    }
}

// .then(response => setState(response.data.rates.RUB))



