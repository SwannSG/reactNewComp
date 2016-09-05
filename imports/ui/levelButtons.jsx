import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from './button.jsx';
import styles from './levelButtons.css';

export { LevelButtons };

class LevelButtons extends Component {
    constructor(props) {
        super(props);
    }

    levelToDisplay (level) {
        // determine what bid level buttons should be displayed
        if (this.bidLevel < level) {
            return true;
        }
        if (this.bidLevel > level) {
            return false;
        }
        if (this.bidLevel===level && this.bidSuit!=='n') {
            return true;
        }
        return false;
    }

    render() {
        this.bidLevel = parseInt(this.props.lastBid.charAt(0));
        this.bidSuit = this.props.lastBid.charAt(1);
        return (
            <div className={this.props.classname}>
                {this.levelToDisplay(1) ? <Button classname={styles.btn1} label="1" value="1" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(2) ? <Button classname={styles.btn2} label="2" value="2" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(3) ? <Button classname={styles.btn3} label="3" value="3" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(4) ? <Button classname={styles.btn4} label="4" value="4" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(5) ? <Button classname={styles.btn5} label="5" value="5" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(6) ? <Button classname={styles.btn6} label="6" value="6" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(7) ? <Button classname={styles.btn7} label="7" value="7" updateState={this.props.updateState} /> : null}
            </div>
        )
    }
}
