import { PlayerProps, PlayerType } from "@/types/playerType";
import { DETAILED_STATS_HEADERS } from "@/utilities/outils";

interface PlayerStatsProps extends PlayerProps {
	originalPlayer: PlayerType;
	gkStats: boolean;
}

type valType =
	| "Acceleration"
	| "Sprint Speed"
	| "Positioning"
	| "Finishing"
	| "Shot Power"
	| "Long Shot"
	| "Volleys"
	| "Penalties"
	| "Vision"
	| "Crossing"
	| "Free Kick"
	| "Short Passing"
	| "Long Passing"
	| "Curve"
	| "Agility"
	| "Balance"
	| "Reactions"
	| "Ball Control"
	| "Dribbling"
	| "Interceptions"
	| "Heading"
	| "Marking"
	| "Stand Tackle"
	| "Sliding Tackle"
	| "Jumping"
	| "Strength"
	| "Aggression"
	| "GK Diving"
	| "GK Positioning"
	| "Handling"
	| "Reflexes"
	| "Jumping"
	| "GK Kicking"
	| "Long Passing"
	| "Reactions"
	| "Agility"
	| "Sprint Speed"
	| "Strength";

const PlayerDetailedStats = ({ player, originalPlayer, gkStats }: PlayerStatsProps) => {
	const statsHeaders = gkStats ? DETAILED_STATS_HEADERS.GK : DETAILED_STATS_HEADERS.regular;
	const statsNames = Object.values(statsHeaders).flat();

	return (
		<>
			{statsNames.map((val) => (
				<td key={val} className="relative">
					<div className="flex justify-center items-start gap-1">
						<span className="font-semibold text-md text-secondary-green">
							{player[val as valType] || 0}
						</span>
						<span className="text-xs text-secondary-red absolute right-0 -translate-y-4">
							{player[val as valType]! - originalPlayer[val as valType]! > 0 &&
								`(+${player[val as valType]! - originalPlayer[val as valType]!})`}
						</span>
					</div>
				</td>
			))}
			<td>
				<div className="flex flex-col items-center">
					<span className="font-bold text-base text-secondary-green">
						{player.AverageStats.Total || 0}
					</span>
				</div>
			</td>
		</>
	);
};
export default PlayerDetailedStats;
