import { listen, peek, subscribe } from "@rbxts/charm";
import { Selector } from "../types";

/** Returns a promise that resolves when the result of calling `predicate` is `true` */
export function promise(predicate: Selector<boolean>): Promise<void> {
	return peek(predicate)
		? Promise.resolve()
		: new Promise((resolve, _, onCancel) => {
				const cleanup = subscribe(predicate, state => {
					if (state) {
						resolve();
						cleanup();
					}
				});

				onCancel(cleanup);
			});
}

/** Returns a promise that resolves with the first value from `selector` that satisfies `predicate` */
export function promiseSelector<T, U extends T>(
	selector: Selector<T>,
	predicate: (value: T) => value is U,
): Promise<U> {
	return new Promise((resolve, _, onCancel) => {
		const cleanup = listen(selector, value => {
			if (predicate(value)) {
				resolve(value);
				cleanup();
			}
		});

		onCancel(cleanup);
	});
}
