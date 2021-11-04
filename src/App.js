import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import CurrentCourse from "./Components/CurrentCourse";
import Main from "./Components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {getCourse, getCurrentDate} from "./API/AsyncActions/getCourse";

function App() {

    const [inputValue, setInputValue] = useState('')
    const [getRes, setGetRes] = useState(0)

    // Redux
    const dispatch = useDispatch()
    const currency = useSelector(state => state.exchangeReducer.count)
    const today = useSelector(state => state.getDateReducer.current)

    useEffect(() => {
        dispatch(getCourse())
    }, [dispatch])
    useEffect(() => {
        dispatch(getCurrentDate())
    }, [])

    const getCurrentCourse = () => {
        const numValue = inputValue.replace(/[^0-9]/g, "")
        return setGetRes(numValue * currency)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <div className="App__wrapper">
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
                            <CurrentCourse
                                getRes={getRes}
                                {...props}
                                currency={currency}
                                date={today}
                            />}
                        />
                        <Redirect to='/main'/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
