import React, {useEffect, useState} from "react";
import './App.css';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import {baseUrl} from "./API/API";
import axios from "axios";

function App() {

    const [state, setState] = useState()
    const [inputValue, setInputValue] = useState('')
    const [getRes, setGetRes] = useState(0)

    useEffect(() => {
        axios.get(baseUrl)
            .then(response => setState(response.data.rates.RUB))
            .catch(err => console.log(err, 'Error'))
    }, [])
    const getCurrentCourse = () => {
        const numValue = inputValue.replace(/[^0-9]/g,"")
        return setGetRes(numValue * state)
    }

    return (
        <div className="App">
            <h1>Currency converter</h1>
            <MyInput
                placeholder={'Enter value to convert'}
                onChange={e => setInputValue(e.target.value)}
                value={inputValue }
            />
            <MyButton onClick={getCurrentCourse}>Get currency</MyButton>
            <h2>Res: {getRes}</h2>
        </div>
    );
}

export default App;
