import { PlayerType } from "@/types/playerType";

interface PlayerInfo2Props {
	player: PlayerType;
}

const PlayerInfo2 = ({ player }: PlayerInfo2Props) => {
	return (
		<div className="flex flex-col">
			<span className="">{player["Skill Boost"]}</span>
			<span>
				<span>{player["Rate (ATT)"].replace("Medium", "Med")}</span>
				<span> / </span>
				<span>{player["Rate (DEF)"].replace("Medium", "Med")}</span>
			</span>
			<span className="flex items-center gap-1">
				<span>{player.Foot} / </span>
				<span>{player["Weak Foot"]}</span>
			</span>
		</div>
	);
};
export default PlayerInfo2;
