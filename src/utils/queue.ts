import { atom } from "@rbxts/charm";

export class Queue<T extends defined> {
	private readonly items = atom<T[]>([]);

	clear(): void {
		this.items(state => (state.isEmpty() ? state : []));
	}

	isEmpty(): boolean {
		return this.items().isEmpty();
	}

	push(item: T): number {
		return this.items(state => [...state, item]).size();
	}

	size(): number {
		return this.items().size();
	}

	shift(): T | undefined {
		let item;
		this.items(state => {
			const newState = [...state];
			item = newState.shift();
			return newState;
		});

		return item;
	}

	peek(): T | undefined {
		return this.items()[0];
	}
}
