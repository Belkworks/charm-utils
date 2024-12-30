import { Selector } from "@rbxts/charm";
import { signals } from "./signals";
import { Cleanup } from "../types";

const Players = game.GetService("Players");

/** Returns a selector with all Players */
export const players = (): [Selector<Player[]>, Cleanup] =>
	signals(() => Players.GetPlayers(), [Players.ChildAdded, Players.ChildRemoved]);
