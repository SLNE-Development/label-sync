export interface MissingDiff {
	name: string;
	type: "missing";
	actual: null;
	expected: Diff;
}

export interface ChangedDiff {
	name: string;
	type: "changed";
	actual: Diff;
	expected: Diff;
}

export interface AddedDiff {
	name: string;
	type: "added";
	actual: Diff;
	expected: null;
}

export type AnyDiff = MissingDiff | ChangedDiff | AddedDiff;

interface Diff {
	name: string;
	color: string;
}
