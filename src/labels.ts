import { Label } from "./label";

const rawLabels: Label[] = [
	{
		name: "dependencies",
		color: "1F95F1",
		description: "Pull requests that update a dependency file"
	},
	{
		name: "for: future",
		color: "133F32",
		description:
			"Issue scheduled for resolution at some point in the future.",
	},
	{
		name: "github_actions",
		color: "#000000",
		description: "Pull requests that update GitHub Actions code"
	},
	{
		name: "good first issue",
		color: "E170F4",
		description:
			"Simple bug fix or feature which would be a good first PR for someone new to the project",
	},
	{
		name: "help wanted",
		color: "07946D",
		description: "Community assistance requested, PRs welcome.",
	},
	{
		name: "resolution: awaiting response",
		color: "d1d1d1",
		description:
			"Additional information is required from the issue reporter",
	},
	{
		name: "resolution: cannot reproduce",
		color: "d1d1d1",
		description: "SLNE team is unable to replicate the issue.",
	},
	{
		name: "resolution: duplicate",
		color: "d1d1d1",
		description: "Issue or Request is a copy of an existing ticket.",
	},
	{ name: "resolution: fixed", color: "d1d1d1", description: "" },
	{
		name: "resolution: incomplete",
		color: "d1d1d1",
		description:
			"Issue needs more information to be investigated/resolved.",
	},
	{
		name: "resolution: invalid",
		color: "d1d1d1",
		description: "Issue or Request has no basis.",
	},
	{ name: "resolution: stale", color: "d1d1d1", description: "" },
	{
		name: "resolution: superseded",
		color: "d1d1d1",
		description: "A new PR has replaced this one",
	},
	{
		name: "resolution: wont fix",
		color: "d1d1d1",
		description: "Issue will not be resolved or feature not added.",
	},
	{
		name: "resolution: working as intended",
		color: "d1d1d1",
		description: "Working as it should / expected to",
	},
	{
		name: "status: accepted",
		color: "FEF2C0",
		description:
			"Disputed bug is accepted as valid or Feature accepted as desired to be added.",
	},
	{
		name: "status: blocked",
		color: "FEF2C0",
		description:
			"Issue or Request is waiting on some other issue or change.",
	},
	{
		name: "status: in progress",
		color: "FEF2C0",
		description: "Issue is currently being worked on",
	},
	{
		name: "status: input wanted",
		color: "FEF2C0",
		description: "Looking for community feedback on this issue.",
	},
	{
		name: "status: needs testing",
		color: "FEF2C0",
		description: "Issue needs testing to confirm resolution.",
	},
	{
		name: "status: needs triage",
		color: "B60205",
		description: "Issue needs triage to determine resolution.",
	},
	{
		name: "status: unlikeley",
		color: "FEF2C0",
		description: "Issue is unlikely to be resolved.",
	},
	{
		name: "scope: api",
		color: "#E5BDE6",
		description: "API scope"
	},
	{
		name: "scope: configuration",
		color: "#E5BDE6",
		description: "Configuration scope"
	},
	{
		name: "type: Fix",
		color: "#B60205",
		description: "PR that fixes an issue"
	}
];

const minecraftVersion: string[] = ["1.21.1", "1.21.4"];

const minecraftVersionLabels = minecraftVersion.map((version) => {
	return {
		name: `version: ${version}`,
		color: "006B75",
		description: "Minecraft Version " + version,
	};
});

rawLabels.push(...minecraftVersionLabels);

export const labels = rawLabels.map((label) => {
	return {
		name: label.name,
		color: label.color,
		description: label.description.substring(0, 100),
	};
});
