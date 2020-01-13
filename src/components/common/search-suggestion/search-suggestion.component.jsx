import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { SearchSuggestionsComponent } from './search-suggestion.styles';

const SearchSuggestions = ({ list, displayKey, onClick, noOfSuggestion }) => {
	return (
		<SearchSuggestionsComponent>
			<ListGroup as="ul">
				{list.slice(0, noOfSuggestion).map((item) => {
					item = displayKey ? item[displayKey] : item;
					return (
						<ListGroup.Item
							as="li"
							action="true"
							key={item}
							value={item}
							onClick={() => onClick(item)}
							data-test="searchItem"
						>
							{item}
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</SearchSuggestionsComponent>
	);
};

SearchSuggestions.defaultProps = {
	noOfSuggestion: 5
};

export default SearchSuggestions;
