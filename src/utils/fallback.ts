import { Selector } from "../types";

/** Returns a selector that returns `fallback` if the value of `source` is undefined. */
export function fallback<T>(source: Selector<T | undefined>, fallback: T): Selector<T> {
	return () => source() ?? fallback;
}
