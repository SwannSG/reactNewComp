import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from './button.jsx';

import styles from './bidBox.css';

export { BidBox };

class BidBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.outer}>
                <Button classname={styles.passBtn} updateState={function() {}} value={'hello'} label={'Hello'} />
            </div>
        );
    }
}