import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {NavLink} from "react-router-dom";

const Main = ({inputValue, setInputValue, getCurrentCourse, result}) => {
    return (
        <div>
            <h1>Currency converter</h1>
            <MyInput
                placeholder={'Amount russian RUB'}
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
            />
            <MyButton onClick={() => getCurrentCourse()}>
                Convert
            </MyButton>
            <h2>= {result} ₽</h2>
            <NavLink to='/test'>
                <MyButton>
                    Current rate
                </MyButton>
            </NavLink>
        </div>
    );
};

export default Main;