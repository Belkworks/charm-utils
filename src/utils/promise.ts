import { peek, Selector, subscribe } from "@rbxts/charm";

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
