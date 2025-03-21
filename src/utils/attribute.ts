import { Selector } from "@rbxts/charm";
import { Cleanup } from "../types";
import { signals } from "./signals";

/** Returns a selector of the `attribute` on `instance`. */
export const attribute = (instance: Instance, attribute: string): [Selector<AttributeValue | undefined>, Cleanup] =>
	signals(() => instance.GetAttribute(attribute), [instance.GetAttributeChangedSignal(attribute)]);

/** Returns a selector of all attributes on `instance`. */
export const attributes = (instance: Instance): [Selector<ReadonlyMap<string, AttributeValue>>, Cleanup] =>
	signals(() => instance.GetAttributes(), [instance.AttributeChanged]);
