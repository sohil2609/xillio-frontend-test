import React from 'react';
import { RepoListComponent } from './repo-list.styles';
import ListGroup from 'react-bootstrap/ListGroup';

const RepoList = ({ repos }) => {
	const clickHandler = (url) => {
		let win = window.open(url, '_blank');
		win.focus();
	};
	return (
		<RepoListComponent>
			{repos.map((repo) => {
				return (
					<ListGroup.Item as="li" action="true" key={repo.name} onClick={() => clickHandler(repo.html_url)}>
						<span>{repo.name}</span>
						<span>{repo.language || 'NA'}</span>
					</ListGroup.Item>
				);
			})}
		</RepoListComponent>
	);
};

export default RepoList;
