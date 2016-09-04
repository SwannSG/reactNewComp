import React, { Component, PropTypes } from 'react';
import { render, findDOMNode } from 'react-dom';
import styles from './settingsForm.css';

export { SettingsForm };

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showOppPointCount: this.props.settings.showOppPointCount,
           showOppCardFace: this.props.settings.showOppCardFace,
           showPartnersCardFace: this.props.settings.showPartnersCardFace,
           showPartnersPointCount: this.props.settings.showPartnersPointCount,
           showOwnPointCount: this.props.settings.showOwnPointCount,
           cycle: 'wip'
       };
       this.updateState = this.updateState.bind(this);
       this.handleExit = this.handleExit.bind(this);
       this.handleKeyStroke = this.handleKeyStroke.bind(this);
    }

    handleKeyStroke(event) {
        console.log('handleKeyStroke');
        if (event.keyCode===27) {
            this.handleExit(event);
        }
    }

    handleExit(event) {
        console.log('handleClick');
        // Session.set('settings', {
        //     showOppPointCount: this.refs.showOppPointCount.checked,
        //     showOppCardFace: this.refs.showOppCardFace.checked,
        //     showPartnersCardFace: this.refs.showPartnersCardFace.checked,
        //     showPartnersPointCount: this.refs.showPartnersPointCount.checked,
        //     showOwnPointCount: this.refs.showOwnPointCount.checked,
        // });
        console.log(this.refs.showOppPointCount.checked);
        this.setState({cycle:'exit'});
    }

    updateState(event) {
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);
    }

    componentDidMount() {
       window.addEventListener("keydown", this.handleKeyStroke)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyStroke)
    }

    render() {
        console.log('render');
        if (this.state.cycle==='exit') {
            // set null in DOM
            return null;
        }
        return (
            <div className={styles.outer}>
                <div className={styles.heading}>
                    <h4 className={styles.h4}>Settings</h4>
                    <button className={styles.closeButton} type="button" onClick={this.handleExit}>&times;</button>
                </div>
                <div className={styles.body}>
                    <div className={styles.labelAndField}>
                        <label className={styles.label}>Show opponents point count and distribution</label>
                        <input className={styles.checkbox} type="checkbox" ref="showOppPointCount" name="showOppPointCount" checked={this.state.showOppPointCount} onChange={this.updateState}/>
                    </div>
                    <div className={styles.labelAndField}>
                        <label className={styles.label}>Show opponents cards</label>
                        <input className={styles.checkbox} type="checkbox" name="showOppCardFace" ref="showOppPointCount" checked={this.state.showOppCardFace} onChange={this.updateState}/>
                    </div>
                    <div className={styles.labelAndField}>
                        <label className={styles.label}>Show partners cards</label>
                        <input className={styles.checkbox} type="checkbox" name="showPartnersCardFace" ref="showPartnersCardFace" checked={this.state.showPartnersCardFace} onChange={this.updateState}/>
                    </div>
                    <div className={styles.labelAndField}>
                        <label className={styles.label}>Show partners point count and distribution</label>
                        <input className={styles.checkbox} type="checkbox" name="showPartnersPointCount" ref="showPartnersPointCount" checked={this.state.showPartnersPointCount} onChange={this.updateState}/>
                    </div>
                    <div className={styles.labelAndField}>
                        <label className={styles.label}>Show own point count and distribution</label>
                        <input className={styles.checkbox} type="checkbox" name="showOwnPointCount" ref="showOwnPointCount" checked={this.state.showOwnPointCount} onChange={this.updateState}/>
                    </div>
                </div>
            </div>
        );
    }
}
