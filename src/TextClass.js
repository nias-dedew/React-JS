import React from "react";

class TextClass extends React.Component {
    render() {
        return <p style={{ color: this.props.color }}>Ini adalah {this.props.text}</p>
    }
}

export default TextClass;