import { useState } from "react";
import { sortPlayersOnDetailedStat, sortPlayersOnStat } from "./outils";
import { PlayersType } from "@/types/playerType";

export default function useSortPlayers(
	players: PlayersType,
	setPlayersUpdated: (players: PlayersType) => void
): [string, boolean, (ortStat: string) => void] {
	const [sortKey, setSortKey] = useState("");
	const [sortDown, setSortDown] = useState(true);

	function sortPlayers(sortStat: string, detailedStats: boolean = false) {
		const sortFunction = detailedStats ? sortPlayersOnDetailedStat : sortPlayersOnStat;

		if (sortKey === sortStat) {
			setSortDown((dir) => !dir);
			setPlayersUpdated(sortFunction(players, sortStat, !sortDown));
		} else {
			setSortKey(sortStat);
			setSortDown(true);
			setPlayersUpdated(sortFunction(players, sortStat, true));
		}
	}

	return [sortKey, sortDown, sortPlayers];
}
