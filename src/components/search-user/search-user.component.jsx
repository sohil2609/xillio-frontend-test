import React from 'react';
import TextInput from '../common/text-input/text-input.component';
import CustomButton from '../common/custom-button/custom-button.component';
import { UserFormComponent } from './search-user.styles';

const SearchUser = ({ query, onChange, onSubmit }) => (
	<UserFormComponent onSubmit={onSubmit} data-test="UserFormComponent">
		<TextInput
			value={query}
			name={'query'}
			onChange={onChange}
			placeholder="Search Username"
			data-test="textInputComponent"
		/>
		<CustomButton extraCssClass="btn-primary" type="submit" text="Search" data-test="searchButton" />
	</UserFormComponent>
);

export default SearchUser;
