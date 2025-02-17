import { Label } from "./label";

const rawLabels: Label[] = [
	{ name: "dependencies", color: "1F95F1", description: "dependency" },
	{
		name: "for: future",
		color: "133F32",
		description:
			"Issue scheduled for resolution at some point in the future.",
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
	{ name: "priority: high", color: "D93F0B", description: "High Priority" },
	{
		name: "priority: highest",
		color: "B60205",
		description: "Highest Priority",
	},
	{ name: "priority: low", color: "0E8A16", description: "Low Priority" },
	{
		name: "priority: lowest",
		color: "C2E0C6",
		description: "Lowest Priority",
	},
	{
		name: "priority: medium",
		color: "FBCA04",
		description: "Medium Priority",
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
	{ name: "scope: api", color: "5319E7", description: "" },
	{ name: "scope: performance", color: "5319E7", description: "" },
	{ name: "scope: server", color: "5319E7", description: "" },
	{ name: "scope: web", color: "5319E7", description: "" },
	{ name: "size: large", color: "C5DEF5", description: "" },
	{ name: "size: medium", color: "C5DEF5", description: "" },
	{ name: "size: small", color: "C5DEF5", description: "" },
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
		name: "type: bug",
		color: "B60205",
		description: "Something doesn't work as it was intended to.",
	},
	{
		name: "type: documentation",
		color: "BFD4F2",
		description: "Documentation stuff",
	},
	{
		name: "type: question",
		color: "BFD4F2",
		description: "Issue represents a question and not a problem/request.",
	},
	{
		name: "type: security",
		color: "BFD4F2",
		description: "Issue relates to the security of the server.",
	},
	{
		name: "type: enhancement",
		color: "BFD4F2",
		description: "Issue represents an enhancement.",
	},
	{
		name: "type: feature",
		color: "BFD4F2",
		description: "Issue represents a feature request.",
	},
	{
		name: "type: task",
		color: "BFD4F2",
		description: "Issue represents a task that needs to be done.",
	},
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
