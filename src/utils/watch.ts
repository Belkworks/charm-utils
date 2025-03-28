import { peek, Selector, subscribe } from "@rbxts/charm";
import { Cleanup } from "../types";

/** Like `subscribe` but calls `callback` immediately with the current value. */
export const watch = <T>(source: Selector<T>, callback: (value: T, prev?: T) => void): Cleanup => {
	task.spawn(callback, peek(source));
	return subscribe(source, callback);
};
