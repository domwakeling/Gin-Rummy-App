/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';

import App from '../App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    /* eslint-disable-next-line no-useless-return */
    if (Meteor.isServer) return;

    const wrapper = Enzyme.shallow(<App history={{}} />);

    // dive() twice - once for the withStyles wrapper in material-ui, and again for
    // the withTracker wrapper from meteor/react-meteor-data

    it('should render a BrowserRouter', () => {
        assert.equal(wrapper.dive().dive().find('BrowserRouter').length, 1);
    });

    it('should render a MuiThemeProvider', () => {
        assert.equal(wrapper.dive().dive().find('MuiThemeProvider').length, 1);
    });
});
