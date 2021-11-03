import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const TestRoute = ({...props}) => {

    return (
        <div>
            <h2>Current exchange rate</h2>
            <div>
                <span>EUR</span> = {props.currentCourse}<span> RUB</span>

            </div>
            <MyButton onClick={() => props.history.goBack()}>
                Back
            </MyButton>

        </div>
    );
};

export default TestRoute;