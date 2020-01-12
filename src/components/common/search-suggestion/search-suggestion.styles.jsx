import styled from 'styled-components';

export const SearchSuggestionsComponent = styled.div`
	position: relative;
	ul {
		position: absolute;
		top: -15px;
	}
	li {
		min-width: 200px;
		cursor: pointer;
	}
`;
