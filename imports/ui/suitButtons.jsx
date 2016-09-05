import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Button } from './button.jsx'
import styles from './suitButtons.css'

export { SuitButtons }

class SuitButtons extends Component {
    constructor(props) {
        super(props);
    }

    suitButtonsToDisplay(level, lastBid) {
        console.log('displaySuitButtons');
        bidLevel = parseInt(lastBid.charAt(0));
        bidSuit = lastBid.charAt(1);
        if (parseInt(level)===bidLevel) {
            if (bidSuit==='c') {
                return [false, true, true, true, true];
            }
            else if (bidSuit==='d') {
                return [false, false, true, true, true];
            }
            else if (bidSuit==='h') {
                return [false, false, false, true, true];
            }
            else if (bidSuit==='s') {
                return [false, false, false, false, true];
            }
        }
        return [true, true, true, true, true];
    }

    render() {
        console.log('SuitButtons');
        console.log(this.props.levelSelected);
        console.log(this.props.lastBid);
        var showSuit = this.suitButtonsToDisplay(this.props.levelSelected, this.props.lastBid);
        console.log(showSuit);
        return (
            <div className={this.props.classname}>
                { showSuit[0] ? <Button classname={styles.clubBtn} label={'\u2663'} value={'c'} updateState={this.props.updateState}/> : null }
                { showSuit[1] ? <Button classname={styles.diamBtn} label={'\u2666'} value={'d'} updateState={this.props.updateState}/> : null }
                { showSuit[2] ? <Button classname={styles.heartBtn} label={'\u2665'} value={'h'} updateState={this.props.updateState}/> : null }
                { showSuit[3] ? <Button classname={styles.spadeBtn} label={'\u2660'} value={'s'} updateState={this.props.updateState}/> : null }
                { showSuit[4] ? <Button classname={styles.ntBtn} label={'nt'} value={'n'} updateState={this.props.updateState}/> : null }
            </div>
        )
    }
}

SuitButtons.propTypes = {
    lastBid: PropTypes.string.isRequired,
    levelSelected: PropTypes.number.isRequired,
    updateState: PropTypes.func.isRequired,
}
