import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import styles from './southNorthHand.css';

export { SouthHand };

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
                    this.props.vulnerable ? (<div className={styles['vulnerable-'+this.props.size]}></div>) : (<div className={styles['notVulnerable-'+this.props.size]}></div>)
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
