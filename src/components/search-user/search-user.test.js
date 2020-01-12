import React from 'react';
import { shallow } from 'enzyme';
import SearchUser from './search-user.component';

const setUp = (props = {}) => {
	const component = shallow(<SearchUser {...props} />);
	return component;
};

describe('Search User Component', () => {
	let component;
	let mockProps;
	beforeEach(() => {
		mockProps = {
			query: 'xyz',
			onChange: jest.fn(),
			onSubmit: jest.fn()
		};
		component = setUp(mockProps);
	});
	it('Should test snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('Should render button without errors', () => {
		const wrapper = component.find('[data-test="searchButton"]');
		expect(wrapper.length).toBe(1);
	});

	it('Should render text input without errors', () => {
		const wrapper = component.find('[data-test="textInputComponent"]');
		expect(wrapper.length).toBe(1);
	});
});
