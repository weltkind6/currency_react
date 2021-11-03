import React from 'react';

const MyInput = ({...props}) => {
    return <input type="text" className="form-control" id="usr" {...props}/>



};

export default MyInput;