import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { ComponentOne } from '../imports/ui/componentOne/componentOne.jsx';

Meteor.startup(() => {
  render(<ComponentOne />, document.getElementById('app'));
});
