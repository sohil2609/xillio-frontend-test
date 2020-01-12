import React from 'react';
import { shallow } from 'enzyme';
import UserRepo from './user-repo.component';

const setUp = (props = {}) => {
	const component = shallow(<UserRepo {...props} />);
	return component;
};

describe('User Repo Component', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('Should test snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});
