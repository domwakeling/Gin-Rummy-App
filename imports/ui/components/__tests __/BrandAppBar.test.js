/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import BrandAppBar from '../BrandAppBar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('BrandAppBar component', () => {
    /* eslint-disable-next-line no-useless-return */
    if (Meteor.isServer) return;

    const toggleStub = sinon.spy();
    const loginStub = sinon.spy();
    const item = Enzyme
        .shallow(<BrandAppBar
            title=""
            toggleHandler={toggleStub}
            logInOutHandler={loginStub}
        />);

    it('should render an AppBar component', () => {
        assert.equal(item.dive().find('WithStyles(AppBar)').length, 1);
    });

    it('should toggle drawer on click', () => {
        sinon.assert.notCalled(toggleStub);
        item.dive().find('WithStyles(IconButton)').simulate('click');
        sinon.assert.called(toggleStub);
    });

    it('should show \'login\' if no user', () => {
        const button = item.dive().find('WithStyles(Button)');
        assert.equal(button.props().children, 'Login');
    });

    it('should NOT show \'login\' if there is a user', () => {
        const dummyUser = { id: '123', name: 'Dummy User' };
        const item2 = Enzyme
            .shallow(<BrandAppBar
                title=""
                user={dummyUser}
                toggleHandler={toggleStub}
                logInOutHandler={loginStub}
            />);
        const button = item2.dive().find('WithStyles(Button)');
        assert.notEqual(button.props().children, 'Login');
    });
});
