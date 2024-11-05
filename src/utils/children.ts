import { Selector } from "@rbxts/charm";
import { Cleanup } from "../types";
import { signals } from "./signals";

/** Returns a selector with all children of `instance` */
export const children = (instance: Instance): [Selector<Instance[]>, Cleanup] =>
	signals(() => instance.GetChildren(), [instance.ChildAdded, instance.ChildRemoved]);
