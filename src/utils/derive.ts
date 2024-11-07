import { computed, Selector } from "@rbxts/charm";

/** Returns a computed of `transform(source())` */
export const derive = <T, V>(source: Selector<T>, transform: (value: T) => V) => computed(() => transform(source()));
