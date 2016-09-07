import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import styles from './nsHand.css';

export { NorthHand, SouthHand };

class SouthHand extends Component {
    constructor(props) {
        super(props);
    }

    getCardArray() {
        // supports cards faceup or facedown
        if (this.props.faceup) {
            // show cards faceup
            return this.props.cards;
        }
        else {
            // show cards face down
            return ['cb','cb','cb','cb','cb','cb','cb','cb','cb','cb','cb','cb','cb'];
        }
    }

    vulLocalStyle() {
        // south
        if (this.constructor.name==='SouthHand') {
            return {top:'0'};
        }
        if (this.constructor.name==='NorthHand') {
            return {bottom:0};
        }
    }

    render() {
        var cardArr = this.getCardArray();
        console.log(this.props.vulnerable);
        return (
            <div className={styles['outer-'+this.props.size]}>
                <div className={styles['meta-'+this.props.size]}>
                    <h1>South</h1>
                    <h2>{this.props.meta}</h2>
                </div>

                {
                    this.props.vulnerable ? (<div style={this.vulLocalStyle()} className={styles.fnVulnerable}></div>) : (<div style={this.vulLocalStyle()}  className={styles.fnNotVulnerable}></div>)
                }

                {
                    cardArr.map(function(item, index) {
                        if (index===0) {
                            return (
                                <img className={styles.card1} src={'/vCards/' + item +'.svg'} key={index} />
                            );
                        }
                        else {
                            return (
                                <img src={'/vCards/' + item +'.svg'}  key={index} />
                            );
                        }
                    }
                )}
            </div>
        )
    }
}

SouthHand.propTypes = {
    size: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    faceup: PropTypes.bool.isRequired,
    vulnerable: PropTypes.bool.isRequired
}


class NorthHand extends SouthHand {
}
