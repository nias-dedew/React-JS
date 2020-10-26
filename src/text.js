import React from 'react';

export default function Text(props) {
    return <p style={{ color: props.color }}> Ini adalah {props.text}</p >
}

