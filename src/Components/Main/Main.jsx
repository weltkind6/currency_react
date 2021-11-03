import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {NavLink} from "react-router-dom";
import classes from './Main.module.css'

const Main = ({inputValue, setInputValue, getCurrentCourse, result}) => {


    return (
        <div>
            <h1 className={classes.mainTitle}>Currency converter € 👉 ₽</h1>
            <div className={classes.exchangeBlock}>
                <MyInput
                    placeholder={'Amount in EUR (15 EUR in RUB or 15)'}
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={e => e.code === 'Enter' ? getCurrentCourse() : null}
                />
                <MyButton onClick={() => getCurrentCourse()} myClass={classes.button}>
                    Convert
                </MyButton>
            </div>

            <div className={classes.mainResult}>= {result} RUB</div>

            <NavLink to='/test'>
                <MyButton>
                    Current rate
                </MyButton>
            </NavLink>
        </div>
    );
};

export default Main;