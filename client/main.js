import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { ComponentOne } from '../imports/ui/componentOne/componentOne.jsx';
import { SettingsForm } from '../imports/ui/settingsForm.jsx';

import './layout.css';


Meteor.startup(() => {
  render(<SettingsForm settings={{showOppPointCount:true}}/>, document.getElementById('app'));
});
