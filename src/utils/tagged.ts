import { signals } from "./signals";

const CollectionService = game.GetService("CollectionService");

/** Returns a selector of all instances tagged with `tag`. */
export const tagged = (tag: string) =>
	signals(() => CollectionService.GetTagged(tag), [CollectionService.TagAdded, CollectionService.TagRemoved]);
