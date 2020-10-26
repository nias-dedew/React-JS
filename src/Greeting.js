import React from 'react';

const Greeting = (props) => {
    console.log(props);
    return (
        <div>
            <p>Hallo My Name is {props.name} and My Age: {props.age}</p>
            <h1>{props.children}</h1>
        </div>

    )
}

export default Greeting;