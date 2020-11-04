import React from 'react';

const Input = (props) => {
    return (
        <label>
            Name: <input type="text" value={props.name} onChange={props.changeName} />
        </label>
    )
}

export default Input;