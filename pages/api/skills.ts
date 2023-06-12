// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { PlayerType } from "@/types/playerType";

// import _players from "@/data/playersDataMini.json";
import _players from "@/data/playersData.json";

const players = _players as Data;

interface Data extends Array<PlayerType> {}

type Programs = Array<string>;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Programs>) {
	const skills = Array.from(new Set(players.map((player) => player["Skill Boost"])));

	res.status(200).json(skills);
}
