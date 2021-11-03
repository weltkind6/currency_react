import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const TestRoute = ({...props}) => {
    return (
        <div>
            <MyButton onClick={() => props.history.goBack()}>
                Back
            </MyButton>
        </div>
    );
};

export default TestRoute;