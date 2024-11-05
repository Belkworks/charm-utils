import { peek, Selector, subscribe } from "@rbxts/charm";

/** Like `subscribe` but calls `callback` immediately with the current value. */
export const watch = <T>(source: Selector<T>, callback: (value: T, prev: T) => void) => {
	task.spawn(() => {
		const state = peek(source);
		callback(state, state);
	});

	return subscribe(source, callback);
};
