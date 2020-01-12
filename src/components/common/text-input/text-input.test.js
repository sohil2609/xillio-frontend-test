import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './text-input.component';

const setUp = (props = {}) => {
	const component = shallow(<TextInput {...props} />);
	return component;
};

describe('Text Input Component', () => {
	const mockProps = {
		value: 'xyz',
		onChange: jest.fn(),
		name: 'name',
		id: 'name',
		type: 'text'
	};
	const component = setUp(mockProps);

	it('Should test snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('Should call onChange when input is changed', () => {
		const wrapper = component.find('[data-test="textInput"]');
		wrapper.simulate('change', { target: { value: 'abc' } });
		expect(mockProps.onChange.mock.calls.length).toBe(1);
	});
});
