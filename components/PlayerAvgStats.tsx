import { PlayerProps } from "@/types/playerType";

type valType =
	| "Pace"
	| "Shooting"
	| "Passing"
	| "Agility"
	| "Defending"
	| "Diving"
	| "Positioning"
	| "Handling"
	| "Reflexes"
	| "Kicking"
	| "Physical";

interface PlayerStatsProps extends PlayerProps {
	statsNames: string[];
}

const PlayerAvgStats = ({ player, statsNames }: PlayerStatsProps) => {
	return (
		<>
			{statsNames.map((val) => (
				<td key={val}>
					<div className="flex flex-col items-center">
						<span className="font-bold text-2xl text-secondary-green">
							{player.AverageStats[val as valType] || 0}
						</span>
					</div>
				</td>
			))}
			<td>
				<div className="flex flex-col items-center">
					<span className="font-bold text-2xl text-secondary-green">
						{player.AverageStats.Total || 0}
					</span>
				</div>
			</td>
		</>
	);
};
export default PlayerAvgStats;
