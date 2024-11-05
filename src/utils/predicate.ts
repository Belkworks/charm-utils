import { Selector } from "@rbxts/charm";

/** Returns a selector that returns the value of `source` if `predicate` returns `true`, or `undefined` if `false` */
export const predicate =
	<T>(source: Selector<T>, predicate: (state: T) => boolean): Selector<T | undefined> =>
	() => {
		const state = source();
		return predicate(state) ? state : undefined;
	};
