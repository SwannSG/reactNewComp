import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from './button.jsx';
import { LevelButtons } from './levelButtons.jsx';
import { SuitButtons } from './suitButtons.jsx';

import styles from './bidBox.css';

export { BidBox };

class BidBox extends Component {
    constructor(props) {
        super(props);
        // setup state
        this.state = {};
        this.state.cycle = 'initial';
        // end setup state
        // provides reference to method updateState(e), always executed in the parent
        this.updateState = this.updateState.bind(this);
        this.bidLevel = parseInt(this.props.lastBid.charAt(0));
        this.bidSuit = this.props.lastBid.charAt(1);
    }

    updateState(e) {
        var bid;
        if (e.currentTarget.value === 'pass' || e.currentTarget.value === 'dbl') {
            // pass or dbl, end here
            bid = e.currentTarget.value;
            this.setState({cycle:'exit'});
        }
        else {
            if (e.currentTarget.value==='c' || e.currentTarget.value==='d' || e.currentTarget.value==='h' || e.currentTarget.value==='s' || e.currentTarget.value==='n') {
                // we have a new bid, suit is selected, end here
                var bid = this.state.level + e.currentTarget.value   // level + suit
                this.setState({cycle:'exit'});
            }
            else {
                // level is set, wait for suit
                this.setState({cycle:'levelSelected', level:e.currentTarget.value});
            }
        }
    }

    render() {
        if (this.state.cycle==='exit') {
            // set null in DOM
            return null;
        }
        return (
            <div className={styles.outer}>
                <div className={styles.topBtns}>
                    <Button classname={styles.passBtn} updateState={this.updateState} value={'pass'} label={'Pass'} />
                    <Button classname={styles.dblBtn} updateState={this.updateState} value={'dbl'} label={'Dbl'} />
                </div>
                <LevelButtons classname={styles.levelButtons} updateState={this.updateState} lastBid={'1c'} />
                {(this.state.cycle==='levelSelected') ? <SuitButtons classname={styles.suitButtons} lastBid={this.props.lastBid} levelSelected={parseInt(this.state.level)} updateState={this.updateState}/> : null}

            </div>
        );
    }
}
