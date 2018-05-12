/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';

import SideDrawer from '../SideDrawer.jsx';
import menuData from '../data/menu';

Enzyme.configure({ adapter: new Adapter() });

describe('SideDrawer component', () => {
    /* eslint-disable-next-line no-useless-return */
    if (Meteor.isServer) return;

    const wrapper = Enzyme.shallow(<SideDrawer toggleHandler={() => {}} />);

    it('should render a Drawer component', () => {
        assert.equal(wrapper.dive().find('WithStyles(Drawer)').length, 1);
    });

    it('should render a menu item for each item', () => {
        assert.equal(wrapper.dive().find('WithStyles(ListItem)').length, menuData.length);
    });
});
