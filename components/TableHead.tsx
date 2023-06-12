import { MdOutlineExpandLess, MdOutlineExpandMore, MdOutlineUnfoldLess } from "react-icons/md";

interface TableHeadProps {
	statsNames: string[];
	sortKey: string;
	sortDown: boolean;
	sortPlayers: (ortStat: string) => void;
}

const TableHead = ({ statsNames, sortKey, sortDown, sortPlayers }: TableHeadProps) => {
	return (
		<>
			<th></th>
			{statsNames.map((stat) => (
				<th key={stat} className="w-[11ch]">
					<button className="flex items-center mx-auto" onClick={() => sortPlayers(stat)}>
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
			))}
			<th className="w-[11ch]">
				<button className="flex items-center mx-auto" onClick={() => sortPlayers("Total")}>
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
export default TableHead;
