import { peek, Selector, subscribe } from "@rbxts/charm";

/** Returns a promise that resolves when the result of calling `predicate` is `true` */
export const promise = (predicate: Selector<boolean>) => {
	if (peek(predicate)) return Promise.resolve();

	return new Promise<void>((resolve, _, onCancel) => {
		const cleanup = subscribe(predicate, value => {
			if (value) {
				resolve();
				cleanup();
			}
		});

		onCancel(cleanup);
	});
};
