import { Selector } from "@rbxts/charm";
import { signals } from "./signals";
import { Cleanup } from "../types";

const CollectionService = game.GetService("CollectionService");

/** Returns a selector of all instances tagged with `tag`. */
export const tagged = (tag: string): [Selector<Instance[]>, Cleanup] =>
	signals(() => CollectionService.GetTagged(tag), [CollectionService.TagAdded, CollectionService.TagRemoved]);
