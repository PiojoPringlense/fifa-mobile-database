import { DETAILED_STATS_HEADERS } from "@/utilities/outils";
import { MdOutlineExpandLess, MdOutlineExpandMore, MdOutlineUnfoldLess } from "react-icons/md";

interface TableHeadProps {
	gkStats: boolean;
	sortKey: string;
	sortDown: boolean;
	sortPlayers: (ortStat: string, detailedStats?: boolean) => void;
}

const TableDetailedHead = ({ gkStats, sortKey, sortDown, sortPlayers }: TableHeadProps) => {
	const statsHeaders = gkStats ? DETAILED_STATS_HEADERS.GK : DETAILED_STATS_HEADERS.regular;

	return (
		<>
			{Object.entries(statsHeaders).map((header) => {
				const title = header[0];

				return header[1].map((stat, index) => {
					let classes = "";
					index === 0
						? (classes =
								"w-[7ch] text-xs font-semibold relative after:absolute after:-top-6 after:-left-1 after:bottom-0 after:border-l-2")
						: (classes = "w-[7ch] text-xs font-semibold");

					return (
						<th key={stat} className={classes}>
							{index === 0 && (
								<span className="absolute text-base font-bold -top-6">{title}</span>
							)}
							<button
								className="flex flex-col gap-1 items-center justify-between mx-auto break-all w-[7ch] h-12"
								onClick={() => sortPlayers(stat, true)}>
								{stat}
								{sortKey === stat ? (
									sortDown ? (
										<MdOutlineExpandMore />
									) : (
										<MdOutlineExpandLess />
									)
								) : (
									<MdOutlineUnfoldLess />
								)}
							</button>
						</th>
					);
				});
			})}
			<th className="w-[7ch] text-xs font-semibold relative after:absolute after:-top-6 after:-left-1 after:bottom-0 after:border-l-2">
				<button
					className="flex flex-col gap-1 items-center justify-between mx-auto break-all w-[7ch] h-12"
					onClick={() => sortPlayers("Total")}>
					Total
					{sortKey === "Total" ? (
						sortDown ? (
							<MdOutlineExpandMore className="text-secondary-green" />
						) : (
							<MdOutlineExpandLess className="text-secondary-red" />
						)
					) : (
						<MdOutlineUnfoldLess />
					)}
				</button>
			</th>
		</>
	);
};
export default TableDetailedHead;
