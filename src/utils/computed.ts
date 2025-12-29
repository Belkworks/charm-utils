import { computed } from "@rbxts/charm";
import { Selector } from "../types";

export function computedWithEquals<T>(selector: Selector<T>, equals: (a: T, b: T) => boolean): Selector<T> {
	return computed<T>(previous => {
		const value = selector();
		return previous !== undefined && equals(previous, value) ? previous : value;
	});
}

export function computedCompat<T>(selector: Selector<T>, options?: { equals: (a: T, b: T) => boolean }): Selector<T> {
	return options?.equals ? computedWithEquals(selector, options.equals) : computed(selector);
}
