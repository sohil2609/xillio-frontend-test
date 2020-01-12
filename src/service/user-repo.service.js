import { GITHUB_API_ENDPOINT } from '../api-config';

export const getUsers = async (query) => {
	let response = await fetch(`${GITHUB_API_ENDPOINT}search/users?q=${query}`);
	let data = await response.json();
	return data;
};

export const getRepos = async (username, pageNumber) => {
	let response = await fetch(`${GITHUB_API_ENDPOINT}users/${username}/repos?page=${pageNumber}`);
	let data = await response.json();
	return data;
};
