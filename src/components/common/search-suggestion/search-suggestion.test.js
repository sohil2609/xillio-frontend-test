import React from 'react';
import { shallow } from 'enzyme';
import SearchSuggestion from './search-suggestion.component';

const setUp = (props = {}) => {
	const component = shallow(<SearchSuggestion {...props} />);
	return component;
};

describe('Search Suggestion Component', () => {
	const mockProps = {
		list: [ 'abc', 'abcd', 'abcde' ],
		onClick: jest.fn(),
		noOfSuggestion: 2
	};
	const component = setUp(mockProps);

	it('Should test snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('Should render only 2 suggestions', () => {
		const items = component.find('[data-test="searchItem"]');
		expect(items.length).toBe(2);
	});
});
