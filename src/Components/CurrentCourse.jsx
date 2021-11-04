import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import classes from './CurrentCourse.module.css'

const CurrentCourse = ({...props}) => {

    return (
        <div>
            <h2 className={classes.courseTitle}>Current exchange rate:</h2>
            <div className={classes.currentCurrency}>
                <div>EUR</div>
                <div>= {props.currency}</div>
                <div> RUB</div>

            </div>
            <div className={classes.wrapper}>
                <div className={classes.date}>
                    <strong>Today is: {props.date}</strong>
                </div>
                <MyButton myClass={classes.button} onClick={() => props.history.goBack()}>
                    Go back
                </MyButton>
            </div>
        </div>
    );
};

export default CurrentCourse;