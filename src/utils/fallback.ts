import { Selector } from "@rbxts/charm";

/** Returns a selector that returns `fallback` if the value of `source` is undefined. */
export const fallback =
	<T>(source: Selector<T | undefined>, fallback: T): Selector<T> =>
	() => {
		const value = source();
		return value !== undefined ? value : fallback;
	};
