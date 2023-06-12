import { useState, useEffect } from "react";
import { PlayersType } from "@/types/playerType";
import { updatePlayersSkillsLvl, updatePlayersTrainingLvl } from "./outils";

export default function useSetTraining(
	players: PlayersType,
	setPlayersUpdated: (players: PlayersType) => void
): [(trainingLvl: number) => void, (trainingLvl: number) => void] {
	const [trainingLvl, setTrainingLvl] = useState(0);
	const [skillsLvl, setSkillsLvl] = useState(0);

	useEffect(
		() =>
			setPlayersUpdated(
				updatePlayersSkillsLvl(updatePlayersTrainingLvl(players, trainingLvl), skillsLvl)
			),
		[trainingLvl, skillsLvl]
	);

	return [setTrainingLvl, setSkillsLvl];
}
