import { PlayerType } from "@/types/playerType";
import { useState } from "react";

export default function useFilterPlayers(): [
	(position: string) => void,
	(lvl: number) => void,
	(lvl: number) => void,
	(player: PlayerType) => boolean
] {
	const [position, setPosition] = useState("");
	const [minOvl, setMinOvl] = useState(100);
	const [maxOvl, setMaxOvl] = useState(120);

	function filterPlayers(player: PlayerType) {
		return (
			(position === "" || player.Position === position) &&
			player.OVR >= minOvl &&
			player.OVR <= maxOvl
		);
	}

	return [setPosition, setMinOvl, setMaxOvl, filterPlayers];
}
