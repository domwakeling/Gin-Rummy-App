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

    const handleClickStub = sinon.spy();
    const wrapper = Enzyme.shallow(<BrandAppBar title="" toggleHandler={handleClickStub} />);

    it('should render an AppBar component', () => {
        assert.equal(wrapper.dive().find('WithStyles(AppBar)').length, 1);
    });

    it('should toggle drawer on click', () => {
        sinon.assert.notCalled(handleClickStub);
        wrapper.dive().find('WithStyles(IconButton)').simulate('click');
        sinon.assert.called(handleClickStub);
    });
});
