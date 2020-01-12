import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './custom-button.component';

const setUp = (props = {}) => {
	const component = shallow(<CustomButton {...props} />);
	return component;
};

describe('Custom Button Component', () => {
	let component;
	let mockProps;
	beforeEach(() => {
		mockProps = {
			text: 'submit',
			type: 'submit',
			onClick: jest.fn()
		};
		component = setUp(mockProps);
	});

	it('Should call onClick once on click', () => {
		const wrapper = component.find('[data-test="customButton"]');
		wrapper.simulate('click');
		expect(mockProps.onClick.mock.calls.length).toBe(1);
	});

	it('Should test snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});
