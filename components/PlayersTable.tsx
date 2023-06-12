import type { PlayersProps } from "@/types/playerType";
import { useState } from "react";
import PlayerRow from "./PlayerRow";
import TogleSwitch from "./TogleSwitch";
import Filters from "./Filters";
import useGkStats from "@/utilities/useGkStats";
import useSortPlayers from "@/utilities/useSortPlayers";
import useFilterPlayers from "@/utilities/useFilterPlayers";
import useSetTraining from "@/utilities/useSetTraining";
import usePagination from "@/utilities/usePagination";
import TableHead from "./TableHead";
import TableDetailedHead from "./TableDetailedHead";

const PlayersTable = ({ players }: PlayersProps) => {
	const [playersUpdated, setPlayersUpdated] = useState(players);
	const [detailedStats, setDetailedStats] = useState(false);

	const [setPosition, setMinOvl, setMaxOvl, filterPlayers] = useFilterPlayers();
	const filteredPlayers = playersUpdated.filter(filterPlayers);

	const [sortKey, sortDown, sortPlayers] = useSortPlayers(playersUpdated, setPlayersUpdated);
	const [gkStats, statsNames, setGkStats] = useGkStats();
	const [setTrainingLvl, setSkillsLvl] = useSetTraining(players, setPlayersUpdated);
	const [
		currentPage,
		totalPages,
		handlePageChange,
		indexOfFirstPlayer,
		indexOfLastPlayer,
		playersPerPage,
		getPageNumbers,
	] = usePagination(filteredPlayers.length);

	return (
		<>
			<Filters
				setPosition={setPosition}
				setMinOvl={setMinOvl}
				setMaxOvl={setMaxOvl}
				setTrainingLvl={setTrainingLvl}
				setSkillsLvl={setSkillsLvl}
			/>

			<table className="border-separate border-spacing-3 table-fixed mx-auto mt-10">
				<thead>
					<tr>
						<th className="h-14 relative">
							<span className="absolute -top-6 w-max">
								{filteredPlayers.length} players found
							</span>
							<div className="flex gap-2">
								GK: <TogleSwitch setEnabled={setGkStats} enabled={gkStats} />
							</div>
						</th>
						<th>
							<div className="flex gap-2">
								Detailed:{" "}
								<TogleSwitch setEnabled={setDetailedStats} enabled={detailedStats} />
							</div>
						</th>
						{detailedStats ? (
							<TableDetailedHead
								sortDown={sortDown}
								sortKey={sortKey}
								sortPlayers={sortPlayers}
								gkStats={gkStats}
							/>
						) : (
							<TableHead
								sortDown={sortDown}
								sortKey={sortKey}
								sortPlayers={sortPlayers}
								statsNames={statsNames}
							/>
						)}
					</tr>
				</thead>
				<tbody>
					{filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer).map((player) => (
						<PlayerRow
							key={player.Id}
							originalPlayer={
								players.find((originalPlayer) => player.Id === originalPlayer.Id)!
							}
							player={player}
							statsNames={statsNames}
							gkStats={gkStats}
							detailedStats={detailedStats}
						/>
					))}
				</tbody>
			</table>
			<div className="mt-4">
				<p className="text-center font-bold mb-2">
					Page {currentPage} of {totalPages}
				</p>
				<ul className="flex justify-center gap-2">
					{/* Render pagination buttons */}
					<li>
						<button
							className="hover:text-primary-100 font-bold py-2 px-4 rounded"
							onClick={() => handlePageChange(1)}
							disabled={currentPage === 1}>
							First
						</button>
					</li>
					<li>
						<button
							className="hover:text-primary-100 font-bold py-2 px-4 rounded"
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}>
							Previous
						</button>
					</li>
					{/* Render page numbers */}
					{getPageNumbers().map((pageNumber) => (
						<li key={pageNumber}>
							<button
								className={`hover:text-primary-100  font-bold py-2 px-4 rounded ${
									currentPage === pageNumber
										? "bg-primary-100 hover:text-secondary-white"
										: ""
								}`}
								onClick={() => handlePageChange(pageNumber)}>
								{pageNumber}
							</button>
						</li>
					))}
					{/* Render ellipsis if there are more pages */}
					{totalPages > 5 && currentPage < totalPages - 2 && (
						<li>
							<span className="py-2 px-4">...</span>
						</li>
					)}
					<li>
						<button
							className="hover:text-primary-100 font-bold py-2 px-4 rounded"
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</li>
					<li>
						<button
							className="hover:text-primary-100 font-bold py-2 px-4 rounded"
							onClick={() => handlePageChange(totalPages)}
							disabled={currentPage === totalPages}>
							Last
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};
export default PlayersTable;
