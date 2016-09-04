import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { SettingsForm } from '../imports/ui/settingsForm.jsx';

import './layout.css';

var settings = {
    showOppPointCount:true,
    showOppCardFace: true,
    showPartnersCardFace: true,
    showPartnersPointCount: true,
    showOwnPointCount: true
    }

Meteor.startup(() => {
  render(<SettingsForm settings={settings}/>, document.getElementById('app'));
});
