export interface Repo {
	full_name: string;
	private: boolean;
}

const api = "https://api.github.com/orgs/SLNE-Development/repos";

export async function fetchRepoList(token: string): Promise<Repo[]> {
	return fetch(api, {
		headers: {
			Authorization: `token ${token}`,
			"Content-Type": "application/vnd.github.v3+json",
			Accept: "application/vnd.github.v3+json",
			"User-Agent": "SLNE-Development",
		},
	}).then((response) => response.json());
}
