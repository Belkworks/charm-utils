import { Selector } from "@rbxts/charm";
import { Cleanup } from "../types";
import { signals } from "./signals";

/** Returns a selector of the `attribute` on `instance`. */
export const attribute = <T>(instance: Instance, attribute: string): [Selector<AttributeValue | undefined>, Cleanup] =>
	signals(() => instance.GetAttribute(attribute), [instance.GetAttributeChangedSignal(attribute)]);
