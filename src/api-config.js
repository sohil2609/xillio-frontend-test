const GITHUB_API_ENDPOINT_DEFAULT = 'https://api.github.com/';
export const GITHUB_API_ENDPOINT =
	process.env.NODE_ENV === 'production' ? 'https://api.github.com/' : GITHUB_API_ENDPOINT_DEFAULT;
