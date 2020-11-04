import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            Name: {props.name}
            {props.submit}
        </div>
    )
}

// const Greeting = (props) => {
//     return (
//         <div>
//             <h1>Title : {props.title}</h1>
//             <h1>Desc : {props.desc} </h1>
//             <h1>Author: {props.author}</h1>
//         </div>
//     )
// }



export default Greeting;