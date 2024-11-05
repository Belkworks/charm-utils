import { atom, peek, Selector, subscribe } from "@rbxts/charm";
import { Cleanup } from "../types";

/** Returns a selector that returns the previous value of `source`, as well as a cleanup function. */
export const last = <T>(source: Selector<T>): [Selector<T>, Cleanup] => {
	const prevState = atom(peek(source));

	const cleanup = subscribe(source, (_, prev) => prevState(prev));

	return [prevState, cleanup];
};
