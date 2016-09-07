import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// we do this to support inheritence
var nsStyles = require('./nsHand.css').styles;
var ewStyles = require('./ewHand.css').styles;

export { NorthHand, SouthHand };

class SouthHand extends Component {
    constructor(props) {
        super(props);
        this.localStyle = {
            fontSize: {
                xl:'100%',
                lg:'90%',
                md:'80%',
                sm:'70%',
                xs:'60%'
            },
            metaPosition: {bottom:'0'},
            rotate:{}
        }
        this.player = 'South';
        this.imgDir = '/vCards/';
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

    styles(str) {
        // we do this to support inheritence
        if (this.constructor.name==='SouthHand' || this.constructor.name==='NorthHand') {
            return nsStyles[str];
        }
        return ewStyles[str];
    }

    render() {
        var cardArr = this.getCardArray();
        return (
            <div className={this.styles('outer-'+this.props.size)} style={this.localStyle.rotate}>
                <div className={this.styles('fnMeta')} style={{fontSize:this.localStyle.fontSize[this.props.size]}}>
                    <h1>{this.player}</h1>
                    <h2>{this.props.meta}</h2>
                </div>

                {
                    this.props.vulnerable ? (<div style={this.localStyle.metaPosition} className={this.styles('fnVulnerable')}></div>) : (<div style={this.localStyle.metaPosition}  className={this.styles(fnNotVulnerable)}></div>)
                }

                {
                    cardArr.map(function(item, index) {
                        if (index===0) {
                            return (
                                <img className={this.styles('card1')} src={this.imgDir + item +'.svg'} key={index} />
                            );
                        }
                        else {
                            return (
                                <img src={this.imgDir + item +'.svg'}  key={index} />
                            );
                        }
                    }
                    , this)
                }
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
    constructor(props) {
        super(props);
        this.localStyle.metaPosition = {bottom:'0'};
        this.player = 'North';
    }
}
