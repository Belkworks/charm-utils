import { atom, peek, Selector } from "@rbxts/charm";
import { Cleanup } from "../types";

type SignalLike = {
	Connect(callback: () => void): {
		Disconnect(): void;
	};
};

/** Returns a selector that updates whenever any `signals` fire. */
export const signals = <T>(source: Selector<T>, signals: SignalLike[]): [Selector<T>, Cleanup] => {
	const state = atom(peek(source));

	const update = () => state(source());

	const connections = signals.map(signal => signal.Connect(update));

	const cleanup = () => {
		for (const connection of connections) connection.Disconnect();
	};

	return [state, cleanup];
};
