import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { SettingsForm } from '../imports/ui/settingsForm.jsx';
import { BidBox } from '../imports/ui/bidBox.jsx';
import { NorthHand, SouthHand } from '../imports/ui/nsHand.jsx';


import './layout.css';

var settings = {
    showOppPointCount:true,
    showOppCardFace: true,
    showPartnersCardFace: true,
    showPartnersPointCount: true,
    showOwnPointCount: true
    }

Meteor.startup(() => {
  // render(<SettingsForm settings={settings}/>, document.getElementById('app'));
  // render(<BidBox lastBid={'0c'}/>, document.getElementById('app'));
  var cards = ["ks51", "ts48", "8s46", "2s40", "qh37", "7h32", "3h28", "kc12", "jc10", "5c04", "3c02", "6d18", "3d15"]
  render(<NorthHand size={'xl'} meta={'test'} cards={cards} faceup={true} vulnerable={true}/>, document.getElementById('app'));
});
