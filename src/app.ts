import { AnyDiff } from "./diff";
import { labels } from "./labels";
import { fetchRepoList } from "./repos";

require("dotenv").config();
var sync = require("github-label-sync");

const token = process.env.GITHUB_PAT ?? "";

const main = async () => {
	const repos = await fetchRepoList(token);

	repos.forEach((repo) => {
		sync({
			allowAddedLabels: false,
			dryRun: false,
			accessToken: token,
			repo: repo.full_name,
			labels: labels,
		})
			.then((_diff: AnyDiff) => {
				// const repoName = repo.private ? "Private" : repo.full_name;

				console.log(`Repo: ${repo.full_name} done!`);
			})
			.catch((error: any) => {
				console.error(error);
			});
	});
};

main();
