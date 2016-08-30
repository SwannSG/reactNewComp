import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
// import Radium from 'radium'
import styles from "./componentOne.css";


export { ComponentOne };

class ComponentOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className={styles.hello}>Hello there</h1>
        )
    }
}
