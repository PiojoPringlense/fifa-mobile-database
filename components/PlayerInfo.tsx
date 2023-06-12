import { PlayerType } from "@/types/playerType";

interface PlayerInfoProps {
	player: PlayerType;
}

const PlayerInfo = ({ player }: PlayerInfoProps) => {
	return (
		<div className="flex flex-col">
			<span className="text-2xl font-bold">{player.Name}</span>
			<span>
				<span className="font-bold">{player.OVR}</span>
				<span> | </span>
				<span className="font-bold">{player.Position}</span>
			</span>
			<span className="flex flex-col">
				<span>{formatPrice(player["Price (lowest)"], player["Price (highest)"])}</span>
			</span>
		</div>
	);
};
export default PlayerInfo;

function formatPrice(priceLow: string, priceHigh: string) {
	let result = "N/A";
	if (typeof priceLow === "string" && typeof priceHigh === "string") {
		const nf = new Intl.NumberFormat("en-US", {
			style: "decimal",
			maximumFractionDigits: 1,
		});

		const average =
			(parseInt(priceLow.replaceAll(".", "")) + parseInt(priceHigh.replaceAll(".", ""))) / 2;

		result = !Number.isNaN(average) ? nf.format(average / 1000000) + "m" : "N/A";
	}

	return (
		<span className="flex items-center gap-1">
			{result}
			<img src="https://fifaprizee.com/assets/imgassets/coin.png" width={20} />
		</span>
	);
}
