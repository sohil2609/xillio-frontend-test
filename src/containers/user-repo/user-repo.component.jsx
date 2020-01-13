import React, { useState } from 'react';
import SearchUser from '../../components/search-user/search-user.component';
import { UserRepoComponent, MessageComponent, PageHeader } from './user-repo.styles';
import SearchSuggestions from '../../components/common/search-suggestion/search-suggestion.component';
import { getUsers, getRepos } from '../../service/user-repo.service';
import RepoList from '../../components/repo-list/repo-list.component';
import WithSpinner from '../../components/common/withSpinner/withSpinner.component';

const UserRepo = () => {
	const [ state, setState ] = useState({
		users: [],
		repos: [],
		message: '',
		query: '',
		isLoading: false
	});
	const { users, repos, query, message, isLoading } = state;

	const onQueryChange = async (e) => {
		let query = e.target.value;
		let users = [];
		setState({ ...state, query });
		if (query.length) {
			try {
				let data = await getUsers(query);
				users = data.items ? [ ...data.items ] : [];
			} catch (err) {
				console.error(err);
			}
		}
		setState((prevState) => {
			return { ...prevState, users };
		});
	};

	const selectSuggestion = (user) => {
		setState({ ...state, query: user, users: [] });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await setReposByPage(1);
	};

	const setReposByPage = async (pageNumber) => {
		try {
			setState({ ...state, users: [], isLoading: true });
			let data = await getRepos(query, pageNumber);
			if (data.message) {
				let message = `Username - ${query} ${data.message}`;
				setState({ ...state, message, isLoading: false });
			} else {
				setState({ ...state, message: '', repos: [ ...data ] });
			}
		} catch (err) {
			console.error(err);
		}
	};

	const RepoListComponent = WithSpinner(RepoList);

	return (
		<UserRepoComponent className="user-repo">
			<PageHeader>Search Public Repositories for User</PageHeader>
			<SearchUser query={query} onChange={onQueryChange} onSubmit={onSubmit} data-test="searchUser" />

			<SearchSuggestions list={users} displayKey="login" onClick={selectSuggestion} />
			{message ? (
				<MessageComponent data-test="messageComponent">
					<span>{message}</span>
				</MessageComponent>
			) : (
				<RepoListComponent repos={repos} isLoading={isLoading} />
			)}
		</UserRepoComponent>
	);
};

export default UserRepo;
