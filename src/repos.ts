export interface Repo {
	full_name: string;
	private: boolean;
}

const api = "https://api.github.com/orgs/SLNE-Development/repos";

function convertResponse(response: any): Repo[] {
	return response.map((repo: any) => {
		return {
			full_name: repo.full_name,
			private: repo.private,
		};
	});
}

export async function fetchRepoList(token: string): Promise<Repo[]> {
	const publicRepos = await fetchPublicRepoList(token);
	const privateRepos = await fetchPrivateRepoList(token);

	const repos: Repo[] = [];
	repos.push(...publicRepos);

	privateRepos.forEach((repo) => {
		if (!repos.find((r) => r.full_name === repo.full_name)) {
			repos.push(repo);
		}
	});

	return repos;
}

export async function fetchPrivateRepoList(token: string): Promise<Repo[]> {
	return fetchRepositories(token, "private");
}

export async function fetchPublicRepoList(token: string): Promise<Repo[]> {
	return fetchRepositories(token, "public");
}

async function fetchRepositories(
	token: string,
	type: "public" | "private"
): Promise<Repo[]> {
	return fetch(`${api}?type=${type}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/vnd.github.v3+json",
			Accept: "application/vnd.github.v3+json",
			"User-Agent": "SLNE-Development",
		},
	}).then(async (response) => convertResponse(await response.json()));
}
