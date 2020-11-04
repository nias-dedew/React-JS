import React from 'react';

const Output = (props) => {
    return (
        <label>
            <span>{props.name} {props.age}</span>
        </label>
    )
}

export default Output;