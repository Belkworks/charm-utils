import { Selector } from "@rbxts/charm";

/** Returns a selector that returns the value of `source` if `predicate` returns `true`, or `undefined` if `false` */
export const predicate =
	<T>(source: Selector<T>, predicate: (value: T) => boolean): Selector<T | undefined> =>
	() => {
		const value = source();
		return predicate(value) ? value : undefined;
	};
