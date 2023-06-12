import { Badge } from "@/types/playerType";

interface PlayerBadgeProps {
	badge: Badge;
	Name: String;
	OVR: Number;
	Postition: String;
}

const PlayerBadge = ({ badge, Name, OVR, Postition }: PlayerBadgeProps) => {
	return (
		<div className="w-28 relative">
			<img className="" src={badge.Background} alt="" />
			<img className="absolute top-0 left-0" src={badge.Render} alt="" />
			<img className="absolute top-[38%] left-[24%] w-[12%]" src={badge.Badge} alt="" />
			<img
				className="absolute  top-[51%] left-[24%] w-[12%]"
				src={badge["Nation Flag"]}
				alt=""
			/>
			<span className="absolute font-bold text-[9px]  bottom-[20%] left-[25%]">{Name}</span>
			<span className="absolute font-bold text-[18px] text-[#d9c890] top-[8%] left-[22%] text-center">
				{OVR.toString()}
			</span>
			<span className="absolute font-bold text-[9px] text-[#d9c890] top-[26%] left-[24%] w-[12%] text-center">
				{Postition}
			</span>
		</div>
	);
};
export default PlayerBadge;
