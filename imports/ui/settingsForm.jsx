import React, { Component, PropTypes } from 'react';
import { render, findDOMNode } from 'react-dom';
import styles from './settingsForm.css';

export { SettingsForm };

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showOppPointCount: this.props.settings.showOppPointCount,
        //    showOppCardFace: this.props.settings.showOppCardFace,
        //    showPartnersCardFace: this.props.settings.showPartnersCardFace,
        //    showPartnersPointCount: this.props.settings.showPartnersPointCount,
        //    showOwnPointCount: this.props.settings.showOwnPointCount,
           cycle: 'wip'
       };
       this.updateState = this.updateState.bind(this);
       this.handleExit = this.handleExit.bind(this);
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
        this.setState({cycle:'exit'});
    }

    updateState(event) {
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);
    }


    render() {
        console.log('render');
        console.log(this.props.settings.showOppPointCount);
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
                        <input className={styles.checkbox}type="checkbox" name="showOppPointCount" ref="showOppPointCount"/>
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        );
    }
}

// return (
//     <div parent style={[styles.parent, dyn.parent]}>
//         <div heading style={[styles.heading, dyn.heading]}>
//             <h4 header style={[styles.header, dyn.header]}>Settings</h4>
//             <button close style={[styles.close, dyn.close]} type="button" onClick={this.handleExit}>&times;</button>
//         </div>
//
//
//         <div  style={[dyn.formDiv]}>
//             <form>
//                 <label style={[styles.label, dyn.label]}>Show opponents point count and distribution
//                 <input style={[styles.input, dyn.input]} type="checkbox" name="showOppPointCount" ref="showOppPointCount"
//                  checked={this.state.showPointCount} onChange={this.updateState} /></label>
//
//                 <label style={[styles.label, dyn.label]}>Show opponents cards
//                 <input style={[styles.input, dyn.input]} type="checkbox" name="showOppCardFace" ref="showOppCardFace"
//                 checked={this.state.showOppCardFace} onChange={this.updateState} /></label>
//
//                 <label style={[styles.label, dyn.label]}>Show partners cards
//                 <input style={[styles.input, dyn.input]} type="checkbox" name="showPartnersCardFace" ref="showPartnersCardFace"
//                  checked={this.state.showPartnersCardFace} onChange={this.updateState} /></label>
//
//                  <label style={[styles.label, dyn.label]}>Show partners point count and distribution
//                  <input style={[styles.input, dyn.input]}type="checkbox" name="showPartnersPointCount" ref="showPartnersPointCount"
//                   checked={this.state.showPartnersCount} onChange={this.updateState} /></label>
//
//                 <label style={[styles.label, dyn.label]}>Show own point count and distribution
//                 <input style={[styles.input, dyn.input]} type="checkbox" name="showOwnPointCount" ref="showOwnPointCount"
//                 checked={this.state.showOwnPointCount} onChange={this.updateState} /></label>
//             </form>
//         </div>
//         <div footer="1" style={[dyn.footer]}></div>
//     </div>
// );
//
