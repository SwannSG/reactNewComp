import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import styles from './bidBox.css';
import { Button } from './button.jsx';


export { BidBox };

class BidBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(styles.passBtn);
        return (
            <div className={styles.outer}>
                <Button classname={styles.passBtn} updateState={function() {}} value={'hello'} label={'Hello'} />
            </div>
        );
    }
}
