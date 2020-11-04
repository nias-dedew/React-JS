import React from 'react';

const Age = (props) => {
    return (
        <label>
            Age: <input type="text" value={props.age} onChange={props.changeAge} />
        </label>
    )
}

export default Age;