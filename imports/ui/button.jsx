import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import styles from './button.css';

export { Button };

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.updateState} value={this.props.value} >
                {this.props.label}
            </button>
        );
    }
}
