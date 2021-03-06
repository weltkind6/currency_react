import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, myClass, ...props}) => {
    return (
        <button {...props} className={[myClass, classes.myBtn].join(' ')}>{children}</button>
    )


};

export default MyButton;