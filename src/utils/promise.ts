import { peek, Selector, subscribe } from "@rbxts/charm";

/** Returns a promise that resolves when the result of calling `predicate` is `true` */
export const promise = (predicate: Selector<boolean>): Promise<void> =>
	peek(predicate)
		? Promise.resolve()
		: new Promise<void>((resolve, _, onCancel) => {
				const cleanup = subscribe(predicate, state => {
					if (state) {
						resolve();
						cleanup();
					}
				});

				onCancel(cleanup);
			});
