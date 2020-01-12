import React from 'react';
import { shallow } from 'enzyme';
import RepoList from './repo-list.component';

const setUp = (props = {}) => {
	const component = shallow(<RepoList {...props} />);
	return component;
};

describe('Repo Item Component', () => {
	let component;
	let mockProps;
	beforeEach(() => {
		mockProps = {
			repos: [
				{
					name: 'abc',
					url: 'https://fakeurl.com/1'
				},
				{
					name: 'abc',
					url: 'https://fakeurl.com/2'
				},
				{
					name: 'abc',
					url: 'https://fakeurl.com/3'
				}
			]
		};
		component = setUp(mockProps);
	});
	it('Should test snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});
