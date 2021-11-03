import React, {useEffect, useState} from "react";
import './App.css';
import {baseUrl} from "./API/API";
import axios from "axios";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import TestRoute from "./Components/TestRoute";
import Main from "./Components/Main/Main";

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
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/main' render={() =>
                            <Main
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                result={getRes}
                                getCurrentCourse={getCurrentCourse}
                            />}
                    />
                    <Route exact path='/test' render={props =>
                            <TestRoute
                                getRes={getRes}
                                {...props}
                                currentCourse={state}
                            /> }
                    />
                    <Redirect to='/main'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
