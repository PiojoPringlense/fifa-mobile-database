import { PlayerProps, PlayerType } from "@/types/playerType";
import PlayerBadge from "./PlayerBadge";
import PlayerInfo from "./PlayerInfo";
import PlayerInfo2 from "./PlayerInfo2";
import PlayerAvgStats from "./PlayerAvgStats";
import PlayerDetailedStats from "./PlayerDetailedStats";

interface PlayerRowProps {
	originalPlayer: PlayerType;
	player: PlayerType;
	statsNames: string[];
	gkStats: boolean;
	detailedStats: boolean;
}

const PlayerRow = ({
	originalPlayer,
	player,
	statsNames,
	gkStats,
	detailedStats,
}: PlayerRowProps) => {
	return (
		<tr
			className="cursor-pointer hover:outline-2 hover:outline-primary-100 hover:outline"
			onClick={() => window.open(`https://fifarenderz.com/22/player/${player.Id}`, "_blank")}>
			<td>
				<PlayerBadge
					badge={player.badge}
					Name={player.Name}
					OVR={player.OVR}
					Postition={player.Position}
				/>
			</td>
			<td>
				<PlayerInfo player={player} />
			</td>
			{detailedStats ? (
				<PlayerDetailedStats
					gkStats={gkStats}
					player={player}
					originalPlayer={originalPlayer}
				/>
			) : (
				<>
					<td>
						<PlayerInfo2 player={player} />
					</td>
					<PlayerAvgStats player={player} statsNames={statsNames} />
				</>
			)}
		</tr>
	);
};
export default PlayerRow;
