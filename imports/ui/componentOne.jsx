import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
// import Radium from 'radium'

export { ComponentOne };

class ComponentOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello there</h1>
        )
    }
}
