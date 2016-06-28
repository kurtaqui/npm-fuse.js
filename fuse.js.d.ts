declare namespace fuse {
	interface IFuseOptions extends ISearchOptions {
		caseSensitive?: boolean;
		include?: string[];
		shouldSort?: boolean;
		searchFn?: any;
		sortFn?: (a: { score: number }, b: { score: number }) => number;
		getFn?: (obj: any, path: string) => any;
		keys?: string[] | { name: string; weight: number }[];
		verbose?: boolean;
	}

	interface ISearchOptions {
		location?: number;
		distance?: number;
		threshold?: number;
		maxPatternLength?: number;
	}

	interface Fuse {
		new (list: any[], options?: IFuseOptions): Fuse;
		search<T>(pattern: string): T[];
	}
}

declare module "fuse" {
	var fuse: fuse.Fuse;
	export = fuse;
}