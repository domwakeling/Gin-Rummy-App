/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';

import PasswordDialog from '../PasswordDialog.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('PasswordDialog component', () => {
    /* eslint-disable-next-line no-useless-return */
    if (Meteor.isServer) return;

    const wrapper = Enzyme
        .shallow(<PasswordDialog
            closeDialog={() => {}}
            bert={() => {}}
        />);

    it('should render a Dialog', () => {
        assert.equal(wrapper.find('WithStyles(Dialog)').length, 1);
    });

    it('should render Create Account as button text by default', () => {
        assert.equal(wrapper.find('#modeToggleButton').props().children, 'Create Account');
    });

    it('should render two TextFields by default', () => {
        assert.equal(wrapper.find('TextField').length, 2);
    });

    it('should have Sign In button disabled by default', () => {
        assert.equal(wrapper.find('#signInButton').props().disabled, true);
    });

    it('should render three TextFields after toggle', () => {
        wrapper.find('#modeToggleButton').simulate('click', { preventDefault: () => { } });
        assert.equal(wrapper.find('TextField').length, 3);
    });

    it('should render Sign In as button text after toggle', () => {
        assert.equal(wrapper.find('#modeToggleButton').props().children, 'Sign In');
    });

    it('should still have Sign In button disabled by default', () => {
        assert.equal(wrapper.find('#signInButton').props().disabled, true);
    });
});
