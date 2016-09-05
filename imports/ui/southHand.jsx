import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import styles from './southHand.css';

export { SouthHand };

class SouthHand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles[this.props.outer]}>
                <div className={styles.meta}>
                    <h1>South</h1>
                    <h2>{this.props.meta}</h2>
                </div>

                {
                    this.props.cards.map(function(item, index) {
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
