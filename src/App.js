import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import TestRoute from "./Components/TestRoute";
import Main from "./Components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {getCourse} from "./API/AsyncActions/getCourse";

function App() {

    const [inputValue, setInputValue] = useState('')
    const [getRes, setGetRes] = useState(0)

    // Redux
    const dispatch = useDispatch()
    const currency = useSelector(state => state.count)

    useEffect(() => {
        dispatch(getCourse())
    }, [])

    const getCurrentCourse = () => {
        const numValue = inputValue.replace(/[^0-9]/g, "")
        return setGetRes(numValue * currency)

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
                            currency={currency}
                        />}
                    />
                    <Redirect to='/main'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
